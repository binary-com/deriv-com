import React from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
import { Header, Text, LinkText, LiveChatLinkText } from 'components/elements'
import { affiliate_signup_url } from 'common/constants'
import { isBrowser } from 'common/utility'
import useRegion from 'components/hooks/use-region'

type StyledLinkProps = {
    href: string
}

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

const StyledLink = styled(LinkText)<StyledLinkProps>`
    color: var(--color-red);
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
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What is the Deriv Affiliate Programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_The Deriv Affiliate Programme is an exciting partnership programme where you benefit from bringing in new clients to trade on our DTrader and DBot platforms._t_" />
        </Header>
        <TextSecondary>
            <Localize translate_text="_t_As an affiliate, you’ll advertise our products and services to your audience, including our leading-edge DTrader and DBot trading platforms. After they sign up and start trading with real money, you’ll earn commissions from their trades._t_" />
        </TextSecondary>
        <TextSecondary>
            <Localize translate_text="_t_We offer a complete trading experience tailored to the needs of an exceptionally wide range of traders. New traders can learn about trading and practise trading risk-free with a demo account. Seasoned traders can take advantage of the wide range of markets, trade conditions, and analysis tools we offer._t_" />
        </TextSecondary>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Who can apply as a Deriv affiliate?_t_" />
        </Header>
        <StyledUl>
            <li>
                <TextList>
                    <Localize translate_text="_t_Trading experts_t_" />
                </TextList>
            </li>

            <Text>
                <Localize translate_text="_t_Provide expert tips and opinions on online trading via a website, blog, YouTube channel, webinars, or other forms of digital media._t_" />
            </Text>

            <li>
                <TextList>
                    <Localize translate_text="_t_Software developers_t_" />
                </TextList>
            </li>

            <Text>
                <Localize translate_text="_t_Develop web, desktop, and mobile applications using Deriv API._t_" />
            </Text>

            <li>
                <TextList>
                    <Localize translate_text="_t_Community managers_t_" />
                </TextList>
            </li>

            <Text>
                <Localize translate_text="_t_Manage an active online community that’s passionate about online trading, investing, or personal finance._t_" />
            </Text>
        </StyledUl>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Why should I become a Deriv affiliate?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Deriv is a customer-centric online trading experience. Backed by over 20 years of experience and award-winning innovation, we’ve reimagined the online trading experience from the ground up so that anyone can easily start trading._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Are there any fees I need to pay to join your affiliate programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Not at all. Joining our affiliate programme is completely free._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What does ‘referred client’ mean?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_A referred client is someone who has clicked on your unique affiliate link, signed up with Deriv, and deposited money into their Deriv account. They must be aged 18 years or above and have not previously been a Deriv or Binary.com client._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Who can sign up as a Deriv client?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_Anyone aged 18 years or above who isn’t a resident of a restricted country can become a Deriv client.  You can find the list of restricted countries in our <0>terms and conditions</0>._t_"
                components={[<LocalizedLinkText to="/terms-and-conditions/#clients" key={0} />]}
            />
        </Header>
    </ItemContainer>
)
const AffiliateAccountManagement = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How can I sign up as a Deriv affiliate?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_All you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful._t_"
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
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_I forgot my password. What should I do?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_Don’t worry, you can easily <0>reset your password</0>._t_"
                components={[<LocalizedLinkText to="/reset-password/" key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How can I change my payment method?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_Log in to your Deriv affiliate account and go to <0>Finances</0> > <0>Payment instructions</0>._t_"
                components={[<strong key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How and when will I receive my Deriv affiliate commissions?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_We’ll deposit your commissions directly into your account as soon as practicable after the 15th of every month._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How can I check how much commission I have earned?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_Log in to your Deriv affiliate account and go to <0>Reports</0> > <0>Detailed activity report</0>._t_"
                components={[<strong key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What kind of reports can I generate from my affiliate account?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You can generate all kinds of helpful reports to track and optimise your campaigns, such as the_t_" />
        </Header>
        <StyledUl>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize
                        translate_text="_t_<0>Hits & Impression</0> report: Displays your hit and click-through rates_t_"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>

            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize
                        translate_text="_t_<0>Countries</0> report: Displays a list of countries where your clicks are coming from_t_"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>

            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize
                        translate_text="_t_<0>My Players</0> report: Displays a list of clients with their IDs and signup date_t_"
                        components={[<strong key={0} />]}
                    />
                </Header>
            </li>
        </StyledUl>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Can I offer prospective clients an incentive to sign up to Deriv using my unique affiliate link?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Feel free to discuss any incentive plan you have with your account manager. Please remember that we don’t allow unauthorised incentives, gifts, and payments to encourage client signups. If there are any violations, we may withhold commissions._t_" />
        </Header>
    </ItemContainer>
)

const AffiliateReferralTools = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What kind of referral tools do you offer?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_We have a tried-and-tested selection of referral tools, including banners, videos, reviews, and text ads. If you’d like certain tools to be customised to your site requirements, _t_" />
            <LiveChatLinkText text="_t_contact us via live chat._t_" />
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
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What is the Deriv IB Programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_The Deriv IB Programme is a partnership where you benefit from referring new clients to trade on our Deriv MT5 platform._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How much can I earn from referring new clients to your Deriv MT5 platform?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_You’ll earn a fixed commission based on the volume of individual trades purchased by your referred clients. Please refer to our <0>IB commission plan</0> for more info._t_"
                components={[<StyledLink key={0} href="#" weight="normal" onClick={scrollToIb} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How much do I need to pay to join your IB programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_The Deriv IB Programme is completely free._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Are there any minimum client or volume conditions that I need to meet before I can withdraw my commissions?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_There is absolutely no requirement to withdraw your IB commissions._t_" />
        </Header>
    </ItemContainer>
)

const IBAccountManagement = () => {
    const { is_row } = useRegion()

    return (
        <ItemContainer>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_How can I sign up as a Deriv IB?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="_t_All you need to do is head to the signup page and fill out the <0>application form</0>. We’ll review your application and get in touch if it’s successful._t_"
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
                    translate_text="_t_If you’re already registered as a Deriv affiliate, you can email us at <0>affiliates@deriv.com</0> instead._t_"
                    components={[<StyledLink href="mailto:affiliates@deriv.com" key={0} />]}
                />
            </TextSecondary>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_How and when will I receive my Deriv IB commissions?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Your IB commissions are credited directly into your Deriv MT5 account daily. You can transfer the funds to your Deriv account and withdraw them via your preferred payment method._t_" />
            </Header>
            <TextSecondary>
                {is_row && (
                    <Localize translate_text="_t_Your IB commissions earned from Deriv X are credited directly into your Deriv account daily._t_" />
                )}
            </TextSecondary>
        </ItemContainer>
    )
}

const IBReferralTools = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Do you offer any referral tools to your IBs?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Definitely. We’ll provide you with banners, videos, reviews, links, and text ads that you can use to bring new clients to our Deriv MT5 platform._t_" />
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
