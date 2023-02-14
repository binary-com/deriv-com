import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
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

const AboutUs = ({ data }: any) => {
    const {
        hero,
        our_values,
        our_principles,
        our_leadership,
        deriv_in_numbers,
        slider,
        our_locations,
        banner,
    } = data?.allStrapiWhoWeArePage.nodes[0] || {}

    return (
        <Layout type="transparent" margin_top="0">
            <SEO
                title={localize('Who we are | An Online Trading Platform | Deriv.com')}
                description={localize(
                    'Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade.',
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
            <ImageMarquee slider={slider} />
            <OurOffices our_locations={our_locations} />
            <AboutUsBanner banner={banner} />
        </Layout>
    )
}
export const query = graphql`
    query ($locale: String!) {
        allStrapiWhoWeArePage(filter: { locale: { eq: $locale } }) {
            nodes {
                hero {
                    header
                    hero_image {
                        url
                    }
                    sub_header
                    first_paragraph
                    second_paragraph
                    third_paragraph
                }
                our_values {
                    header
                    values {
                        header
                        sub_header
                        image {
                            url
                        }
                    }
                }
                our_principles {
                    header
                    principles {
                        header
                        sub_header
                    }
                    button {
                        link_name
                        link_url
                    }
                }
                our_leadership {
                    name
                    role
                    link_url
                    photo {
                        url
                    }
                }
                deriv_in_numbers {
                    header
                    sub_header
                    numbers {
                        description
                        number
                    }
                }
                slider {
                    url
                }
                our_locations {
                    header
                    world_map {
                        url
                    }
                    numbers {
                        description
                        number
                    }
                    locations {
                        country_city
                        link_url
                    }
                }
                banner {
                    header
                    sub_header
                    link_name
                    link_url
                    image {
                        url
                    }
                }
            }
        }
    }
`

export default WithIntl()(AboutUs)
