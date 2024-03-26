import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dmt5 from './data/_dmt5'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DMT5 = () => <QuestionsTemplate data={dmt5} />

export default WithIntl()(DMT5)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv MT5 | Deriv_t_"
        description="_t_Frequently asked questions - Deriv MT5_t_"
        pageContext={pageContext}
    />
)
