import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { LocationContext } from '../layout/location-context.js'
import language_config from '../../../i18n-config'
import { LocaleContext } from './locale-context'
import { localized_link_url } from 'common/constants'
import { getLocalizedUrl, getDerivAppLocalizedURL, getThaiExcludedLocale } from 'common/utility'
import { DerivStore } from 'store'

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

const ShareDisabledStyle = css`
    ${(props) =>
        props.disabled &&
        `
        pointer-events: none;
        opacity: 0.32;`}
`

const StyledAnchor = styled.a`
    ${ShareDisabledStyle}
`

const StyledAnchorLink = styled(AnchorLink)`
    ${ShareDisabledStyle}
`

const StyledGatsbyLink = styled(GatsbyLink)`
    ${ShareDisabledStyle}
`

export const LocalizedLink = React.forwardRef(({ external, ...props }, ref) => {
    const { locale } = useContext(LocaleContext)
    const [has_mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (external || external === 'true') {
        return <ExternalLink mounted={has_mounted} locale={locale} ref={ref} {...props}  />
    }

    return <InternalLink mounted={has_mounted} locale={locale} ref={ref} {...props} />
})

LocalizedLink.displayName = 'LocalizedLink'
LocalizedLink.propTypes = {
    external: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

const non_localized_links = ['careers']

const InternalLink = ({
    aria_label,
    children,
    mounted,
    has_no_end_slash,
    is_anchor,
    locale,
    to,
    ...props
}) => {
    // If it's the default language or non localized link, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const { is_default, path } = language_config[locale]
    const is_non_localized = non_localized_links.includes(to.replace(/\/$/, ''))
    const is_index = to === `/`
    const localized_url = getLocalizedUrl(path, is_index, to)

    const path_to = is_default || is_non_localized ? to : localized_url
    let internal_to = path_to

    // remove trailing character only if it is a forward slash
    internal_to = has_no_end_slash ? internal_to.replace(/\/$/, '') : internal_to

    if (is_anchor) {
        return (
            <StyledAnchorLink title={aria_label} to={internal_to} disabled={!mounted} {...props} />
        )
    }
    return (
        <StyledGatsbyLink aria-label={aria_label} to={internal_to} disabled={!mounted} {...props}>
            {children}
        </StyledGatsbyLink>
    )
}

InternalLink.propTypes = {
    aria_label: PropTypes.string,
    children: PropTypes.node,
    has_no_end_slash: PropTypes.bool,
    is_anchor: PropTypes.bool,
    locale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    mounted: PropTypes.bool,
    to: PropTypes.string.isRequired,
}

const affiliate_links = ['affiliate_sign_in', 'affiliate_sign_up']
const deriv_app_links = ['dbot', 'deriv_app', 'mt5']
const deriv_other_products = ['binary', 'smart_trader']
const deriv_social_platforms = ['blog', 'community', 'developers', 'zoho']

const getURLFormat = (type, locale, to, affiliate_lang) => {
    if (deriv_app_links.includes(type)) {
        return getDerivAppLocalizedURL(localized_link_url[type], locale, to)
    } else if (affiliate_links.includes(type)) {
        return `${localized_link_url[type]}?lang=${affiliate_lang}`
    } else if (deriv_other_products.includes(type)) {
        return `${localized_link_url[type]}/${getThaiExcludedLocale(locale)}/${to}.html`
    } else if (deriv_social_platforms.includes(type)) {
        return `${localized_link_url[type]}${to}`
    } else {
        return to
    }
}

const ExternalLink = ({
    aria_label,
    children,
    mounted,
    is_mail_link,
    locale,
    onClick,
    ref,
    rel,
    style,
    target,
    to,
    type,
    ...props
}) => {
    const { is_eu_country } = useContext(DerivStore)
    const { setModalPayload, toggleModal } = useContext(LocationContext)
    const { affiliate_lang } = language_config[locale]
    const url = getURLFormat(type, locale, to, affiliate_lang)

    const show_modal =
        is_eu_country &&
        !is_mail_link &&
        !affiliate_links.includes(type) &&
        !deriv_app_links.includes(type) &&
        !deriv_social_platforms.includes(type)

    const default_style = { cursor: 'pointer' }

    return (
        <StyledAnchor
            style={style ? style : default_style}
            aria-label={aria_label}
            href={!show_modal ? url : ''}
            onClick={
                show_modal
                    ? () => {
                          setModalPayload({
                              to: url,
                              target,
                              rel,
                              ref,
                              aria_label: aria_label,
                          })
                          toggleModal()
                          if (typeof onClick === 'function') {
                              onClick()
                          }
                      }
                    : onClick
            }
            disabled={!mounted}
            target={target}
            rel={rel}
            {...props}
        >
            {children}
        </StyledAnchor>
    )
}

ExternalLink.propTypes = {
    aria_label: PropTypes.string,
    children: PropTypes.node,
    is_mail_link: PropTypes.bool,
    locale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    mounted: PropTypes.bool,
    onClick: PropTypes.func,
    ref: PropTypes.string,
    rel: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.string,
    to: PropTypes.string,
    type: PropTypes.string,
}
