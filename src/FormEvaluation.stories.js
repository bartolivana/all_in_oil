import React from 'react'
import { action } from '@storybook/addon-actions'
import FormEvaluation from './FormEvaluation'

export default {
  title: 'FormEvaluation'
}

export const example = () => (
  <FormEvaluation onSubmit={action('onSubmit')}></FormEvaluation>
)
