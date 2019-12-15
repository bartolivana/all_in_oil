import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import EvaluationInput from './EvaluationInput'
import Evaluation from './Evaluation'
import Navigation from './Navigation'
import AddPhoto from './AddPhoto'
import Header from './Header'
import * as firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: 'AIzaSyDM_HoqBftyAScBZgL7LnPXDMuKEiJiF2w',
  authDomain: 'all-in-oil.firebaseapp.com',
  databaseURL: 'https://all-in-oil.firebaseio.com',
  projectId: 'all-in-oil',
  storageBucket: 'all-in-oil.appspot.com',
  messagingSenderId: '992794089563',
  appId: '1:992794089563:web:d7ae49f205ace05f7bc77e',
  measurementId: 'G-6F68LSQRXK'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default function App() {
  //localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('cards'))
  const [cards, setCards] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [image, setImage] = useState('')
  saveEvaluationToLocalStorage()

  const docRef = db.collection('Evaluation_List').doc('IgmWJCKqU8WU1fNFaf82')

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    })

  return (
    <Router>
      <Header />
      <Navigation toggleNavOpen={toggleNavOpen} navIsOpen={navIsOpen} />

      <Switch>
        <Route exact path="/home">
          <AddPhoto setImage={setImage} image={image} />
        </Route>
        <Route path="/create">
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
    console.log(data)
    setCards([data, ...cards])
    db.collection('Evaluation_List')
      .add(data)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  function saveEvaluationToLocalStorage() {
    localStorage.setItem('cards', JSON.stringify(cards))
  }

  function toggleNavOpen() {
    setNavIsOpen(!navIsOpen)
  }
}

const HistoryList = styled.div`
  margin: 10px auto 0 0;
  display: grid;
  grid-template-rows: 1 fr 1fr 1fr;
  gap: 15px;
  text-align: center;
`

const ListTitle = styled.h1`
  margin-top: 60px;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
