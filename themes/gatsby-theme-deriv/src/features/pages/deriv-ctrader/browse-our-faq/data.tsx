import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { DerivPrimeFAQDataItem } from 'features/pages/partners/deriv-prime/browse-our-faq/types'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import Login from 'common/login'

const handleLogin = () => {
    Login.redirectToLogin()
}

export const ctrader_faq_data: DerivPrimeFAQDataItem[] = [
    {
        id: 1,
        question: '_t_What is Deriv cTrader?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Deriv cTrader is an easy-to-use multi-asset CFD trading platform with many features that new and experienced traders can enjoy._t_',
            },
        ],
    },
    {
        id: 2,
        question: '_t_What markets can I trade on Deriv cTrader?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_You can trade forex, stocks, stock indices, commodities, cryptocurrencies, ETFs, and derived indices on Deriv cTrader._t_',
            },
        ],
    },
    {
        id: 3,
        question: '_t_How do I add a Deriv cTrader account?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Follow these steps:_t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_1. <0>Log in</0> to your Deriv account._t_',
                components: [<Typography.Link textcolor="brand" key={0} onClick={handleLogin} />],
            },
            {
                id: 3,
                type: 'text',
                text: '_t_2. Select <strong>Demo</strong> (to practise with virtual money) or <strong>Real</strong> (to trade with real money)._t_',
            },
            {
                id: 4,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/traders-hub-real.png"
                            alt="step"
                            loading="eager"
                            width={190}
                            height={86}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 5,
                type: 'text',
                text: '_t_3. Under <strong>CFDs</strong>, look for <strong>Deriv cTrader</strong> and hit <strong>Get</strong>._t_',
            },
            {
                id: 6,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-get.png"
                            alt="step"
                            loading="eager"
                            width={368}
                            height={74}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 7,
                type: 'text',
                text: '_t_4. Your new Deriv cTrader account is ready._t_',
            },
        ],
    },
    {
        id: 4,
        question: '_t_How do I log in to my Deriv cTrader account?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Follow these steps:_t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_1. <0>Log in</0> to your Deriv account._t_',
                components: [<Typography.Link textcolor="brand" key={0} onClick={handleLogin} />],
            },
            {
                id: 3,
                type: 'text',
                text: '_t_2. Select <strong>Demo</strong> (to practise with virtual money) or <strong>Real</strong> (to trade with real money)._t_',
            },
            {
                id: 4,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/traders-hub-demo.png"
                            alt="step"
                            loading="eager"
                            width={190}
                            height={86}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 5,
                type: 'text',
                text: '_t_3. Under <strong>CFDs</strong>, look for <strong>Deriv cTrader</strong> and hit <strong>Trade</strong>._t_',
            },
            {
                id: 6,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-trade.png"
                            alt="step"
                            loading="eager"
                            width={368}
                            height={74}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 7,
                type: 'text',
                text: '_t_4. You can trade via the desktop app, web terminal, or mobile app._t_',
            },
            {
                id: 8,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-desktop-app.png"
                            alt="step"
                            loading="eager"
                            width={200}
                            height={193}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
        ],
    },
    {
        id: 5,
        question: '_t_How do I make deposits into my Deriv cTrader account?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Follow these steps:_t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_1. <0>Log in</0> to your Deriv account._t_',
                components: [<Typography.Link textcolor="brand" key={0} onClick={handleLogin} />],
            },
            {
                id: 3,
                type: 'text',
                text: '_t_2. Select <strong>Real</strong>._t_',
            },
            {
                id: 4,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/traders-hub-real.png"
                            alt="step"
                            loading="eager"
                            width={190}
                            height={86}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 5,
                type: 'text',
                text: '_t_3. Under <strong>CFDs</strong>, look for <strong>Deriv cTrader</strong> and hit <strong>Transfer</strong>._t_',
            },
            {
                id: 6,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-trade.png"
                            alt="step"
                            loading="eager"
                            width={368}
                            height={74}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 7,
                type: 'text',
                text: '_t_4. Using the drop-down menus, select your Deriv account as the <strong>From</strong> account and your Deriv cTrader account as the <strong>To</strong> account. Then, enter the <strong>amount</strong> and hit <strong>Transfer</strong>._t_',
            },
            {
                id: 8,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-transfer-menu.png"
                            alt="step"
                            loading="eager"
                            width={200}
                            height={175}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 9,
                type: 'text',
                text: '_t_5. Your funds will be available in your Deriv cTrader account immediately._t_',
            },
        ],
    },
    {
        id: 6,
        question: '_t_How do I make withdrawals from my Deriv cTrader account?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Follow these steps:_t_',
            },
            {
                id: 2,
                type: 'text',
                text: '_t_1. <0>Log in</0> to your Deriv account._t_',
                components: [<Typography.Link textcolor="brand" key={0} onClick={handleLogin} />],
            },
            {
                id: 3,
                type: 'text',
                text: '_t_2. Select <strong>Real</strong>._t_',
            },
            {
                id: 4,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/traders-hub-real.png"
                            alt="step"
                            loading="eager"
                            width={190}
                            height={86}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 5,
                type: 'text',
                text: '_t_3. Under <strong>CFDs</strong>, look for <strong>Deriv cTrader</strong> and hit <strong>Transfer</strong>._t_',
            },
            {
                id: 6,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-trade.png"
                            alt="step"
                            loading="eager"
                            width={368}
                            height={74}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 7,
                type: 'text',
                text: '_t_4. Using the drop-down menus, select your Deriv cTrader account as the <strong>From</strong> account and your Deriv account as the <strong>To</strong> account. Then, enter the <strong>amount</strong> and hit <strong>Transfer</strong>._t_',
            },
            {
                id: 8,
                type: 'custom_component',
                component: (
                    <Flex.Box margin_block="5x">
                        <StaticImage
                            src="../../../../images/common/ctrader/ctrader-withdrawal.png"
                            alt="step"
                            loading="eager"
                            width={200}
                            height={179}
                            formats={['avif', 'webp', 'auto']}
                            quality={100}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </Flex.Box>
                ),
            },
            {
                id: 9,
                type: 'text',
                text: '_t_5. Your funds will be available in your Deriv account immediately._t_',
            },
        ],
    },
    {
        id: 7,
        question: '_t_What’s the minimum amount to open a position on Deriv cTrader?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_This depends on the margin required for each asset. You’ll be able to see the required margin for each asset before opening your position._t_',
            },
        ],
    },
    {
        id: 8,
        question: '_t_Does Deriv cTrader offer any risk-management tools?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_Yes, Deriv cTrader offers stop loss, take profit, pending orders, and other risk-management tools._t_',
            },
        ],
    },
    {
        id: 8,
        question: '_t_How do I get started as a copier?_t_',
        answers: [
            {
                id: 1,
                type: 'text',
                text: '_t_In the <strong>Copy</strong> tab of your Deriv cTrader account, search for strategy providers. Pick your favourite strategies, allocate funds, and start copy trading._t_',
            },
        ],
    },
]
