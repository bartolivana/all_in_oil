import React from 'react'
import styled from 'styled-components/macro'

export default function FragrantInput() {
  return (
    <FragrantInputWrapper>
      <InputFraigrant value="" type="checkbox" name="hay" id="hay" />
      <LabelFragrant for="hay">Hay</LabelFragrant>

      <InputFraigrant value="" type="checkbox" name="apple" id="apple" />
      <LabelFragrant for="apple">Apple</LabelFragrant>

      <InputFraigrant value="" type="checkbox" name="almond" id="almond" />
      <LabelFragrant for="almond">Almond</LabelFragrant>

      <InputFraigrant
        value=""
        type="checkbox"
        name="artichoke"
        id="artichoke"
      />
      <LabelFragrant for="artichoke">Artichokes</LabelFragrant>

      <InputFraigrant value="" type="checkbox" name="fruit" id="fruit" />
      <LabelFragrant for="fruit">Fruit</LabelFragrant>
    </FragrantInputWrapper>
  )
}

const FragrantInputWrapper = styled.form`
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
