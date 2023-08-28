import React from 'react'
import { useStaticQuery, graphql, Script } from 'gatsby'
import { localize } from '../localization'
import language_config from '../../../i18n-config'
import { isBrowser } from 'common/utility'
import { eu_urls, hreflang_codes_row, hreflang_codes_eu } from 'common/constants'
import TradingImage from 'images/common/og_deriv.jpg'
import { TString } from 'types/generics'
import { TPageContext } from 'features/types'

const non_localized_links = ['/blog', '/bug-bounty', '/careers']
const languages = Object.keys(language_config)
languages.push('x-default')

type TSiteMetadata = {
    siteMetadata?: {
        author?: string
        description?: string
        siteUrl?: string
        title?: string
    }
}

export type TMetaAttributes = {
    og_title?: TString | string
    og_description?: TString | string
    og_type?: string
    og_img_width?: string
    og_img_height?: string
    og_img?: string
}

type TSeo = {
    title?: TString | string
    description?: TString | string
    no_index?: boolean
    has_organization_schema?: boolean
    meta_attributes?: TMetaAttributes
    pageContext: TPageContext
}

type TQueries = {
    site?: TSiteMetadata
}

const SEO = ({
    description,
    title,
    no_index,
    has_organization_schema,
    meta_attributes,
    pageContext,
}: TSeo) => {
    const queries: TQueries = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        siteUrl
                    }
                }
            }
        `,
    )

    const no_index_staging = process.env.GATSBY_ENV === 'staging'
    const metaDescription =
        (description?.includes('_t_') ? localize(description as TString) : description) ||
        queries.site.siteMetadata.description
    const site_url = queries.site.siteMetadata.siteUrl
    const { locale, pathname: myPath } = pageContext
    const lang = locale || 'en'
    const pathname = myPath || ''
    const locale_pathname = pathname.charAt(0) === '/' ? pathname : `/${pathname}`
    const default_og_title = localize(
        '_t_Online trading with Deriv | Simple. Flexible. Reliable._t_',
    )
    const default_og_description = localize('_t_Trading platforms designed with you in mind._t_')

    // To block eu.deriv.com domain for search engines
    const block_eu = isBrowser() && eu_urls.includes(window.location.hostname)

    let is_ach_page = false
    let current_page = ''
    let organization_schema = {}

    const hreflang_codes = site_url.includes('eu.deriv.com')
        ? hreflang_codes_eu
        : hreflang_codes_row

    if (locale_pathname) {
        const path_array = locale_pathname.split('/')
        const current_lang = path_array[1]
        const check_lang = current_lang.replace('-', '_')
        current_page = locale_pathname

        if (languages.includes(check_lang)) {
            path_array.splice(1, 1)
            current_page = path_array.join('/')
        }
        if (current_lang === 'ach') is_ach_page = true
    }

    if (has_organization_schema) {
        organization_schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Deriv',
            alternateName: 'Deriv.com',
            url: 'https://deriv.com',
            logo: 'https://deriv.com/static/1b57a116945933314eefeec0030c8e9d/2a4de/logo.png',
            sameAs: [
                'https://www.facebook.com/derivdotcom',
                'https://www.twitter.com/derivdotcom',
                'https://www.instagram.com/deriv_official',
                'https://youtube.com/c/Derivdotcom',
                'https://www.linkedin.com/company/derivdotcom/',
                'https://deriv.com',
            ],
        }
    }

    const is_non_localized = non_localized_links.some((link) => current_page.includes(link))
    const meta_data = [
        { name: 'description', content: metaDescription },
        { name: 'google', content: 'notranslate' },
        {
            property: 'og:title',
            content:
                (meta_attributes?.og_title?.includes('_t_')
                    ? localize(meta_attributes?.og_title as TString)
                    : meta_attributes?.og_title) || default_og_title,
        },
        {
            property: 'og:site_name',
            content: title.includes('_t_') ? localize(title as TString) : title,
        },
        {
            property: 'og:description',
            content:
                (meta_attributes?.og_description?.includes('_t_')
                    ? localize(meta_attributes?.og_description as TString)
                    : meta_attributes?.og_description) || default_og_description,
        },
        { property: 'og:type', content: meta_attributes?.og_type || 'website' },
        { property: 'og:locale', content: lang },
        { property: 'og:image', content: meta_attributes?.og_img || TradingImage },
        { property: 'og:image:width', content: meta_attributes?.og_img_width || '600' },
        { property: 'og:image:height', content: meta_attributes?.og_img_height || '315' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: queries.site.siteMetadata.author },
        {
            name: 'twitter:title',
            content: title.includes('_t_') ? localize(title as TString) : title,
        },
        { name: 'twitter:description', content: metaDescription },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'yandex-verification', content: '4ddb94bbff872c63' },
        { name: 'referrer', content: 'origin' },
        { name: 'version', content: process.env.GATSBY_DERIV_VERSION },
        block_eu ? { name: 'robots', content: 'noindex, nofollow' } : {},
        ...(no_index || no_index_staging || is_ach_page
            ? [{ name: 'robots', content: 'noindex' }]
            : []),
    ]

    return (
        <>
            <title>{title.includes('_t_') ? localize(title as TString) : title}</title>
            <Script defer={false} />
            {meta_data.map((data) => (
                <meta key={data.name} {...data} />
            ))}
            {has_organization_schema && (
                <Script type="application/ld+json">{JSON.stringify(organization_schema)}</Script>
            )}
            {!is_non_localized &&
                languages
                    .filter((l) => l !== 'ach' && l)
                    .map((locale) => {
                        const replaced_local = locale.replace('_', '-')
                        const is_default = locale === 'en' || locale === 'x-default'
                        const href_lang = is_default ? '' : `/${replaced_local}`
                        const href = `${site_url}${href_lang}${current_page}`

                        return (
                            <link
                                rel="alternate"
                                hrefLang={replaced_local}
                                href={href}
                                key={replaced_local}
                            />
                        )
                    })}

            {hreflang_codes.map(({ href, hreflang, rel }) => (
                <link key={hreflang} rel={rel} href={href} hrefLang={hreflang} />
            ))}
        </>
    )
}

export default SEO
