import React from 'react'
import styled from 'styled-components/macro'

export default function FragrantInput() {
  return (
    <FragrantInputWrapper>
      <InputFraigrant value="hay" type="radio" name="fragraint" id="hay" />
      <LabelFragrant htmlFor="hay">Hay</LabelFragrant>

      <InputFraigrant value="apple" type="radio" name="fragraint" id="apple" />
      <LabelFragrant htmlFor="apple">Apple</LabelFragrant>

      <InputFraigrant
        value="almond"
        type="radio"
        name="fragraint"
        id="almond"
      />
      <LabelFragrant htmlFor="almond">Almond</LabelFragrant>

      <InputFraigrant
        value="artichoke"
        type="radio"
        name="fragraint"
        id="artichoke"
      />
      <LabelFragrant htmlFor="artichoke">Artichoke</LabelFragrant>

      <InputFraigrant value="fruit" type="radio" name="fragraint" id="fruit" />
      <LabelFragrant htmlFor="fruit">Fruit</LabelFragrant>
    </FragrantInputWrapper>
  )
}

/* const FragrantInputWrapper = styled.div`
  margin: 20px;
  display: grid;
  grid-auto-flow: row;
  gap: 20px;
  font-size: 17px;
  input:checked + label {
    background: linear-gradient(#88994c, #fff);
    
  }
` */

const FragrantInputWrapper = styled.form`
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

const InputFraigrant = styled.input`
  display: none;
`
const LabelFragrant = styled.label`
  padding: 10px;
  margin: 0;
  background: linear-gradient(#d1d1d1, #fff);
  border-radius: 25px;
  text-align: center;
  width: 110px;
`
