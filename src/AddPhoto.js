import React, { useState } from 'react'
import axios from 'axios'
import BtnCam from './img/BtnCamera.svg'
import BgLogo from './img/LogoAlliveoil.svg'
import styled from 'styled-components/macro'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function AddPhoto() {
  const [image, setImage] = useState('')
  let fileInput = React.createRef()

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`

    const formData = new FormData()
    formData.append('file', event.target.files[0])
    formData.append('upload_preset', PRESET)

    axios
      .post(url, formData, {
        headers: {
          'Content-type': 'multipart/form-data'
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err))
  }

  function onImageSave(response) {
    setImage(response.data.url)
  }

  function handleClick() {
    fileInput.current.click()
  }

  return (
    <Grid>
      <img src={BgLogo} alt="" width="300px" height="400px" />
      {image ? (
        <img src={image} alt="" style={{ width: '100%' }} />
      ) : (
        <>
          <input
            type="file"
            name="file"
            onChange={upload}
            style={{ display: 'none' }}
            ref={fileInput}
          />
          <label>Time to shoot your oil bottle</label>
          <button onClick={handleClick}>
            <img src={BtnCam} alt="" width="50px" height="50px" />
          </button>
        </>
      )}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-auto-flow: rows;
  margin: 30px auto;
  justify-items: center;
  align-content: center;
  gap: 50px;
`
