export const faq_schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'What is DMT5?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is DTrader?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'DTrader is an advanced trading platform that allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is DBot?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    "DBot is a web-based strategy builder for trading digital options. It’s a platform where you can build your own trading bot using drag-and-drop 'blocks'.",
            },
        },
        {
            '@type': 'Question',
            name: 'What are the major differences between DTrader and DMT5?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.\n\nDMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.',
            },
        },
        {
            '@type': 'Question',
            name:
                'What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.\n\nThe DMT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.\n\nThe DMT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.',
            },
        },
        {
            '@type': 'Question',
            name: 'What markets can I trade on DTrader?',
            acceptedAnswer: {
                '@type': 'Answer',
                text:
                    'You can trade forex, stock indices, commodities, and synthetic indices on DTrader.',
            },
        },
    ],
}
