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

const Footer = loadable(() => import('features/components/templates/footer'))

const DP2PPage = () => {
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
            <DP2Steps />
            <DP2Availability />
            <DP2Banner data={banner_data} />
            <Roadmap data={portalData} />
            <Footer />
        </Layout>
    )
}

export default DP2PPage
