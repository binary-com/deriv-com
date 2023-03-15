import React, { ReactNode } from 'react'
import styled from 'styled-components'
import lottie from 'lottie-web'
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
import { DotLoader } from 'components/elements'
import device from 'themes/device'
import { SEO , Flex } from 'components/containers'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import { useHandleLazyLoad } from 'components/hooks/use-handle-lazy-load'
import JumpIndicesAnimation from 'lotties/2.json'

const animation_container = React.createRef<HTMLElement>()

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
        <OurValues fallback={<DotLoader />} />
        <EndSeparator />
        <OurPrinciples />
        <OurLeadership />
        <DerivNumbers />
        <ImageMarquee />
        <OurOffices />
        <AboutUsBanner />
    </>
)

const StyledAnimationWrapper = styled(Flex)`
    align-items: center;
    width: 300px;
    height: 300px;
    margin: auto;
`

const AboutUs = () => {
    const lazyTemplate = useHandleLazyLoad(lazy_components, target1, options)
    const animation_container = React.createRef<HTMLElement>()
    React.useEffect(() => {
        const anim = lottie.loadAnimation({
            container: animation_container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: JumpIndicesAnimation,
        })
        return () => anim.destroy()
    }, [])
    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize('_t_Who we are | An Online Trading Platform | Deriv.com_t_')}
                description={localize(
                    '_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_',
                )}
            />
            <Hero />
            <StyledAnimationWrapper ref={animation_container} />
            <MakeTrading />
            <StartSeparator id="start-separator" />
            {lazyTemplate}
        </Layout>
    )
}

export default WithIntl()(AboutUs)
