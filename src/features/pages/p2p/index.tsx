import React from 'react'
import loadable from '@loadable/component'
import DP2Hero from './hero'
import DP2Numbers from './numbers'
import DP2P from './dp2p'
import DP2Steps from './steps'
import DP2Availability from './availability'
import { banner_data, portalData } from './_data'
import Roadmap from 'features/components/organisms/roadmap'
import DP2Banner from 'features/components/organisms/banner/blade-shape-banner'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import MainNav from 'features/components/templates/navigation/main-nav'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { usePageLoaded } from 'components/hooks/use-page-loaded'
import useRegion from 'components/hooks/use-region'
import useWebsiteStatus from 'components/hooks/use-website-status'
import InitialLoader from 'components/elements/dot-loader'
import PageNotFound from 'features/pages/404'

const Footer = loadable(() => import('features/components/templates/footer'))

const DP2PPage = () => {
    useOpenLiveChat(true)
    const [is_mounted] = usePageLoaded() // needed to fix the second Hero-component during page's loadin
    const { is_p2p_allowed_country } = useRegion()
    const { website_status } = useWebsiteStatus()
    const clients_country = website_status?.clients_country
    if (clients_country !== undefined) {
        if (is_p2p_allowed_country) {
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
                    {is_mounted && (
                        <>
                            <DP2Hero />
                            <DP2Numbers />
                            <DP2P />
                            <DP2Steps />
                            <DP2Availability />
                            <DP2Banner data={banner_data} />
                            <Roadmap data={portalData} />
                        </>
                    )}
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
