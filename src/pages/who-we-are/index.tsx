import React, { ReactNode } from 'react'
import styled from 'styled-components'
import MakeTrading from './_MakeTrading'
import Hero from './components/_hero'
import ImageMarquee from './carousel/_ImageMarquee'
import {
    OurValues,
    OurPrinciples,
    OurLeadership,
    AboutUsBanner,
    DerivNumbers,
    OurOffices,
} from './_lazy-load'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
import TRADE_DUMMY from 'images/common/trade-type-dummy.png'
import PLATFORM_DUMMY from 'images/common/platforms-dummy.png'

const StartSeparator = styled.div`
    width: 0;
    height: 0;
    border-top: 120px solid transparent;
    border-right: 99vw solid var(--color-grey-30);
    @media ${device.tabletL} {
        border-top: 40px solid transparent;
    }
`
const EndSeparator = styled.div`
    width: 0;
    height: 0;
    border-left: 99vw solid var(--color-grey-30);
    border-bottom: 120px solid transparent;
    @media ${device.tabletL} {
        border-bottom: 40px solid transparent;
    }
`
const AboutUs = () => {
    const target1 = '#simti'
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.7,
    }

    const lazy_components: ReactNode = (
        <>
            <OurValues
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="our-values" />
                    </div>
                }
            />
            <EndSeparator />
            <OurPrinciples
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="our-values" />
                    </div>
                }
            />
            <OurLeadership
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="our-values" />
                    </div>
                }
            />
            <DerivNumbers
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="our-values" />
                    </div>
                }
            />
            <ImageMarquee />
            <OurOffices
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="our-offices" />
                    </div>
                }
            />
            <AboutUsBanner
                fallback={
                    <div>
                        <img src={PLATFORM_DUMMY} style={{ width: '95%' }} alt="about-us-banner" />
                    </div>
                }
            />
        </>
    )

    const lazyTemplate = useHandleLazyLoad(lazy_components, target1, options)

    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize('Who we are | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade.',
                )}
            />
            <Hero />
            <MakeTrading />
            <StartSeparator id="simti" />
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(AboutUs)
