import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import fraud_prevention from './data/_fraud-prevention'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const FraudPrevention = ({ pageContext }: TGatsbyHead) => {
    const { region } = pageContext
    return <QuestionsTemplate data={fraud_prevention} region={region}/>
}

export default WithIntl()(FraudPrevention)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Fraud Prevention | Deriv_t_"
        description="_t_Frequently asked questions - Fraud Prevention_t_"
        pageContext={pageContext}
    />
)
