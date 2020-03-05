import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import TradingImage from 'images/common/practice.png'

const SEO = ({ description, meta, title, no_index }) => {
    const { site } = useStaticQuery(
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
    const metaDescription = description || site.siteMetadata.description
    const { locale: lang } = React.useContext(LocaleContext)

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
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
                    content: site.siteMetadata.author,
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
