import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import TouchButton from './TouchButton'
import debounce from 'lodash.debounce'
import namespace from './namespace'
import Label from './Label'

class DebounceButton extends Component {

  static styleName = 'TouchButton'

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        labelStyle: {},
        disabled: ({css, prop}) => {
          if (prop === true) {
            return css.pseudo('disabled')
          }
        }
      }
    }
  }

  static propTypes = {
    title: PropTypes.string,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
    multiline: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.number
    ])
  }

  debounceTimeout = 300

  debouncedOnPress = () => {
    this.props.onPress && this.props.onPress()
  }

  onPress = debounce(this.debouncedOnPress, this.debounceTimeout, { leading: true, trailing: false })

  render() {
    return (
      <TouchButton
        {...this.props}
        onPress={this.onPress}>
      </TouchButton>
    )
  }
}

export default Prism(DebounceButton, {namespace})
