import React from 'react'
import trading from './data/_trading'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'
import { SEO } from 'components/containers'

const Trading = () => <QuestionsTemplate data={trading} />

export default WithIntl()(Trading)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Trading | Deriv_t_"
        description="_t_Frequently asked questions - Trading_t_"
        pageContext={pageContext}
    />
)
