import React from 'react'
import Forex from '../components/markets/_forex'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_forex } from '../static/content/_forex'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'

const ForexPage = () => (
    <Layout type="noNav">
        <SEO
            description={localize(
                "_t_Trade forex on Deriv's intuitive online trading platforms and get access to a wide range of major, minor, and exotic currency pairs._t_",
            )}
            title={localize(
                '_t_Forex online trading platforms | Forex trading demo account | Deriv_t_',
            )}
        />
        <DerivedFXHero
            title={localize('_t_Forex_t_')}
            description={localize(
                '_t_Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events._t_',
            )}
        />
        <Forex simple_step_content={simple_step_content_forex} />
        <Signup appearance={Appearances.public} />
    </Layout>
)

export default WithIntl()(ForexPage)
