import React from 'react'
import Hero from '../../components/molecules/deriv-cfd-hero'
import OtherPlatforms from './other-platforms'
import Numbers from './numbers'
import WhatWeHave from './what-we-have'
//import DerivEZAppBanner from './app-banner'
import WhyTradeCTrader from './why-trade'
import { hero_content_data } from './hero/data'
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
            <Hero contentData={hero_content_data} />
            <Numbers />
            <WhyTradeCTrader />
            <WhatWeHave />
            <OtherPlatforms />
            {/*
            
            <WhatWeHave />
            <StartDerivEZ />
            <DerivEZAppBanner />
           
            <OtherPlatforms />*/}
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivCTraderPage)
