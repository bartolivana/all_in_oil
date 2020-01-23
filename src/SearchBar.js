import React from 'react'
import styled from 'styled-components/macro'
import searchIcon from './img/searchIcon.svg'

export default function SearchBar({ handleInputChange }) {
  return (
    <SearchStyled>
      <img alt="search icon" src={searchIcon} />
      <input id="searchBar" onChange={event => handleInputChange(event)} />
    </SearchStyled>
  )
}
const SearchStyled = styled.div`
  display: flex;
  padding: 4px;
  width: 250px;
  height: 30px;
  margin: 12px auto;
  border-bottom: 2px solid #d1d1d1;
  border-radius: 2px;

  opacity: 0.6;

  input {
    background: #f5f5f5;
    border: none;
    font-size: 0.9rem;
    width: 100%;
  }
`
