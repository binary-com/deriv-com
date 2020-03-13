import React from 'react'
import {
    ItemContainer,
    HeaderPrimary,
    TextPrimary,
    TextSecondary,
    TextList,
    StyledLink,
    StyledUl,
    LocalizedLinkText,
} from '../_faq-data'
import Partner from 'common/partner'
import { localize, Localize } from 'components/localization'
import { Header, Text } from 'components/elements'

const General = (
    <ItemContainer>
        <Header as="h4">{localize('What is the Deriv Affiliate Programme?')}</Header>
        <TextPrimary>
            {localize(
                'The Deriv Affiliate Programme is an exciting partnership programme where you benefit from bringing in new clients to trade on our DTrader and DBot platforms.',
            )}
        </TextPrimary>
        <TextSecondary>
            {localize(
                'As an affiliate, you’ll advertise our products and services to your audience, including our leading-edge DTrader and DBot trading platforms. After they sign up and start trading with real money, you’ll earn commissions from their trades.',
            )}
        </TextSecondary>
        <TextSecondary>
            {localize(
                'We offer a complete trading experience tailored to the needs of an exceptionally wide range of traders. New traders can learn about trading and practise trading risk-free with a demo account. Seasoned traders can take advantage of the wide range of markets, trade conditions, and analysis tools we offer.',
            )}
        </TextSecondary>
        <HeaderPrimary>{localize('Who can apply as a Deriv affiliate?')}</HeaderPrimary>
        <StyledUl>
            <li>
                <TextList>{localize('Trading experts')}</TextList>
            </li>

            <Text>
                {localize(
                    'Provides expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media.',
                )}
            </Text>

            <li>
                <TextList>{localize('Software developers')}</TextList>
            </li>

            <Text>
                {localize(
                    'Develops web, desktop, and mobile applications. Also has extensive experience working with APIs.',
                )}
            </Text>

            <li>
                <TextList>{localize('Community managers')}</TextList>
            </li>

            <Text>
                {localize(
                    'Develops web, desktop, and mobile applications. Also has extensive experience working with APIs.',
                )}
            </Text>
        </StyledUl>
        <HeaderPrimary>{localize('Why should I become a Deriv affiliate?')}</HeaderPrimary>
        <TextPrimary>
            {localize(
                'Deriv is a customer-centric online trading experience, created by Binary.com. Backed by over 20 years of experience and award-winning innovation, we’ve reimagined the online trading experience from the ground up so that anyone can easily start trading.',
            )}
        </TextPrimary>
        <HeaderPrimary>
            {localize('Are there any fees I need to pay to join your affiliate programme?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize('Not at all. Joining our affiliate programme is completely free.')}
        </TextPrimary>
        <HeaderPrimary>{localize('What does ‘referred client’ mean?')}</HeaderPrimary>
        <TextPrimary>
            {localize(
                'A referred client is someone who has clicked on your unique affiliate link, signed up with Deriv, and deposited money into their Deriv account. They must be aged 18 years and above and have not previously been a Deriv or Binary.com customer.',
            )}
        </TextPrimary>
        <HeaderPrimary>{localize('Who can sign up as a Deriv client?')}</HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="Anyone aged 18 years and above who isn’t a resident of a restricted country can become a Deriv client.  You can find the list of restricted countries in our <0>terms and conditions</0>."
                components={[<LocalizedLinkText to="/terms-and-conditions/" key={0} />]}
            />
        </TextPrimary>
    </ItemContainer>
)
const AccountManagement = (
    <ItemContainer>
        <Header as="h4">{localize('How can I sign up as a Deriv affiliate?')}</Header>
        <TextPrimary>
            <Localize
                translate_text="All you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful."
                components={[
                    <StyledLink
                        href={Partner.signup_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </TextPrimary>
        <HeaderPrimary>{localize('I forgot my password. What should I do?')}</HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="Don’t worry, you can easily <0>reset your password</0>."
                components={[<LocalizedLinkText to="/reset-password/" key={0} />]}
            />
        </TextPrimary>
        <HeaderPrimary>{localize('How can I change my payment method?')}</HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="Log in to your Deriv affiliate account and go to <0>Finances</0> > <0>Payment instructions</0>."
                components={[<strong key={0} />]}
            />
        </TextPrimary>
        <HeaderPrimary>
            {localize('How and when will I receive my Deriv affiliate commissions?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'We’ll deposit your commissions directly into your account as soon as practicable after the 15th of every month.',
            )}
        </TextPrimary>
        <HeaderPrimary>
            {localize('How can I check how much commission I have earned?')}
        </HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="Log in to your Deriv affiliate account and go to <0>Reports</0> > <0>Detailed activity report</0>."
                components={[<strong key={0} />]}
            />
        </TextPrimary>
        <HeaderPrimary>
            {localize('What kind of reports can I generate from my affiliate account?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'You can generate all kinds of insightful reports to track and optimise your campaigns, such as the',
            )}
        </TextPrimary>
        <StyledUl>
            <li>
                <TextPrimary>
                    <Localize
                        translate_text="<0>Hits & Impression</0> report: Displays your hit and clickthrough rates"
                        components={[<strong key={0} />]}
                    />
                </TextPrimary>
            </li>

            <li>
                <TextPrimary>
                    <Localize
                        translate_text="<0>Countries</0> report: Displays a list of countries where your clicks are coming from"
                        components={[<strong key={0} />]}
                    />
                </TextPrimary>
            </li>

            <li>
                <TextPrimary>
                    <Localize
                        translate_text="<0>My Players</0> report: Displays a list of clients with their IDs and signup date"
                        components={[<strong key={0} />]}
                    />
                </TextPrimary>
            </li>
        </StyledUl>
        <HeaderPrimary>
            {localize(
                'Can I offer prospective clients an incentive to sign up to Deriv using my unique affiliate link?',
            )}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'We don’t allow the use of unauthorised incentives, gifts, and payments to encourage client signups. If we find out that you did this, we may withhold your affiliate commissions. However, if you have a specific incentive in mind, you may contact your account manager to discuss it further.',
            )}
        </TextPrimary>
    </ItemContainer>
)

const ReferralTools = (
    <ItemContainer>
        <Header as="h4">{localize('What kind of referral tools do you offer?')}</Header>
        <TextPrimary>
            <Localize
                translate_text="We have a tried-and-tested selection of referral tools, including banners, videos, reviews, and text ads. If you’d like certain tools to be customised to your site requirements, please contact your account manager at <0>affiliates@deriv.com</0>."
                components={[<StyledLink href="mailto:affiliates@deriv.com" key={0} />]}
            />
        </TextPrimary>
    </ItemContainer>
)

export { General, AccountManagement, ReferralTools }
