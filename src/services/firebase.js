/* import React from 'react'
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
export const db = firebase.firestore()

export const docRef = db
  .collection('Evaluation_List')
  .doc('IgmWJCKqU8WU1fNFaf82')

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
 */
