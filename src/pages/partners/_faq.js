import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Header, Text, Accordion, AccordionItem } from 'components/elements'

const AccordionWrapper = styled.div`
    max-width: 99.6rem;
    margin: 0 auto;

    div:first-child {
        box-shadow: unset;
    }
`
const ItemContainer = styled(SectionContainer)`
    padding: 4rem 0;
    max-width: 79.2rem;
    float: right;
`

const General = () => (
    <ItemContainer>
        <Header as='h4' margin='0 0 1.6rem 0'>{localize('What is the Deriv Affiliate Programme?')}</Header>
        <Text>{localize('The Deriv Affiliate Programme is an exciting partnership programme where you benefit from bringing in new clients to trade on our DTrader and DBot platforms.')}</Text>
        <Text margin='2rem 0'>{localize('As an affiliate, you’ll advertise our products and services to your audience, including our leading-edge DTrader and DBot trading platforms. After they sign up and start trading with real money, you’ll earn commissions from their trades.')}</Text>
        <Text margin='2rem 0'>{localize('We offer a complete trading experience tailored to the needs of an exceptionally wide range of traders. New traders can learn about trading and practise trading risk-free with a demo account. Seasoned traders can take advantage of the wide range of markets, trade conditions, and analysis tools we offer.')}</Text>
        <Header as='h4' margin='0 0 3.2rem 0'>{localize('Who can apply as a Deriv affiliate?')}</Header>
        <Text weight='bold'><li>{localize('Trading experts')}</li></Text>
        <Text margin='1rem 0 0 0'>{localize('Provides expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media.')}</Text>
        <Text margin='2rem 0 0 0' weight='bold'><li>{localize('Software developers')}</li></Text>
        <Text margin='1rem 0 0 0'>{localize('Develops web, desktop, and mobile applications. Also has extensive experience working with APIs.')}</Text>
        <Text margin='2rem 0 0 0' weight='bold'><li>{localize('Community managers')}</li></Text>
        <Text margin='1rem 0 0 0'>{localize('Develops web, desktop, and mobile applications. Also has extensive experience working with APIs.')}</Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('Why should I become a Deriv affiliate?')}</Header>
        <Text margin='1.6rem 0 0 0'>{localize('Deriv is a customer-centric online trading experience, created by Binary.com. Backed by over 20 years of experience and award-winning innovation, we’ve reimagined the online trading experience from the ground up so that anyone can easily start trading.')}</Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('Are there any fees I need to pay to join your affiliate programme?')}</Header>
        <Text margin='1.6rem 0 0 0'>{localize('Not at all. Joining our affiliate programme is completely free.')}</Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('What does ‘referred client’ mean?')}</Header>
        <Text margin='1.6rem 0 0 0'>{localize('A referred client is someone who has clicked on your unique affiliate link, signed up with Deriv, and deposited money into their Deriv account. They must be aged 18 years and above and have not previously been a Deriv or Binary.com customer.')}</Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('Who can sign up as a Deriv client?')}</Header>
        <Text margin='1.6rem 0 0 0'>
            <Localize
                translate_text="Anyone aged 18 years and above who isn’t a resident of a restricted country can become a Deriv client.  You can find the list of restricted countries in our <0>terms and conditions</0>."
                components={[<span key={0} style={{ color: 'red', fontWeight: 'bold' }} />]}
            /></Text>
    </ItemContainer>
)
const AccountManagement = () => (
    <ItemContainer>
        <Header as='h4'>{localize('How can I sign up as a Deriv affiliate?')}</Header>
        <Text margin='1.6rem 0 0 0'> <Localize
            translate_text="All you need to do is head to the signup page and fill out the <0>application form</    0>. We’ll review your application and get in touch if it’s successful."
            components={[<span key={0} style={{ color: 'red', fontWeight: 'bold' }} />]}
        /></Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('I forgot my password. What should I do?')}</Header>
        <Text><Localize
            translate_text="Don’t worry, you can easily <0>reset your password</0>."
            components={[<span key={0} style={{ color: 'red', fontWeight: 'bold' }} />]}
        /></Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('How can I change my payment method?')}</Header>
        <Text><Localize
            translate_text="Log in to your Deriv affiliate account and go to <0>Finances</0> > <0>Payment instructions</0>."
            components={[<strong key={0} />]}
        /></Text>
        <Header as='h4' margin='3.2rem 0 0 0'>{localize('What kind of reports can I generate from my affiliate account?')}</Header>
        <Text margin='1.6rem 0 0 0'>{localize('You can generate all kinds of insightful reports to track and optimise your campaigns, such as the')}</Text>
        <Text><li><Localize
            translate_text="<0>Hits & Impression</0> report: Displays your hit and clickthrough rates"
            components={[<strong key={0} />]}
        /></li></Text>
    </ItemContainer>
)
const Faq = () => {
    return (
        <SectionContainer>
            <Header font_size='3.6rem' align='center'>{localize('Browse our FAQ')}</Header>
            <Header as='h4' align='center' margin='4rem 0 0 0 ' weight='500'>{localize('Deriv Affiliate Programme')}</Header>
            <AccordionWrapper>
                <Accordion>
                    <AccordionItem header={localize('Pillar 3 disclosures')}>
                        <General />
                    </AccordionItem>
                    <AccordionItem header={localize('Pillar 3 disclosures')}>
                        <AccountManagement />
                    </AccordionItem>
                </Accordion>
            </AccordionWrapper>
        </SectionContainer>
    )
}

export default Faq