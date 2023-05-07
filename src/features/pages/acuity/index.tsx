import React from 'react'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import AcuityTradeTools from 'features/pages/acuity/acuity-trade-tools'

const Acuity = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize('_t_Acuity trading tools | MT5 trading solutions | Deriv_t_')}
                description={localize(
                    '_t_Get access to market insights using AI-driven trading tools. Download Acuity to your Deriv MT5 desktop terminal for free._t_',
                )}
            />
            <AcuityTradeTools />

            <Footer />
        </Layout>
    )
}

export default WithIntl()(Acuity)
