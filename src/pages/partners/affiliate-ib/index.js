import React from 'react'
import styled from 'styled-components'
import Hero from './_hero.js'
import WhyUs from './_why-us.js'
import WhoCanAplly from './_who-can-apply.js'
import DerivAffiliateProgramme from './_deriv-affiliate-programme'
import DerivIBProgramme from './_deriv-ib-programme.js'
import MoreReason from './_more-reason.js'
import Faq from './_faq'
import CTA from './_partner-cta'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'
import Layout from 'components/layout/layout'
import { SectionContainer, Container, SEO } from 'components/containers'
import DNumber from 'components/custom/_dnumbers.js'
import { localize, Localize, WithIntl } from 'components/localization'
import device from 'themes/device'
import { affiliate_signup_url } from 'common/utility'

const StyledHeader = styled(Header)`
    width: 100%;
    max-width: 70rem;
    margin-bottom: 4rem;
    @media ${device.tabletL} {
        font-size: var(--text-size-xl);
    }
`
const items = [
    { title: '47K+', subtitle: <Localize translate_text="members" /> },
    { title: '$14M+', subtitle: <Localize translate_text="paid out" /> },
    { title: '150+', subtitle: <Localize translate_text="countries" /> },
    { title: '1M+', subtitle: <Localize translate_text="clients" /> },
]

const why_partner_with_us_items = [
    {
        title: <Localize translate_text="Multiple income opportunities and generous commissions" />,
        subtitle: (
            <Localize translate_text="Start off as an affiliate and get ensuing access to our IB programme. Earn commission for as long as your referred clients keep trading." />
        ),
        image_name: 'multiple_income_opportunities',
        image_alt: <Localize translate_text="Multiple income opportunities" />,
    },
    {
        title: <Localize translate_text="Zero charges with prompt monthly and daily payouts" />,
        subtitle: (
            <Localize translate_text="All Deriv partnership programmes are free. Get your affiliate commissions paid to your method of choice every month and IB commissions paid to your DMT5 account daily." />
        ),
        image_name: 'daily_ib_commission',
        image_alt: <Localize translate_text="Daily IB commission" />,
    },
    {
        title: (
            <Localize translate_text="Optimise conversions with great user experience and creative support" />
        ),
        subtitle: (
            <Localize translate_text="We’ve designed a customer-centric and intuitive trading experience for Deriv that’s optimised to convert visitors into clients. We’ll also provide you with the tools and creative materials you need to drive traffic to Deriv." />
        ),
        image_name: 'marketing_material',
        image_alt: <Localize translate_text="Marketing material" />,
    },
]
const AffiliateIb = () => {
    return (
        <Layout type="partners" margin_top="10rem">
            <SEO
                title={localize('Affiliate and IB programme | Deriv')}
                description={localize(
                    'Join Deriv’s affiliate and IB programmes and get a chance to be a partner with a trusted online trading provider.',
                )}
            />
            <Hero>
                <StyledHeader as="h1" color="white" align="center" lh="1.25">
                    {localize('Partner with a trusted online trading provider')}
                </StyledHeader>
                <LinkButton
                    to={affiliate_signup_url}
                    external="true"
                    target="_blank"
                    is_affiliate_link
                    secondary
                >
                    {localize('Sign up as our affiliate & IB')}
                </LinkButton>
            </Hero>
            <SectionContainer padding="8rem 0 4rem">
                <Container direction="column">
                    <Header as="h4" weight="500" align="center">
                        {localize(
                            'Earn 45% lifetime commission with an online trading provider that enables anyone to trade on popular financial markets with the utmost convenience. Deriv Group Ltd - the owner of Binary.com and Deriv.com - has a proven track record of running successful referral programmes with prompt payouts.',
                        )}
                    </Header>
                    <DNumber items={items} justify="space-around" />
                </Container>
            </SectionContainer>
            <DerivAffiliateProgramme />
            <DerivIBProgramme />
            <WhyUs items={why_partner_with_us_items} />
            <WhoCanAplly />
            <MoreReason />
            <Faq />
            <CTA />
        </Layout>
    )
}

export default WithIntl()(AffiliateIb)
