import React from 'react'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Text } from 'components/elements'
import AffiliateReport from 'images/common/interim/affiliate-report.png'
import AffiliateLogin from 'images/common/interim/affiliate-login.png'
import AffiliateMarketing from 'images/common/interim/affiliate-marketing.png'
import device from 'themes/device'

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

    @media ${device.mobileM} {
        max-width: 28rem;
    }
`

const MaxWidth = styled.div`
    max-width: 64rem;
`

const WhyRebrand = () => (
    <MaxWidth>
        <Text>
            {localize(
                'After 20 years in the market, we feel that it’s time to renew our commitment to clients. The rebranding strengthens our resolve to serve clients with simple, flexible, and reliable online trading solutions.',
            )}
        </Text>
    </MaxWidth>
)

const IsBeingBought = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="No, Deriv.com is built, owned, and managed by the same team that brought you Binary.com. Backed by 20 years of experience, we’ve never felt stronger or more confident of our abilities to serve you." />
        </Text>
    </MaxWidth>
)

const WhatWillHappen = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="The Binary.com website will be phased out gradually as we turn our focus fully on Deriv.com. We encourage everyone to move over to Deriv.com now to enjoy the new experience. Client accounts, funds, and everything stored on Binary.com will be available and accessible by clients on Deriv.com." />
        </Text>
    </MaxWidth>
)

const WhatChanges = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="The rebranding involves a new name, logo, corporate colours, and website. In addition, Deriv.com offers clients a diverse range of instruments to trade with on 4 advanced platforms, namely DTrader, DBot, DMT5, and SmartTrader, the popular trading platform from Binary.com. New features will be made available in phases." />
        </Text>
    </MaxWidth>
)

const WhySwitch = () => (
    <MaxWidth>
        <Text>
            {localize(
                'The rebranding exercise was inspired by you, our clients. After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs.',
            )}
        </Text>
    </MaxWidth>
)

const WhatsNew = () => (
    <MaxWidth>
        <Text mb="0.8rem">
            <Localize translate_text="Deriv.com gives you multiple trading options in an environment that is simple, flexible, and reliable. Three core products — DTrader, DBot, and DMT5 — are offered alongside SmartTrader, the popular trading platform from Binary.com. Over time, you can look forward to new features such as:" />
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
    </MaxWidth>
)

const CanTrade = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Your funds will be reflected in both your Binary.com and Deriv.com accounts because they are essentially the same account. But we recommend that you try out Deriv.com now because we will gradually be phasing out Binary.com. We assure you that your favourite features are available on Deriv.com; plus, your account details, funds, and custom settings on Binary.com will be available on Deriv.com once you log in with your Binary.com credentials." />
        </Text>
    </MaxWidth>
)

const HowStarted = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="It’s simple. Just go to Deriv.com and enter your existing Binary.com credentials. You’ll immediately be able to explore the new look, feel, and added functionality of Deriv.com. A number of educational resources are available to help you easily navigate around the new trading space. To help build your confidence for the new environment, explore Deriv.com using the demo account." />
        </Text>
    </MaxWidth>
)

const WhatHappenAffiliate = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Your Binary.com affiliate account will be valid for Deriv.com as well. You will be able to earn commissions from your clients when they trade on either Binary.com or Deriv.com." />
        </Text>
    </MaxWidth>
)

const DifferentiateCommission = () => (
    <MaxWidth>
        <Text mb="2.4rem">{localize('We have separated the reports for your convenience.')}</Text>
        <Img src={AffiliateReport} />
        <Text mt="0.8rem">
            <Localize translate_text="To get each report, go to your dashboard and select Reports > Filter by brands. Then, choose the platform whose commission you would like to view." />
        </Text>
    </MaxWidth>
)

const AffectIB = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="You will continue to earn daily commissions on the trading activities of your clients whether they trade on the Binary.com MetaTrader 5 (MT5) or the Deriv.com MetaTrader5 (DMT5) platforms." />
        </Text>
    </MaxWidth>
)

const SupportAPI = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Yes. If you have developed your own trading application using Binary.com APIs, you can still continue using them. You will also be able to collect commissions on any trade made on Deriv.com using your app, and these will be reflected in your Deriv.com account." />
        </Text>
    </MaxWidth>
)

const HavePaymentAgent = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Yes. If you are a registered Binary.com payment agent, your services will be available to clients trading on Deriv.com." />
        </Text>
    </MaxWidth>
)

const StartPromoting = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Definitely. While Binary.com will still be around for a while, it will be phased out gradually. Encourage your clients to move to Deriv.com and earn commissions from their trading activities on our new and improved platforms." />
        </Text>
    </MaxWidth>
)

const HowToPromote = () => (
    <MaxWidth>
        <Text mb="2.4rem">
            <Localize translate_text="To promote Deriv.com, you will need a Deriv.com affiliate link." />
        </Text>
        <Img src={AffiliateLogin} />
        <Text mt="0.8rem" mb="2.4rem">
            <Localize translate_text="To get one, first log in to your Binary.com affiliate dashboard." />
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
                translate_text="The <0>Landing page URL</0> is your unique affiliate link which you can use to promote Deriv.com within your network."
                components={[<strong key={0} />]}
            />
        </Text>
    </MaxWidth>
)

const MarketingSupport = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="We’re eager to get you started on integrating the Deriv.com brand into all your marketing efforts. We’ve made it easier for you to start doing so using the ready-to-use banners and logo that you can access on your affiliate dashboard. No matter what your preferred channels for marketing may be, you will find that the Deriv.com banners and logo are formatted to your specific needs. Start using them across all your channels and get the word out on the new Deriv.com brand." />
        </Text>
    </MaxWidth>
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
