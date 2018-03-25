
import React, {Component} from 'react'

import ScreenRenderer from './ScreenRenderer'
import BackNavigationHeader from '../../src/BackNavigationHeader'

import List from '../../src/List'
import Button from '../../src/TouchButton'
import DebounceButton from '../../src/DebounceButton'

class ExampleButtonStateChange extends Component {

  state = {
    disabled: true
  }

  render () {
    const toggle = () => {
      this.setState({disabled: !this.state.disabled})
    }
    const text = !this.state.disabled ? 'Enabled' : 'Disabled'
    return (
      <List space={20}>
        <Button id='target' disabled={this.state.disabled}>{text}</Button>
        <Button id='trigger' onPress={toggle}>Toggle Disabled State</Button>
      </List>
    )
  }
}

class ExampleDebounceButtonStateChange extends Component {

  state = {
    disabled: true
  }

  render () {
    const toggle = () => {
      this.setState({disabled: !this.state.disabled})
    }
    const text = !this.state.disabled ? 'Enabled' : 'Disabled'
    return (
      <List space={20}>
        <Button id='target' disabled={this.state.disabled}>{text}</Button>
        <DebounceButton id='trigger' onPress={toggle}>Toggle Disabled State</DebounceButton>
      </List>
    )
  }
}

class ButtonScreen extends ScreenRenderer {
  static title = 'Button'
  static navigationOptions = {
    name: 'ButtonScreen',
    header: BackNavigationHeader('Home')
  }
  list = [
    {
      label: 'Enabled',
      component: (
        <Button>Touch Me</Button>
      )
    },
    {
      label: 'Disabled',
      component: (
        <Button disabled>Touch Me</Button>
      )
    },
    {
      label: 'State Change',
      component: (
        <ExampleButtonStateChange />
      )
    },
    {
      label: 'Debounce State Change',
      component: (
        <ExampleDebounceButtonStateChange />
      )
    },
    {
      label: 'Overflow',
      component: (
        <Button>
          This is some text that is really long just to annoy the button.
        </Button>
      )
    },
    {
      label: 'Multiline',
      component: (
        <Button multiline>
          This is some text that is really long just to annoy the button.
        </Button>
      )
    },
    {
      label: 'Style Name',
      component: (
        <Button styleName='TextButton'>Touch Me</Button>
      )
    },
  ]
}

export default ButtonScreen
