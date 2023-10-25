import React from 'react'
import Forex from '../components/markets/_forex'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_forex } from '../static/content/_forex'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const ForexPage = () => (
    <Layout type="noNav">
        <DerivedFXHero
            title="_t_Forex_t_"
            description="_t_Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events._t_"
            is_forex
        />
        <Forex simple_step_content={simple_step_content_forex} />
        <SignupPublic />
    </Layout>
)

export default WithIntl()(ForexPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade forex on Deriv's intuitive online trading platforms and get access to a wide range of major, minor, and exotic currency pairs._t_"
        title="_t_Forex online trading platforms | Forex trading demo account | Deriv_t_"
        pageContext={pageContext}
    />
)
