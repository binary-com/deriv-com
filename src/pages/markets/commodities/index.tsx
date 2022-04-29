import React from 'react'
import Commodities from '../components/markets/_commodities'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_commodities } from '../static/content/_commodities'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CommoditiesPage = () => (
    <Layout>
        <SEO
            description={localize(
                'Sign up with Deriv to start trading on commodities and speculate on the price movements of gold, silver, oil, and other assets.',
            )}
            title={localize('Commodities market | Commodities trading | Deriv')}
        />
        <Hero />
        <NavTab route_from={'commodities'} route_offset={1200} />
        <Commodities simple_step_content={simple_step_content_commodities} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CommoditiesPage)
