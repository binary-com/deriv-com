import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import HeaderSection from './components/_header-section'
import Introduction from './components/_introduction'
import Topics from './components/_topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import StocksIntroImage from 'images/svg/stock-indices/stocksHeaderBelowSection.svg'

const topicsCovered = [
    localize('The basics of CFD trading'),
    localize('Stocks and stock indices: the basics'),
    localize('CFD trading: order types'),
    localize('Rise or fall? Assessing stocks'),
    localize('Stock market seasonality'),
]

const query = graphql`
    query {
        stocks_ebook_img: file(relativePath: { eq: "ebooks/stocks-ebook.png" }) {
            ...bannerImage
        }
        stocks_ebook_inside: file(relativePath: { eq: "ebooks/stocks-ebook-inside.png" }) {
            ...bannerImage
        }
    }
`

const StocksEbook = () => {
    const data = useStaticQuery(query)
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Stocks Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection
                mainHeaderImage={data['stocks_ebook_img']}
                imgWidth={557}
                imgHeight={703}
                ebook_utm_code="stock-ebook"
                introSub=""
                introMain={localize('Learn to trade Stock derivatives the smart way')}
                authorDesc={
                    localize(
                        'This e-book has been brought to you by a veteran online trader and New York Times bestselling author,',
                    ) + ' '
                }
                authorName={localize('Vince Stanzione.')}
            />
            <Introduction
                introImage={StocksIntroImage}
                imageWidth={282}
                introPara={localize(
                    'In this 57-page e-book by trader Vince Stanzione, you will learn how to diversify your portfolio with commission-free trading on the biggest international stocks and stock market indices. Wall Street 30, US Tech 100, UK 100, Alphabet, Tesla, Amazon plus many more are available on the MetaTrader 5 platform, where you can trade stock derivatives with leverage, allowing you to get started with minimal capital.',
                )}
                subPara={localize(
                    'We’ll even add in a free demo account on Deriv.com right away. This way, you can practice trading stock derivatives completely risk-free on the Deriv MT5 platform, using a free Financial demo account. And once you are ready to get trading for real, you can get started with as little as $5.',
                )}
            />
            <Topics topicsImage={data['stocks_ebook_inside']} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(StocksEbook)
