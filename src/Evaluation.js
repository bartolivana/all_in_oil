import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HeaderImg from './img/Header.png'
export default function Evaluation(card) {
  return (
    <Cardstyle>
      <CardHeader>
        <img
          src={card.image}
          alt=""
          style={{
            zIndex: '1',
            width: '150px',
            height: '150px',
            borderRadius: '150px',
            margin: '10px 0 0 20px'
          }}
        />
        <img
          style={{
            width: '100%',
            position: 'absolute',
            top: '0',
            height: '80px',
            objectFit: 'cover'
          }}
          src={HeaderImg}
          alt=""
        ></img>
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
  background-color: #fff;
  filter: drop-shadow(0 1px 12px #dfe3d1);
  position: relative;
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
