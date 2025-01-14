import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../containers/Input'

export default class InputWrapper extends Component {
  static propTypes = {
    attribute: PropTypes.string.isRequired,
    type: PropTypes.string,
    submodelPath: PropTypes.array,
    className: PropTypes.string,
  }

  static contextTypes = {
    model: PropTypes.string,
    formId: PropTypes.string,
    form: PropTypes.object,
    onSubmit: PropTypes.func,
    formObjectClass: PropTypes.func,
    preventEnterSubmit: PropTypes.bool,
  }

  render() {
    return <Input {...this.context} {...this.props} />
  }
}
