import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Evaluation(card) {
  return (
    <Cardstyle>
      <CardHeader>
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
      </CardHeader>
      <TextValue>
        You've tasted {card.name} and generally {card.like} it!
      </TextValue>
      {card.fragrants.join(', ') === '' || (
        <Text>
          Fragrance nuances: <TextValue>{card.fragrants.join(', ')}</TextValue>
        </Text>
      )}
      {card.taste.join(', ') === '' || (
        <Text>
          Taste nuances: <TextValue>{card.taste.join(', ')}</TextValue>
        </Text>
      )}
      <section>
        <TextValue> Infomation:</TextValue>
        {card.producer === '' || (
          <Text>
            Producer:<TextValue>{card.producer}</TextValue>
          </Text>
        )}
        {card.region === '' || (
          <Text>
            Region:<TextValue>{card.region}</TextValue>
          </Text>
        )}
        {card.vintage === '' || (
          <Text>
            Vintage:<TextValue>{card.vintage}</TextValue>
          </Text>
        )}
        {card.classification === '' || (
          <Text>
            Classification:<TextValue>{card.classification}</TextValue>
          </Text>
        )}
        {card.cultivar === '' || (
          <Text>
            Cultivar:<TextValue>{card.cultivar}</TextValue>
          </Text>
        )}
      </section>
    </Cardstyle>
  )
}

const Cardstyle = styled.div`
  display: grid;
  margin: 10px 20px;
  opacity: 0.8;
  border-radius: 20px;
  background: linear-gradient(0.5turn, #c3caa8, #f5f5f5);
  filter: drop-shadow(1px 1px 10px #b4b4b4);
`
const CardHeader = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items:center;
  justify-content-center;
`
const Title = styled.h1`
  text-align: start;
`
const Text = styled.p`
  margin: 10px 20px;
  text-align: start;
  font-style: oblique;
`
const TextValue = styled.span`
  font-weight: bold;
  margin: 10px auto;
`

Evaluation.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.string
}
