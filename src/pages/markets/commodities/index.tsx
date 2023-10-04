import React from 'react'
import Commodities from '../components/markets/_commodities'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import { simple_step_content_commodities } from '../static/content/_commodities'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import useRegion from 'components/hooks/use-region'
import { TGatsbyHead } from 'features/types'

const CommoditiesPage = () => {
    const { is_row } = useRegion()
    const hero_description = is_row
        ? '_t_Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our high leverage and competitive spreads._t_'
        : '_t_Trade popular assets in the commodities market such as silver, gold, oil, and more without owning the underlying asset. Speculate on the price movements and benefit from our competitive spreads._t_'

    return (
        <Layout type="noNav">
            <DerivedFXHero
                title="_t_Commodities_t_"
                description={hero_description}
                is_commodities
            />
            <Commodities simple_step_content={simple_step_content_commodities} />
            <SignupPublic />
        </Layout>
    )
}

export default WithIntl()(CommoditiesPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Trade the commodities market and speculate on the price movements of oil and precious metals like gold and silver. Enjoy low spreads and zero commission._t_"
        title="_t_Commodities trading | Commodities market online trading | Deriv_t_"
        pageContext={pageContext}
    />
)
