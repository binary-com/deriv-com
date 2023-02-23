import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import ImageText from './components/_image-text'
import Topics from './components/_topics'
import { StocksEbookProps } from './forex'
import Hero from './components/_hero'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import StocksIntroImage from 'images/svg/landing/crypto-intro.svg'
import { TString } from 'types/generics'

const topics_covered: TString[] = [
    '_t_Introduction to cryptocurrencies_t_',
    '_t_Types of cryptocurrencies_t_',
    '_t_The basics of trading cryptocurrency_t_',
    '_t_Order types for derivatives trading_t_',
    '_t_How to evaluate a cryptocurrency_t_',
    '_t_Common crypto terms to impress your friends_t_',
]

const query = graphql`
    query {
        crypto_hero: file(relativePath: { eq: "ebooks/crypto-hero.png" }) {
            ...bannerImage
        }
        crypto_inside: file(relativePath: { eq: "ebooks/crypto-inside.png" }) {
            ...bannerImage
        }
        crypto_hero_es: file(relativePath: { eq: "ebooks/crypto-hero-es.png" }) {
            ...bannerImage
        }
        crypto_inside_es: file(relativePath: { eq: "ebooks/crypto-inside-es.png" }) {
            ...bannerImage
        }
        crypto_hero_pt: file(relativePath: { eq: "ebooks/crypto-hero-pt.png" }) {
            ...bannerImage
        }
        crypto_inside_pt: file(relativePath: { eq: "ebooks/crypto-inside-pt.png" }) {
            ...bannerImage
        }
        crypto_hero_fr: file(relativePath: { eq: "ebooks/crypto-hero-fr.png" }) {
            ...bannerImage
        }
        crypto_inside_fr: file(relativePath: { eq: "ebooks/crypto-inside-fr.png" }) {
            ...bannerImage
        }
    }
`

const StocksEbook = ({ language }: StocksEbookProps) => {
    const ebook_languages = ['es', 'pt', 'fr']
    const ebook_image = ebook_languages.includes(language) ? `_${language}` : ''

    const data = useStaticQuery(query)
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('_t_Cryptocurrencies Ebook_t_')}
                description={localize('_t_Trade Cryptocurrencies on our Deriv platform._t_')}
                no_index
            />
            <Hero
                authorDesc="_t_This e-book has been brought to you by a veteran online trader and New York Times bestselling author,_t_"
                authorName="_t_Vince Stanzione._t_"
                bg="linear-gradient(180deg, #1f1f1f, #0E0E0E)"
                bgMobile="linear-gradient(180deg, #333333, #0E0E0E)"
                color="white"
                ebook_utm_code="cryptocurrencies-ebook"
                introMain="_t_Learn how to trade cryptocurrencies with Deriv_t_"
                mainHeaderImage={data[`crypto_hero${ebook_image}`]}
            />
            <ImageText
                imageWidth={282}
                introImage={StocksIntroImage}
                introPara="_t_Trading cryptocurrencies gives you the chance to earn profits from price movements without owning the underlying digital coins. In other words, you can earn by correctly predicting whether the price of a cryptocurrency will go up or down._t_"
                subPara="_t_In this guide, you’ll learn valuable tips and strategies for trading cryptocurrencies on Deriv. You will also get a free demo account to practice completely risk-free on Deriv MT5 and DTrader platforms, as well as the DerivGo app. And when you are ready to start trading for real, you can start with as little as a $5 deposit._t_"
            />
            <Topics
                title="_t_In this e-book we will cover_t_"
                topicsImage={data[`crypto_inside${ebook_image}`]}
                topicsList={topics_covered}
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(StocksEbook)
