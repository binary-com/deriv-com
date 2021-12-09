import React from 'react'
import Advantages from './components/sections/_advantages'
import ApplicationProcess from './components/sections/_application-process'
import Description from './components/sections/_description'
import FAQ from './components/sections/_faq'
import Hero from './components/sections/_hero'
import HighLights from './components/sections/_highlights'
import JoinUs from './components/sections/_join-us'
import WhatIsBeSquare from './components/sections/_what-is_besquare'
import WhatLiesAhead from './components/sections/_what-lies-ahead'
import WhoCanApply from './components/sections/_who-can-apply'
import WhyDeriv from './components/sections/_why-deriv'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import BeSquareOg from 'images/common/be-square/besquare-og.png'

const meta_attributes = {
    og_title: 'BeSquare graduate programme by Deriv',
    og_description: 'Learn essential skills from innovative tech teams.',
    og_type: 'website',
    og_img_width: '600',
    og_img_height: '315',
    og_img: BeSquareOg,
}

const BeSquare = () => (
    <Layout type="besquare">
        <SEO
            title={'IT graduate programme for Malaysians | BeSquare by Deriv'}
            description={
                'Deriv’s tech graduate programme. Get real-world experience and build a solid career in IT. Get trained in DevOps, security, mobile development, and more.'
            }
            meta_attributes={meta_attributes}
        />
        <Hero />
        <Description />
        <HighLights />
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

export default BeSquare
