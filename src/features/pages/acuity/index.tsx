import React from 'react'
import loadable from '@loadable/component'
import AcuityFeatureGuide from './acuity-feature-guide'
import WelcomeBannerAcuity from './welcome-banner-acuity'
import MainNav from 'features/components/templates/navigation/main-nav'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import AcuityTradeTools from 'features/pages/acuity/acuity-trade-tools'

const Footer = loadable(() => import('features/components/templates/footer'))
const Acuity = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_Acuity trading tools | MT5 trading solutions | Deriv_t_')}
                description={localize(
                    '_t_Download Acuity to your Deriv MT5 desktop terminal for free and get access to market insights using AI-driven trading tools._t_',
                )}
            />
            <AcuityTradeTools />
            <AcuityFeatureGuide />
            <WelcomeBannerAcuity />
            <Footer />
        </Layout>
    )
}

export default WithIntl()(Acuity)
