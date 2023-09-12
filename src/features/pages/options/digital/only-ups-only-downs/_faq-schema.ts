import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Are Only Ups/Only Downs available to trade on Deriv Trader?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Only Ups/Only Downs are currently only available on the Deriv Bot and SmartTrader trading platforms. These options contracts can be traded on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do I open an Only Ups/Only Downs contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<ul><li>Choose the instrument you want to trade.</li><li>Select the duration of your contract.</li><li>Enter your stake or desired potential payout.</li><li>Predict the price direction of the instrument.</li><li>Open your contract.</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do Only Ups/Only Downs contracts work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Only Ups/Only Downs contracts allow you to make market predictions speculating the direction of an underlying asset's price movements.</p><p>If you choose an Only Ups contract, you will win a potential payout if the price only increases during the selected time period.</p><p>If you choose an Only Downs contract, you will win a potential payout if the price only decreases during the selected time period.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I exit an Only Ups/Only Downs contract before it expires?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize('_t_No, you cannot exit the contract before it expires._t_'),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I customise the duration for an Only Ups/Only Downs contract?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can customise the trade duration of your Only Ups/Only Downs contracts. The available time periods range from 2 ticks to 5 ticks._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I open multiple Only Ups/Only Downs contracts at the same time?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can enter multiple contracts with varying parameters at the same time._t_',
                ),
            },
        },
    ],
}
