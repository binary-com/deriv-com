import React from 'react'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer/'
import Layout from 'features/components/templates/layout'
import { SEO } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const DeriCTrader = () => {
    return (
        <Layout>
            <MainNav />
            <SEO
                title={localize(
                    '_t_Trade on world markets with cTrader, a multi-asset CFD trading platform that’s powerful and user-friendly._t_',
                )}
                description={localize('_t_cTrader | Online CFD trading platform | Deriv_t_')}
            />

            <Footer />
        </Layout>
    )
}

export default WithIntl()(DeriCTrader)
