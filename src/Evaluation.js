import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DecorationImg from './img/LogoAlliveoil.svg'

export default function Evaluation(card) {
  return (
    <Cardstyle>
      <img src={DecorationImg} alt="background" width="100px" height="100px" />
      <Title>{card.name}</Title>
      <img src={card.image} alt="" />
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px auto;
  width: 300px;
  opacity: 0.8;
  background: linear-gradient(#88994c, #fff);
  border-radius: 20px;
  box-shadow: 1x 1px 2px #88994c;
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

Evaluation.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.string
}
