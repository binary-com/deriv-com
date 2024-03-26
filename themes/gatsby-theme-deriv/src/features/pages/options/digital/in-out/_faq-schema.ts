import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Are In/Out options available on Deriv Trader?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, In/Out options are only available on the SmartTrader and Deriv Bot trading platforms. They are available to trade on a range of markets such as forex, derived indices, stock indices, and commodities._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do I place an In/Out trade on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>You can place an In/Out trade by: </p><ul><li>Choosing your preferred instrument to trade. </li><li>Specifying the duration of the trade </li><li>Setting the upper and lower price boundaries.</li><li>Entering your stake or preferred potential payout amount.</li><li>Placing the trade.</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are In/Out contracts?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The In/Out contract types allow you to speculate whether the market price of the underlying asset stays within or goes outside of predetermined barriers during the contract period or at the end of the contract period._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I close In/Out options before the end of the trade duration?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_No, you cannot close an In/Out options trade before the trade duration's expiry. This is because the potential payout is defined based on the contract duration, selected barrier, and stake._t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I customise the duration of my In/Out contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can choose the duration of your In/Out contract by setting a preferred duration or end time. You can set your contract from as short as 2 minutes to 365 days._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I open multiple In/Out contracts with different parameters at the same time?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple In/Out contracts with different barrier limits at the same time._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What are the upper and lower price boundaries in In/Out options?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The upper and lower price boundaries in the In/Out trade type define the range within which the price of the underlying assets must either stay in or go out of for the trade to be considered won._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How are payouts calculated for In/Out options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>Payouts for all In/Out contracts are fixed, based on:</p><ul><li>Trade duration</li><li>Barrier levels</li><li>Market conditions</li></ul><p> For "Ends Between" trades with wider barriers, the price of the underlying asset has more room to fluctuate while still ending the contract inside the barriers. In this scenario, potential payouts are usually lower due to the higher probability of the price staying between the barriers.</p><p>With narrower barriers, the price has less room to move. So, potential payouts are often higher due to a lower probability of the price staying between the barriers.</p>_t_',
                ),
            },
        },
    ],
}
