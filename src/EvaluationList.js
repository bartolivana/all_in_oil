import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Evaluation from './Evaluation'
import SearchBar from './SearchBar'

export default function EvaluationList({ evaluations, handleRemoveClick }) {
  const [input, setinput] = useState('')
  return (
    <ListStyled>
      <ListTitle>Your Oils:</ListTitle>
      <SearchBar handleInputChange={event => setinput(event.target.value)} />
      {evaluations
        .filter(
          evaluation =>
            evaluation.name.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.producer.toLowerCase().includes(input.toLowerCase())
        )
        .map(evaluation => (
          <Evaluation
            evaluation={evaluation}
            handleRemoveClick={(event, id) => handleRemoveClick(event, id)}
            key={evaluation.id}
          />
        ))}
    </ListStyled>
  )
}

const ListStyled = styled.div`
  margin: 10px auto 0 0;
  display: grid;
  gap: 15px;
  text-align: center;
`

const ListTitle = styled.h1`
  margin-top: 60px;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
