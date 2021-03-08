import React from 'react'
import Advantages from './components/sections/_advantages'
import ApplicationProcess from './components/sections/_application-process'
import Description from './components/sections/_description'
import FAQ from './components/sections/_faq'
import Hero from './components/sections/_hero'
import JoinUs from './components/sections/_join-us'
import WhatIsBeSquare from './components/sections/_what-is_besquare'
import WhatLiesAhead from './components/sections/_what-lies-ahead'
import WhoCanApply from './components/sections/_who-can-apply'
import WhyDeriv from './components/sections/_why-deriv'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import { WithIntl, localize } from 'components/localization'

const BeSquare = () => (
    <Layout type="be-square">
        <SEO
            title={'BeSquare By Deriv'}
            description={localize(
                'Learn more about BeSquare, a graduate training programme by Deriv that equips fresh graduates with essential skills to kickstart their career in IT.',
            )}
        />
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
