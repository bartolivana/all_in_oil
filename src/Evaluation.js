import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Evaluation(card) {
  return (
    <Cardstyle>
      <Title>{card.name}</Title>
      You've tasted {card.name} and generally {card.like ? 'liked' : 'disliked'}{' '}
      it! The the fragrance that you've recognised in this example was{' '}
      {card.fragraint}.
    </Cardstyle>
  )
}

const Cardstyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  width: 300px;
  height: 200px;
  opacity: 0.8;
  background: linear-gradient(#88994c, #fff);
  border-radius: 20px;
  box-shadow: 1x 1px 2px #88994c;
  text-align: center;
`
const Title = styled.h1`
  text-align: center;
  margin: 20px;
`

Evaluation.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.bool
}
