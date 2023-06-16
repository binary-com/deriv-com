import React from 'react'
import { deriv_ez_data } from './data'
import {
    TradingPlatformBanner,
    TradingPlatformHero,
    TradingPlatformHowToStart,
    TradingPlatformNumbers,
    TradingPlatformOther,
    TradingPlatformWhatHave,
    TradingPlatformWhyTrade,
} from 'features/components/templates/trading-platform'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DerivEZ = () => {
    const {
        trading_platform_hero,
        trading_platform_numbers,
        trading_platform_what_have,
        trading_platform_why_trade,
        trading_platform_start,
        trading_platform_banner,
        trading_platform_other,
    } = deriv_ez_data
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_Deriv EZ – a CFD trading platform | Deriv_t_')}
                description={localize(
                    '_t_Deriv EZ is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_',
                )}
            />
            <TradingPlatformHero trading_platform_hero={trading_platform_hero} />
            <TradingPlatformNumbers trading_platform_numbers={trading_platform_numbers} />
            <TradingPlatformWhyTrade trading_platform_why_trade={trading_platform_why_trade} />
            <TradingPlatformWhatHave trading_platform_what_have={trading_platform_what_have} />
            <TradingPlatformHowToStart trading_platform_start={trading_platform_start} />
            <TradingPlatformBanner trading_platform_banner={trading_platform_banner} />
            <TradingPlatformOther trading_platform_other={trading_platform_other} />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivEZ)
