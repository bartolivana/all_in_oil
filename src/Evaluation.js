import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import evaluationFooter from './img/CardFooter.png'
import bgLogo from './img/AllInOilLogo.png'

export default function Evaluation(evaluation) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <EvaluationStyled>
      <EvaluationHeader onClick={toggleIsHidden}>
        <OilImg src={evaluation.image || bgLogo} alt="photo of the olive oil" />
        <ImgSubHeader src={evaluationFooter} alt="green watercolor effect" />
        <Title>{evaluation.name}</Title>
      </EvaluationHeader>

      {!isHidden && (
        <>
          <TextSubtitle>
            You've tasted {evaluation.name} and generally {evaluation.like} it!
          </TextSubtitle>
          {evaluation.fragrants.join(', ') === '' || (
            <>
              <Text> Fragrance nuances:</Text>
              <TextValue>{evaluation.fragrants.join(', ')}</TextValue>
            </>
          )}

          {evaluation.taste.join(', ') === '' || (
            <>
              {' '}
              <Text>Taste nuances:</Text>
              <TextValue>{evaluation.taste.join(', ')}</TextValue>
            </>
          )}
          <section>
            {evaluation.producer === '' || (
              <>
                <Text>Producer:</Text>
                <TextValue>{evaluation.producer}</TextValue>
              </>
            )}
            {evaluation.region === '' || (
              <>
                <Text>Region:</Text>
                <TextValue>{evaluation.region}</TextValue>
              </>
            )}
            {evaluation.vintage === '' || (
              <>
                {' '}
                <Text>Vintage:</Text>
                <TextValue>{evaluation.vintage}</TextValue>
              </>
            )}
            {evaluation.classification === '' || (
              <>
                <Text>Classification:</Text>
                <TextValue>{evaluation.classification}</TextValue>
              </>
            )}
            {evaluation.cultivar === '' || (
              <>
                <Text>Cultivar:</Text>
                <TextValue>{evaluation.cultivar}</TextValue>
              </>
            )}
          </section>
        </>
      )}
    </EvaluationStyled>
  )

  function toggleIsHidden() {
    setIsHidden(!isHidden)
  }
}

const EvaluationStyled = styled.div`
  display: grid;
  margin: 10px 20px;
  opacity: 0.8;
  background-color: #fff;
  position: relative;
`
const EvaluationHeader = styled.section`
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
  margin: 5px 10px;
`
const ImgSubHeader = styled.img`
  width: 100%;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  height: 60px;
  objectfit: cover;
  z-index: -10;
`
const Title = styled.h2`
  color: #5f5e5c;
  text-align: center;
  font-family: 'Amatic SC', sans-serif;
  font-size: 1.2rem;
`
const TextSubtitle = styled.h3`
  font-weight: bold;
  font-size: 1.1rem;
  margin: 20px;
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
  like: PropTypes.string,
  fragrants: PropTypes.array,
  taste: PropTypes.array,
  producer: PropTypes.string,
  region: PropTypes.string,
  vintage: PropTypes.string,
  classification: PropTypes.string,
  cultivar: PropTypes.string
}
