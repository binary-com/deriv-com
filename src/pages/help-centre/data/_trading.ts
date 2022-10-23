import { ArticlesDataType } from './_data-types'
import { deriv_app_url } from 'common/constants'

const trading_data: ArticlesDataType = {
    section: 'General',
    category: '_t_Trading_t_',
    articles: [
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
                            to: '/academy/blog/posts/what-is-forex-live-trading/',
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
                            to: '/academy/blog/posts/what-are-commodities/',
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
                            to: '/academy/blog/posts/what-are-stocks-how-and-where-to-trade-them/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What is Derived?_t_',
            category: 'Trading',
            sub_category: '_t_Markets_t_',
            label: 'what-is-derived',
            answer: [
                {
                    translation_text:
                        '_t_Derived indices consist of asset prices generated from real-world and simulated markets and indices, with little to no influence from real-world events.  You can trade from a variety of derived indices, including synthetic indices, derived FX indices, and basket indices._t_',
                },
                {
                    translation_text:
                        "_t_Available 24/7, our synthetic indices emulate price movements of real-world markets with varying levels of volatility. As they aren't based on actual underlying assets, they are unaffected by real-world market events. The pricing of our synthetic indices is backed by algorithms that are audited for fairness by an independent third party. Read <0>this article</0> to learn more about trading synthetic indices on Deriv._t_",
                    translation_components: [
                        {
                            key: 0,
                            type: 'link',
                            to: '/academy/blog/posts/an-introduction-to-synthetic-indices-trading/',
                        },
                    ],
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Derived FX indices are simulated assets with prices derived from the price movements of real major forex pairs. Our algorithms track real-world currency prices and dampen fluctuations caused by news events and market sentiment. Plus, you can choose to trade them at the volatility you prefer._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_With basket indices, you can trade your favourite asset against a basket of five major global currencies, each weighted by 20%._t_',
                    has_margin_top: true,
                },
                {
                    translation_text:
                        '_t_Due to regulatory requirements, derived indices are unavailable in some countries. Refer to ‘Product offering’ in our <0>terms of use</0> for more info._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/tnc/general-terms.pdf' },
                    ],
                    has_margin_top: true,
                },
            ],
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
                            to: '/academy/blog/posts/what-is-cfd-trading/',
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
                        { key: 5, type: 'link', to: 'https://bot.deriv.com/' },
                    ],
                },
                {
                    translation_text:
                        '_t_Note: DBot, SmartTrader, and Binary Bot are not available in the EU and UK._t_',
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_How can I automate my trading strategy?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
            label: 'how-to-automate-trading-strategy',
            answer: [
                {
                    translation_text:
                        '_t_You can automate your trading strategy using a trading bot. A trading bot is an automated computer program that purchases trade contracts for you while following a specific set of instructions that you provide._t_',
                },
                {
                    translation_text:
                        '_t_Build your trading bot for free on <0>DBot</0> or <1>Binary Bot</1>; no coding is needed. You’ll also find free pre-built strategies on DBot that you can customise to your needs._t_',
                    translation_components: [
                        { key: 0, type: 'link', to: '/dbot/' },
                        { key: 1, type: 'link', to: 'https://bot.deriv.com/' },
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
                            to: '/academy/blog/posts/automated-trading-what-you-need-to-know/',
                        },
                    ],
                    has_margin_top: true,
                },
            ],
        },
        {
            question: '_t_What are the trading limits on my account?_t_',
            category: 'Trading',
            sub_category: '_t_How to trade_t_',
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
                            to: 'https://oauth.deriv.com/oauth2/authorize?app_id=16929',
                        },
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
    ],
}

export default trading_data
