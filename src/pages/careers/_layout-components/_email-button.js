import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'components/form'

export const EmailButton = ({ text, ...props }) => (
    <a href="mailto:recruitment@deriv.hr" {...props}>
        <Button secondary="true">{text}</Button>
    </a>
)

EmailButton.propTypes = {
    text: PropTypes.string,
}
