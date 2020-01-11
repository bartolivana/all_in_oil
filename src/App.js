import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FormEvaluation from './FormEvaluation'
import Navigation from './Navigation'
import AddPhoto from './AddPhoto'
import Header from './Header'
import HowToTaste from './HowToTaste'
import EvaluationList from './EvaluationList'

/* import * as firebase from 'firebase/app'
import 'firebase/firestore' */

/* let firebaseConfig = {
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
const db = firebase.firestore() */

export default function App() {
  //localStorage.clear()
  let evalDataFromLocalStorage = JSON.parse(localStorage.getItem('evaluations'))
  const [evaluations, setEvaluations] = useState(evalDataFromLocalStorage || [])
  const [navIsOpen, setNavIsOpen] = useState(false)
  const [image, setImage] = useState('')
  saveEvaluationToLocalStorage()

  /*const docRef = db.collection('Evaluation_List').doc('IgmWJCKqU8WU1fNFaf82')

  docRef.get().then(function(doc) {
    /*   if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error) 
  })*/

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

    /* db.collection('Evaluation_List')
      .add(newEvaluations)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      }) */
  }

  function saveEvaluationToLocalStorage() {
    localStorage.setItem('evaluations', JSON.stringify(evaluations))
  }

  function deleteEvaluation(event, id) {
    event.stopPropagation()
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
