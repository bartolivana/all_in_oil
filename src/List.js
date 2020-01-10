import React from 'react'
import styled from 'styled-components/macro'
import Evaluation from './Evaluation'

export default function List({ evaluations }) {
  return (
    <ListStyled>
      <ListTitle>Your Oils:</ListTitle>
      {evaluations.map(evaluation => (
        <Evaluation {...evaluation} key={evaluation.id} />
      ))}
    </ListStyled>
  )
}

const ListStyled = styled.div`
  margin: 10px auto 0 0;
  display: grid;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  text-align: center;
`

const ListTitle = styled.h1`
  margin-top: 60px;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
