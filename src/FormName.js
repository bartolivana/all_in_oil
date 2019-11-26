import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function FormName({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { name: nameInput, like: likeInput } = form
    onSubmit({ name: nameInput.value, like: likeInput.value === 'liked' })
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input name="name" placeholder="Name of your Oil" />
      <RadioInputWrapper>
        <input value="liked" type="radio" name="like" id="like" />
        <label htmlFor="like">Like</label>
        <input value="disliked" type="radio" name="like" id="dislike" />
        <label htmlFor="dislike">Dislike</label>
      </RadioInputWrapper>
      <BtnSave>Save</BtnSave>
    </FormWrapper>
  )
}
const RadioInputWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  font-size: 17px;
  input:checked + label {
    color: #88994c;
  }
`
/* const OilName = styled.output`
  margin-top: 10px;
  padding: 5px 20px;
  font-size: 17px;
` */
const BtnSave = styled.button`
  margin-top: 10px;
  padding: 5px 30px;
  background-color: #88994c;
  border: none;
  border-radius: 10px;
  background: linear-gradient(#88994c, #fff);
  font-family: monospace;
`
const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
`

FormName.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
