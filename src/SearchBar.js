import React from 'react'
import styled from 'styled-components/macro'

export default function SearchBar({ handleInputChange }) {
  return (
    <InputStyled
      placeholder="🔎"
      id="searchBar"
      onChange={event => handleInputChange(event)}
    />
  )
}
const InputStyled = styled.input`
  justify-self: center;
  grid-auto-flow: column;
  width: 200px;
  height: 30px;
  border: none;
  border-bottom: 2px solid #d1d1d1;
  font-size: 1rem;
  opacity: 0.6;
`
