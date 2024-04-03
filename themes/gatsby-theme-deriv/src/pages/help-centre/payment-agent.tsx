import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import payment_agent from './data/_payment-agent'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const PaymentAgent = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <QuestionsTemplate data={payment_agent} region={region} />
}

export default WithIntl()(PaymentAgent)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Payment Agent | Deriv_t_"
        description="_t_Frequently asked questions - Payment Agent_t_"
        pageContext={pageContext}
    />
)
