import React from 'react'
import Forex from '../components/markets/_forex'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_forex } from '../static/content/_forex'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'

const ForexPage = () => {
    const { is_deriv_go } = usePlatformQueryParam()
    return (
        <Layout type="noNav">
            <SEO
                description={localize(
                    "Trade forex on Deriv's intuitive online trading platforms and get access to a wide range of major, minor, and exotic currency pairs.",
                )}
                title={localize(
                    'Forex online trading platforms | Forex trading demo account | Deriv',
                )}
            />
            <DerivedFXHero
                title="Forex"
                description={localize(
                    'Benefit from round-the-clock trading hours (Monday to Friday), high liquidity, low barriers to entry, a wide range of offerings, and opportunities to trade on world events.',
                )}
            />
            <Forex simple_step_content={simple_step_content_forex} />
            {!is_deriv_go && <Signup appearance={Appearances.public} />}
        </Layout>
    )
}

export default WithIntl()(ForexPage)
