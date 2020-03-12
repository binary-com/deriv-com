import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import TradingImage from 'images/common/practice.png'

const SEO = ({ description, meta, title }) => {
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
    const pages = []
    var page
    const sitePages = queries.allSitePage.nodes
    for (page in sitePages) {
        const link = {}
        link.rel = 'alternate'
        link.href = sitePages[page].path
        if (!link.href.includes('404')) {
            link.hreflang = sitePages[page].path.split('/')[1]
            pages.push(link)
        }
    }
    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${queries.site.siteMetadata.title}`}
            defer={false}
            link={pages}
            meta={[
                {
                    name: 'description',
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: localize(
                        'binary options, forex, forex trading, online trading, financial trading, binary trading, index trading, trading indices, forex trades, trading commodities, binary options strategy, binary broker, binary bet, binary options trading platform, binary strategy, finance, investment, trading',
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
    title: PropTypes.string.isRequired,
}

export default SEO
