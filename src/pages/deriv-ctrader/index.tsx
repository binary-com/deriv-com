import React from 'react'
import PageNotFound from '../404'
import DerivCTrader from 'features/pages/deriv-ctrader'
import useRegion from 'components/hooks/use-region'
import { WithIntl, localize } from 'components/localization'
import SEO from 'components/containers/seo'
import { TGatsbyHead } from 'features/types'

const CTraderPage = () => {
    const { is_row } = useRegion()
    if (is_row) {
        return <DerivCTrader />
    }
    return <PageNotFound />
}

export default WithIntl()(CTraderPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title={localize('_t_cTrader – a CFD trading platform | Deriv_t_')}
        description={localize(
            '_t_cTrader is our intuitive CFD trading platform where you can trade forex, commodities, stocks & indices, cryptocurrencies, and derived indices._t_',
        )}
        pageContext={pageContext}
    />
)
