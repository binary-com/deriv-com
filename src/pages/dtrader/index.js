import React from 'react'
import { localize } from 'components/localization'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Show from 'components/containers/show'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import Experience from './_experience'
import OtherPlatform from './_other-platform.js'

const Dtrader = () => {
    return (
        <Layout>
            <SEO title={localize('Dtrader')} />
            <Hero />
            <Show.Desktop>
                <Numbers />
            </Show.Desktop>
            <HowItWorks />
            <Trading />
            <Experience />
            <OtherPlatform />
        </Layout>
    )
}

export default Dtrader
