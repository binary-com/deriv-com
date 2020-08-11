import React from 'react'
import styled from 'styled-components'
import ContactWays from './_contact-ways'
import { Offices } from './_offices'
import { Affiliates } from './_affiliates'
import device from 'themes/device'
import { Header, Text } from 'components/elements/typography'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const HeroWrapper = styled.section`
    width: 100%;
    padding: 8rem;

    * {
        text-align: center;
    }

    @media ${device.tabletL} {
        padding: 5rem 2rem;

        h1 {
            font-size: 4.5rem;
            margin-bottom: 2rem;
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
            <HeroWrapper>
                <Header as="h1">{localize('Contact us')}</Header>
                <StyledText align="center" size="var(--text-size-sm)">
                    {localize("Got questions? Here's how to get answers")}
                </StyledText>
            </HeroWrapper>
            <ContactWays />
            <Offices />
            <Affiliates />
        </Layout>
    )
}

export default WithIntl()(ContactUs)
