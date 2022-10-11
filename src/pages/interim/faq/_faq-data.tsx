import React from 'react'
import styled from 'styled-components'
import { localize, Localize } from 'components/localization'
import { Text, LocalizedLinkText } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'

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
const StyledLink = styled(LocalizedLinkText)`
    color: var(--color-red);
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
            <Localize translate_text="No, Deriv.com is built, owned, and managed by the same team that brought you Binary.com. We like to think of Deriv.com as the next step in the evolution of our company. We have taken lessons from 20 years of experience to produce a diverse range of products that give clients the flexibility and ease to trade according to their preference with confidence." />
        </Text>
    </MaxWidth>
)

const NewProducts = () => (
    <MaxWidth>
        <Text mb="2rem">
            <Localize translate_text="Deriv.com gives you multiple trading options in an environment that is simple, flexible, and reliable. Three core products — DTrader, DBot, and DMT5 — are offered alongside SmartTrader, the popular trading platform from Binary.com." />
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
                        'Multipliers that potentially offer traders higher profits while limiting risks',
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

const IsDerivRegulated = () => {
    const { is_eu, is_non_eu } = useCountryRule()
    return (
        <MaxWidth>
            <Text>
                {is_eu && (
                    <Localize
                        translate_text="Yes. Deriv.com and Binary.com are owned by the same group, which is <0>licensed and regulated</0> in many jurisdictions around the world."
                        components={[
                            <StyledLink
                                to="/regulatory/"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                )}
                {is_non_eu && (
                    <Localize
                        translate_text="Yes. Deriv.com and Binary.com are owned by the same group, which is <0>licensed and regulated</0> in many jurisdictions around the world."
                        components={[
                            <StyledLink
                                to="/regulatory/"
                                target="_blank"
                                rel="noopener noreferrer"
                                key={0}
                            />,
                        ]}
                    />
                )}
            </Text>
        </MaxWidth>
    )
}

const AreCloseDown = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="The Binary.com website will still be around for a while. In due time, we will phase out Binary.com. However, your accounts, funds, and everything you have on Binary.com will be available and accessible by you on Deriv.com." />
        </Text>
    </MaxWidth>
)

const WhySwitch = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="We’ve planned this rebranding process carefully and over many months with you, our clients, in mind. Based on the experience of serving you for the past 20 years, we’ve taken all your valuable feedback to deliver an improved experience to support your online trading journey. To guide you in this transition, we’ve prepared educational resources that will help you easily navigate around the new trading space. The demo account on Deriv.com is also available for you to explore and build confidence for the new environment." />
        </Text>
    </MaxWidth>
)

const CanStillTrade = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="Your funds will be reflected in both your Binary.com and Deriv.com accounts because they are essentially the same account. But we recommend that you try out Deriv.com now because we will gradually be phasing out Binary.com. We assure you that your favourite features are available on Deriv.com; plus, your account details, funds, and custom settings on Binary.com will be available on Deriv.com once you log in with your Binary.com credentials." />
        </Text>
    </MaxWidth>
)

const HowToGetStarted = () => (
    <MaxWidth>
        <Text>
            <Localize translate_text="It’s simple. Just go to Deriv.com and enter your existing Binary.com credentials. You’ll immediately be able to explore the new look, feel, and added functionality of Deriv.com." />
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
