import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ text }) => <article>{text}</article>

Card.propTypes = {
    text: PropTypes.text,
}

export default Card
