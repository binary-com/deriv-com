import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Introduction from './components/_introduction'
import HeaderSection from './components/_header-section'
import Topics from './components/_topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'

export type StocksEbookProps = {
    language: string
}

const introPoints = [
    localize('The basics of forex trading'),
    localize('How to manage risk when trading forex'),
    localize('How to use digital options to profit from up, down, and even sideways moves'),
    localize(
        'How to plan your trading activities without spending hours each day analysing the world market',
    ),
]

const topicsCovered = [
    localize('The basics of forex'),
    localize('Who uses the forex market?'),
    localize('Which currencies are on the forex market?'),
    localize('Why trade forex on Deriv?'),
    localize('Advantages of trading forex on DTrader'),
    localize('Advantages of trading forex on DMT5'),
    localize('Currency pairs you can trade on Deriv'),
    localize('Forex in more detail'),
]

const query = graphql`
    query {
        forex_ebook_img_en: file(relativePath: { eq: "ebooks/forex-ebook-en.png" }) {
            ...bannerImage
        }
        forex_ebook_img_es: file(relativePath: { eq: "ebooks/forex-ebook-es.png" }) {
            ...bannerImage
        }
        forex_ebook_inside_en: file(relativePath: { eq: "ebooks/forex-ebook-inside-en.png" }) {
            ...bannerImage
        }
        forex_ebook_inside_es: file(relativePath: { eq: "ebooks/forex-ebook-inside-es.png" }) {
            ...bannerImage
        }
    }
`

const ForexEbook = (props: StocksEbookProps) => {
    const { language } = props
    let lng = language
    if (lng != 'es') {
        lng = 'en'
    }
    const data = useStaticQuery(query)
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Forex Ebook')}
                description={localize('Trade Forex CFDs on our Deriv platform.')}
                no_index
            />
            <HeaderSection
                mainHeaderImage={data[`forex_ebook_img_${lng}`]}
                imgWidth={601}
                imgHeight={682}
                bg="linear-gradient(to left, #661b20 39%, #cc363f);"
                ebook_utm_code="forex-ebook"
                bgMobile="linear-gradient(0deg, #cc363f, #661b20);"
                introSub={localize('Your free guide on')}
                introMain={localize('How to trade the forex market')}
                authorDesc={
                    localize(
                        'This e-book has been brought to you by a veteran online trader and New York Times bestselling author,',
                    ) + ' '
                }
                authorName={localize('Vince Stanzione.')}
            />
            <Introduction
                introImage={introForexEbook}
                imageWidth={142}
                introPara={localize(
                    'Foreign exchange – forex or the FX market, as it is commonly known – is one of the biggest marketplaces in the world, offering endless trading opportunities. In this 75-page book, expert trader Vince Stanzione will teach you how to spot and take advantage of trading opportunities in the forex markets, using Deriv’s DTrader and MetaTrader5 platforms.',
                )}
                introList={introPoints}
            />
            <Topics topicsImage={data[`forex_ebook_inside_${lng}`]} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(ForexEbook)
