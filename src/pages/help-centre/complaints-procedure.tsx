import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import complaints_procedure from './data/_complaints_procedure'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const ComplaintsProcedure = () => <QuestionsTemplate data={complaints_procedure} />

export default WithIntl()(ComplaintsProcedure)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Complaints procedure | Deriv_t_"
        description="_t_Frequently asked questions - Complaints procedure_t_"
        pageContext={pageContext}
    />
)
