import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'
import DecorationImg from './img/BackgroundBlur.svg'
import Navigation from './Navigation'
import AddPhoto from './AddPhoto'

function App() {
  //localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('cards'))
  const [cards, setCards] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [image, setImage] = useState('')
  saveEvaluationToLocalStorage()

  return (
    <Router>
      <Navigation toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
      <Switch>
        <Route path="/add_photo">
          <AddPhoto setImage={setImage} image={image} />
        </Route>
        <Route exact path="/create">
          <HeadImg
            src={DecorationImg}
            alt="background"
            width="200px"
            height="200px"
          />
          <EvaluationInput image={image} onSubmit={handleFormSubmit} />
        </Route>
        <Route path="/list">
          <HistoryList>
            <h1>Your oils:</h1>
            {cards.map(card => (
              <Evaluation {...card} key={card.id} />
            ))}
          </HistoryList>
        </Route>
        <Route path="/how_to_taste_olive_oli"></Route>
      </Switch>
    </Router>
  )

  function handleFormSubmit(data) {
    setCards([...cards, data])
  }

  function saveEvaluationToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(cards))
  }

  function toggleNavOpen() {
    setNavIsOpen(!navIsOpen)
  }
}

export default App

const HistoryList = styled.div`
  margin: 10px;
  display: grid;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  text-align: center;
`
const HeadImg = styled.img``
