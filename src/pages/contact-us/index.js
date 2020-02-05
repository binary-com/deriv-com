import React from 'react'
import styled from 'styled-components'
import { NeedHelp } from './_need-help'
import { ContactWays } from './_contact-ways'
import { Offices } from './_offices'
import { Affiliates } from './_affiliates'
import { Header, Text } from 'components/elements/typography'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'
import Signup, { Appearances } from 'components/custom/signup'

const HeroWrapper = styled.section`
    width: 100%;
    background-color: var(--color-white);
    padding: 8rem;

    * {
        text-align: center;
    }
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
                <Header as="h1">{localize('Get in touch')}</Header>
                <Text secondary>
                    {localize(
                        "Questions, bug reports, feedback, feature requests – we're here for it all.",
                    )}
                </Text>
            </HeroWrapper>
            <NeedHelp />
            <ContactWays />
            <Offices />
            <Affiliates />
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(ContactUs)
