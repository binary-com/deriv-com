import React from 'react'
import Hero from './hero'
import Numbers from './numbers'
import WhatIsDerivEZ from './what-have'
import WhyTradeEZ from 'features/pages/derivez/why-trade'
import StartDerivEZ from 'features/pages/derivez/how-to-start'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { WithIntl } from 'components/localization'

const DerivEZ = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={
                    '_t_Deriv EZ is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_'
                }
                description={'_t_Deriv EZ – a CFD trading platform | Deriv_t_'}
            />
            <Hero />
            <Numbers />
            <WhyTradeEZ />
            <WhatIsDerivEZ />
            <StartDerivEZ />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(DerivEZ)
