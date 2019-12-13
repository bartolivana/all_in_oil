import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import HeaderImg from './img/Header.png'
export default function Evaluation(card) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <Cardstyle>
      <CardHeader onClick={toggleIsHidden}>
        <OilImg
          src={card.image}
          alt="photo of the olive oil bottle with label"
        />

        <ImgSubHeader src={HeaderImg} alt="green watercolor effect" />
        <Title>{card.name}</Title>
      </CardHeader>

      {!isHidden && (
        <>
          <TextSubtitle>
            You've tasted {card.name} and generally {card.like} it!
          </TextSubtitle>
          {card.fragrants.join(', ') === '' || (
            <>
              <Text> Fragrance nuances:</Text>
              <TextValue>{card.fragrants.join(', ')}</TextValue>
            </>
          )}

          {card.taste.join(', ') === '' || (
            <>
              {' '}
              <Text>Taste nuances:</Text>
              <TextValue>{card.taste.join(', ')}</TextValue>
            </>
          )}
          <section>
            {card.producer === '' || (
              <>
                <Text>Producer:</Text>
                <TextValue>{card.producer}</TextValue>
              </>
            )}
            {card.region === '' || (
              <>
                <Text>Region:</Text>
                <TextValue>{card.region}</TextValue>
              </>
            )}
            {card.vintage === '' || (
              <>
                {' '}
                <Text>Vintage:</Text>
                <TextValue>{card.vintage}</TextValue>
              </>
            )}
            {card.classification === '' || (
              <>
                <Text>Classification:</Text>
                <TextValue>{card.classification}</TextValue>
              </>
            )}
            {card.cultivar === '' || (
              <>
                <Text>Cultivar:</Text>
                <TextValue>{card.cultivar}</TextValue>
              </>
            )}
          </section>
        </>
      )}
    </Cardstyle>
  )

  function toggleIsHidden() {
    setIsHidden(!isHidden)
  }
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
const OilImg = styled.img`
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin: 10px 0 0 20px;
`
const ImgSubHeader = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  height: 80px;
  objectfit: cover;
`

const Title = styled.h2`
  text-align: center;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
const TextSubtitle = styled.h3`
  font-weight: bold;
  margin: 20px;
  font-size: 1.5 rem;
`
const Text = styled.p`
  margin: 10px 20px;
  text-align: start;
  color: #5f5e5c;
`
const TextValue = styled.span`
  font-weight: bold;
  font-family: 'Amatic SC', sans-serif;
  color: #000;
  padding: 10px;
`

Evaluation.propTypes = {
  name: PropTypes.string.isRequired,
  like: PropTypes.string
}
