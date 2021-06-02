import React from 'react'
import HeaderSection from 'components/layout/ebooks/header'
import Introduction from 'components/layout/ebooks/introduction'
import Topics from 'components/layout/ebooks/topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import stocksEbookImage from 'images/common/ebooks/stocks-ebook.png'
import stocksEbookInside from 'images/common/ebooks/stocks-ebook-inside.png'
import StocksIntroImage from 'images/svg/stock-indices/stocksHeaderBelowSection.svg'

const topicsCovered = [
    'The basics of CFD trading',
    'Stocks and stock indices: the basics',
    'CFD trading: order types',
    'Rise or fall? Assessing stocks',
    'Stock market seasonality',
]

const StocksEbook = () => {
    return (
        <Layout type="ebook" is_ppc_redirect={true}>
            <SEO
                title={localize('Stocks Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection
                mainHeaderImage={stocksEbookImage}
                imgWidth={557}
                imgHeight={703}
                ebook_utm_code="stock-ebook"
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
            <Topics topicsImage={stocksEbookInside} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(StocksEbook)
