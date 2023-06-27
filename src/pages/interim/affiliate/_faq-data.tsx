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
            <Localize translate_text="_t_After 20 years in the market, we feel that it’s time to renew our commitment to clients. The rebranding strengthens our resolve to serve clients with simple, flexible, and reliable online trading solutions._t__t_" />
        </Text>
    </MaxWidth>
)

const IsBeingBought = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_No, Deriv.com is built, owned, and managed by the same team that brought you Binary.com. Backed by 20 years of experience, we’ve never felt stronger or more confident of our abilities to serve you._t_" />
        </Text>
    </MaxWidth>
)

const WhatWillHappen = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_The Binary.com website will be phased out gradually as we turn our focus fully on Deriv.com. We encourage everyone to move over to Deriv.com now to enjoy the new experience. Client accounts, funds, and everything stored on Binary.com will be available and accessible by clients on Deriv.com._t_" />
        </Text>
    </MaxWidth>
)

const WhatChanges = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_The rebranding involves a new name, logo, corporate colours, and website. In addition, Deriv.com offers clients a diverse range of instruments to trade with on 4 advanced platforms, namely DTrader, DBot, DMT5, and SmartTrader, the popular trading platform from Binary.com. New features will be made available in phases._t_" />
        </Text>
    </MaxWidth>
)

const WhySwitch = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_The rebranding exercise was inspired by you, our clients. After 20 years of service to you, we feel that we understand you better. The rebranding is an opportunity for us to implement an improved online trading solution to meet all your needs._t_" />
        </Text>
    </MaxWidth>
)

const WhatsNew = () => (
    <MaxWidth>
        <Text mb="0.8rem">
            <Localize translate_text="_t_Deriv.com gives you multiple trading options in an environment that is simple, flexible, and reliable. Three core products — DTrader, DBot, and DMT5 — are offered alongside SmartTrader, the popular trading platform from Binary.com. Over time, you can look forward to new features such as:_t_" />
        </Text>
        <StyledUl>
            <li>
                <Text>
                    <Localize translate_text="_t_Multiplier options that potentially offer traders higher profits while limiting risks_t_" />
                </Text>
            </li>
            <li>
                <Text>
                    <Localize translate_text="_t_P2P Cashier which facilitates seamless financial transactions_t_" />
                </Text>
            </li>
            <li>
                <Text>
                    <Localize translate_text="_t_Light and dark mode features for a more enjoyable experience_t_" />
                </Text>
            </li>
        </StyledUl>
    </MaxWidth>
)

const CanTrade = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_Your funds will be reflected in both your Binary.com and Deriv.com accounts because they are essentially the same account. But we recommend that you try out Deriv.com now because we will gradually be phasing out Binary.com. We assure you that your favourite features are available on Deriv.com; plus, your account details, funds, and custom settings on Binary.com will be available on Deriv.com once you log in with your Binary.com credentials._t_" />
        </Text>
    </MaxWidth>
)

const HowStarted = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_It’s simple. Just go to Deriv.com and enter your existing Binary.com credentials. You’ll immediately be able to explore the new look, feel, and added functionality of Deriv.com. A number of educational resources are available to help you easily navigate around the new trading space. To help build your confidence for the new environment, explore Deriv.com using the demo account._t_" />
        </Text>
    </MaxWidth>
)

const WhatHappenAffiliate = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_Your Binary.com affiliate account will be valid for Deriv.com as well. You will be able to earn commissions from your clients when they trade on either Binary.com or Deriv.com._t_" />
        </Text>
    </MaxWidth>
)

const DifferentiateCommission = () => (
    <MaxWidth>
        <Text mb="2.4rem">
            <Localize translate_text="_t_We have separated the reports for your convenience._t_" />
        </Text>
        <Img
            src={AffiliateReport}
            alt={localize('_t_Detailed activity report of your account and income_t_')}
        />
        <Text mt="0.8rem">
            <Localize translate_text="_t_To get each report, go to your dashboard and select Reports > Filter by brands. Then, choose the platform whose commission you would like to view._t_" />
        </Text>
    </MaxWidth>
)

const AffectIB = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_You will continue to earn daily commissions on the trading activities of your clients whether they trade on the Binary.com MetaTrader 5 (MT5) or the Deriv.com MetaTrader5 (DMT5) platforms._t_" />
        </Text>
    </MaxWidth>
)

const SupportAPI = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_Yes. If you have developed your own trading application using Binary.com APIs, you can still continue using them. You will also be able to collect commissions on any trade made on Deriv.com using your app, and these will be reflected in your Deriv.com account._t_" />
        </Text>
    </MaxWidth>
)

const HavePaymentAgent = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_Yes. If you are a registered Binary.com payment agent, your services will be available to clients trading on Deriv.com._t_" />
        </Text>
    </MaxWidth>
)

const StartPromoting = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_Definitely. While Binary.com will still be around for a while, it will be phased out gradually. Encourage your clients to move to Deriv.com and earn commissions from their trading activities on our new and improved platforms._t_" />
        </Text>
    </MaxWidth>
)

const HowToPromote = () => (
    <MaxWidth>
        <Text mb="2.4rem">
            <Localize translate_text="_t_To promote Deriv.com, you will need a Deriv.com affiliate link._t_" />
        </Text>
        <Img
            src={AffiliateLogin}
            alt={localize('_t_Log in or signup to join our partner programme_t_')}
        />
        <Text mt="0.8rem" mb="2.4rem">
            <Localize translate_text="_t_To get one, first log in to your Binary.com affiliate dashboard._t_" />
        </Text>
        <Img src={AffiliateMarketing} alt={localize('_t_Marketing media gallery_t_')} />
        <Text mt="0.8rem" mb="2rem">
            <Localize
                translate_text="_t_Select <0>Marketing > Get media code</0>. Then, copy the <0>Landing page URL</0> provided._t_"
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="_t_The <0>Landing page URL</0> is your unique affiliate link which you can use to promote Deriv.com within your network._t_"
                components={[<strong key={0} />]}
            />
        </Text>
    </MaxWidth>
)

const MarketingSupport = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="_t_We’re eager to get you started on integrating the Deriv.com brand into all your marketing efforts. We’ve made it easier for you to start doing so using the ready-to-use banners and logo that you can access on your affiliate dashboard. No matter what your preferred channels for marketing may be, you will find that the Deriv.com banners and logo are formatted to your specific needs. Start using them across all your channels and get the word out on the new Deriv.com brand._t_" />
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
