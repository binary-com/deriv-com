import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import language_config from '../../../i18n-config'
import TradingImage from 'images/common/practice.png'

const languages = Object.keys(language_config)
const SEO = ({ description, meta, title, no_index }) => {
    var queries = []
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

                allSitePage {
                    nodes {
                        path
                    }
                }
            }
        `,
    )

    const metaDescription = description || queries.site.siteMetadata.description
    const { locale: lang } = React.useContext(LocaleContext)
    const links = []
    var page, l
    const currentPage = window.location.href.split('/')[3]
    const pages = []

    pages.push('/' + currentPage)
    for (l in languages) {
        pages.push('/' + languages[l] + '/' + currentPage)
    }
  
    // var regex = new RegExp(regArray.join('|'))
    // const sitePages = queries.allSitePage.nodes.filter(function(page) {
    //     return regex.exec(page.path) || page.path.startsWith('/' + currentPage)
    // })

    for (page in pages) {
        const link = {}
        link.rel = 'alternate'
        link.href = pages[page]
        link.hreflang = pages[page].split('/')[1]
        links.push(link)
    }

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${queries.site.siteMetadata.title}`}
            defer={false}
            link={links}
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
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0',
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
                ...(no_index
                    ? [
                          {
                              name: 'robots',
                              content: 'noindex',
                          },
                      ]
                    : []),
            ].concat(meta)}
        ></Helmet>
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
