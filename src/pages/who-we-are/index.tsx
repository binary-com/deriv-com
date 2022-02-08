import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import MakeTrading from './_MakeTrading'
import Hero from './components/_hero'
import ImageMarquee from './carousel/_ImageMarquee'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const OurValues = Loadable(() => import('./_OurValues'))
const OurPrinciples = Loadable(() => import('./_OurPrinciples'))
const OurLeadership = Loadable(() => import('./_OurLeadership'))
const AboutUsBanner = Loadable(() => import('./_AboutUsBanner'))
const DerivNumbers = Loadable(() => import('./_DerivNumbers'))
const OurOffices = Loadable(() => import('./_OurOffices'))

const StartSeparator = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid transparent;
    border-right: 99vw solid var(--color-grey-30);
    @media ${device.tablet} {
        border-top: 40px solid transparent;
    }
`

const EndSeparator = styled.div`
    width: 0;
    height: 0;
    border-left: 99vw solid var(--color-grey-30);
    border-bottom: 120px solid transparent;
    @media ${device.tablet} {
        border-bottom: 40px solid transparent;
    }
`

const AboutUs = () => {
    return (
        <Layout type="about-us" margin_top="0">
            <SEO
                title={localize('Who we are | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv.com - A Binary.com brand, is a pioneer and award-winning online trading platform in the trading market.',
                )}
            />
            <Hero />
            <MakeTrading />
            <StartSeparator />
            <OurValues />
            <EndSeparator />
            <OurPrinciples />
            <OurLeadership />
            <DerivNumbers />
            <ImageMarquee />
            <OurOffices />
            <AboutUsBanner />
        </Layout>
    )
}

export default WithIntl()(AboutUs)
