import React from 'react'
import Hero from './static/components/_hero'
import Description from './static/components/_description'
import WhatIsBeSquare from './static/components/_what-is_besquare'
import JoinUs from './static/components/_join-us'
import WhyDeriv from './static/components/_why-deriv'
import Advantages from './static/components/_advantages'
import WhoCanApply from './static/components/_who-can-apply'
import ApplicationProcess from './static/components/_application-process'
import Footer from './static/components/_footer'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const BeSquare = () => (
    <Layout type="be-square" margin_top={10}>
        <Hero />
        <Description />
        <WhatIsBeSquare />
        <JoinUs />
        <WhyDeriv />
        <Advantages />
        <WhoCanApply />
        <ApplicationProcess />
        <Footer />
    </Layout>
)

export default WithIntl()(BeSquare)
