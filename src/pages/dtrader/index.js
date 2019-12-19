import React from 'react'
import styled from 'styled-components'
import Hero from './_hero.js'
import Numbers from './_numbers.js'
import HowItWorks from './_how-it-works.js'
import Trading from './_trading.js'
import Experience from './_experience'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { Show, SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const PlatformContainer = styled.div`
    padding: 8rem 0;
`
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
            <PlatformContainer>
                <OtherPlatform exclude="dtrader" />
            </PlatformContainer>
        </Layout>
    )
}

export default WithIntl()(Dtrader)
