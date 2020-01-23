import React, { useState } from 'react'
import styled from 'styled-components/macro'
import evaluationFooter from './img/CardFooter.png'
import bgLogo from './img/AllInOilLogo.png'
import trash from './img/trashIcon.svg'

export default function Evaluation({ evaluation, handleRemoveClick }) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <EvaluationStyled>
      <EvaluationHeader onClick={toggleIsHidden}>
        <OilImg
          src={evaluation.image || bgLogo}
          alt="photo of the olive oil"
          style={{
            width: isHidden ? '100px' : '150px',
            height: isHidden ? '100px' : '150px'
          }}
        />

        <img
          src={trash}
          alt="trash can icon"
          className="deleteButton"
          onClick={event =>
            window.confirm(
              'Are you sure you want to delete your Evaluation?'
            ) && handleRemoveClick(evaluation.id)
          }
        />

        <ImgSubHeader src={evaluationFooter} alt="green watercolor effect" />
        <Title>{evaluation.name}</Title>
      </EvaluationHeader>

      {!isHidden && (
        <>
          <TextSubtitle>
            You've tasted {evaluation.name} and generally {evaluation.like} it!
          </TextSubtitle>
          {evaluation.fragrants.join('') === '' || (
            <>
              <Text> Fragrance nuances:</Text>
              <TextValue>{evaluation.fragrants.join(', ')}</TextValue>
            </>
          )}

          {evaluation.taste.join('') === '' || (
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
            {evaluation.price === '' || (
              <>
                {' '}
                <Text>Price:</Text>
                <TextValue>{evaluation.price}</TextValue>
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
            {evaluation.personalNotes === ' ' || (
              <>
                <Text>Notes:</Text>
                <PersonalNote>{evaluation.personalNotes}</PersonalNote>
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
  max-width: 100vw;

  section {
    padding: 5px;
  }
`
const EvaluationHeader = styled.section`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  .deleteButton {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 18px;
    height: 18px;
  }
`
const OilImg = styled.img`
  z-index: 1;
  width: 150px;
  height: 150px;
  border-radius: 150px;
  margin: 5px 10px;
`
const ImgSubHeader = styled.img`
  z-index: -10;
  width: 100%;
  height: 60px;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  objectfit: cover;
`
const Title = styled.h2`
  color: #5f5e5c;
  font-family: 'Amatic SC', sans-serif;
  font-size: 1.2rem;
`
const TextSubtitle = styled.h3`
  font-size: 1.1rem;
`
const Text = styled.p`
  margin: 10px 20px;
  text-align: start;
  color: #5f5e5c;
`
const TextValue = styled.span`
  font-weight: bold;
  font-family: 'Amatic SC', sans-serif;
  padding: 5px;
`
const PersonalNote = styled.span`
  margin: 0 auto;
  text-align: center;
`
