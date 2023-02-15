import React from 'react'
import Commodities from '../components/markets/_commodities'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_commodities } from '../static/content/_commodities'
import Signup, { Appearances } from 'components/custom/signup'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import useRegion from 'components/hooks/use-region'

const CommoditiesPage = () => {
    const { is_row } = useRegion()
    return (
        <Layout type="noNav">
            <SEO
                description={localize(
                    'Trade the commodities market and speculate on the price movements of oil and precious metals like gold and silver. Enjoy low spreads and zero commission.',
                )}
                title={localize('Commodities trading | Commodities market online trading | Deriv')}
            />
            <DerivedFXHero
                title={localize('Commodities')}
                description={
                    is_row
                        ? localize(
                              'Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our high leverage and competitive spreads.',
                          )
                        : localize(
                              'Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our competitive spreads.',
                          )
                }
                is_commodities
            />
            <Commodities simple_step_content={simple_step_content_commodities} />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}
export default WithIntl()(CommoditiesPage)
