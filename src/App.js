import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'
import Navigation from './Navigation'
import AddPhoto from './AddPhoto'
import Header from './Header'

function App() {
  //localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('cards'))
  const [cards, setCards] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [image, setImage] = useState('')
  saveEvaluationToLocalStorage()

  return (
    <Router>
      <Header />
      <Navigation toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />

      <Switch>
        <Route path="/home">
          <AddPhoto setImage={setImage} image={image} />
        </Route>
        <Route exact path="/create">
          <EvaluationInput image={image} onSubmit={handleFormSubmit} />
        </Route>
        <Route path="/list">
          <HistoryList>
            <ListTitle>Your oils:</ListTitle>
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
    setCards([data, ...cards])
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
  margin: 10px auto 0 0;
  display: grid;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  text-align: center;
`

const ListTitle = styled.h1`
  margin-top: 60px;
`
