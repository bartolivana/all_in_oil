import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Evaluation(card) {
  return (
    <Cardstyle>
      <img
        src={card.image}
        alt=""
        style={{
          width: '150px',
          height: '150px',
          borderRadius: '150px',
          margin: '10px 0 0 20px'
        }}
      />
      <Title>{card.name}</Title>
      You've tasted {card.name} and generally {card.like} it!{' '}
      {<p>Fragrance nuances: {card.fragrants.join(', ')}.</p>}{' '}
      <p>Taste nuances: {card.taste.join(', ')}.</p>
      <p>
        The information you gathered: {card.producer}, {card.region},{' '}
        {card.vintage}, {card.classification}, {card.cultivar}
      </p>
    </Cardstyle>
  )
}

const Cardstyle = styled.div`
  display: grid;
  align-content: center;
  margin: 10px auto;
  width: 300px;
  opacity: 0.8;
  background: linear-gradient(0.5turn, #f5f5f5, #f5f5f5, #88994c, #f5f5f5);
  border-radius: 20px;
  filter: drop-shadow(1px 1px 10px #b4b4b4);
`
const Title = styled.h1`
  text-align: end;
  margin-bottom: 20px;
  margin-right: 40px;
`

Evaluation.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.string
}
