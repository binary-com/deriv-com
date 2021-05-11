import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { LocationContext } from '../layout/location-context.js'
import language_config from '../../../i18n-config'
import { LocaleContext } from './locale-context'
import {
    affiliate_signin_url,
    affiliate_signup_url,
    binary_url,
    blog_url,
    community_url,
    deriv_app_url,
    deriv_bot_app_url,
    smarttrader_url,
    deriv_developer_url,
    zoho_url,
} from 'common/constants'
import { getLocalizedUrl, getDerivAppLocalizedURL } from 'common/utility'
import { DerivStore } from 'store'

const non_localized_links = ['/careers', '/careers/']

const ShareDisabledStyle = css`
    ${(props) =>
        props.disabled &&
        `
        pointer-events: none;
        opacity: 0.32;`}
`
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
const ExternalLink = styled.a`
    ${SharedLinkStyle}
    ${ShareDisabledStyle}
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
export const LocalizedLink = React.forwardRef(({ to, ...props }, ref) => {
    const [has_mounted, setMounted] = React.useState(false)
    // Use the globally available context to choose the right path
    const { locale } = React.useContext(LocaleContext)
    const { is_eu_country } = React.useContext(DerivStore)
    const { setModalPayload, toggleModal } = React.useContext(LocationContext)

    const is_index = to === `/`
    const {
        ariaLabel,
        className,
        external,
        is_affiliate_link,
        is_affiliate_sign_in_link,
        is_binary_link,
        is_blog_link,
        is_community_link,
        is_dbot_link,
        is_deriv_app_link,
        is_deriv_developer_link,
        is_mail_link,
        is_mt5_link,
        is_smarttrader_link,
        is_zoho_link,
        onClick,
        rel,
        style,
        target,
    } = props

    useEffect(() => {
        setMounted(true)
    }, [])

    // If it's the default language or non localized link, don't do anything
    // If it's another language, add the "path"
    // However, if the homepage/index page is linked don't add the "to"
    // Because otherwise this would add a trailing slash
    const { is_default, path, affiliate_lang } = language_config[locale]
    const is_non_localized = non_localized_links.includes(to)
    const localizedUrl = getLocalizedUrl(path, is_index, to)

    const path_to = is_default || is_non_localized ? to : localizedUrl
    if (external || external === 'true') {
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
        } else if (is_deriv_app_link) {
            lang_to = `${deriv_app_url}${to}`
        } else if (is_blog_link) {
            lang_to = `${blog_url}${to}`
        } else if (is_community_link) {
            lang_to = `${community_url}${to}`
        } else if (is_zoho_link) {
            lang_to = `${zoho_url}${to}`
        } else if (is_deriv_developer_link) {
            lang_to = `${deriv_developer_url}${to}`
        } else if (is_dbot_link) {
            lang_to = getDerivAppLocalizedURL(deriv_bot_app_url, locale)
        } else if (is_mt5_link) {
            lang_to = getDerivAppLocalizedURL(`${deriv_app_url}/mt5`, locale)
        } else {
            lang_to = to
        }
        if (
            is_eu_country &&
            !is_mail_link &&
            !is_smarttrader_link &&
            !is_deriv_app_link &&
            !is_affiliate_link &&
            !is_affiliate_sign_in_link &&
            !is_zoho_link &&
            !is_deriv_developer_link
        ) {
            return (
                <StyledAnchor
                    target={target}
                    rel={rel}
                    className={className}
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
                        if (typeof onClick === 'function') {
                            onClick()
                        }
                    }}
                    disabled={!has_mounted}
                >
                    {props.children}
                </StyledAnchor>
            )
        } else {
            return (
                <StyledAnchor
                    target={target}
                    rel={rel}
                    className={className}
                    style={style}
                    href={lang_to}
                    ref={ref}
                    aria-label={ariaLabel}
                    onClick={onClick}
                    disabled={!has_mounted}
                >
                    {props.children}
                </StyledAnchor>
            )
        }
    }
    if (props.external_link)
        return (
            <ExternalLink href={to} ref={ref} onClick={onClick} disabled={!has_mounted}>
                {props.children}
            </ExternalLink>
        )

    let internal_to = path_to

    // remove trailing character only if it is a forward slash
    if (props.has_no_end_slash && internal_to.charAt(internal_to.length - 1) == '/') {
        internal_to = internal_to.substring(0, internal_to.length - 1)
    }

    if (props.anchor) {
        return (
            <StyledAnchorLink
                title={ariaLabel}
                {...props}
                to={internal_to}
                ref={ref}
                disabled={!has_mounted}
            />
        )
    }

    return (
        <StyledGatsbyLink
            aria-label={ariaLabel}
            target={target}
            rel={rel}
            className={className}
            style={style}
            to={internal_to}
            ref={ref}
            onClick={onClick}
            disabled={!has_mounted}
        >
            {props.children}
        </StyledGatsbyLink>
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
    is_blog_link: PropTypes.bool,
    is_community_link: PropTypes.bool,
    is_dbot_link: PropTypes.bool,
    is_deriv_app_link: PropTypes.bool,
    is_deriv_developer_link: PropTypes.bool,
    is_mail_link: PropTypes.bool,
    is_mt5_link: PropTypes.bool,
    is_smarttrader_link: PropTypes.bool,
    is_zoho_link: PropTypes.bool,
    onClick: PropTypes.func,
    props: PropTypes.object,
    rel: PropTypes.string,
    style: PropTypes.object,
    target: PropTypes.string,
    to: PropTypes.string.isRequired,
}
