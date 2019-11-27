import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function EvaluationInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    let newId = Math.round(Math.random() * 400)
    const form = event.target
    const { name: nameInput, like: likeInput } = form

    onSubmit({
      id: newId,
      name: nameInput.value,
      like: likeInput.value === 'liked'
    })
    form.reset()
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SimpleInput name="name" placeholder="Name of your Oil" required="name" />

      <FragrantInputWrapper>
        <InputFraigrant value="" type="checkbox" name="fragraint" id="hay" />
        <LabelFragrant for="hay">Hay</LabelFragrant>

        <InputFraigrant value="" type="checkbox" name="fragraint" id="apple" />
        <LabelFragrant for="apple">Apple</LabelFragrant>

        <InputFraigrant value="" type="checkbox" name="fragraint" id="almond" />
        <LabelFragrant for="almond">Almond</LabelFragrant>

        <InputFraigrant
          value=""
          type="checkbox"
          name="fragraint"
          id="artichoke"
        />
        <LabelFragrant for="artichoke">Artichokes</LabelFragrant>

        <InputFraigrant value="" type="checkbox" name="fragraint" id="fruit" />
        <LabelFragrant for="fruit">Fruit</LabelFragrant>
      </FragrantInputWrapper>

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

const FragrantInputWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(#88994c, #fff);
    content: '<';
  }
`
const InputFraigrant = styled.input`
  display: none;
`
const LabelFragrant = styled.label`
  padding: 10px;
  margin: 0;
  background: linear-gradient(#d1d1d1, #fff);
  border-radius: 10px;
  text-align: center;
  width: 150px;
`

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
`
const SimpleInput = styled.input`
  border: none;
  font-size: 19px;
  text-align: center;
  opacity: 0.4;
`

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
const BtnSave = styled.button`
  margin-top: 10px;
  padding: 5px 30px;
  background-color: #88994c;
  border: none;
  border-radius: 10px;
  background: linear-gradient(#88994c, #fff);
  font-family: monospace;
`

EvaluationInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
