import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'
import DecorationImg from './img/BackgroundBlur.svg'
import Navigation from './Navigation'

function App() {
  //localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('cards'))
  const [cards, setCards] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  saveEvaluationToLocalStorage()

  return (
    <Router>
      <Navigation toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
      <Switch>
        <Route exact path="/create">
          <img
            src={DecorationImg}
            alt="background"
            width="100px"
            height="100px"
          />
          <EvaluationInput onSubmit={handleFormSubmit} />
        </Route>
        <Route path="/list">
          <HistoryList>
            <h1>Your oils:</h1>
            {cards.map(card => (
              <Evaluation {...card} key={card.id} />
            ))}
          </HistoryList>
        </Route>
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
  display: grid;
  margin-top: 20px;
  grid-auto-flow: rows;
  text-align: center;
  gap: 10px;
`
