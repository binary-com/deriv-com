import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import ib_programme from './data/_ib-programme'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const IbProgramme = () => <QuestionsTemplate data={ib_programme} />

export default WithIntl()(IbProgramme)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | IB programme | Deriv_t_"
        description="_t_Frequently asked questions - IB programme_t_"
        pageContext={pageContext}
    />
)
