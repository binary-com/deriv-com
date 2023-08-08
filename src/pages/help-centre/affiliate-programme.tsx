import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import affiliate_programme from './data/_affiliate-programme'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const AffiliateProgramme = () => <QuestionsTemplate data={affiliate_programme} />

export default WithIntl()(AffiliateProgramme)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Affiliate programme | Deriv_t_"
        description="_t_Frequently asked questions - Affiliate programme_t_"
        pageContext={pageContext}
    />
)
