import React from 'react'
import { action } from '@storybook/addon-actions'
import FormName from './FormName'

export default {
  title: 'FormName'
}

export const example = () => <FormName onSubmit={action('onSubmit')}></FormName>
