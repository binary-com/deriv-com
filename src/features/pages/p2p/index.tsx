import React from 'react'
import loadable from '@loadable/component'
import DP2Hero from './hero'
import DP2Numbers from './numbers'
import DP2P from './dp2p'
import DP2Steps from './steps'
import DP2Availability from './availability'
import { banner_data, portalData } from './_data'
import Roadmap from 'features/components/organisms/roadmap'
import DP2Banner from 'features/components/templates/banners/blade-shape-banner'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import MainNav from 'features/components/templates/navigation/main-nav'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import useRegion from 'components/hooks/use-region'
import InitialLoader from 'components/elements/dot-loader'
import PageNotFound from 'features/pages/404'
import { TGatsbyHead } from 'features/types'

const Footer = loadable(() => import('features/components/templates/footer'))

const DP2PPage = () => {
    useOpenLiveChat(true)
    const { is_p2p_allowed_country, is_p2p_loading } = useRegion()

    if (!is_p2p_loading) {
        if (is_p2p_allowed_country) {
            return (
                <Layout>
                    <MainNav />
                    <DP2Hero />
                    <DP2Numbers />
                    <DP2P />
                    <DP2Steps />
                    <DP2Availability />
                    <DP2Banner data={banner_data} />
                    <Roadmap data={portalData} />
                    <Footer />
                </Layout>
            )
        }
        return <PageNotFound />
    }
    return (
        <Layout>
            <InitialLoader />
        </Layout>
    )
}

export default DP2PPage

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Deriv P2P – peer-to-peer deposit and withdrawal service_t_"
        description="_t_With Deriv P2P your deposits and withdrawals are easy, fast, and efficient. Access now via the desktop or mobile app._t_"
        pageContext={pageContext}
    />
)
