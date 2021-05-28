import React from 'react'
import Introduction from 'components/layout/ebooks/introduction'
import HeaderSection from 'components/layout/ebooks/header'
import Topics from 'components/layout/ebooks/topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'
import forexEbookImage from 'images/common/ebooks/forex-ebook.png'
import forexEbookInside from 'images/common/ebooks/forex-ebook-inside.png'

const introPoints = [
    'The simple basics of forex',
    'How to make more profitable forex trades and loweryour trading risks',
    'How to use digital options to profit from up, down,and even sideways moves',
    'How to trade like professionals without spending hourseach day analysing the worldmarket',
]

const topicsCovered = [
    'The basics of forex',
    'Who uses the forex market?',
    'Which currencies are on the forex market?',
    'Why trade forex on Deriv?',
    'Advantages of trading forex on DTrader',
    'Advantages of trading forex on DMT5',
    'Currency pairs you can trade on Deriv',
    'Forex in more detail',
]

const ForexEbook = () => {
    return (
        <Layout is_ppc_redirect={true}>
            <SEO
                title={localize('Forex Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection mainHeaderImage={forexEbookImage} />
            <Introduction
                introImage={introForexEbook}
                imageWidth={142}
                introPara={localize(
                    'Foreign exchange – forex or the FX market, as it iscommonly known – is one of the biggestmarketplaces in the world, offering endless tradingopportunities. In this 75-page book, experttrader Vince Stanzione will teach you how to spotand take advantage of trading opportunities inthe forex markets, using Deriv’s DTrader and MetaTrader5 platforms.',
                )}
                introList={introPoints}
            />
            <Topics topicsImage={forexEbookInside} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(ForexEbook)