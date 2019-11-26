import React from 'react'
import { action } from '@storybook/addon-actions'
import EvaluationInput from './EvaluationInput'

export default {
  title: 'EvaluationInput'
}

export const example = () => (
  <EvaluationInput onSubmit={action('onSubmit')}></EvaluationInput>
)
