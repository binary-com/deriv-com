import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { LocationContext } from '../layout/location-context.js'
import language_config from '../../../i18n-config'
import { LocaleContext } from './locale-context'
import {
    binary_url,
    affiliate_signin_url,
    affiliate_signup_url,
    smarttrader_url,
} from 'common/utility'

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
export const LocalizedLink = React.forwardRef(({ to, ...props }, ref) => {
    // Use the globally available context to choose the right path
    const { locale } = React.useContext(LocaleContext)
    const { is_eu_country, setModalPayload, toggleModal } = React.useContext(LocationContext)

    const is_index = to === `/`
    const {
        target,
        rel,
        className,
        style,
        is_binary_link,
        is_affiliate_link,
        is_affiliate_sign_in_link,
        is_smarttrader_link,
        ariaLabel,
    } = props

    // If it's the default language or non localized link, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const { is_default, path, affiliate_lang } = language_config[locale]
    const is_non_localized = non_localized_links.includes(to)
    const path_to = is_default || is_non_localized ? to : `/${path}${is_index ? `` : `${to}`}/`
    if (props.external || props.external === 'true') {
        let lang_to = ''
        if (is_binary_link) {
            const thai_excluded_locale = locale === 'th' ? 'en' : locale
            lang_to = `${binary_url}/${thai_excluded_locale}/${to}.html`
        } else if (is_affiliate_link) {
            lang_to = `${affiliate_signup_url}?lang=${affiliate_lang}`
        } else if (is_affiliate_sign_in_link) {
            lang_to = `${affiliate_signin_url}?lang=${affiliate_lang}`
        } else if (is_smarttrader_link) {
            const thai_excluded_locale = locale === 'th' ? 'en' : locale
            lang_to = `${smarttrader_url}/${thai_excluded_locale}/${to}.html`
        } else {
            lang_to = to
        }
        if (
            is_eu_country &&
            !is_smarttrader_link &&
            !is_affiliate_link &&
            !is_affiliate_sign_in_link
        ) {
            return (
                <a
                    target={target}
                    rel={rel}
                    className={className}
                    data-amp-replace="QUERY_PARAM"
                    style={style ? style : { cursor: 'pointer' }}
                    ref={ref}
                    aria-label={ariaLabel}
                    onClick={() => {
                        setModalPayload({
                            to: lang_to,
                            target,
                            rel,
                            ref,
                            aria_label: ariaLabel,
                        })
                        toggleModal()
                    }}
                >
                    {props.children}
                </a>
            )
        } else {
            return (
                <a
                    target={target}
                    rel={rel}
                    className={className}
                    data-amp-replace="QUERY_PARAM"
                    style={style}
                    href={lang_to}
                    ref={ref}
                    aria-label={ariaLabel}
                >
                    {props.children}
                </a>
            )
        }
    }
    if (props.external_link)
        return (
            <ExternalLink href={to} ref={ref}>
                {props.children}
            </ExternalLink>
        )

    // internal links should end with / e.g. /about/
    let internal_to = path_to.charAt(to.length - 1) === '/' ? path_to : path_to

    if (props.has_no_end_slash) {
        internal_to = internal_to.substring(0, internal_to.length - 1)
    }

    if (props.anchor) {
        return <AnchorLink {...props} to={internal_to} ref={ref} />
    }

    return (
        <GatsbyLink
            target={target}
            rel={rel}
            data-amp-replace="QUERY_PARAM"
            className={className}
            style={style}
            to={internal_to}
            ref={ref}
        >
            {props.children}
        </GatsbyLink>
    )
})

LocalizedLink.displayName = 'LocalizedLink'

LocalizedLink.propTypes = {
    anchor: PropTypes.bool,
    ariaLabel: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    external: PropTypes.string,
    external_link: PropTypes.bool,
    has_no_end_slash: PropTypes.bool,
    is_affiliate_link: PropTypes.bool,
    is_affiliate_sign_in_link: PropTypes.bool,
    is_binary_link: PropTypes.bool,
    is_smarttrader_link: PropTypes.bool,
    props: PropTypes.object,
    rel: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
}
