import React from 'react'
import styled from 'styled-components'
import { Localize, LocalizedLink } from 'components/localization'
import { Header, LinkText, LiveChatLinkText, Text } from 'components/elements'
import { affiliate_reset_password_link, deriv_api_url } from 'common/constants'
import { isBrowser } from 'common/utility'
import useAffiliateSignupLink from 'features/hooks/ab-testing/use-partners-signup-link'
import useBuildVariant from 'features/hooks/use-build-variant'

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

const AffiliateGeneral = () => {
    const { region } = useBuildVariant()
    const { affiliate_signup_link } = useAffiliateSignupLink()

    return (
        <ItemContainer>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_What is the Deriv Affiliate Programme?_t_" />
            </Header>
            {region === "eu" ? (
                <>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_The Deriv Affiliate Programme is an exciting partnership programme where you benefit from bringing in new clients to trade with Deriv._t_" />
                    </Header>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_As an affiliate, you’ll advertise our products and services to your audience, including our leading-edge Deriv Trader trading platform. After they sign up and start trading with real money, you’ll earn commissions from their deposits._t_" />
                    </Header>
                </>
            ) : (
                <>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_The Deriv Affiliate Programme is an exciting partnership programme where you can benefit by bringing in new clients to trade on Deriv platforms._t_" />
                    </Header>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_As an affiliate, you’ll advertise our products and services to your audience. If they sign up and start trading with real money, you will earn commissions from their trades._t_" />
                    </Header>
                </>
            )}
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_We offer a complete trading experience tailored to the needs of an exceptionally wide range of traders. New traders can learn about trading and practise trading risk-free with a demo account. Seasoned traders can take advantage of the wide range of markets, trade conditions, and analysis tools we offer._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_How do I sign up as an affiliate?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize
                    translate_text="_t_<0>Click here</0> to sign up as a Deriv affiliate._t_"
                    components={[
                        <LocalizedLinkText
                            to={affiliate_signup_link}
                            external
                            // type="affiliate_sign_up"
                            target="_blank"
                            rel="noopener noreferrer"
                            key={0}
                        />,
                    ]}
                />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_It will take 1-3 working days for your application to be reviewed._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Why should I join the affiliate programme?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_By joining our affiliate programme, you’ll benefit from:_t_" />
            </Header>
            <StyledUl>
                {region !== "eu" && (
                    <li>
                        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                            <Localize translate_text="_t_Multiple income opportunities_t_" />
                        </Header>
                    </li>
                )}
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_Various marketing material provided in multiple languages to promote our products and services to your clients_t_" />
                    </Header>
                </li>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_No hidden fees_t_" />
                    </Header>
                </li>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_A dedicated account manager to help you with any questions_t_" />
                    </Header>
                </li>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_24/7 customer support via live chat on our website_t_" />
                    </Header>
                </li>
            </StyledUl>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_What type of commission plan do you offer?_t_" />
            </Header>
            {region === "eu" ? (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_We have the following commission plan:_t_" />
                </Header>
            ) : (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_We have 3 commission plans:_t_" />
                </Header>
            )}
            <StyledUl>
                {region !== "eu" && (
                    <>
                        <li>
                            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                                <Localize translate_text="_t_Revenue share_t_" />
                            </Header>
                        </li>
                        <li>
                            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                                <Localize translate_text="_t_Turnover_t_" />
                            </Header>
                        </li>
                    </>
                )}
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_CPA_t_" />
                    </Header>
                </li>
            </StyledUl>
            {region === "eu" ? (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize
                        translate_text="_t_<0>Scroll up on this page for more information on the commission plan.</0>_t_"
                        components={[
                            <StyledLink
                                key={0}
                                href="#"
                                weight="normal"
                                onClick={(e) => scrollToIb(e, 'deriv-affiliate')}
                            />,
                        ]}
                    />
                </Header>
            ) : (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize
                        translate_text="_t_<0>Scroll up on this page for more information on the commission plans.</0>_t_"
                        components={[
                            <StyledLink
                                key={0}
                                href="#"
                                weight="normal"
                                onClick={(e) => scrollToIb(e, 'deriv-affiliate')}
                            />,
                        ]}
                    />
                </Header>
            )}
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_Who can apply as an affiliate?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Anyone aged 18 years old and above who isn’t a resident of a FATF restricted country can become a Deriv affiliate._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_If you are or have any of the following, you’ll have an even better chance of recruiting potential clients:_t_" />
            </Header>
            <StyledUl>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_A trading expert or someone who can provide tips and opinions on online trading sites._t_" />
                    </Header>
                </li>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize translate_text="_t_Have your own platform (for example, YouTube channel, blog, social media platforms, etc) to promote your link._t_" />
                    </Header>
                </li>
                <li>
                    <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                        <Localize
                            translate_text="_t_A software developer with your own trading platform that can be linked to Deriv’s API. Head to the <0>Deriv API page</0> for more info on how our API works._t_"
                            components={[
                                <LocalizedLinkText
                                    to={deriv_api_url}
                                    external
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={0}
                                />,
                            ]}
                        />
                    </Header>
                </li>
            </StyledUl>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_How much does it cost to register for the affiliate programme?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_It is completely free to join our affiliate partnership programme._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_What is a referred client?_t_" />
            </Header>
            {region === "eu" ? (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_A referred client is a client who signed up to Deriv using your tracking link and made a deposit into their account. As an affiliate, you’ll receive commissions based on the successful deposits of your referred client._t_" />
                </Header>
            ) : (
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_A referred client is the customer who signed up using your tracking link. Once they start trading on our platforms with real money, you will stand to earn commissions from the trades placed by them._t_" />
                </Header>
            )}
            <Header as="p" type="paragraph-1" mt="16px">
                <Localize translate_text="_t_How and when will I receive my Deriv affiliate commissions?_t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_We’ll deposit your commissions directly into your trading account on or around the 15th of every month._t_" />
            </Header>
            <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                <Localize translate_text="_t_Please note that we will not credit your commission if you did not set any payment method or if it is below your desired payment threshold._t_" />
            </Header>
        </ItemContainer>
    )
}
const AffiliateAccountManagement = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_I forgot my account password. What should I do?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_You can reset your password <0>here</0>._t_"
                components={[
                    <LocalizedLinkText
                        to={affiliate_reset_password_link}
                        external
                        target="_blank"
                        rel="noopener noreferrer"
                        key={0}
                    />,
                ]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_If you are still having issues, please contact our support team via _t_" />
            <LiveChatLinkText text="_t_live chat._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How do I change my affiliate payment method?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_In your affiliate dashboard, go to the “Finances” tab and select “Payment instructions” to change or set your preferred payment method._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How can I check how much commission I have earned?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_In your affiliate dashboard, go to “Reports” and click on “Detailed activity report”._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You may also set your preferred filters like the time period when you view the report._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What kind of reports can I generate from my affiliate account?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Your reports will show the following:_t_" />
        </Header>
        <StyledUl>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Hits and impressions_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Click-through rates_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Client’s trading activity_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Commissions_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Client sign-up dates_t_" />
                </Header>
            </li>
        </StyledUl>
    </ItemContainer>
)

const AffiliateReferralTools = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Where can I find my referral link?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You can find your referral link on your affiliate dashboard. Click the “Support” tab and follow the instructions provided._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What materials do you provide for your partners?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_We provide marketing materials such as banners, videos, and text ads that you can use to bring new clients to our platform._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_If you like certain tools to be customised to your site requirements, please contact our support team via <0>live chat</0> or reach out to your account manager._t_"
                components={[<LiveChatLinkText text="_t_live chat_t_" key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Can I offer prospective clients an incentive to sign up to Deriv using my affiliate link?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Yes, you can. You will need to notify your account manager if you wish to do so._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Do keep in mind that we do not allow unauthorised incentives, gifts, and payments to encourage client signups. Payment will be withheld if any suspicions or activity of this conduct is discovered._t_" />
        </Header>
    </ItemContainer>
)

const scrollToIb = (e, id = 'deriv-ib') => {
    e.preventDefault()
    if (isBrowser()) {
        const padding_top = 80
        const offset_top = document.getElementById(id).offsetTop - padding_top
        window.scroll({ top: offset_top, behavior: 'smooth' })
    }
}

const MAGeneral = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What is the Master Affiliate Programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_The Master Affiliate Programme is another exciting opportunity where you can benefit from bringing in new affiliates to Deriv. You’ll earn based on the commission of your sub-affiliates._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Who can apply as a Master Affiliate?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You’ll need to:_t_" />
        </Header>
        <StyledUl>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Be a registered affiliate_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Have consistent, regular sign ups via your referral link_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Make a request through your country manager_t_" />
                </Header>
            </li>
        </StyledUl>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize
                translate_text="_t_<0>Disclaimer: This plan is not available for affiliates who promote to clients residing in the EU.</0>_t_"
                components={[<i key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How does the commission scheme work?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You’ll receive a 20% flat rate of your sub-affiliate’s commission (this will be credited from Deriv’s funds and will not affect your sub-affiliate’s commission). Please note that this does not include your sub-affiliate’s IB commission._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_When will the commission be paid out?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_All your affiliate commissions, including master affiliate, revenue share, and turnover, will be collectively paid out around the 15th of each month._t_" />
        </Header>
    </ItemContainer>
)

const IBGeneral = () => (
    <ItemContainer>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_What is the Deriv Introducing Broker (IB) Programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_The Deriv Introducing Broker (IB) Programme is a partnership opportunity where you benefit from referring new clients to trade on our CFD trading platforms._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_This is available to all Deriv affiliates._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How can I sign up as a Deriv IB?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_To register as a Deriv IB, you must meet the following criteria:_t_" />
        </Header>
        <StyledUl>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Be a registered Deriv affiliate_t_" />
                </Header>
            </li>
            <li>
                <Header as="p" type="paragraph-1" mt="8px" weight="normal">
                    <Localize translate_text="_t_Have a real Deriv account_t_" />
                </Header>
            </li>
        </StyledUl>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_If you meet all the criteria above, please reach out to our <0>live chat</0> or to your respective country manager to apply._t_"
                components={[<LiveChatLinkText text="_t_live chat_t_" key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize
                translate_text="_t_<0>Disclaimer: This plan is not available for affiliates who promote to clients residing in the EU.</0>_t_"
                components={[<i key={0} />]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How much does it cost to register for the IB programme?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_It’s completely free of charge to join the IB programme._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How much can I earn from referring new clients to Deriv's CFD trading platforms?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_You’ll earn a fixed commission based on the volume of individual trades bought by your referred clients._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize
                translate_text="_t_<0>Scroll up on this page for more info on the IB commission scheme.</0>_t_"
                components={[
                    <StyledLink key={0} href="#" weight="normal" onClick={(e) => scrollToIb(e)} />,
                ]}
            />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Are there any minimum client or volume conditions that I need to meet before I can withdraw my commissions?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_There is no requirement or minimum amount to withdraw your IB commissions._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_Is there a minimum amount if I want to transfer my funds from one platform to another?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_There is a minimum of USD 0.01 if you would like to transfer funds to another platform._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="16px">
            <Localize translate_text="_t_How and when will I receive my Deriv IB commissions?_t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Your IB commissions earned from MT5 and Deriv EZ are credited directly into your Deriv MT5 account daily. You can transfer the funds to your Deriv account and withdraw them via your preferred payment method._t_" />
        </Header>
        <Header as="p" type="paragraph-1" mt="8px" weight="normal">
            <Localize translate_text="_t_Your IB commissions earned from Deriv X are credited directly into your Deriv account daily._t_" />
        </Header>
    </ItemContainer>
)

export {
    AffiliateGeneral,
    AffiliateAccountManagement,
    AffiliateReferralTools,
    MAGeneral,
    IBGeneral,
    // STYLES
    ItemContainer,
    TextSecondary,
    TextList,
    StyledLink,
    StyledUl,
    LocalizedLinkText,
}
