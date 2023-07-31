import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize(
                '_t_Which Deriv trading platforms can I use to trade Digits contracts?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade Digits contracts on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms, on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are the steps to open a Digits trade on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<ol><li>Select the market and asset you want to trade.</li><li>Choose which Digits contract to open (Matches/Differs; Even/Odd; Over/Under).</li><li>Set your preferred tick duration and last digit prediction.</li><li>Enter your stake or desired potential payout amount. </li><li>Open your Digits trade.</li></ol>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I close a Digits contract before the expiry time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, the trade types allow you to choose the duration or expiry time but the contract will be held till the end of duration or expiry selected._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are Digits contracts?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>With a Digits contract, you predict whether the last digit of the last tick of your contract will meet specified criteria, depending on the contract type you select.</p><p>If you trade a Matches/Differs contract, you predict whether the last digit will match or be different from a selected number.</p><p>If you trade an Even/Odd contract, you predict whether the last digit will be an even or odd number.</p><p>If you trade an Over/Under contract, you predict whether the last digit will be over or under a specific number.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What are the contract duration ranges for Digits contract types?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The contract durations range from 1 tick up to 10 ticks, depending on your selected trading asset and market conditions._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I trade multiple Digits contracts simultaneously?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes. Given the contract types available, you can trade multiple Digits simultaneously, depending on your trading strategy. You can open separate trades for different digits and take advantage of different market predictions within the same timeframe._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Why does the "Matches" contract have a higher predicted payout compared to "Differs"?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    `_t_<p>This is because to win a Digits "Matches" contract, the number you choose must exactly match the last digit of your contract's last tick. Since the probability of this outcome is lower (with possible digits ranging from 0 to 9), the potential payout is higher.</p><p>With a Digits "Differs" contract, there is a higher chance that the last digit of your contract's last tick will be different, so potential payouts are lower.</p><p>Payouts for all potential outcomes are calculated based strictly on the probabilities of each occurring at the time the trade is placed.</p>_t_`,
                ),
            },
        },
    ],
}
