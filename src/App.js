import React, { useState } from 'react'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'

function App() {
  const [cards, setCards] = useState([])
  return (
    <div className="App">
      <EvaluationInput onSubmit={handleFormSubmit} />
      {cards.map(card => (
        <Evaluation {...card} />
      ))}
    </div>
  )

  function handleFormSubmit(data) {
    setCards([...cards, data])
  }
}

export default App
