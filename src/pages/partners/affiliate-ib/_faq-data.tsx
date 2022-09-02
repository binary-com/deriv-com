import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
import { localize, Localize, LocalizedLink } from 'components/localization'
import { Header, Text, LinkText } from 'components/elements'
import { affiliate_signup_url } from 'common/constants'
import { isBrowser } from 'common/utility'

const ItemContainer = styled(Header)`
    padding: 0;
`
const TextSecondary = styled(Text)`
    margin-top: 2rem;
`

const TextList = styled(Text)`
    margin-top: 1.6rem;
    margin-bottom: 0.8rem;
`

const StyledLink = styled(LinkText)`
    color: var(--color-red);
    font-weight: normal;
`

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
    line-height: 20px;
`

const LocalizedLinkText = styled((props) => <LocalizedLink {...props} />)`
    color: var(--color-red);
    font-weight: normal;
    text-decoration: none;
    size: 14px;

    &:hover {
        text-decoration: underline;
    }
`

const AffiliateGeneral = () => (
    <ItemContainer>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What is the Deriv Affiliate Programme?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'The Deriv Affiliate Programme is an exciting partnership programme where you benefit from bringing in new clients to trade on our DTrader and DBot platforms.',
            )}
        </Header>
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
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Who can apply as a Deriv affiliate?')}
        </Header>
        <StyledUl>
            <li>
                <TextList>{localize('Trading experts')}</TextList>
            </li>

            <Text>
                {localize(
                    'Provide expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media.',
                )}
            </Text>

            <li>
                <TextList>{localize('Software developers')}</TextList>
            </li>

            <Text>
                {localize('Develop web, desktop, and mobile applications using Deriv API.')}
            </Text>

            <li>
                <TextList>{localize('Community managers')}</TextList>
            </li>

            <Text>
                {localize(
                    'Manage an active online community that’s passionate about online trading, investing, or personal finance.',
                )}
            </Text>
        </StyledUl>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Why should I become a Deriv affiliate?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Deriv is a customer-centric online trading experience. Backed by over 20 years of experience and award-winning innovation, we’ve reimagined the online trading experience from the ground up so that anyone can easily start trading.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Are there any fees I need to pay to join your affiliate programme?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Not at all. Joining our affiliate programme is completely free.')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What does ‘referred client’ mean?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'A referred client is someone who has clicked on your unique affiliate link, signed up with Deriv, and deposited money into their Deriv account. They must be aged 18 years or above and have not previously been a Deriv or Binary.com client.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Who can sign up as a Deriv client?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="Anyone aged 18 years or above who isn’t a resident of a restricted country can become a Deriv client.  You can find the list of restricted countries in our <0>terms and conditions</0>."
                components={[<LocalizedLinkText to="/terms-and-conditions/#clients" key={0} />]}
            />
        </Header>
    </ItemContainer>
)
const AffiliateAccountManagement = () => (
    <ItemContainer>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How can I sign up as a Deriv affiliate?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="All you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful."
                components={[
                    <LocalizedLinkText
                        to={affiliate_signup_url}
                        external
                        type="affiliate_sign_up"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('I forgot my password. What should I do?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="Don’t worry, you can easily <0>reset your password</0>."
                components={[<LocalizedLinkText to="/reset-password/" key={0} />]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How can I change my payment method?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="Log in to your Deriv affiliate account and go to <0>Finances</0> > <0>Payment instructions</0>."
                components={[<strong key={0} />]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How and when will I receive my Deriv affiliate commissions?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'We’ll deposit your commissions directly into your account as soon as practicable after the 15th of every month.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How can I check how much commission I have earned?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="Log in to your Deriv affiliate account and go to <0>Reports</0> > <0>Detailed activity report</0>."
                components={[<strong key={0} />]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What kind of reports can I generate from my affiliate account?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'You can generate all kinds of helpful reports to track and optimise your campaigns, such as the',
            )}
        </Header>
        <StyledUl>
            <li>
                <Header
                    as="p"
                    type="paragraph-1"
                    mt="8px"
                    weight="normal"
                    tabletL={{
                        type: 'paragraph-2',
                    }}
                >
                    <Localize
                        translate_text="<0>Hits & Impression</0> report: Displays your hit and click-through rates"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>

            <li>
                <Header
                    as="p"
                    type="paragraph-1"
                    mt="8px"
                    weight="normal"
                    tabletL={{
                        type: 'paragraph-2',
                    }}
                >
                    <Localize
                        translate_text="<0>Countries</0> report: Displays a list of countries where your clicks are coming from"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>

            <li>
                <Header
                    as="p"
                    type="paragraph-1"
                    mt="8px"
                    weight="normal"
                    tabletL={{
                        type: 'paragraph-2',
                    }}
                >
                    <Localize
                        translate_text="<0>My Players</0> report: Displays a list of clients with their IDs and signup date"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>
        </StyledUl>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Can I offer prospective clients an incentive to sign up to Deriv using my unique affiliate link?',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Feel free to discuss any incentive plan you have with your account manager. Please remember that we don’t allow unauthorised incentives, gifts, and payments to encourage client signups. If there are any violations, we may withhold commissions.',
            )}
        </Header>
    </ItemContainer>
)

const AffiliateReferralTools = () => (
    <ItemContainer>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What kind of referral tools do you offer?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="We have a tried-and-tested selection of referral tools, including banners, videos, reviews, and text ads. If you’d like certain tools to be customised to your site requirements, please contact your account manager at <0>affiliates@deriv.com</0>."
                components={[<StyledLink href="mailto:affiliates@deriv.com" key={0} />]}
            />
        </Header>
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
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('What is the Deriv IB Programme?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'The Deriv IB Programme is a partnership where you benefit from referring new clients to trade on our Deriv MT5 platform.',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How much can I earn from referring new clients to your Deriv MT5 platform?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="You’ll earn a fixed commission based on the volume of individual trades purchased by your referred clients. Please refer to our <0>IB commission plan</0> for more info."
                components={[<StyledLink key={0} href="#" onClick={scrollToIb} />]}
            />
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How much do I need to pay to join your IB programme?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('The Deriv IB Programme is completely free.')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Are there any minimum client or volume conditions that I need to meet before I can withdraw my commissions?',
            )}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('There is absolutely no requirement to withdraw your IB commissions.')}
        </Header>
    </ItemContainer>
)

const IBAccountManagement = () => (
    <ItemContainer>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How can I sign up as a Deriv IB?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            <Localize
                translate_text="If you’re interested in becoming an IB, all you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful."
                components={[
                    <LocalizedLinkText
                        to={affiliate_signup_url}
                        external
                        type="affiliate_sign_up"
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Header>
        <TextSecondary>
            <Localize
                translate_text="If you’re already registered as a Deriv affiliate, you can email us at <0>affiliates@deriv.com</0> instead."
                components={[<StyledLink href="mailto:affiliates@deriv.com" key={0} />]}
            />
        </TextSecondary>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('How and when will I receive my Deriv IB commissions?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Your IB commissions are credited directly into your Deriv MT5 account daily. You can transfer the funds to your Deriv account and withdraw them via your preferred payment method.',
            )}
        </Header>
    </ItemContainer>
)

const IBReferralTools = () => (
    <ItemContainer>
        <Header
            as="p"
            type="paragraph-1"
            mt="16px"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize('Do you offer any referral tools to your IBs?')}
        </Header>
        <Header
            as="p"
            type="paragraph-1"
            mt="8px"
            weight="normal"
            tabletL={{
                type: 'paragraph-2',
            }}
        >
            {localize(
                'Definitely. We’ll provide you with banners, videos, reviews, links, and text ads that you can use to bring new clients to our Deriv MT5 platform.',
            )}
        </Header>
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
    TextSecondary,
    TextList,
    StyledLink,
    StyledUl,
    LocalizedLinkText,
}
