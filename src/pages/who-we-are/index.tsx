import React, { ReactNode } from 'react'
import styled from 'styled-components'
import MakeTrading from './_MakeTrading'
import Hero from './components/_hero'
import {
    OurValues,
    OurPrinciples,
    OurLeadership,
    AboutUsBanner,
    DerivNumbers,
    OurOffices,
    ImageMarquee,
} from './_lazy-load'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import SkeletonLoader from 'components/custom/SkeletonLoader'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'

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
const target1 = '#start-separator'
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7,
}

const lazy_components: ReactNode = (
    <>
        <OurValues fallback={<SkeletonLoader />} />
        <EndSeparator />
        <OurPrinciples fallback={<SkeletonLoader />} />
        <OurLeadership fallback={<SkeletonLoader />} />
        <DerivNumbers fallback={<SkeletonLoader />} />
        <ImageMarquee fallback={<SkeletonLoader />} />
        <OurOffices fallback={<SkeletonLoader />} />
        <AboutUsBanner fallback={<SkeletonLoader />} />
    </>
)

const AboutUs = () => {
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
            <StartSeparator id="start-separator" />
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(AboutUs)
