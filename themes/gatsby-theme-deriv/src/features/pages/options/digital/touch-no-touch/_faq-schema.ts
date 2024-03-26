import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade Touch/No Touch options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade Touch/No Touch options on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms. They are available on multiple markets — forex, commodities, stock indices, and synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do I open a Touch/No Touch contract on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Here's how to open a Touch/No Touch contract:</p><ul><li>Choose an instrument to trade.</li><li>Set the duration of your contract.</li><li>Set your preferred barrier.</li><li>Enter your stake or desired potential payout.</li><li>Place your trade.</li></ul>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do Touch/No Touch contracts work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_With Touch/No Touch contracts, you predict whether the market price of the underlying instrument touches or does not touch a predetermined barrier at any time during a specified contract period._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Will my contract close automatically if the market price touches the barrier at any time during the "Touch" contract period?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>Yes, your contract will close automatically if the market price touches the selected barrier at any time during the contract period, no matter which contract type you are trading.</p><p>If you are trading a "Touch" contract and the market price touches the selected barrier, the contract will close and you will win the potential payout.</p><p>On the other hand, if you are trading a "No Touch" contract and the market price touches the selected barrier, the contract will close and you will lose your stake.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I choose the duration of a Touch/No Touch contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can select the duration of your Touch/No Touch contract. You can choose to open a contract for as short as 5 ticks to as long as 365 days (depending on the trading asset selected)._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open multiple Touch/No Touch contracts at the same time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple contracts with different parameters simultaneously._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Why does the "Touch" contract have a higher potential payout amount compared to the "No Touch" contract?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>The predicted payout is actually based on the barrier that is selected.</p><p>If the selected barrier is far from the current price of the underlying instrument, the probability of the spot price touching the barrier in a "Touch" contract is lower compared to a "No Touch" contract. In this scenario, the potential payout amount for a "Touch" contract is higher.</p><p>If the selected barrier is close to the current price of the underlying instrument, the probability of the spot price touching the barrier in a "Touch" contract is higher compared to a "No Touch" contract. In this scenario, the potential payout amount for a "Touch" contract is lower.</p><p>The potential payout and loss (your initial stake) amounts are clearly displayed before you open the trade.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is the price barrier in Touch/No Touch contracts?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>The price barrier in Touch/No Touch contracts refers to the specified price level that the underlying instrument's price needs to touch or not touch during the contract duration.</p><p>It acts as a reference point to determine the trade's outcome.</p><p>The potential payout percentage varies and depends on the barrier level selected as well as the probability of the condition being met at any time during the contract duration.</p>_t_",
                ),
            },
        },
    ],
}
