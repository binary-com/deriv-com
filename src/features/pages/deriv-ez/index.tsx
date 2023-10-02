import React from 'react'
import OurPlatforms from './deprecated-other-platforms'
import Hero from './hero'
import Numbers from './numbers'
import WhatIsDerivEZ from './what-have'
import DerivEZAppBanner from './app-banner'
import Layout from 'features/components/templates/layout'
import WhyTradeEZ from 'features/pages/deriv-ez/why-trade'
import StartDerivEZ from 'features/pages/deriv-ez/how-to-start'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import { WithIntl } from 'components/localization'

const DerivEZ = () => {
    return (
        <Layout>
            <MainNav />
            <Hero />
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
