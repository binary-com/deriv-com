import React from 'react'
import { WithIntl } from 'components/localization'
import DP2PPage from 'features/pages/p2p'
import { SEO } from 'components/containers'
import { TGatsbyHead } from 'features/types'

const DP2P = ({ pageContext }: TGatsbyHead) => {
    const {region} = pageContext
    return <DP2PPage region={region} />
}

export default WithIntl()(DP2P)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Deriv P2P – peer-to-peer deposit and withdrawal service_t_"
        description="_t_With Deriv P2P your deposits and withdrawals are easy, fast, and efficient. Access now via the desktop or mobile app._t_"
        pageContext={pageContext}
    />
)
