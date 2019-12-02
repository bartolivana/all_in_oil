import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function EvaluationInput({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault()
    const id = Math.round(Math.random() * 400)
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const fragrants = ['hay', 'apple', 'almond', 'artichoke', 'fruit'].filter(
      name => data[name] === 'on'
    )
    const taste = ['bitter', 'spicy', 'astringent'].filter(
      name => data[name] === 'on'
    )

    onSubmit({ ...data, fragrants, taste, id })
    form.reset()
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <SimpleInput name="name" placeholder="Name of your Oil" required="name" />

      <FragrantInputWrapper>
        <InputTag type="checkbox" name="hay" id="hay" />
        <LabelTag htmlFor="hay">Hay</LabelTag>

        <InputTag type="checkbox" name="apple" id="apple" />
        <LabelTag htmlFor="apple">Apple</LabelTag>

        <InputTag type="checkbox" name="almond" id="almond" />
        <LabelTag htmlFor="almond">Almond</LabelTag>

        <InputTag type="checkbox" name="artichoke" id="artichoke" />
        <LabelTag htmlFor="artichoke">Artichoke</LabelTag>

        <InputTag type="checkbox" name="fruit" id="fruit" />
        <LabelTag htmlFor="fruit">Fruit</LabelTag>
      </FragrantInputWrapper>

      <TasteInputWrapper>
        <InputTag type="checkbox" name="bitter" id="bitter" />
        <LabelTag htmlFor="bitter">Bitter</LabelTag>

        <InputTag type="checkbox" name="spicy" id="spicy" />
        <LabelTag htmlFor="spicy">Spicy</LabelTag>

        <InputTag type="checkbox" name="astringent" id="astringent" />
        <LabelTag htmlFor="astringent">Astringent</LabelTag>
      </TasteInputWrapper>

      <InfoInputWrapper>
        <label htmlFor="producer">Producer</label>
        <InfoInput
          type="text"
          name="producer"
          id="producer"
          placeholder="e.g. Giacomo Grassi"
        />

        <label htmlFor="region">Country/Region</label>
        <InfoInput
          type="text"
          name="region"
          id="region"
          placeholder="e.g. Italy, Tuscany"
        />

        <label htmlFor="vintage">Vintage</label>
        <InfoInput
          type="text"
          name="vintage"
          id="vintage"
          placeholder="e.g. 2016"
        />

        <label htmlFor="classification">Classification</label>
        <InfoInput
          type="text"
          name="classification"
          id="classification"
          placeholder="e.g. Extra Virgin Olive Oil "
        />

        <label htmlFor="cultivar">Cultivars</label>
        <InfoInput
          type="text"
          name="cultivar"
          id="cultivar"
          placeholder="e.g. Pendolino"
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
