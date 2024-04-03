import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dtrader from './data/_deriv-trader'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DTrader = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <QuestionsTemplate data={dtrader} region={region}/>
}

export default WithIntl()(DTrader)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | DTrader | Deriv_t_"
        description="_t_Frequently asked questions - DTrader_t_"
        pageContext={pageContext}
    />
)
