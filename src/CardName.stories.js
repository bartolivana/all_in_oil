import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import CardName from './CardName'

export default {
  title: 'CardName'
}

export const liked = () => (
  <CardName
    name={text('Name', 'Leiccno')}
    like={boolean('Like', true)}
  ></CardName>
)
export const disliked = () => (
  <CardName
    name={text('Name', 'Leiccno')}
    like={boolean('Like', false)}
  ></CardName>
)
