import React from 'react'
import styled from 'styled-components'
// import { graphql, useStaticQuery } from 'gatsby'
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

// const query = graphql`
//     query Hero {
//         whoWeArePage(locale: "all") {
//             data {
//                 attributes {
//                     hero {
//                         header
//                         sub_header
//                         first_paragraph
//                         second_paragraph
//                         third_paragraph
//                         hero_image {
//                             data {
//                                 attributes {
//                                     url
//                                 }
//                             }
//                         }
//                     }
//                     our_values {
//                         header
//                         values {
//                             header
//                             sub_header
//                             image {
//                                 data {
//                                     attributes {
//                                         url
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     our_principles {
//                         header
//                         our_principles {
//                             header
//                             sub_header
//                         }
//                         button {
//                             link_name
//                             link_url
//                         }
//                     }
//                     our_lidership {
//                         Managers {
//                             name
//                             role
//                             link_url
//                             photo {
//                                 data {
//                                     attributes {
//                                         url
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     deriv_in_numbers {
//                         header
//                         sub_header
//                         numbers {
//                             description
//                             number
//                         }
//                     }
//                     slider {
//                         slider_media {
//                             data {
//                                 attributes {
//                                     url
//                                 }
//                             }
//                         }
//                     }
//                     our_locations {
//                         header
//                         world_map {
//                             data {
//                                 attributes {
//                                     url
//                                 }
//                             }
//                         }
//                         location {
//                             country_city
//                         }
//                         numbers {
//                             description
//                             number
//                         }
//                     }
//                     banner {
//                         banner {
//                             header
//                             sub_header
//                             image {
//                                 data {
//                                     attributes {
//                                         url
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

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
    // useStaticQuery(query)
    // console.log(query)
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
