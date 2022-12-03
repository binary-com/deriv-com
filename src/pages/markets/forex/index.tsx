import React from 'react'
import Forex from '../components/markets/_forex'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_forex } from '../static/content/_forex'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const ForexPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                'Trade forex online with Deriv. Open a demo account and enjoy a wide range of currency pairs on our responsive and intuitive trading platforms.',
            )}
            title={localize('Forex trading online | Forex trading demo account | Deriv')}
        />
        <DerivedFXHero
            title="Forex"
            description="Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events."
        />
        <Forex simple_step_content={simple_step_content_forex} />
    </Layout>
)

export default WithIntl()(ForexPage)
