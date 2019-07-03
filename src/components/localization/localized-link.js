import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { LocaleContext } from './locale-context'
import locales from '../../../i18n-config'

// Use the globally available context to choose the right path
const Link = ({ to, ...props }) => {
    const { locale } = React.useContext(LocaleContext)
    const is_index = to === `/`

    // If it's the default language, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const path = locales[locale].default
        ? to
        : `/${locales[locale].path}${is_index ? `` : `${to}`}`

    return <GatsbyLink {...props} to={`${path}`} />
}

export default Link
