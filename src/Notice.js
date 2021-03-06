import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Prism} from 'react-native-prism'

import namespace from './namespace'
import Layout from './Layout'
import Paragraph from './Paragraph'

class Notice extends Component {

  static styleName = 'Notice'

  static styleOptions = () => {
    return {
      mapPropsToStyle: {
        labelStyle: {},
        error: ({css, prop}) => {
          if (prop === true) {
            return css.pseudo('error')
          }
        }
      },
      //mapStyleToProps: {
        //labelStyle: ['color']
      //}
    }
  }

  static propTypes = {
    error: PropTypes.bool
  }

  render () {
    const {
      style,
      error,
      labelStyle,
      labelProps
    } = this.props

    return (
      <Layout {...this.props} style={style}>
        <Paragraph
          {...labelProps}
          style={labelStyle}>
          {this.props.children}
        </Paragraph>
      </Layout>
    )
  }
}

export default Prism(Notice, {namespace})
