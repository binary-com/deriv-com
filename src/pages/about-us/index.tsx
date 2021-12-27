import React from 'react'
import styled from 'styled-components'
import MakeTrading from './_MakeTrading'
import OurValues from './_OurValues'
import OurPrinciples from './_OurPrinciples'
import Hero from './components/_hero'
import OurLeadership from './_OurLeadership'
import DerivNumbers from './_DerivNumbers'
import EmblaCarousel from './carousel/_Carousel'
import AboutUsBanner from './_AboutUsBanner'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'

const StartSeparator = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid transparent;
    border-right: 100vw solid var(--color-grey-30);
    @media ${device.tablet} {
        border-top: 40px solid transparent;
    }
`

const EndSeparator = styled.div`
    width: 0;
    height: 0;
    border-left: 100vw solid var(--color-grey-30);
    border-bottom: 120px solid transparent;
    @media ${device.tablet} {
        border-bottom: 40px solid transparent;
    }
`

const AboutUs = (): React.ReactNode => {
    return (
        <Layout type="about-us" margin_top="0">
            <SEO
                // title and description from story page, needs new?
                title={localize('About Us | An Online Trading Platform | Deriv.com')}
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
            <AboutUsBanner />
            <DerivNumbers />
            <EmblaCarousel />
        </Layout>
    )
}

export default WithIntl()(AboutUs)
