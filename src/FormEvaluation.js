import React from 'react'
import styled from 'styled-components/macro'
import BgLogo from './img/AllInOilLogo.png'

export default function FormEvaluation({ onSubmit, image }) {
  const classificationOptions = [
    'Extra virgin olive oil',
    'Virgin olive oil',
    'Olive oil',
    'Olive pomace',
    'Unknown'
  ]

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        <OilImg src={image || BgLogo} alt="" />
        <Title>What's the name of your oil?</Title>
        <SimpleInput
          name="name"
          placeholder="Name of your Oil"
          required="name"
        />
        <>
          <Title>Use your nose:</Title>
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

            <InputTag type="checkbox" name="tomato" id="tomato" />
            <LabelTag htmlFor="tomato">Tomato</LabelTag>
          </FragrantInputWrapper>
        </>
        <>
          <Title>Use your mouth:</Title>
          <TasteInputWrapper>
            <InputTag type="checkbox" name="bitter" id="bitter" />
            <LabelTag htmlFor="bitter">Bitter</LabelTag>

            <InputTag type="checkbox" name="spicy" id="spicy" />
            <LabelTag htmlFor="spicy">Spicy</LabelTag>

            <InputTag type="checkbox" name="astringent" id="astringent" />
            <LabelTag htmlFor="astringent">Astringent</LabelTag>
          </TasteInputWrapper>
        </>

        <>
          <Title>Gahter information:</Title>

          <InfoInputWrapper>
            <label htmlFor="producer">Producer:</label>
            <input
              type="text"
              name="producer"
              id="producer"
              placeholder="e.g. Giacomo Grassi"
            />

            <label htmlFor="region">Country/Region:</label>
            <input
              type="text"
              name="region"
              id="region"
              placeholder="e.g. Italy, Tuscany"
            />

            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="price" placeholder="€" />

            <label htmlFor="vintage">Year:</label>
            <input
              type="number"
              name="vintage"
              id="vintage"
              placeholder="e.g. 2016"
            />

            <label htmlFor="classification">Classification:</label>
            <select
              className="select-css"
              name="classification"
              id="classification"
            >
              <option value="">Please choose</option>
              {classificationOptions.map((option, index) => {
                return (
                  <option value={option} key={index}>
                    {option}
                  </option>
                )
              })}
            </select>

            <label htmlFor="cultivar">Cultivar/variety:</label>
            <input
              type="text"
              name="cultivar"
              id="cultivar"
              placeholder="e.g. Pendolino"
            />
            <label htmlFor="personalNotes">Notes</label>
            <textarea
              id="personalNotes"
              name="personalNotes"
              rows="2"
              cols="1"
              placeholder="Maximum 50 characters"
              maxlength="50"
            >
              {' '}
            </textarea>
          </InfoInputWrapper>
        </>

        <RadioInputWrapper>
          <input required value="liked" type="radio" name="like" id="like" />
          <label htmlFor="like">Like</label>
          <input
            required
            value="disliked"
            type="radio"
            name="like"
            id="dislike"
          />
          <label htmlFor="dislike">Dislike</label>
        </RadioInputWrapper>

        <BtnSave>Add to evaluation list</BtnSave>
      </FormWrapper>
    </>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const id = Math.round(Math.random() * 400)
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)
    const fragrants = [
      'hay',
      'apple',
      'almond',
      'artichoke',
      'fruit',
      'tomato'
    ].filter(name => data[name] === 'on')

    const taste = ['bitter', 'spicy', 'astringent'].filter(
      name => data[name] === 'on'
    )

    onSubmit({ ...data, fragrants, taste, id, image })
    form.reset()
    window.location.assign(window.location.origin + '/list')
  }
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  textarea {
    border-radius: 5px;
    border: none;
    font-size: 1rem;
  }
`
const OilImg = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin: 30px auto 0 auto;
`
const SimpleInput = styled.input`
  border: none;
  border-bottom: 1.5px solid #d1d1d1;
  font-size: 1.1875rem;
  text-align: center;
  opacity: 0.4;
  margin: 10px auto 20px auto;
  background: #f5f5f5;
`
const Title = styled.p`
  font-size: 0.9rem;
  margin: 30px;
  text-align: center;
`
const FragrantInputWrapper = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-columns: 100px 100px;
  gap: 20px;
  font-size: 1.0625rem;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`
const TasteInputWrapper = styled.div`
  margin: 10px auto;
  display: grid;
  grid-template-row: 110px 110px 110px;
  gap: 15px;
  font-size: 1.0625rem;
  input:checked + label {
    background: linear-gradient(0.25turn, #88994c, #d1d1d1, #fff);
  }
`
const InfoInputWrapper = styled.div`
  margin: 10px 40px;
  display: grid;
  grid-auto-flow: rows;
  gap: 5px;
  font-size: 1.0625rem;

  input {
    border: none;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 5px;
    text-align: left;
    font-size: 1.0625rem;
    opacity: 0.4;
    margin-bottom: 20px;
    background: #f5f5f5;
  }

  .select-css {
    display: block;
    font-weight: 500;
    border: none;
    width: 100%;
    max-width: 100%;
    margin: 0;
    appearance: none;
    border-bottom: 1px solid #d1d1d1;
    border-radius: 5px;
    text-align: left;
    font-size: 1.0625rem;
    opacity: 0.3;
    margin-bottom: 20px;
    background: linear-gradient(0.75turn, #d1d1d1, #fff);
  }
`

const InputTag = styled.input`
  display: none;
`
const LabelTag = styled.label`
  padding: 6px;
  margin: 0;
  background: linear-gradient(#d1d1d1, #fff);
  border-radius: 25px;
  text-align: center;
  width: 115px;
`

const RadioInputWrapper = styled.div`
  margin: 10px auto;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  font-size: 1.0625rem;
  input:checked + label {
    color: #88994c;
  }
`
const BtnSave = styled.button`
  margin: 10px auto 0 auto;
  padding: 10px 30px;
  background-color: #88994c;
  border: none;
  border-radius: 20px;
  background: linear-gradient(#d1d1d1, #fff);
  font-family: monospace;
  font-size: 1rem;
`
