import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade lookbacks on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade lookbacks on the SmartTrader trading platform on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do I place a lookbacks trade?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<ul><li>Select your preferred trading instrument.</li><li>Choose the type of lookback option you want to trade (High-Close; Close-Low; High-Low).</li><li>Enter your preferred contract duration.</li><li>Choose the multiplier by which you want your potential payout to grow.</li><li>Make your market prediction.</li><li>Place your trade.</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do lookbacks contracts work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The lookbacks options contract allows you to speculate on the spread between 2 price points reached by an underlying asset over a specified period. Lookbacks payouts are based on a multiplier applied to the difference between those selected price points._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I close a lookbacks contract before the expiry time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, you cannot close a lookbacks contract before its expiry. However, you can choose your preferred contract duration or expiry time before you open a trade._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I customise a lookbacks contract time period?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can customise the time your lookbacks contract. You can select any time period from 1 to 30 minutes._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I enter multiple lookbacks contracts simultaneously?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple contracts at the same time to take advantage of market opportunities._t_',
                ),
            },
        },
    ],
}
