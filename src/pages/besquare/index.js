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
import BeSquareOg from 'images/common/be-square/besquare-og.png'

const meta_attributes = {
    og_title: localize('BeSquare graduate programme by Deriv'),
    og_type: 'website',
    og_img_width: '600',
    og_img_height: '315',
    og_img: BeSquareOg,
}

const BeSquare = () => (
    <Layout type="be-square">
        <SEO
            title={localize('BeSquare By Deriv')}
            description={localize('Learn essential skills from innovative tech teams.')}
            meta_attributes={meta_attributes}
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
