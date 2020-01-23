import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import Evaluation from './Evaluation'

export default {
  title: 'Evaluaton'
}

export const liked = () => (
  <Evaluation
    data={text('Name', 'Leccino')}
    like={boolean('Like', true)}
  ></Evaluation>
)

export const disliked = () => (
  <Evaluation
    data={text('Name', 'Leccino')}
    like={boolean('Like', true)}
  ></Evaluation>
)
