import React from 'react'
import loadable from '@loadable/component'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize } from 'components/localization'
import MainNav from 'features/components/templates/navigation/main-nav'

const Footer = loadable(() => import('features/components/templates/footer'))

const DigitalOptionsPage = () => {
    useOpenLiveChat(true)

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

            <Footer />
        </Layout>
    )
}

export default DigitalOptionsPage
