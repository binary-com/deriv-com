import React, {useState, useEffect} from 'react'
import SyntheticIndices from '../components/markets/_synthetic-indices'
import { DerivedFXHero } from '../components/sections/_hero_derived_fx'
import NavTab from '../components/sections/_nav-tab'
import { simple_step_content_synthetic } from '../static/content/_synthetic'
import SignupPublic from 'features/components/templates/signup/with-banner'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { usePlatformQueryParam } from 'components/hooks/use-platform-query-param'
import { TGatsbyHead } from 'features/types'
import useRegion from 'components/hooks/use-region'

const Markets = ({pageContext}: TGatsbyHead) => {
    const {region} = pageContext
    const {is_eu} = useRegion()
    const { is_deriv_go } = usePlatformQueryParam()
    const [description, setDescription] = useState<TString>(
        '_t_Trade on asset prices derived from simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite._t_',
    )

    useEffect(() => {
        if (is_eu) {
            setDescription(
                '_t_Trade on asset prices derived from real-world or simulated markets. Manage your exposure by selecting the volatility level to suit your risk appetite. Choose from our 24/7 synthetic indices, derived FX, and basket indices._t_',
            )
        }
    }, [is_eu])

    return (
        <Layout type="noNav" padding_top="0" region={region}>
            <DerivedFXHero
                title="_t_Derived indices_t_"
                description={description}
                is_derived_eu={region === 'eu' ? true : false}
                is_derived_row={region === 'row' ? true : false}
            />
            <NavTab route_from="synthetic" />
            <SyntheticIndices simple_step_content={simple_step_content_synthetic} />
            {!is_deriv_go && <SignupPublic />}
        </Layout>
    )
}

export default WithIntl()(Markets)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        description="_t_Deriv's proprietary synthetics are free of market and liquidity risks. Enjoy 24/7 synthetic trading on Deriv MT5, DTrader, and our other platforms._t_"
        title="_t_Synthetic indices | Volatility indices | Deriv_t_"
        pageContext={pageContext}
    />
)
