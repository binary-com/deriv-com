import React from 'react'
import styled from 'styled-components'
import { ContactWays } from './_contact-ways'
import { Offices } from './_offices'
import { Affiliates } from './_affiliates'
import { Header, Text } from 'components/elements/typography'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

const HeroWrapper = styled.section`
    width: 100%;
    background-color: var(--color-white);
    padding: 8rem;

    * {
        text-align: center;
    }
`

const StyledText = styled(Text)`
    max-width: 63.4rem;
    margin: 1.6rem auto 0;
`

const ContactUs = () => {
    return (
        <Layout>
            <SEO
                description={localize(
                    'Have any query or need assistance, check out the details to call our international help desk and our email ID. Feel free to contact us anytime!',
                )}
                title={localize('Contact Us | Online Trading')}
            />
            <HeroWrapper>
                <Header as="h1">{localize('Contact us')}</Header>
                <StyledText align="center" secondary>
                    {localize(
                        'Got questions, bug reports, feedback, or feature requests? Here are some ways to get in touch with us.',
                    )}
                </StyledText>
            </HeroWrapper>
            <ContactWays />
            <Offices />
            <Affiliates />
        </Layout>
    )
}

export default WithIntl()(ContactUs)
