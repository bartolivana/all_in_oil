import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function CardName(card) {
  return (
    <Cardstyle>
      You've tasted {card.name} and {card.like ? 'liked' : 'disliked'} it!
    </Cardstyle>
  )
}
CardName.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.bool
}

const Cardstyle = styled.div`
  background: linear-gradient(#88994c, #fff);
  opacity: 0.8;
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 1x 1px 2px #88994c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px auto;
  text-align: center;
`
