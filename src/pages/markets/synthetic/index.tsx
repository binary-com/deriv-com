import React from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { Hero } from '../components/sections/_hero'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const Markets = () => (
    <Layout>
        <SEO
            description={localize(
                'Trade synthetic indices on Deriv 24/7. Enjoy a variety of instruments with different volatility, including the Volatility 75 index and Volatility 100 index.',
            )}
            title={localize('Synthetic indices trading | Trade volatility indices online - Deriv')}
        />
        <Hero />
        <NavTab route_from={'synthetic'} route_offset={50} />
        <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(Markets)
