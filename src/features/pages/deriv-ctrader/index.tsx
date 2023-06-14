import React from 'react'
import OtherPlatforms from './other-platforms'
import Hero from './hero'
import Numbers from './numbers'
//import WhatIsDerivEZ from './what-have'
//import DerivEZAppBanner from './app-banner'
import WhyTradeCTrader from './why-trade'
import StartDerivEZ from 'features/pages/deriv-ez/how-to-start'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DerivCTraderPage = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_cTrader | Online CFD trading platform | Deriv_t_')}
                description={localize(
                    '_t_Trade on world markets with cTrader, a multi-asset CFD trading platform that’s powerful and user-friendly._t_',
                )}
            />
            <Hero />
            <Numbers />
            <WhyTradeCTrader />
            <OtherPlatforms />
            {/*
            
            <WhatIsDerivEZ />
            <StartDerivEZ />
            <DerivEZAppBanner />
           
            <OtherPlatforms />*/}
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivCTraderPage)
