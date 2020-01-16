import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import evaluationFooter from './img/CardFooter.png'
import bgLogo from './img/AllInOilLogo.png'
import trash from './img/trashIcon.svg'
import editIcon from './img/editIcon.svg'
import { Link, useLocation } from 'react-router-dom'

export default function Evaluation({
  evaluation,
  handleRemoveClick,
  handleEditClick
}) {
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
              'Are you sure you wish to delete your Evaluation?'
            ) && handleRemoveClick(evaluation.id)
          }
        />
        {/*      <Link to={`create_evaluation/${evaluation.id}`}> */}
        <img
          src={editIcon}
          alt="pen icon"
          className="editButton"
          //onClick={event => handleEditClick(evaluation.id)}
        />
        {/*  </Link> */}

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
  .editButton {
    position: absolute;
    top: 5px;
    right: 28px;
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

Evaluation.propTypes = {
  name: PropTypes.string,
  like: PropTypes.string,
  fragrants: PropTypes.array,
  taste: PropTypes.array,
  producer: PropTypes.string,
  region: PropTypes.string,
  vintage: PropTypes.string,
  classification: PropTypes.string,
  cultivar: PropTypes.string
}
