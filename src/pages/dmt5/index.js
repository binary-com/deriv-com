import React from 'react'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Experience from './_experience.js'
import OtherPlatform from './_other-platform.js'
import Trading from './_trading.js'
import Layout from 'components/layout/layout'
import SEO from 'components/containers/seo'
import Show from 'components/containers/show'
import { localize, WithIntl } from 'components/localization'

const DMT5 = () => {
    return (
        <Layout>
            <SEO title={localize('DMT5')} />
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

export default WithIntl()(DMT5)
