import React from 'react'
import Commodities from '../components/markets/_commodities'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_commodities } from '../static/content/_commodities'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const CommoditiesPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                '_t_Sign up with Deriv to start trading on commodities and speculate on the price movements of gold, silver, oil, and other assets._t_',
            )}
            title={localize('_t_Commodities market | Commodities trading | Deriv_t_')}
        />
        <DerivedFXHero
            title={localize('_t_Commodities_t_')}
            description={localize(
                '_t_Speculate on the price movements of silver, gold, oil and more. Profit from the price difference when the market moves in the direction that you have predicted._t_',
            )}
        />
        <Commodities simple_step_content={simple_step_content_commodities} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(CommoditiesPage)
