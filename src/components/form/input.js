import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ text }) => <input>{text}</input>

Input.propTypes = {
    text: PropTypes.string,
}

export default Input
