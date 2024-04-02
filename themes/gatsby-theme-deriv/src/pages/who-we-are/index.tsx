import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { TWhoWeAre } from './_types'
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
import { TGatsbyHead } from 'features/types'
import AwardBanner from 'features/components/templates/banners/award-banners'
import AwardBannerEu from 'features/components/templates/banners/award-banners/award-banner-eu'
import device from 'themes/device'
import { SEO } from 'components/containers'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

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

type AboutUsProps = TGatsbyHead & TWhoWeAre

const AboutUs = ({ data, pageContext }: AboutUsProps) => {
    const {region} = pageContext
    const {
        hero,
        our_values,
        our_principles,
        our_leadership,
        deriv_in_numbers,
        slider_medias,
        our_locations,
        banner,
    } = data?.strapiWhoWeArePage || {}

    return (
        <Layout region={region}>
            <Hero hero={hero} />
            <MakeTrading hero={hero} />
            <StartSeparator />
            <OurValues our_values={our_values} />
            <EndSeparator />
            <AwardBannerEu
                title="_t_Our certifications_t_"
                subtitle="_t_We are proud to be recognised as a Great Place to Work™ and certified Platinum in Investors in People._t_"
            />
            <OurPrinciples our_principles={our_principles} />
            <AwardBanner title="_t_Our awards_t_" />
            <OurLeadership our_leadership={our_leadership} />
            <DerivNumbers deriv_in_numbers={deriv_in_numbers} />
            <ImageMarquee slider_medias={slider_medias} />
            <OurOffices our_locations={our_locations} />
            <AboutUsBanner banner={banner} />
        </Layout>
    )
}

export const query = graphql`
    query {
        strapiWhoWeArePage {
            hero {
                header
                sub_header
                first_paragraph
                second_paragraph
                third_paragraph
                hero_image {
                    localFile {
                        publicURL
                    }
                }
                bg_desktop {
                    localFile {
                        publicURL
                    }
                }
                bg_mobile {
                    localFile {
                        publicURL
                    }
                }
            }
            our_values {
                header
                values {
                    header
                    sub_header
                    image {
                        localFile {
                            publicURL
                        }
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
                header
                leaders {
                    name
                    role
                    link_url
                    photo {
                        url
                        localFile {
                            publicURL
                        }
                    }
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
            our_locations {
                header
                numbers {
                    description
                    number
                }
                locations {
                    country_city
                    link_url
                }
                earth {
                    localFile {
                        publicURL
                    }
                }
                earth_mobile {
                    localFile {
                        publicURL
                    }
                }
            }
            banner {
                header
                sub_header
                link_name
                link_url
                bg_desktop {
                    localFile {
                        publicURL
                    }
                }
                bg_desktop_rtl {
                    localFile {
                        url
                        publicURL
                    }
                }
                bg_mobile {
                    localFile {
                        url
                        publicURL
                    }
                }
                bg_mobile_rtl {
                    localFile {
                        url
                        publicURL
                    }
                }
            }
            slider_medias {
                slider_1 {
                    localFile {
                        publicURL
                    }
                }
                slider_2 {
                    localFile {
                        publicURL
                    }
                }
                slider_3 {
                    localFile {
                        publicURL
                    }
                }
                slider_4 {
                    localFile {
                        publicURL
                    }
                }
                slider_5 {
                    localFile {
                        publicURL
                    }
                }
                slider_6 {
                    localFile {
                        publicURL
                    }
                }
            }
        }
    }
`

export default WithIntl()(AboutUs)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Who we are | An Online Trading Platform | Deriv.com_t_"
        description="_t_Deriv is a pioneering and award-winning online trading platform that offers a wide selection of derivatives for anyone, anywhere to trade._t_"
        pageContext={pageContext}
    />
)
