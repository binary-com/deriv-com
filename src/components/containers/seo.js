import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import language_config from '../../../i18n-config'
import TradingImage from 'images/common/practice.png'

const is_browser = typeof window !== 'undefined'

const languages = Object.keys(language_config)

const SEO = ({ description, meta, title, no_index }) => {
    let queries = []
    queries = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `,
    )
    const no_index_staging = process.env.GATSBY_ENV === 'staging'
    const metaDescription = description || queries.site.siteMetadata.description
    const { locale: lang } = React.useContext(LocaleContext)

    let is_ach_page = false
    let current_page = ''
    if (is_browser) {
        const { pathname } = window.location
        const path_array = pathname.split('/')
        const current_lang = path_array[1]
        const check_lang = current_lang.replace('-', '_')
        current_page = pathname

        if (languages.includes(check_lang)) {
            path_array.splice(1, 1)
            current_page = path_array.join('/')
        }
        if (current_lang === 'ach') is_ach_page = true
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${queries.site.siteMetadata.title}`}
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
            {languages.map((locale) => {
                if (!(locale === 'ach') && is_browser) {
                    const replaced_local = locale.replace('_', '-')
                    const origin = is_browser && window.location.origin

                    const is_default = locale === 'en' || locale === 'x-default'
                    const href_lang = is_default ? '' : `/${replaced_local}`
                    const href = `${origin}${href_lang}${current_page}`

                    return (
                        <link
                            rel="alternate"
                            hrefLang={replaced_local}
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
    meta: PropTypes.arrayOf(PropTypes.object),
    no_index: PropTypes.bool,
    title: PropTypes.string.isRequired,
}

export default SEO
