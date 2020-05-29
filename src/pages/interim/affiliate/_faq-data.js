import React from 'react'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Text, LocalizedLinkText } from 'components/elements'
import { binary_url } from 'common/utility'
import AffiliateReport from 'images/common/affiliate-report.png'
import AffiliateLogin from 'images/common/affiliate-login.png'
import AffiliateMarketing from 'images/common/affiliate-marketing.png'

const StyledUl = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;
    color: var(--color-red);

    & > li {
        margin-bottom: 0.8rem;
    }
    & > li:last-child {
        margin-bottom: 0;
    }
`

const Img = styled.img`
    max-width: 32rem;
`

const WhyRebrand = () => (
    <>
        <Text>
            {localize(
                'After 20 years in the market, we feel that it’s time to renew our commitment to clients. The rebranding strengthens our resolve to serve clients with simple, flexible, and reliable online trading solutions.',
            )}
        </Text>
    </>
)

const IsBeingBought = () => (
    <>
        <Text>
            <Localize
                translate_text="No, <0>Deriv.com</0> is built, owned, and managed by the same team that brought you <1>Binary.com</1>. Backed by 20 years of experience, we’ve never felt stronger or more confident of our abilities to serve you."
                components={[
                    <LocalizedLinkText key={0} to="/" />,
                    <LocalizedLinkText
                        key={1}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                ]}
            />
        </Text>
    </>
)

const WhatWillHappen = () => (
    <>
        <Text>
            <Localize
                translate_text="The <0>Binary.com</0> website will be phased out gradually as we turn our focus fully on <1>Deriv.com</1>. We encourage everyone to move over to <1>Deriv.com</1> now to enjoy the new experience. Client accounts, funds, and everything stored on <0>Binary.com</0> will be available and accessible by clients on <1>Deriv.com</1>."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const WhatChanges = () => (
    <>
        <Text>
            <Localize
                translate_text="The rebranding involves a new name, logo, corporate colours, and website. In addition, <0>Deriv.com</0> offers clients a diverse range of instruments to trade with on 4 advanced platforms, namely DTrader, DBot, DMT5, and SmartTrader, the popular trading platform from <1>Binary.com</1>. New features will be made available in phases."
                components={[
                    <LocalizedLinkText key={0} to="/" />,
                    <LocalizedLinkText
                        key={1}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                ]}
            />
        </Text>
    </>
)

const WhySwitch = () => (
    <>
        <Text>
            {localize(
                'The rebranding exercise was inspired by you, our clients. After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs.',
            )}
        </Text>
    </>
)

const WhatsNew = () => (
    <>
        <Text mb="0.8rem">
            <Localize
                translate_text="<0>Deriv.com</0> gives you multiple trading options in an environment that is simple, flexible, and reliable. Three core products — DTrader, DBot, and DMT5 — are offered alongside SmartTrader, the popular trading platform from <1>Binary.com</1>. Over time, you can look forward to new features such as:"
                components={[
                    <LocalizedLinkText key={0} to="/" />,
                    <LocalizedLinkText
                        key={1}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                ]}
            />
        </Text>
        <StyledUl>
            <li>
                <Text>
                    {localize(
                        'Multiplier options that potentially offer traders higher profits while limiting risks',
                    )}
                </Text>
            </li>
            <li>
                <Text>
                    {localize('P2P Cashier which facilitates seamless financial transactions')}
                </Text>
            </li>
            <li>
                <Text>
                    {localize('Light and dark mode features for a more enjoyable experience')}
                </Text>
            </li>
        </StyledUl>
    </>
)

const CanTrade = () => (
    <>
        <Text>
            <Localize
                translate_text="Your funds will be reflected in both your <0>Binary.com</0> and <1>Deriv.com</1> accounts because they are essentially the same account. But we recommend that you try out <1>Deriv.com</1> now because we will gradually be phasing out <0>Binary.com</0>. We assure you that your favourite features are available on <1>Deriv.com</1>; plus, your account details, funds, and custom settings on Binary.com will be available on <1>Deriv.com</1> once you log in with your <0>Binary.com</0> credentials."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const HowStarted = () => (
    <>
        <Text>
            <Localize
                translate_text="It’s simple. Just go to <1>Deriv.com</1> and enter your existing <0>Binary.com</0> credentials. You’ll immediately be able to explore the new look, feel, and added functionality of <1>Deriv.com</1>. A number of educational resources are available to help you easily navigate around the new trading space. To help build your confidence for the new environment, explore <1>Deriv.com</1> using the demo account."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const WhatHappenAffiliate = () => (
    <>
        <Text>
            <Localize
                translate_text="Your <0>Binary.com</0> affiliate account will be valid for <1>Deriv.com</1> as well. You will be able to earn commissions from your clients when they trade on either <0>Binary.com</0> or <1>Deriv.com</1>."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const DifferentiateCommission = () => (
    <>
        <Text mb="2.4rem">{localize('We have separated the reports for your convenience.')}</Text>
        <Img src={AffiliateReport} />
        <Text mt="0.8rem">
            <Localize
                translate_text="To get each report, go to your dashboard and select <0>Reports > Filter by brands</0>. Then, choose the platform whose commission you would like to view."
                components={[<strong key={0} />]}
            />
        </Text>
    </>
)

const AffectIB = () => (
    <>
        <Text>
            <Localize
                translate_text="You will continue to earn daily commissions on the trading activities of your clients whether they trade on the <0>Binary.com</0> MetaTrader 5 (MT5) or the <1>Deriv.com</1> MetaTrader5 (DMT5) platforms."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const SupportAPI = () => (
    <>
        <Text>
            <Localize
                translate_text="Yes. If you have developed your own trading application using <0>Binary.com</0> APIs, you can still continue using them. You will also be able to collect commissions on any trade made on <1>Deriv.com</1> using your app, and these will be reflected in your <1>Deriv.com</1> account."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const HavePaymentAgent = () => (
    <>
        <Text>
            <Localize
                translate_text="Yes. If you are a registered <0>Binary.com</0> payment agent, your services will be available to clients trading on <1>Deriv.com</1>."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const StartPromoting = () => (
    <>
        <Text>
            <Localize
                translate_text="Definitely. While <0>Binary.com</0> will still be around for a while, it will be phased out gradually. Encourage your clients to move to <1>Deriv.com</1> and earn commissions from their trading activities on our new and improved platforms."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                    <LocalizedLinkText key={1} to="/" />,
                ]}
            />
        </Text>
    </>
)

const HowToPromote = () => (
    <>
        <Text mb="2.4rem">
            <Localize
                translate_text="To promote <0>Deriv.com</0>, you will need a <0>Deriv.com</0> affiliate link."
                components={[<LocalizedLinkText key={0} to="/" />]}
            />
        </Text>
        <Img src={AffiliateLogin} />
        <Text mt="0.8rem" mb="2.4rem">
            <Localize
                translate_text="To get one, first log in to your <0>Binary.com</0> affiliate dashboard."
                components={[
                    <LocalizedLinkText
                        key={0}
                        external
                        to={binary_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    />,
                ]}
            />
        </Text>
        <Img src={AffiliateMarketing} />
        <Text mt="0.8rem" mb="2rem">
            <Localize
                translate_text="Select <0>Marketing > Get media code</0>. Then, copy the <0>Landing page URL</0> provided."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="The <0>Landing page URL</0> is your unique affiliate link which you can use to promote <1>Deriv.com</1> within your network."
                components={[<strong key={0} />, <LocalizedLinkText key={1} to="/" />]}
            />
        </Text>
    </>
)

const MarketingSupport = () => (
    <>
        <Text>
            <Localize
                translate_text="We’re eager to get you started on integrating the <0>Deriv.com</0> brand into all your marketing efforts. We’ve made it easier for you to start doing so using the ready-to-use banners and logo that you can access on your affiliate dashboard. No matter what your preferred channels for marketing may be, you will find that the <0>Deriv.com</0> banners and logo are formatted to your specific needs. Start using them across all your channels and get the word out on the new <0>Deriv.com</0> brand."
                components={[<LocalizedLinkText key={0} to="/" />]}
            />
        </Text>
    </>
)

export {
    WhyRebrand,
    IsBeingBought,
    WhatWillHappen,
    WhatChanges,
    WhySwitch,
    WhatsNew,
    CanTrade,
    HowStarted,
    WhatHappenAffiliate,
    DifferentiateCommission,
    AffectIB,
    SupportAPI,
    HavePaymentAgent,
    StartPromoting,
    HowToPromote,
    MarketingSupport,
}
