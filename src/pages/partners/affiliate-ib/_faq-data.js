import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Header, Text, LinkText } from 'components/elements'
import { isBrowser, affiliate_signup_url } from 'common/utility'

const ItemContainer = styled(SectionContainer)`
    padding: 4rem 0;
    max-width: 79rem;
`

const HeaderPrimary = styled(Header)`
    margin-top: 3.2rem;
    font-size: var(--text-size-s);
`

const TextPrimary = styled(Text)`
    margin-top: 1.6rem;
`

const TextSecondary = styled(Text)`
    margin-top: 2rem;
`

const TextList = styled(Text)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
    font-weight: bold;
`

const StyledLink = styled(LinkText)`
    color: var(--color-red);
    font-weight: bold;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
`

const LocalizedLinkText = styled((props) => <LocalizedLink {...props} />)`
    color: var(--color-red);
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const AffiliateGeneral = () => (
    <ItemContainer>
        <Header as="h5">{localize('What is the Deriv Affiliate Programme?')}</Header>
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
                    'Manages an active online community that’s passionate about online trading, investing, or personal finance.',
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
                'A referred client is someone who has clicked on your unique affiliate link, signed up with Deriv, and deposited money into their Deriv account. They must be aged 18 years and above and have not previously been a Deriv or Binary.com client.',
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
const AffiliateAccountManagement = () => (
    <ItemContainer>
        <Header as="h5">{localize('How can I sign up as a Deriv affiliate?')}</Header>
        <TextPrimary>
            <Localize
                translate_text="All you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful."
                components={[
                    <LocalizedLinkText
                        to={affiliate_signup_url}
                        external
                        is_affiliate_link
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
                'Feel free to discuss any incentive plan you have with your account manager. Please remember that we don’t allow unauthorised incentives, gifts, and payments to encourage client signups. If there are any violations, we may withhold commissions.',
            )}
        </TextPrimary>
    </ItemContainer>
)

const AffiliateReferralTools = () => (
    <ItemContainer>
        <Header as="h5">{localize('What kind of referral tools do you offer?')}</Header>
        <TextPrimary>
            <Localize
                translate_text="We have a tried-and-tested selection of referral tools, including banners, videos, reviews, and text ads. If you’d like certain tools to be customised to your site requirements, please contact your account manager at <0>partners@deriv.com</0>."
                components={[<StyledLink href="mailto:partners@deriv.com" key={0} />]}
            />
        </TextPrimary>
    </ItemContainer>
)

const scrollToIb = (e) => {
    e.preventDefault()
    if (isBrowser()) {
        const padding_top = 80
        const offset_top = document.getElementById('deriv-ib').offsetTop - padding_top
        window.scroll({ top: offset_top, behavior: 'smooth' })
    }
}

const IBGeneral = () => (
    <ItemContainer>
        <Header as="h5">{localize('What is the Deriv IB Programme?')}</Header>
        <TextPrimary>
            {localize(
                'The Deriv IB Programme is a partnership where you benefit from referring new clients to trade on our DMT5 platform.',
            )}
        </TextPrimary>
        <HeaderPrimary>
            {localize('How much can I earn from referring new clients to your DMT5 platform?')}
        </HeaderPrimary>
        <TextPrimary>
            <Localize
                translate_text="You’ll earn a fixed commission based on the volume of individual trades purchased by your referred clients. Please refer to our <0>IB commission plan</0> for more info."
                components={[<StyledLink key={0} href="#" onClick={scrollToIb} />]}
            />
        </TextPrimary>
        <HeaderPrimary>
            {localize('How much do I need to pay to join your IB programme?')}
        </HeaderPrimary>
        <TextPrimary>{localize('The Deriv IB Programme is completely free.')}</TextPrimary>
        <HeaderPrimary>
            {localize(
                'Are there any minimum client or volume conditions that I need to meet before I can withdraw my commissions?',
            )}
        </HeaderPrimary>
        <TextPrimary>
            {localize('There is absolutely no requirement to withdraw your IB commissions.')}
        </TextPrimary>
    </ItemContainer>
)

const IBAccountManagement = () => (
    <ItemContainer>
        <Header as="h5">{localize('How can I sign up as a Deriv IB?')}</Header>
        <TextPrimary>
            <Localize
                translate_text="If you’re interested in becoming an IB, all you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful."
                components={[
                    <LocalizedLinkText
                        to={affiliate_signup_url}
                        external
                        is_affiliate_link
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </TextPrimary>
        <TextSecondary>
            <Localize
                translate_text="If you’re already registered as a Deriv affiliate, you can email us at <0>partners@deriv.com</0> instead."
                components={[<StyledLink href="mailto:partners@deriv.com" key={0} />]}
            />
        </TextSecondary>
        <HeaderPrimary>
            {localize('How and when will I receive my Deriv IB commissions?')}
        </HeaderPrimary>
        <TextPrimary>
            {localize(
                'Your IB commissions are credited directly into your DMT5 account daily. You can transfer the funds to your Deriv account and withdraw them to your preferred payment method.',
            )}
        </TextPrimary>
    </ItemContainer>
)

const IBReferralTools = () => (
    <ItemContainer>
        <Header as="h5">{localize('Do you offer any referral tools to your IBs?')}</Header>
        <TextPrimary>
            {localize(
                'Definitely. We’ll provide you with banners, videos, reviews, links, and text ads that you can use to bring new clients to our DMT5 platform.',
            )}
        </TextPrimary>
    </ItemContainer>
)

export {
    AffiliateGeneral,
    AffiliateAccountManagement,
    AffiliateReferralTools,
    IBGeneral,
    IBAccountManagement,
    IBReferralTools,
    // STYLES
    ItemContainer,
    HeaderPrimary,
    TextPrimary,
    TextSecondary,
    TextList,
    StyledLink,
    StyledUl,
    LocalizedLinkText,
}
