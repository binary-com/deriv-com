import React from 'react'
import Header from './homepage/_header'
import Footer from './homepage/_footer'
import Hero from './homepage/_hero'
import ScrollTop from './components/scroll-top'
import { SEO } from 'components/containers'
import { WithIntl, localize } from 'components/localization'

const Amp = () => {
    return (
        <>
            <ScrollTop />
            <Header />
            <SEO
                title={localize('Online trading platform | Forex, commodities and indices')}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
            />
            <Hero />
            <Footer />
        </>
    )
}

export default WithIntl()(Amp)
