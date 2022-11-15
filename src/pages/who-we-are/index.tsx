import React, { useEffect, useState } from 'react'
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
    const [content, setContent] = useState({})
    useEffect(() => {
        fetch('https://deriv-com-content.herokuapp.com/api/menus/?nested&populate=*')
            .then((response) => response.json())
            .then((data) => {
                console.log('data', data.data[1])
                setContent(data.data[1])
            })
    }, [])
    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize('Who we are | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade.',
                )}
            />
            <Hero header={content?.title} />
            <MakeTrading query={content?.items?.[0].children[0]} />
            <StartSeparator />
            <OurValues query={content?.items?.[0].children[1]} />
            <EndSeparator />
            <OurPrinciples query={content?.items?.[0].children[2]} />
            <OurLeadership />
            <DerivNumbers query={content?.items?.[0].children[3]} />
            <ImageMarquee />
            <OurOffices quer={content?.items?.[0].children[4]} />
            <AboutUsBanner />
        </Layout>
    )
}

export default WithIntl()(AboutUs)
