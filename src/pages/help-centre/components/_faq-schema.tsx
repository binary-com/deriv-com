import { localize } from 'components/localization'

type TAcceptedAnswer = {
    '@type': string
    text: string
}

type TMainEntity = {
    '@type': string
    name: string
    acceptedAnswer: TAcceptedAnswer
    acceptedAnswerEU?: TAcceptedAnswer
}[]

type TFaqSchemaData = {
    '@context': string
    '@type': string
    mainEntity: TMainEntity
}

const faq_schema: TFaqSchemaData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_What is Deriv MT5?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Deriv MT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is Deriv X?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Deriv X is an easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is Deriv Trader?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Deriv Trader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is DBot?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'._t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are the major differences between DTrader and Deriv MT5?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The Deriv MT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.<br />The Deriv MT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.<br />The Deriv MT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party._t_',
                ),
            },
            acceptedAnswerEU: {
                '@type': 'Answer',
                text: localize(
                    '_t_DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.<br />Deriv MT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What are the differences between the Deriv MT5 Standard, Advanced, and Synthetic Indices accounts?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The Deriv MT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility._t_',
                ),
            },
            acceptedAnswerEU: {
                '@type': 'Answer',
                text: localize(
                    '_t_The Deriv MT5 Financial account offers you leverage to trade contracts for difference (CFDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What markets can I trade on DTrader?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade forex, stock indices, commodities, and synthetic indices on DTrader._t_',
                ),
            },
        },
    ],
}

export default faq_schema
