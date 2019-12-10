import React from 'react'
import styled from 'styled-components/macro'
import axios from 'axios'
import BtnCam from './img/BtnCamera.svg'
import BgLogo from './img/AllInOilLogo.png'
import { Link } from 'react-router-dom'

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET

export default function AddPhoto({ image, setImage }) {
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
    window.location.pathname = '/create'
  }

  function handleClick() {
    fileInput.current.click()
  }

  return (
    <Grid>
      <LargeLogo src={BgLogo} alt="BgLogo" width="350px" height="350px" />
      {image ? (
        <img src={image} alt="" style={{ display: 'none' }} />
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

          <button
            style={{ background: 'none', border: 'none' }}
            action="/create"
            onClick={handleClick}
          >
            <BtnCamera src={BtnCam} alt="" width="50px" height="50px" />
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
const LargeLogo = styled.img`
  width: '350px';
  height: '350px';
  margin-top: 30px;
`

const BtnCamera = styled.img`
  border: 0;
  cursor: default;
  background: none;
`
