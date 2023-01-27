import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from "gatsby";
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

const query = graphql`
    query MyQuery {
        allStrapiMenusMenu(filter: { title: { eq: "Who we are" } }) {
            edges {
                node {
                    items {
                        header
                        subheader
                        link_name
                        link_url
                        first_descr
                        second_descr
                        third_descr
                        first_descr_part_one
                        first_descr_part_two
                        second_descr_part_one
                        second_descr_part_two
                        third_descr_part_one
                        third_descr_part_two
                        fourth_descr_part_one
                        fourth_descr_part_two
                    }
                }
            }
        }
    }
`

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
    const strapiQuery = useStaticQuery(query)
    const data = strapiQuery.allStrapiMenusMenu.edges[0].node

    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize('Who we are | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade.',
                )}
            />
            <Hero strapiData={data.items[6] }/>
            <MakeTrading strapiData={data.items[1]} />
            <StartSeparator />
            <OurValues strapiData={data.items[2]} />
            <EndSeparator />
            <OurPrinciples strapiData={data.items[4]} />
            <OurLeadership />
            <DerivNumbers strapiData={data.items[3]} />
            <ImageMarquee />
            <OurOffices strapiData={data.items[5]} />
            <AboutUsBanner />
        </Layout>
    )
}

export default WithIntl()(AboutUs)
