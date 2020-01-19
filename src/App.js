import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormEvaluation from './FormEvaluation'
import Navigation from './Navigation'
import AddPhoto from './AddPhoto'
import Header from './Header'
import HowToTaste from './HowToTaste'
import EvaluationList from './EvaluationList'

export default function App() {
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('evaluations'))
  const [evaluations, setEvaluations] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [image, setImage] = useState('')
  saveEvaluationToLocalStorage()

  return (
    <Router>
      <Header />
      <Navigation toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />
      <Switch>
        <Route exact path="/">
          <AddPhoto setImage={setImage} image={image} />
        </Route>

        <Route path="/create_evaluation">
          <FormEvaluation image={image} onSubmit={handleFormSubmit} />
        </Route>

        <Route path="/list">
          <EvaluationList
            evaluations={evaluations}
            handleRemoveClick={(event, id) => deleteEvaluation(event, id)}
          />
        </Route>

        <Route path="/how_to_taste_olive_oli">
          <HowToTaste />
        </Route>
      </Switch>
    </Router>
  )

  function handleFormSubmit(newEvaluations) {
    setEvaluations([newEvaluations, ...evaluations])
  }

  function saveEvaluationToLocalStorage() {
    localStorage.setItem('evaluations', JSON.stringify(evaluations))
  }

  function deleteEvaluation(id) {
    const selectedEvaluation = evaluations.filter(item => item.id === id)
    const index = evaluations.indexOf(...selectedEvaluation)
    setEvaluations([
      ...evaluations.slice(0, index),
      ...evaluations.slice(index + 1)
    ])
  }
  function toggleNavOpen() {
    setNavIsOpen(!navIsOpen)
  }
}
