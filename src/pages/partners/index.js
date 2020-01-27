import React from 'react'
import WhyUs from './_why-us.js'
import WhoCanAplly from './_who-can-apply.js'
import DerivAffiliateProgramme from './_deriv-affiliate-programme'
import { Header } from 'components/elements/typography'
import Layout from 'components/layout/layout'
import { SectionContainer, Container } from 'components/containers'
import DNumber from 'components/custom/_dnumbers.js'
import { localize, WithIntl } from 'components/localization'

const items = [
    { title: '47K+', subtitle: localize('members') },
    { title: '$14M+', subtitle: localize('paid out') },
    { title: '$150+', subtitle: localize('countries') },
    { title: '$1M+', subtitle: localize('clients') },
]

const why_partner_with_us_items = [
    {
        title: localize('Multiple income opportunities and generous commissions'),
        subtitle: localize(
            'Start off as an affiliate and get ensuing access to our IB programme. Earn up to 45% commission for as long as your referred clients keep trading.',
        ),
        image_name: 'multiple-income-opportunities.png',
        image_alt: localize('Multiple income opportunities'),
    },
    {
        title: localize('No charges. No hidden fees. Prompt monthly and daily payment.'),
        subtitle: localize(
            'All Deriv partnership programmes are free and always will be. Get your affiliate commissions paid to your method of choice every month and IB commissions paid to your DMT5 account daily.',
        ),
        image_name: 'daily-ib-commission.png',
        image_alt: localize('Daily IB commission'),
    },
    {
        title: localize('Optimise conversions with great user experience and creative support'),
        subtitle: localize(
            'We’ve designed the most customer-centric and intuitive trading experience for Deriv that’s optimised to convert visitors into clients. We’ll also provide you with all the tools and creative materials you need to drive traffic to Deriv.',
        ),
        image_name: 'marketing-material.png',
        image_alt: localize('Marketing material'),
    },
]
const Partners = () => {
    return (
        <Layout>
            <SectionContainer>
                <Container direction='column'>
                    <Header as='h4' weight='500' align='center'>
                        {localize('Earn up to 45% lifetime commission with an online trading provider that enables anyone to trade on any financial market with the utmost convenience. Binary Group –– the owner of Binary.com and Deriv –– has a proven track record of running successful referral programmes with prompt payouts.')}
                    </Header>
                    <DNumber items={items} justify="space-around" />
                    <WhyUs items={why_partner_with_us_items} />
                    <WhoCanAplly />
                </Container>
                <DerivAffiliateProgramme />
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Partners)