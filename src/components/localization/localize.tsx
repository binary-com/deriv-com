import PropTypes from 'prop-types'
import React from 'react'
import { Trans } from 'react-i18next'

export const Localize = ({ translate_text, values, components }) => (
    <Trans defaults={translate_text} values={values} components={components} />
)

Localize.propTypes = {
    components: PropTypes.arrayOf(PropTypes.node),
    translate_text: PropTypes.string,
    values: PropTypes.object,
}
