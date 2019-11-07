import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { LocaleContext, localize } from '../localization'
import TradingImage from 'images/common/practice.png'

const AntiClickjack = () => (
    <>
        <style id="antiClickjack">{'body{display:none !important;}'}</style>
        <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
                __html: `
                if (self === top) {
                    var antiClickjack = document.getElementById("antiClickjack");
                    antiClickjack.parentNode.removeChild(antiClickjack);
                } else {
                    top.location = self.location;
                }
            `,
            }}
        />
    </>
)

const SEO = ({ description, meta, title }) => {
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
            ].concat(meta)}
        >
            <AntiClickjack />
        </Helmet>
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
