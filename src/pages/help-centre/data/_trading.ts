import Derived from '../components/_derived'
import { TQuestionsData } from './_data-types'
import { binary_bot_url, deriv_app_url, oauth_url } from 'common/constants'

const trading: TQuestionsData = {
    section: 'General',
    category: '_t_Trading_t_',
    questions: [
        {
            question: '_t_What is forex?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-is-forex',
            answer: [
                {
                    translation_text:
                        '_t_Foreign exchange, or forex, is the global market of the world’s currencies, where the values of different currencies are pitted against each other in the form of forex pairs, such as EUR/USD, AUD/JPY, etc. The forex market determines the exchange rates of each currency._t_',
                },
                {
                    translation_text:
                        '_t_Read <0>this article</0> to learn more about trading forex on Deriv._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://academy.deriv.com/blog/posts/what-is-forex-live-trading/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What are commodities?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-are-commodities',
            answer: [
                {
                    translation_text:
                        '_t_A commodity is either grown or produced naturally in the environment, such as agricultural products, livestock, crude oil, and precious metals like gold and silver._t_',
                },
                {
                    translation_text:
                        '_t_Read <0>this article</0> to learn more about trading commodities on Deriv._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://academy.deriv.com/blog/posts/what-are-commodities/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What are stock indices?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-are-stock-indices',
            answer: [
                {
                    translation_text:
                        '_t_Stock indices measure the value of a group of companies in the stock market. This allows investors to see how a particular set of assets is performing._t_',
                },
                {
                    translation_text:
                        '_t_Read <0>this article</0> to learn more about trading stocks on Deriv._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://academy.deriv.com/blog/posts/what-are-stocks-how-and-where-to-trade-them/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What is derived?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-is-derived',
            renderProp: Derived,
        },
        {
            question: '_t_What are contracts for difference (CFDs)?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-are-cfds',
            answer: [
                {
                    translation_text:
                        "_t_CFDs let you predict the price movement of underlying assets without actually owning them. With CFDs, you open a position based on your prediction, and you'll earn a profit if you close your position when the price moves in your favour._t_",
                },
                {
                    translation_text:
                        '_t_Read <0>this article</0> to learn more about trading CFDs on Deriv._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://academy.deriv.com/blog/posts/what-is-cfd-trading/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What are digital options?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-are-digital-options',
            hide_for_eu: true,
            answer: [
                {
                    translation_text:
                        "_t_Digital options allow you to predict the price movement of underlying assets without actually owning them. With digital options, you open a position based on your prediction, with a set duration that closes your position automatically. You'll earn a profit if your position is closed when the price is in your favour._t_",
                },
            ],
        },
        {
            question: '_t_How many trading platforms do you offer?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            label: 'how-many-trading-platforms',
            answer: [
                {
                    translation_text:
                        '_t_We have a diverse suite of 6 trading platforms: <0>Deriv MT5</0>, <1>Deriv X</1>, <2>DTrader</2>, <3>DBot</3>, <4>SmartTrader</4>, and <5>Binary Bot</5>. Each of these platforms is designed to fit any trading style, regardless of your trading experience._t_',
                    eu_translation_text:
                        '_t_We offer two trading platforms in the EU: <0>Deriv MT5</0> and <2>DTrader</2>. Each of these platforms is designed to fit any trading style, regardless of your trading experience._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/dmt5/' },
                        { key: 1, type: 'link', to: '/derivx/' },
                        { key: 2, type: 'link', to: '/dtrader/' },
                        { key: 3, type: 'link', to: '/dbot/' },
                        {
                            key: 4,
                            type: 'link',
                            to: 'https://smarttrader.deriv.com/en/trading.html',
                        },
                        { key: 5, type: 'link', to: binary_bot_url },
                    ],
                },
                {
                    translation_text:
                        '_t_Note: DBot, SmartTrader, and Binary Bot are not available in the EU and UK._t_',
                    eu_translation_text: '_t_ _t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How can I automate my trading strategy?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            hide_for_non_eu: true,
            label: 'how-to-automate-trading-strategy',
            answer: [
                {
                    translation_text:
                        '_t_You can automate your trading strategy using a trading bot. A trading bot is an automated computer program that purchases trade contracts for you while following a specific set of instructions that you provide._t_',
                },
                {
                    translation_text:
                        '_t_Build your trading bot for free on <0>DBot</0> or <1>Binary Bot</1>; no coding is needed. You’ll also find free pre-built strategies on DBot that you can customise to your needs._t_',
                    eu_translation_text: '_t_ _t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/dbot/' },
                        { key: 1, type: 'link', to: binary_bot_url },
                    ],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Read <0>this article</0> to learn more about automated trading on Deriv._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://academy.deriv.com/blog/posts/automated-trading-what-you-need-to-know/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How can I automate my trading strategy?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            hide_for_eu: true,
            label: 'how-to-automate-trading-strategy',
            answer: [
                {
                    translation_text:
                        '_t_Use a trading bot for automating your trading strategy. A trading bot is an automated computer program that purchases trade contracts for you while following a specific set of instructions that you provide. Build your trading bot for free on DBot or Binary Bot; no coding is needed. You’ll also find 3 free pre-built strategies on DBot that you can customise to your needs._t_',
                },
            ],
        },
        {
            question: '_t_What are the trading limits on my account?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            hide_for_non_eu: true,
            label: 'trading-limits',
            answer: [
                {
                    translation_text:
                        '_t_Trading limits are only applicable to your Deriv real account. You can see the limits on your account on the <0>Account limits</0> page (you must be <1>logged in</1>)._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/account-limits` },
                        {
                            key: 1,
                            type: 'link',
                            to: `${oauth_url}/oauth2/authorize?app_id=16929`,
                        },
                    ],
                },
            ],
        },
        {
            question: '_t_What are the trading limits on my account?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            hide_for_eu: true,
            label: 'trading-limits',
            answer: [
                {
                    translation_text:
                        '_t_To see your account’s trading limits, go to Settings > Security and safety > <0>Account limits</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: `${deriv_app_url}/account/account-limits` },
                    ],
                },
            ],
        },
        {
            question: '_t_What assets are available for trading on weekends?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            label: 'contracts-available-on-weekends',
            answer: [
                {
                    translation_text:
                        '_t_Synthetic indices and cryptocurrencies are available for trading 24/7._t_',
                },
            ],
        },
        {
            question: '_t_What are multipliers?_t_',
            category: 'trading',
            sub_category: '_t_Platforms_t_',
            hide_for_non_eu: true,
            label: 'what-are-multipliers',
            answer: [
                {
                    translation_text:
                        '_t_Multipliers (also known as multiplier options) is a trade type that gives you an opportunity to amplify your profit without risking more than your stake. To find out more, visit <0>the Multipliers page</0>._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/trade-types/multiplier' },
                    ],
                },
            ],
        },
        {
            question: '_t_What are multipliers?_t_',
            category: 'trading',
            sub_category: '_t_Platforms_t_',
            hide_for_eu: true,
            label: 'what-are-multipliers',
            answer: [
                {
                    translation_text:
                        "_t_Deriv <0>multipliers</0> combines the upside of leverage trading without the downside of losing more than your stake. This means that when the market moves in your favour, you'll multiply your potential profits. If the market moves against your prediction, your losses are limited only to your stake. To find out more, visit the <0>Multipliers</0> page._t_",
                    translation_components: [
                        { key: 0, type: 'link', to: '/trade-types/multiplier' },
                    ],
                },
            ],
        },
        {
            question: '_t_How do I trade multipliers?_t_',
            category: 'trading',
            sub_category: '_t_Platforms_t_',
            label: 'how-trade-multipliers',
            answer: [
                {
                    translation_text:
                        '_t_Watch <0>this video</0> to know more about trading multipliers._t_',
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: 'https://www.youtube.com/watch?v=viS-dhJuHek&t=1s&ab_channel=Deriv',
                        },
                    ],
                },
            ],
        },
    ],
}

export default trading
