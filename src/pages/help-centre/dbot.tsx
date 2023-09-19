import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import dbot from './data/_dbot'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DBot = () => <QuestionsTemplate data={dbot} />

export default WithIntl()(DBot)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | DBot | Deriv_t_"
        description="_t_Frequently asked questions - DBot_t_"
        pageContext={pageContext}
    />
)
