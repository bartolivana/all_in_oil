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
            evaluation.producer.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.region.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.price.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.vintage.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.classification
              .toLowerCase()
              .includes(input.toLowerCase()) ||
            evaluation.cultivar.toLowerCase().includes(input.toLowerCase()) ||
            evaluation.personalNotes.toLowerCase().includes(input.toLowerCase())
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
  gap: 10px;
  text-align: center;
`

const ListTitle = styled.h1`
  margin: 60px 0 5px 0;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
