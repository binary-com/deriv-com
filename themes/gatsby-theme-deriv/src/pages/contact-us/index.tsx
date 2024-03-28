import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Loadable from '@loadable/component'
import ContactWays from './_contact-ways'
import { TContactUs } from './_types'
import device from 'themes/device'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { Header, Text } from 'components/elements'
import { Localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'
import { TGatsbyHead } from 'features/types'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

const Offices = Loadable(() => import('./_offices'))
const Affiliates = Loadable(() => import('./_affiliates'))

const HeroWrapper = styled(Container)`
    @media ${device.tablet} {
        ${Header} {
            font-size: 40px;
            margin-bottom: 16px;
        }
    }
`

const StyledText = styled(Text)`
    max-width: 63.4rem;
    margin: 1.6rem auto 0;
    font-size: var(--text-size-m);

    @media ${device.tabletL} {
        font-size: var(--text-size-sm);
        margin-top: 0;
    }
`

type ContactUsProps = TContactUs & TGatsbyHead

const ContactUs = ({ data, pageContext }: ContactUsProps) => {
    const {region} = pageContext
    const { hero, support_section, our_offices, office_address, business_partnership } =
        data?.strapiContactUs || {}

    /* redirect livechat for en to open live chat popup */
    /* set true to allow redirection for other lang also*/
    useOpenLiveChat(true)
    const isLiveChat = useThirdPartyFlags('chat.live_chat')

    return (
        <Layout region={region}>
            <SectionContainer tablet={{ p: '40px 0' }}>
                <HeroWrapper fd="column">
                    <Header align="center" as="h1" type="display-title">
                        <Localize translate_text={hero?.header} />
                    </Header>
                    <StyledText align="center" size="var(--text-size-sm)">
                        <Localize translate_text={hero?.sub_header} />
                    </StyledText>
                </HeroWrapper>
            </SectionContainer>
            <ContactWays support_section={support_section} />
            <Offices our_offices={our_offices} office_address={office_address} />
            {isLiveChat && <Affiliates business_partnership={business_partnership} />}
        </Layout>
    )
}

export const query = graphql`
    query {
        strapiContactUs {
            hero {
                header
                sub_header
            }
            support_section {
                header
                sub_header
                image {
                    localFile {
                        publicURL
                    }
                }
                link_title
                link_url
                item_name
                alt_image
                button_type
            }
            our_offices
            office_address {
                continent
                country {
                    country_icon {
                        localFile {
                            publicURL
                        }
                    }
                    country_name
                    map_url
                    map_image {
                        localFile {
                            publicURL
                        }
                    }
                    address
                    city_name
                }
            }
            business_partnership {
                header
                sub_header
                live_chat_title
            }
        }
    }
`

export default WithIntl()(ContactUs)

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_Contact Us | Online Trading | Deriv.com_t_"
        description="_t_Have any query or need assistance, check out the details to call our international help desk and our email ID. Feel free to contact us anytime!_t_"
        has_organization_schema
        pageContext={pageContext}
    />
)
