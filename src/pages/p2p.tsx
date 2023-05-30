import React from 'react'
import { WithIntl } from 'components/localization'
import DP2PPage from 'features/pages/p2p'
import PageNotFound from 'features/pages/404'
import useRegion from 'components/hooks/use-region'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'

const DP2P = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    if (is_p2p_allowed_country) {
        return <DP2PPage />
    }
    return <PageNotFound />
}

export default WithIntl()(DP2P)
