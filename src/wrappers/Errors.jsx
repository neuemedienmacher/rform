import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Errors from '../containers/Errors'

export default class ErrorsWrapper extends Component {
  static propTypes = {
    attribute: PropTypes.string.isRequired,
  }

  static contextTypes = {
    formId: PropTypes.string,
  }

  render() {
    return <Errors {...this.context} {...this.props} />
  }
}
