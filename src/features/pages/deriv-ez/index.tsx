import React from 'react'
import Hero from '../../components/molecules/deriv-cfd-hero'
import OurPlatforms from './deprecated-other-platforms'
import Numbers from './numbers'
import WhatIsDerivEZ from './what-have'
import DerivEZAppBanner from './app-banner'
import { hero_content_data } from './hero/data'
import WhyTradeEZ from 'features/pages/deriv-ez/why-trade'
import StartDerivEZ from 'features/pages/deriv-ez/how-to-start'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DerivEZ = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize(
                    '_t_Deriv EZ is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_',
                )}
                description={localize('_t_Deriv EZ – a CFD trading platform | Deriv_t_')}
            />
            <Hero contentData={hero_content_data} />
            <Numbers />
            <WhyTradeEZ />
            <WhatIsDerivEZ />
            <StartDerivEZ />
            <DerivEZAppBanner />
            {/*refactor this component below with atomic design*/}
            <OurPlatforms />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivEZ)
