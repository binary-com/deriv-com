import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/form'

export const EmailButton = ({ text }) => (
    <a href="mailto:hr@binary.com">
        <Button secondary="true">{text}</Button>
    </a>
)

EmailButton.propTypes = {
    text: PropTypes.string,
}
