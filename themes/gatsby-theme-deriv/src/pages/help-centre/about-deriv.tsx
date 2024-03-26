import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import about_deriv from './data/_about-deriv'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const AboutDeriv = () => <QuestionsTemplate data={about_deriv} />

export default WithIntl()(AboutDeriv)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | About Deriv | Deriv_t_"
        description="_t_Frequently asked questions - About Deriv_t_"
        pageContext={pageContext}
    />
)
