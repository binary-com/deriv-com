import React from 'react'
import Commodities from '../components/markets/_commodities'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_commodities } from '../static/content/_commodities'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CommoditiesPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                'Sign up with Deriv to start trading on commodities and speculate on the price movements of gold, silver, oil, and other assets.',
            )}
            title={localize('Commodities market | Commodities trading | Deriv')}
        />
        <DerivedFXHero
            title={localize('Commodities')}
            description={localize(
                'Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted.',
            )}
        />
        <Commodities simple_step_content={simple_step_content_commodities} />
    </Layout>
)

export default WithIntl()(CommoditiesPage)
