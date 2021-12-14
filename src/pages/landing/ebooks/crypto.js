import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Signup, WhatOurClientsSay } from '../../home/_lazy-load'
import ImageText from './components/_image-text'
import Topics from './components/_topics'
import Hero from './components/_hero'
import { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import StocksIntroImage from 'images/svg/landing/crypto-intro.svg'

const topicsCovered = [
    localize('Introduction to cryptocurrencies'),
    localize('Types of cryptocurrencies'),
    localize('The basics of trading cryptocurrency'),
    localize('Order types for derivatives trading'),
    localize('How to evaluate a cryptocurrency'),
    localize('Common crypto terms to impress your friends'),
]

const query = graphql`
    query {
        crypto_hero: file(relativePath: { eq: "ebooks/crypto-hero.png" }) {
            ...bannerImage
        }
        crypto_inside: file(relativePath: { eq: "ebooks/crypto-inside.png" }) {
            ...bannerImage
        }
    }
`

const StocksEbook = () => {
    const data = useStaticQuery(query)
    return (
        <Layout type="landing-page" is_ppc_redirect={true}>
            <SEO
                title={localize('Cryptocurrencies Ebook')}
                description={localize('Trade Cryptocurrencies on our Deriv platform.')}
                no_index
            />
            <Hero
                authorDesc={
                    localize(
                        'This e-book has been brought to you by a veteran online trader and New York Times bestselling author,',
                    ) + ' '
                }
                authorName={localize('Vince Stanzione.')}
                bg="linear-gradient(90deg, #EBCA93, #EBC17A)"
                bgMobile="linear-gradient(180deg, #EBCA93, #EBC17A)"
                color="black"
                ebook_utm_code="cryptocurrencies-ebook"
                introSub=""
                introMain={localize('Learn how to trade cryptocurrencies with Deriv')}
                mainHeaderImage={data['crypto_hero']}
            />
            <ImageText
                imageWidth={282}
                introImage={StocksIntroImage}
                introPara={localize(
                    'Trading cryptocurrencies gives you the chance to earn profits from price movements without owning the underlying digital coins. In other words, you can earn by correctly predicting whether the price of a cryptocurrency will go up or down.',
                )}
                subPara={localize(
                    'In this guide, you’ll learn valuable tips and strategies for trading cryptocurrencies on Deriv. You will also get a free demo account to practice completely risk-free on Deriv MT5 and DTrader platforms, as well as the DerivGo app. And when you are ready to start trading for real, you can start with as little as a $5 deposit.',
                )}
            />
            <Topics
                title={localize('In this e-book we will cover')}
                topicsImage={data['crypto_inside']}
                topicsList={topicsCovered}
            />
            <WhatOurClientsSay />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(StocksEbook)
