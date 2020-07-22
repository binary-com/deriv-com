import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import language_config from '../../../i18n-config'
import TradingImage from 'images/common/practice.png'

const non_localized_links = ['/careers', '/careers/']

const languages = Object.keys(language_config)
languages.push('x-default')
const SEO = ({ description, meta, title, no_index, has_organization_schema }) => {
    let queries = []
    queries = useStaticQuery(
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
    const metaDescription = description || queries.site.siteMetadata.description
    const site_url = queries.site.siteMetadata.siteUrl
    const { locale: lang, pathname } = React.useContext(LocaleContext)
    const locale_pathname = pathname.charAt(0) === '/' ? pathname : `/${pathname}`

    let is_ach_page = false
    let current_page = ''
    let organization_schema = {}

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
            alternateName: 'Binary.com',
            url: 'http://www.deriv.com',
            logo: 'https://deriv.com/static/1b57a116945933314eefeec0030c8e9d/2a4de/logo.png',
            sameAs: [
                'https://www.facebook.com/derivdotcom',
                'https://www.twitter.com/derivdotcom',
                'https://www.instagram.com/deriv_official',
                'https://youtube.com/c/Derivdotcom',
                'https://www.linkedin.com/company/derivdotcom/',
                'http://www.deriv.com',
            ],
        }
    }

    const is_non_localized = non_localized_links.includes(current_page)

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            defer={false}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: localize(
                        'digital options, forex, forex trading, online trading, financial trading, digitals trading, index trading, trading indices, forex trades, trading commodities, digital options strategy, binary broker, binary bet, digital options trading platform, binary strategy, finance, investment, trading',
                    ),
                },
                {
                    name: 'google',
                    content: 'notranslate',
                },
                {
                    property: 'og:title',
                    content: title,
                },
                {
                    property: 'og:site_name',
                    content: title,
                },
                {
                    property: 'og:description',
                    content: metaDescription,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    property: 'og:locale',
                    content: lang,
                },
                {
                    property: 'og:image',
                    content: TradingImage,
                },
                {
                    property: 'og:image:width',
                    content: '723',
                },
                {
                    property: 'og:image:height',
                    content: '423',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: queries.site.siteMetadata.author,
                },
                {
                    name: 'twitter:title',
                    content: title,
                },
                {
                    name: 'twitter:description',
                    content: metaDescription,
                },
                {
                    name: 'format-detection',
                    content: 'telephone=no',
                },
                {
                    name: 'yandex-verification',
                    content: '4ddb94bbff872c63',
                },
                {
                    name: 'referrer',
                    content: 'origin',
                },
                ...(no_index || no_index_staging || is_ach_page
                    ? [
                          {
                              name: 'robots',
                              content: 'noindex',
                          },
                      ]
                    : []),
            ].concat(meta)}
        >
            {/* TODO: uncomment this once datadog async support is ready */}
            {/* <script
                src="https://www.datadoghq-browser-agent.com/datadog-rum-us.js"
                type="text/javascript"
            ></script>
            <script>
                {`window.location.hostname === 'deriv.com' && window.DD_RUM &&
                    window.DD_RUM.init({
                        clientToken: 'pubc42fda54523c5fb23c564e3d8bceae88',
                        applicationId: 'f0aef779-d9ec-4517-807e-a84c683c4265',
                    })`}
            </script> */}
            {has_organization_schema && (
                <script type="application/ld+json">{JSON.stringify(organization_schema)}</script>
            )}

            {!is_non_localized &&
                languages.map((locale) => {
                    if (!(locale === 'ach')) {
                        const replaced_local = locale.replace('_', '-')
                        const is_default = locale === 'en' || locale === 'x-default'
                        const href_lang = is_default ? '' : `/${replaced_local}`
                        const href = `${site_url}${href_lang}${current_page}`

                        return (
                            <link
                                rel="alternate"
                                // eslint-disable-next-line react/no-unknown-property
                                hreflang={replaced_local}
                                href={href}
                                key={replaced_local}
                            />
                        )
                    }
                })}
        </Helmet>
    )
}

SEO.defaultProps = {
    meta: [],
}

SEO.propTypes = {
    description: PropTypes.string,
    has_organization_schema: PropTypes.bool,
    meta: PropTypes.arrayOf(PropTypes.object),
    no_index: PropTypes.bool,
    title: PropTypes.string.isRequired,
}

export default SEO
