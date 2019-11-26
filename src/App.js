import React, { useState } from 'react'
import FormName from './FormName'
import CardName from './CardName'

function App() {
  const [cards, setCards] = useState([])
  return (
    <div className="App">
      <FormName onSubmit={handleFormSubmit} />
      {cards.map(card => (
        <CardName {...card} />
      ))}
    </div>
  )

  function handleFormSubmit(data) {
    setCards([...cards, data])
  }
}

export default App
