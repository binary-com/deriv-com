import React from 'react'
import Forex from '../components/markets/_forex'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_forex } from '../static/content/_forex'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const ForexPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade forex online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms.',
            )}
            title={localize('Forex trading online | Forex trading demo account | Deriv')}
        />
        <Hero />
        <NavTab route_from={'forex'} route_offset={0} />
        <Forex simple_step_content={simple_step_content_forex} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(ForexPage)
