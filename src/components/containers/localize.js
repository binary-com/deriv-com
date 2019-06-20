import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Localize = ({ i18n_text }) => <Fragment>{i18n_text}</Fragment>

Localize.propTypes = {
    i18n_text: PropTypes.string,
}

export { Localize }
