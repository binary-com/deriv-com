import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { LocaleContext } from './locale-context'
import language_config from '../../../i18n-config'

export const LocalizedLink = ({ to, ...props }) => {
    // Use the globally available context to choose the right path
    const { locale } = React.useContext(LocaleContext)
    const is_index = to === `/`

    // If it's the default language, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const { is_default, path } = language_config[locale]
    const path_to = is_default ? to : `/${path}${is_index ? `` : `${to}`}`

    return <GatsbyLink {...props} to={`${path_to}`} />
}

LocalizedLink.propTypes = {
    props: PropTypes.object,
    to: PropTypes.string.isRequired,
}
