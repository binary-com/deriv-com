import React from 'react'
import Header from './homepage/_header'
import Footer from './homepage/_footer'
import Hero from './homepage/_hero'
import Trade from './homepage/_trade'
import Markets from './homepage/_markets'
import SimpleSteps from './homepage/_simple-steps'
import OurClients from './homepage/_our-clients'
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
                no_index
            />
            <Hero />
            <Trade />
            <Markets />
            <SimpleSteps />
            <OurClients />
            <Footer />
        </>
    )
}

export default WithIntl()(Amp)
