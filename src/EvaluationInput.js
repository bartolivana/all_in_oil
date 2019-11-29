import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function EvaluationInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    let newId = Math.round(Math.random() * 400)
    const form = event.target
    const {
      name: nameInput,
      like: likeInput,
      hay: hayInput,
      apple: appleInput,
      almond: almondInput,
      artichoke: artichokeInput,
      fruit: fruitInput,
      bitter: bitterInput,
      spicy: spicyInput,
      astringent: astringentInput
    } = form

    const tasteArray = [
      bitterInput.checked ? bitterInput.value : '',
      spicyInput.checked ? spicyInput.value : '',
      astringentInput.checked ? astringentInput.value : ''
    ]

    const fragrantArray = [
      hayInput.checked ? hayInput.value : '',
      appleInput.checked ? appleInput.value : '',
      almondInput.checked ? almondInput.value : '',
      artichokeInput.checked ? artichokeInput.value : '',
      fruitInput.checked ? fruitInput.value : ''
    ]

    onSubmit({
      id: newId,
      name: nameInput.value,
      fragrant: fragrantArray
        .filter(fr => fr !== '')
        /* .map(fr => fr) */
        .join(' '),
      taste: tasteArray
        .filter(ta => ta !== '')
        /*  .map(ta => ta) */
        .join(' '),
      like: likeInput.value === 'liked'
    })
    form.reset()
    form.querySelector('[name]')
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SimpleInput name="name" placeholder="Name of your Oil" required="name" />

      <FragrantInputWrapper>
        <InputTag value="hay" type="checkbox" name="fragraint" id="hay" />
        <LabelTag htmlFor="hay">Hay</LabelTag>

        <InputTag value="apple" type="checkbox" name="fraigrant" id="apple" />
        <LabelTag htmlFor="apple">Apple</LabelTag>

        <InputTag value="almond" type="checkbox" name="fragraint" id="almond" />
        <LabelTag htmlFor="almond">Almond</LabelTag>

        <InputTag
          value="artichoke"
          type="checkbox"
          name="fragraint"
          id="artichoke"
        />
        <LabelTag htmlFor="artichoke">Artichoke</LabelTag>

        <InputTag value="fruit" type="checkbox" name="fragraint" id="fruit" />
        <LabelTag htmlFor="fruit">Fruit</LabelTag>
      </FragrantInputWrapper>

      <TasteInputWrapper>
        <InputTag value="bitter" type="checkbox" name="taste" id="bitter" />
        <LabelTag htmlFor="bitter">Bitter</LabelTag>

        <InputTag value="spicy" type="checkbox" name="taste" id="spicy" />
        <LabelTag htmlFor="spicy">Spicy</LabelTag>

        <InputTag
          value="astringent"
          type="checkbox"
          name="taste"
          id="astringent"
        />
        <LabelTag htmlFor="astringent">Astringent</LabelTag>
      </TasteInputWrapper>

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
const TasteInputWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 110px 110px 110px;
  grid-template-rows: 1fr 1fr;
  gap: 15px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`

const FragrantInputWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`

const InputTag = styled.input`
  display: none;
`
const LabelTag = styled.label`
  padding: 10px;
  margin: 0;
  background: linear-gradient(#d1d1d1, #fff);
  border-radius: 25px;
  text-align: center;
  width: 115px;
`

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px auto;
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
