import React from 'react'
import Advantages from './components/_advantages'
import ApplicationProcess from './components/_application-process'
import Description from './components/_description'
import FAQ from './components/_faq'
import Hero from './components/_hero'
import JoinUs from './components/_join-us'
import WhatIsBeSquare from './components/_what-is_besquare'
import WhatLiesAhead from './components/_what-lies-ahead'
import WhoCanApply from './components/_who-can-apply'
import WhyDeriv from './components/_why-deriv'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const BeSquare = () => (
    <Layout type="be-square">
        <Hero />
        <Description />
        <WhatIsBeSquare />
        <JoinUs />
        <WhyDeriv />
        <WhatLiesAhead />
        <Advantages />
        <WhoCanApply />
        <ApplicationProcess />
        <FAQ />
    </Layout>
)

export default WithIntl()(BeSquare)
