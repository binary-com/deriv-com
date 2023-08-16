import React from 'react'
import QuestionsTemplate from './components/_questions-template'
import deriv_p2p from './data/_deriv-p2p'
import { WithIntl } from 'components/localization'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DerivP2P = () => <QuestionsTemplate data={deriv_p2p} />

export default WithIntl()(DerivP2P)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Help centre | Frequently asked questions | Deriv P2P | Deriv_t_"
        description="_t_Frequently asked questions - Deriv P2P_t_"
        pageContext={pageContext}
    />
)
