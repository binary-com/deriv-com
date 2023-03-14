import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Introduction from './components/_introduction'
import HeaderSection from './components/_header-section'
import Topics from './components/_topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'
import { TString } from 'types/generics'

export type StocksEbookProps = {
    language: string
}

const introPoints: TString[] = [
    '_t_The basics of forex trading_t_',
    '_t_How to manage risk when trading forex_t_',
    '_t_How to use digital options to profit from up, down, and even sideways moves_t_',
    '_t_How to plan your trading activities without spending hours each day analysing the world market_t_',
]

const topicsCovered: TString[] = [
    '_t_The basics of forex_t_',
    '_t_Who uses the forex market?_t_',
    '_t_Which currencies are on the forex market?_t_',
    '_t_Why trade forex on Deriv?_t_',
    '_t_Advantages of trading forex on DTrader_t_',
    '_t_Advantages of trading forex on DMT5_t_',
    '_t_Currency pairs you can trade on Deriv_t_',
    '_t_Forex in more detail_t_',
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
                title="_t_Forex Ebook_t_"
                description="_t_Trade Forex CFDs on our Deriv platform._t_"
                no_index
            />
            <HeaderSection
                mainHeaderImage={data[`forex_ebook_img_${lng}`]}
                imgWidth={601}
                imgHeight={682}
                bg="linear-gradient(to left, #661b20 39%, #cc363f);"
                ebook_utm_code="forex-ebook"
                bgMobile="linear-gradient(0deg, #cc363f, #661b20);"
                introSub="_t_Your free guide on_t_"
                introMain="_t_How to trade the forex market_t_"
                authorDesc="_t_This e-book has been brought to you by a veteran online trader and New York Times bestselling author_t_"
                authorName="_t_Vince Stanzione._t_"
            />
            <Introduction
                introImage={introForexEbook}
                imageWidth={142}
                introPara="_t_Foreign exchange – forex or the FX market, as it is commonly known – is one of the biggest marketplaces in the world, offering endless trading opportunities. In this 75-page book, expert trader Vince Stanzione will teach you how to spot and take advantage of trading opportunities in the forex markets, using Deriv’s DTrader and MetaTrader5 platforms._t_"
                introList={introPoints}
            />
            <Topics topicsImage={data[`forex_ebook_inside_${lng}`]} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(ForexEbook)
