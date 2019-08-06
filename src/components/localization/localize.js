import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from 'react-i18next'

const Localize = ({ text, values, components }) => (
    <Trans defaults={text} values={values} components={components} />
)

Localize.propTypes = {
    components: PropTypes.arrayOf(PropTypes.node),
    text: PropTypes.string,
    values: PropTypes.object,
}

export default Localize
