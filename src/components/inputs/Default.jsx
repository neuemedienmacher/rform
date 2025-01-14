import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    const {
      inputId, type, name, value, placeholder, ariaLabel, labelText, onChange,
      onBlur, combinedClassName, min, max, formId, disabled, onKeyPress,
    } = this.props

    return (
      <input
        id={inputId}
        form={formId}
        type={type || 'text'}
        name={name}
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel || labelText}
        className={combinedClassName}
        onChange={onChange}
        onBlur={onBlur}
        onKeyPress={onKeyPress}
        min={min}
        max={max}
        disabled={disabled}
      />
    )
  }
}
