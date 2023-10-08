import React, { useEffect } from 'react'
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
    EmployerAwards,
} from './_lazy-load'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { TGatsbyHead } from 'features/types'
import useScrollToElement from 'features/hooks/use-scroll-to-element'
import { getLocationHash, isBrowser } from 'common/utility'

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
    const clickToScrollHandler = useScrollToElement('investors-in-people', -100)
    const pathname_hash = getLocationHash()
    useEffect(() => {
        setTimeout(() => {
            pathname_hash?.includes('investors-in-people') && clickToScrollHandler()
        }, 1500)
    }, [pathname_hash])
    return (
        <Layout>
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
            <EmployerAwards />
            <AboutUsBanner />
        </Layout>
    )
}

export default WithIntl()(AboutUs)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Who we are | An Online Trading Platform | Deriv.com_t_"
        description="_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_"
        pageContext={pageContext}
    />
)
