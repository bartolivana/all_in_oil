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
      astringent: astringentInput,
      producer: producerInput,
      region: regionInput,
      vintage: vintageInput,
      classification: classificationInput,
      cultivar: cultivarInput
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
      fragrant: fragrantArray.filter(fr => fr !== '').join(' '),
      taste: tasteArray.filter(ta => ta !== '').join(' '),
      like: likeInput.value === 'liked',
      producer: producerInput.value,
      region: regionInput.value,
      vintage: vintageInput.value,
      classification: classificationInput.value,
      cultivar: cultivarInput.value
    })
    form.reset()
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SimpleInput name="name" placeholder="Name of your Oil" required="name" />

      <FragrantInputWrapper>
        <InputTag value="hay" type="checkbox" name="fragrant" id="hay" />
        <LabelTag htmlFor="hay">Hay</LabelTag>

        <InputTag value="apple" type="checkbox" name="fraigrant" id="apple" />
        <LabelTag htmlFor="apple">Apple</LabelTag>

        <InputTag value="almond" type="checkbox" name="fragrant" id="almond" />
        <LabelTag htmlFor="almond">Almond</LabelTag>

        <InputTag
          value="artichoke"
          type="checkbox"
          name="fragrant"
          id="artichoke"
        />
        <LabelTag htmlFor="artichoke">Artichoke</LabelTag>

        <InputTag value="fruit" type="checkbox" name="fragrant" id="fruit" />
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

      <InfoInputWrapper>
        <label htmlFor="producer">Producer</label>
        <InfoInput
          type="text"
          name="producer"
          id="producer"
          placeholder="Giacomo Grassi"
        />

        <label htmlFor="region">Country/Region</label>
        <InfoInput
          type="text"
          name="region"
          id="region"
          placeholder="Italy, Tuscany"
        />

        <label htmlFor="vintage">Vintage</label>
        <InfoInput type="text" name="vintage" id="vintage" placeholder="2016" />

        <label htmlFor="classification">Classification</label>
        <InfoInput
          type="text"
          name="classification"
          id="classification"
          placeholder="Extra Virgin Olive Oil "
        />

        <label htmlFor="cultivar">Cultivars</label>
        <InfoInput
          type="text"
          name="cultivar"
          id="cultivar"
          placeholder="Pendolino"
        />
      </InfoInputWrapper>

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

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px auto;
`
const SimpleInput = styled.input`
  border: none;
  font-size: 19px;
  text-align: center;
  opacity: 0.4;
  margin-bottom: 20px;
  background: #f5f5f5;
`
const FragrantInputWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 100px 100px;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`
const TasteInputWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-template-columns: 110px 110px 110px;
  grid-template-rows: 1fr 
  gap: 15px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`
const InfoInputWrapper = styled.div`
  margin: 10px;
  display: grid;
  grid-auto-flow: rows;
  gap: 5px;
  font-size: 17px;
`
const InfoInput = styled.input`
  border: none;
  border-bottom: 1px solid #d1d1d1;
  border-radius: 5px;
  text-align: left;
  font-size: 15px;
  opacity: 0.4;
  margin-bottom: 20px;
  background: #f5f5f5;
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

const RadioInputWrapper = styled.div`
  margin: 10px;
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
