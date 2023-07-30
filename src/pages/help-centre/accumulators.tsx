import React from 'react'
import accumulators from './data/_accumulators'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHeadApi } from 'features/types'

const Accumulators = () => <QuestionsTemplate data={accumulators} />

export default WithIntl()(Accumulators)

export const Head = ({ pageContext }: TGatsbyHeadApi) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Accumulators | Deriv_t_"
        description="_t_Frequently asked questions - Accumulators_t_"
        pageContext={pageContext}
    />
)
