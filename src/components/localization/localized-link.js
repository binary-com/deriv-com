import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import styled, { css } from 'styled-components'
import language_config from '../../../i18n-config'
import { LocaleContext } from './locale-context'
import { isBrowser } from 'common/utility'

const non_localized_links = ['/careers', '/careers/']

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

    ${(props) =>
        props.active &&
        css`
            text-shadow: 0 0 0.8px var(--color-white), 0 0 0.8px var(--color-white);

            &::before {
                width: 1.6rem;
            }
        `}
`
const ExternalLink = styled.a`
    ${SharedLinkStyle}
`
export const LocalizedLink = ({ to, ...props }) => {
    // Use the globally available context to choose the right path
    const { locale } = React.useContext(LocaleContext)
    const is_index = to === `/`
    const { target, rel, className, style, is_binary_link } = props

    // If it's the default language or non localized link, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const { is_default, path } = language_config[locale]
    const is_non_localized = non_localized_links.includes(to)
    const path_to = is_default || is_non_localized ? to : `/${path}${is_index ? `` : `${to}`}`

    if (props.external || props.external === 'true') {
        const lang_to = is_binary_link ? `${to}/${locale}/trading.html` : to
        return (
            <a
                target={target}
                rel={rel}
                className={className}
                data-amp-replace="QUERY_PARAM"
                style={style}
                href={lang_to}
            >
                {props.children}
            </a>
        )
    }
    if (props.external_link) return <ExternalLink href={to}>{props.children}</ExternalLink>

    // internal links should end with / e.g. /about/
    let internal_to = path_to.charAt(to.length - 1) === '/' ? path_to : path_to

    if (props.has_no_end_slash) {
        internal_to = internal_to.substring(0, internal_to.length - 1)
    }

    if (props.anchor) {
        return <AnchorLink {...props} to={internal_to} />
    }
    if (is_non_localized) {
        const path_target = is_non_localized ? '_blank' : target
        const origin = isBrowser() ? window.location.origin : 'https://deriv.com'
        const path_external = origin + internal_to
        return (
            <a
                target={path_target}
                rel={rel}
                className={className}
                style={style}
                href={path_external}
            >
                {props.children}
            </a>
        )
    }

    return (
        <GatsbyLink
            target={target}
            rel={rel}
            data-amp-replace="QUERY_PARAM"
            className={className}
            style={style}
            to={internal_to}
        >
            {props.children}
        </GatsbyLink>
    )
}

LocalizedLink.propTypes = {
    anchor: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    external: PropTypes.string,
    external_link: PropTypes.bool,
    has_no_end_slash: PropTypes.bool,
    is_binary_link: PropTypes.bool,
    props: PropTypes.object,
    rel: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
}
