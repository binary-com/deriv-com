import React from 'react'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Text, LocalizedLinkText } from 'components/elements'
import { binary_url } from 'common/utility'

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
const MaxWidth = styled.div`
    max-width: 64rem;
`

const WhyRebrand = () => (
    <MaxWidth>
        <Text>
            {localize(
                'After 20 years in the market, we are stepping into the third decade of operations with a renewed commitment to you, our clients. Our new name and platforms are in line with our vision to provide a broader range of products and an enhanced user experience. With the rebranding, our intention is to continue serving you with simple, flexible, and reliable online trading solutions.',
            )}
        </Text>
    </MaxWidth>
)

const WhatChanges = () => (
    <MaxWidth>
        <Text>
            {localize(
                'The rebranding involves a new name, logo, corporate colours, and website which you may have already seen in our online presence. You will also enjoy a wider range of instruments to trade with, besides the availability of 4 advanced platforms on a single trading space. Over time, we will roll out more new solutions, all geared towards improving your trading experience.',
            )}
        </Text>
    </MaxWidth>
)

const IsBeingBought = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="No, <0>Deriv.com</0> is built, owned, and managed by the same team that brought you <1>Binary.com</1>. We like to think of <0>Deriv.com</0> as the next step in the evolution of our company. We have taken lessons from 20 years of experience to produce a diverse range of products that give clients the flexibility and ease to trade according to their preference with confidence."
                components={[<LocalizedLinkText key={0} to="/" />]}
            />
        </Text>
    </MaxWidth>
)

const NewProducts = () => (
    <MaxWidth>
        <Text mb="2rem">
            <Localize
                translate_text="<0>Deriv.com</0> gives you multiple trading options in an environment that is simple, flexible, and reliable. Three core products — DTrader, DBot, and DMT5 — are offered alongside SmartTrader, the popular trading platform from <1>Binary.com</1>."
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
        <Text>
            {localize(
                'While you can continue to enjoy trading on MetaTrader 5 as before, we’ve listened to your feedback and upgraded the experience for you. You’ll find that the MT5 account sign up and dashboard experience is far more efficient on Deriv.com, allowing you to manage your account and focus on your trades with much ease.',
            )}
        </Text>
    </MaxWidth>
)

const WhatToExpect = () => (
    <MaxWidth>
        <Text mb="0.8rem">
            {localize(
                'As we roll out new features in phases, you can look forward to such things as:',
            )}
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

const IsDerivRegulated = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="Yes. <0>Deriv.com</0> and <1>Binary.com</1> are owned by the same group, which is licensed and regulated in many jurisdictions around the world."
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
    </MaxWidth>
)

const AreCloseDown = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="The <0>Binary.com</0> website will still be around for a while. In due time, we will phase out <0>Binary.com</0>. However, your accounts, funds, and everything you have on <0>Binary.com</0> will be available and accessible by you on <1>Deriv.com</1>."
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
    </MaxWidth>
)

const WhySwitch = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="We’ve planned this rebranding process carefully and over many months with you, our clients, in mind. Based on the experience of serving you for the past 20 years, we’ve taken all your valuable feedback to deliver an improved experience to support your online trading journey. To guide you in this transition, we’ve prepared educational resources that will help you easily navigate around the new trading space. The demo account on <0>Deriv.com</0> is also available for you to explore and build confidence for the new environment."
                components={[<LocalizedLinkText key={0} to="/" />]}
            />
        </Text>
    </MaxWidth>
)

const CanStillTrade = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="Your funds will be reflected in both your <0>Binary.com</0> and <1>Deriv.com</1> accounts because they are essentially the same account. But we recommend that you try out <1>Deriv.com</1> now because we will gradually be phasing out <0>Binary.com</0>. We assure you that your favourite features are available on <1>Deriv.com</1>; plus, your account details, funds, and custom settings on <0>Binary.com</0> will be available on <1>Deriv.com</1> once you log in with your <0>Binary.com</0> credentials."
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
    </MaxWidth>
)

const HowToGetStarted = () => (
    <MaxWidth>
        <Text>
            <Localize
                translate_text="It’s simple. Just go to <0>Deriv.com</0> and enter your existing <1>Binary.com</1> credentials. You’ll immediately be able to explore the new look, feel, and added functionality of <0>Deriv.com</0>."
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
    </MaxWidth>
)

export {
    WhyRebrand,
    WhatChanges,
    IsBeingBought,
    NewProducts,
    WhatToExpect,
    IsDerivRegulated,
    AreCloseDown,
    WhySwitch,
    CanStillTrade,
    HowToGetStarted,
}
