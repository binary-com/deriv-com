import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Localize = ({ translate }) => <Fragment>{translate}</Fragment>

Localize.propTypes = {
    translate: PropTypes.string,
}

export default Localize
