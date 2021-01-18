import React from 'react'
import Advantages from './static/components/_advantages'
import ApplicationProcess from './static/components/_application-process'
import Description from './static/components/_description'
import Hero from './static/components/_hero'
import JoinUs from './static/components/_join-us'
import WhatIsBeSquare from './static/components/_what-is_besquare'
import WhatLiesAhead from './static/components/_what-lies-ahead'
import WhoCanApply from './static/components/_who-can-apply'
import WhyDeriv from './static/components/_why-deriv'
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
    </Layout>
)

export default WithIntl()(BeSquare)
