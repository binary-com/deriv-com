import React from 'react'
import loadable from '@loadable/component'
import DP2Hero from './hero'
import DP2Numbers from './numbers'
import DP2P from './dp2p'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import MainNav from 'features/components/templates/navigation/main-nav'
import PageNotFound from 'features/pages/404'

const Footer = loadable(() => import('features/components/templates/footer'))

const DP2PPage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country } = useRegion()

    if (!is_p2p_allowed_country) {
        return (
            <Layout>
                <SEO
                    title={localize(
                        '_t_Online trading platform | Forex, commodities, synthetic indices, stocks, and stock indices | Deriv_t_',
                    )}
                    description={localize(
                        '_t_Deriv: an online trading platform available 24/7 with a wide selection of derivatives._t_',
                    )}
                    has_organization_schema
                />
                <MainNav />
                <DP2Hero />
                <DP2Numbers />
                <DP2P />
                <Footer />
            </Layout>
        )
    }
    return <PageNotFound />
}

export default DP2PPage
