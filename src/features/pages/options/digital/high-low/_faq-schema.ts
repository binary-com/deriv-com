import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Are High/Low Ticks options available on Deriv Trader?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, the High/Low Ticks options are only available on the SmartTrader and Deriv Bot trading platforms, and are available to trade on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How can I place a High/Low Ticks trade?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Here's how to place a High/Low Ticks trade:</p><ul><li>Choose your preferred trading asset.</li><li>Predict which of the next 5 ticks will be the highest or lowest in the series.</li><li>Enter your stake or preferred potential payout amount.</li><li>Open your trade.</li></ul>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do High/Low Ticks contracts work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_To trade High/Low Ticks, all you need to do is predict which of the next 5 ticks within the contract period is the highest or lowest in the series._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I close a High/Low Ticks contract before the contract expires?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, you cannot close a High/Low Ticks contract before it expires as the contract considers the highest or lowest tick in a 5-tick contract duration._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I change the tick duration for the High/Low Ticks contract type?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, you cannot change the tick duration for High/Low Ticks. This contract type is always based on the next 5 price ticks after the contract is open. This is fixed across all instruments that can be traded with this contract type._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I enter many High/Low Ticks contracts at the same time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you are allowed to enter multiple High/Low Ticks contracts at the same time._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Is High/Low Ticks the same contract type as Higher/Lower?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>No, these are two different contract types.</p><p>With High/Low Ticks, you predict which of the 5 ticks within the trade duration will be the highest or lowest.</p><p>With Higher/Lower, you predict the overall price direction of a trading instrument over a specified time period.</p>_t_',
                ),
            },
        },
    ],
}
