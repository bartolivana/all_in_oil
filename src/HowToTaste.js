import React from 'react'
import styled from 'styled-components/macro'
import fragrance from './img/Fragrance.png'
import taste from './img/Taste.png'
import aroma from './img/Aroma.png'

export default function HowToTaste() {
  return (
    <Step>
      <ListTitle>Three steps in olive oil tasting</ListTitle>
      <img src={aroma} alt="glass filled with olive oil covered with hands" />

      <h2>Warm the olive oil in your hands.</h2>
      <p>
        Pour 1 - 2 tablespoons of olive oil in a small cup. Nest the cup into
        the palm of one hand and cover the top with your other hand. Gently
        twist the cup in your hand for about 20 seconds to warm the oil. This
        releases the aroma in the oil.
      </p>

      <img src={fragrance} alt="smelling the oilve oil" />

      <h2>Make a note of the nose</h2>
      <p>
        Raise the cup to your nose and tuck into it, taking even, slow deep
        breaths until you formed a criterion on the oil.
      </p>
      <p>
        This is the first insight that professional tasters assess when tasting
        olive oil. The first fragrant notes are clues to its flavour. Can you
        identify the characteristics? Is it fruity or is it grassy? Good quality
        olive oil should always have a fruity or green, herbaceous smell such as
        hay.
      </p>

      <img src={taste} alt="olive oil tasting" />
      <h2>Taste the oil</h2>
      <p>
        Than you proceed to judge the flavour.To do so, take a small sip of
        approximately 3 ml of oil. It is very important to distribute the oil
        throughout the whole of the mouth cavity.
      </p>
      <p>
        Swallow the oil. By now your tongue and your nose have all the
        information they need to tell you how the olive oil tastes. Is it
        fruity? Spicy? Astringent? Bitter? What did you like the most? Note the
        flavor characteristics.These distinctions will point you toward your
        favorites and rule out other oils. Now you know how to taste and
        identify the flavors of an olive oil, so start to narrow your choices
        down to the varietals you like.
      </p>
    </Step>
  )
}

const Step = styled.div`
display: grid;
  grid-auto-flow: row;
  margin: 20px auto;
  width: 300px;
  height: 200px;
  opacity: 0.8;
h2{
  text-align:center;
}
p{
    text-align:justify;
    margin:10px 0;
    font-size: 1rem;
    padding-bottom:20px;
 
  }
img{
height:200px;
wight:200px;
margin: 10px auto;
border-radius:100px;
`
const ListTitle = styled.h1`
  margin-top: 60px;
  text-align: center;
  font-family: 'Amatic SC', sans-serif;
  color: #5f5e5c;
`
