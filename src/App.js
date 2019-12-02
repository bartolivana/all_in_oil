import React, { useState } from 'react'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'
import DecorationImg from './img/LogoAlliveoil.svg'
function App() {
  localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('cards'))
  const [cards, setCards] = useState(evalDataFromLocalStorage || [])
  saveEvaluationToLocalStorage()

  return (
    <div className="App">
      <img src={DecorationImg} alt="background" width="100px" height="100px" />
      <EvaluationInput onSubmit={handleFormSubmit} />

      {cards.map(card => (
        <Evaluation {...card} key={card.id} />
      ))}
    </div>
  )

  function handleFormSubmit(data) {
    setCards([...cards, data])
  }

  function saveEvaluationToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(cards))
  }
}

export default App
