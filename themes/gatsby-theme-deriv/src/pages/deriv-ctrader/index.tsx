import React from 'react'
import PageNotFound from '../404'
import DerivCTrader from 'features/pages/deriv-ctrader'
import { WithIntl, localize } from 'components/localization'
import SEO from 'components/containers/seo'
import { TGatsbyHead } from 'features/types'

const CTraderPage = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    
    if (region === "row") return <DerivCTrader region={region} />
    return <PageNotFound pageContext={pageContext} />
}

export default WithIntl()(CTraderPage)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title={localize('_t_cTrader | CFD copy trading platform | Deriv_t_')}
        description={localize(
            '_t_Experience the power of copy trading on Deriv cTrader - The intuitive CFD trading platform with a wide range of features for an enhanced trading experience._t_',
        )}
        pageContext={pageContext}
    />
)
