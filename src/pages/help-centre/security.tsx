import React from 'react'
import security from './data/_security'
import QuestionsTemplate from './components/_questions-template'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const Security = () => <QuestionsTemplate data={security} />

export default WithIntl()(Security)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Security | Deriv_t_"
        description="_t_Frequently asked questions - Security_t_"
        pageContext={pageContext}
    />
)
