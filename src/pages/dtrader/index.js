import React from 'react'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import Experience from './_experience'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import Signup, { Appearances } from 'components/custom/signup'

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
            <OtherPlatform exclude="dtrader" />
            <Signup appearance={Appearances.public}></Signup>
        </Layout>
    )
}

export default WithIntl()(Dtrader)
