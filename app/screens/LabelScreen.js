import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Label from '../../src/Label'

const copy = `Minimal, idiomatic style management for React Native.`

class LabelScreen extends ScreenRenderer {
  static title = 'Label'
  static navigationOptions = {
    header: BackNavigationHeader(LabelScreen.title)
  }
  list = [
    {
      label: 'Font Size',
      component: (
        <List space={5}>
          <Label font={{size: 'xx-small'}}>
            {copy}
          </Label>
          <Label font={{size: 'x-small'}}>
            {copy}
          </Label>
          <Label font={{size: 'small'}}>
            {copy}
          </Label>
          <Label font={{size: 'medium'}}>
            {copy}
          </Label>
          <Label font={{size: 'large'}}>
            {copy}
          </Label>
          <Label font={{size: 'x-large'}}>
            {copy}
          </Label>
          <Label font={{size: 'xx-large'}}>
            {copy}
          </Label>
        </List>
      )
    },
    {
      label: 'Ellipsis',
      component: (
        <List space={5}>
          <Label>
            This is a label using the default tail ellipsis.
          </Label>
          <Label ellipsis='head'>
            This is a label with ellipsis set to head.
          </Label>
        </List>
      )
    },
    {
      label: 'Multiline',
      component: (
        <Label lines={2}>
          This is a label with the lines property set to 2.
        </Label>
      )
    },
    {
      label: 'Bold',
      component: (
        <List space={5}>
          <Label bold>
            Strong
          </Label>
        </List>
      )
    },
    {
      label: 'Color',
      component: (
        <List space={5}>
          <Label bold color='powderblue'>
            Powder Blue
          </Label>
          <Label bold color='skyblue'>
            Sky Blue
          </Label>
          <Label bold color='steelblue'>
            Steel Blue
          </Label>
        </List>
      )
    },
    {
      label: 'Text Align',
      component: (
        <List space={5}>
          <Label align='left'>
            Left
          </Label>
          <Label align='center'>
            Center
          </Label>
          <Label align='right'>
            Right
          </Label>
        </List>
      )
    },
  ]
}

export default LabelScreen