import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import language_config from '../../../i18n-config'
import { LocaleContext } from './locale-context'

export const SharedLinkStyle = css`
    color: var(--color-white);
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: text-shadow 0.25s;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        transition: width 0.25s;
        height: 0.2rem;
        width: 0;
        background-color: var(--color-red);
        bottom: 0;
    }
    &:hover {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1.6rem;
        }
    }
    &.active {
        text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

        &::before {
            width: 1.6rem;
        }
    }
`
const ExternalLink = styled.a`
    ${SharedLinkStyle}
`
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
    if (props.external_link) return <ExternalLink href={to}>{props.children}</ExternalLink>
    return <GatsbyLink {...props} to={`${path_to}/`} />
}

LocalizedLink.propTypes = {
    children: PropTypes.node,
    external_link: PropTypes.bool,
    props: PropTypes.object,
    to: PropTypes.string.isRequired,
}
