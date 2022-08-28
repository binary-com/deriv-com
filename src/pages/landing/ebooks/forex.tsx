import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Introduction from './components/_introduction'
import HeaderSection from './components/_header-section'
import Topics from './components/_topics'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import introForexEbook from 'images/common/ebooks/introduction-forex-ebook.png'

type ForexEbookProps = {
    language: string
}

const introPoints = [
    localize('_t_The basics of forex trading_t_'),
    localize('_t_How to manage risk when trading forex_t_'),
    localize('_t_How to use digital options to profit from up, down, and even sideways moves_t_'),
    localize(
        '_t_How to plan your trading activities without spending hours each day analysing the world market_t_',
    ),
]

const topicsCovered = [
    localize('_t_The basics of forex_t_'),
    localize('_t_Who uses the forex market?_t_'),
    localize('_t_Which currencies are on the forex market?_t_'),
    localize('_t_Why trade forex on Deriv?_t_'),
    localize('_t_Advantages of trading forex on DTrader_t_'),
    localize('_t_Advantages of trading forex on DMT5_t_'),
    localize('_t_Currency pairs you can trade on Deriv_t_'),
    localize('_t_Forex in more detail_t_'),
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

const ForexEbook = (props: ForexEbookProps) => {
    const { language } = props
    let lng = language
    if (lng != 'es') {
        lng = 'en'
    }
    const data = useStaticQuery(query)
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('_t_Forex Ebook_t_')}
                description={localize('_t_Trade Forex CFDs on our Deriv platform._t_')}
                no_index
            />
            <HeaderSection
                mainHeaderImage={data[`forex_ebook_img_${lng}`]}
                imgWidth={601}
                imgHeight={682}
                bg="linear-gradient(to left, #661b20 39%, #cc363f);"
                ebook_utm_code="forex-ebook"
                bgMobile="linear-gradient(0deg, #cc363f, #661b20);"
                introSub={localize('_t_Your free guide on_t_')}
                introMain={localize('_t_How to trade the forex market_t_')}
                authorDesc={
                    localize(
                        '_t_This e-book has been brought to you by a veteran online trader and New York Times bestselling author,_t_',
                    ) + ' '
                }
                authorName={localize('_t_Vince Stanzione._t_')}
            />
            <Introduction
                introImage={introForexEbook}
                imageWidth={142}
                introPara={localize(
                    '_t_Foreign exchange – forex or the FX market, as it is commonly known – is one of the biggest marketplaces in the world, offering endless trading opportunities. In this 75-page book, expert trader Vince Stanzione will teach you how to spot and take advantage of trading opportunities in the forex markets, using Deriv’s DTrader and MetaTrader5 platforms._t_',
                )}
                introList={introPoints}
            />
            <Topics topicsImage={data[`forex_ebook_inside_${lng}`]} topicsList={topicsCovered} />
        </Layout>
    )
}

export default WithIntl()(ForexEbook)
