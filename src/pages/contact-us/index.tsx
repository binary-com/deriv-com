import React from 'react'
import styled from 'styled-components'
import Loadable from '@loadable/component'
import ContactWays from './_contact-ways'
import device from 'themes/device'
import { useOpenLiveChat } from 'components/hooks/use-open-live-chat-redirection'
import { Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'
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

const ContactUs = () => {
    /* redirect livechat for en to open live chat popup */
    /* set true to allow redirection for other lang also*/
    useOpenLiveChat(true)

    return (
        <Layout>
            <SEO
                title={localize('Contact Us | Online Trading | Deriv.com')}
                description={localize(
                    'Have any query or need assistance, check out the details to call our international help desk and our email ID. Feel free to contact us anytime!',
                )}
                has_organization_schema
            />
            <SectionContainer tablet={{ p: '40px 0' }}>
                <HeroWrapper fd="column">
                    <Header align="center" as="h1" type="display-title">
                        {localize('Contact us')}
                    </Header>
                    <StyledText align="center" size="var(--text-size-sm)">
                        {localize("Got questions? Here's how to get answers.")}
                    </StyledText>
                </HeroWrapper>
            </SectionContainer>
            <ContactWays />
            <Offices />
            <Affiliates />
        </Layout>
    )
}

export default WithIntl()(ContactUs)
