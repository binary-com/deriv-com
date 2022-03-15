import { localize } from 'components/localization'

type AcceptedAnswerType = {
    '@type': string
    text: string
}

type MainEntityType = {
    '@type': string
    name: string
    acceptedAnswer: AcceptedAnswerType
    acceptedAnswerEU?: AcceptedAnswerType
}

type FaqSchemaType = {
    '@context': string
    '@type': string
    mainEntity: MainEntityType[]
}

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('What is DMT5?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('What is Deriv X?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'Deriv X is an easy-to-use trading platform where you can trade CFDs on various assets on a platform layout that you can customise according to your preference.',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('What is DTrader?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('What is DBot?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'.",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('What are the major differences between DTrader and DMT5?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.<br />The DMT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.<br />The DMT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.',
                ),
            },
            acceptedAnswerEU: {
                '@type': 'Answer',
                text: localize(
                    'DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.<br />DMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                'What are the differences between the DMT5 Standard, Advanced, and Synthetic Indices accounts?',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.',
                ),
            },
            acceptedAnswerEU: {
                '@type': 'Answer',
                text: localize(
                    'The DMT5 Financial account offers you leverage to trade contracts for difference (CFDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies.',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('What markets can I trade on DTrader?'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    'You can trade forex, stock indices, commodities, and synthetic indices on DTrader.',
                ),
            },
        },
    ],
}
