import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deriv_ez from './data/_deriv-ez'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DerivEZ = () => <QuestionsTemplate data={deriv_ez} />

export default WithIntl()(DerivEZ)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv EZ | Deriv_t_"
        description="_t_Frequently asked questions - Deriv EZ_t_"
        pageContext={pageContext}
    />
)
