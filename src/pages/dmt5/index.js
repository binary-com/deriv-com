import React from 'react'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Experience from './_experience.js'
import Trading from './_trading.js'
import Layout from 'components/layout/layout'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO, Show } from 'components/containers'
import { localize, WithIntl } from 'components/localization'
import Signup, { Appearances } from 'components/custom/signup'

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
            <OtherPlatform exclude="dmt5" />
            <Signup appearance={Appearances.public}></Signup>
        </Layout>
    )
}

export default WithIntl()(DMT5)
