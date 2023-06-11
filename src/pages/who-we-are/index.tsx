import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import MakeTrading from './components/_make-trading'
import Hero from './components/_hero'
import {
    DerivNumbers,
    OurLeadership,
    OurOffices,
    OurPrinciples,
    OurValues,
    WhoWeAreBanner,
} from './_lazy-load'
import ImageMarquee from './components/_image-marquee'
import { whoWeAreQuery } from './_who-we-are-query'
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

const WhoWeAre = () => {
    const { strapiWhoWeArePage } = useStaticQuery(whoWeAreQuery)

    const {
        hero,
        our_values,
        our_principles,
        our_leadership,
        deriv_in_numbers,
        slider_medias,
        our_locations,
        banner,
    } = strapiWhoWeArePage || {}

    return (
        <Layout>
            <SEO
                title={localize('_t_Who we are | An Online Trading Platform | Deriv.com_t_')}
                description={localize(
                    '_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_',
                )}
            />
            <Hero hero={hero} />
            <MakeTrading hero={hero} />
            <StartSeparator />
            <OurValues our_values={our_values} />
            <EndSeparator />
            <OurPrinciples our_principles={our_principles} />
            <OurLeadership our_leadership={our_leadership} />
            <DerivNumbers deriv_in_numbers={deriv_in_numbers} />
            <ImageMarquee slider_medias={slider_medias} />
            <OurOffices our_locations={our_locations} />
            <WhoWeAreBanner banner={banner} />
        </Layout>
    )
}

export default WithIntl()(WhoWeAre)
