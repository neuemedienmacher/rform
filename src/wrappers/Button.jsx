import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../containers/Button'

export default class ButtonWrapper extends Component {
  static contextTypes = {
    formId: PropTypes.string,
  }

  render() {
    return <Button {...this.context} {...this.props} />
  }
}
