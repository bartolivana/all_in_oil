import React from 'react'
import styled from 'styled-components/macro'

export default function SearchBar({ handleInputChange }) {
  return (
    <InputStyled type="text" onChange={event => handleInputChange(event)} />
  )
}
const InputStyled = styled.input`
  justify-self: center;
  width: 100px;
`
