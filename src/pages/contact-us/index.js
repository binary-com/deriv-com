import React from 'react'
import styled from 'styled-components'
import ContactWays from './_contact-ways'
import { Offices } from './_offices'
import { Affiliates } from './_affiliates'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO, SectionContainer, Container } from 'components/containers'

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
                    <Header align="center" as="h1">
                        {localize('Contact us')}
                    </Header>
                    <StyledText align="center" size="var(--text-size-sm)">
                        {localize("Got questions? Here's how to get answers")}
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
