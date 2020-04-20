import React from 'react'
import PropTypes from 'prop-types'
import Header from './homepage/_header'
import Footer from './homepage/_footer'
import Hero from './homepage/_hero'
import Trade from './homepage/_trade'
import Markets from './homepage/_markets'
import SimpleSteps from './homepage/_simple-steps'
import OurClients from './homepage/_our-clients'
import { UrlProvider } from './homepage/_context'
import ScrollTop from './components/scroll-top'
import { SEO } from 'components/containers'
import { WithIntl, localize } from 'components/localization'
import { isBrowser } from 'common/utility'

const Amp = ({ language }) => {
    const [url_search, setUrlSearch] = React.useState('')
    React.useEffect(() => {
        if (isBrowser()) {
            setUrlSearch(window.location.search)
        }
    }, [])
    return (
        <UrlProvider value={{ language, url_search }}>
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
        </UrlProvider>
    )
}

Amp.propTypes = {
    language: PropTypes.string,
}
export default WithIntl()(Amp)
