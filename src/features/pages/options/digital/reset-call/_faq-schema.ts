import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize(
                '_t_Which Deriv trading platforms can I use to trade Reset Call/Reset Put contracts?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can find Reset Call/Reset Put contracts in SmartTrader and Deriv Bot, and they are available on synthetics._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How can I open a Reset Call/Reset Put contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>To open a Reset Call/Reset Put contract, you'll need to:</p><ul><li>Select your preferred trading asset.</li><li>Specify the trade duration.</li><li>Enter your stake amount or desired potential payout amount.</li><li>Select the price direction based on your market predictions.</li><li>Open your contract.</li></ul>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How does Reset Call/Reset Put work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>A Reset Call/Reset Put option provides the opportunity for the contract's entry price (also known as strike price) to be reset automatically at the midpoint of the trade duration, if the underlying asset's price moves favourably with your market prediction.</p><p>The reset spot price is set at the precise midpoint of the total trade duration. For example, if you enter a 10-hour Reset Call option, the reset would occur at the 5 hour point, and the price at that exact 5 hour mark becomes the reset spot.</p><p>If the reset spot is beneficial based on your market prediction, it replaces your original entry price (or strike price). For it to be beneficial, the reset spot needs to be:</p><ul><li>-lower than the entry price for a Reset Call contract, or</li><li>-higher than the entry price for a Reset Put contract.</li></ul> <p>Your potential payout will then depend on whether the underlying asset's exit price is higher than the reset spot price (for Reset Call) or lower than the reset spot price (for Reset Put).</p> <p>If the reset spot price is less favourable, your original contract terms remain in effect (which means, it is the contract's original entry price that is considered). The reset is automatic, but whether it is applied depends on which price (original or reset) is more optimal for a potential payout.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I exit an open Reset Call/Reset Put contract before expiry?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>No, early exits are not available for Reset Call/Reset Put contracts.</p><p>Please note that the availability of early exit from your trading position depends on the specific trade type, or it may only be available within a certain timeframe.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are the durations for Reset Call/Reset Put contracts?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Durations for Reset Call/Reset Put contracts range from 5 ticks to 120 minutes (2 hours)._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I open multiple Reset Call/Reset Put contracts with different barriers simultaneously?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple Reset Call/Reset Put contracts with different durations and different stake amounts or desired potential payouts at the same time._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_How does the Reset Call/Reset Put contract type differ from the Rise/Fall contract type?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Reset Call/Reset Put contracts offer the ability to reset the strike price at a potentially more advantageous level. In this contract, your market prediction is your contract's exit price against the reset price (instead of the entry price). Reset contract types also typically offer a lower fixed payout percentage compared to Rise/Fall contracts.</p><p> Meanwhile, Rise/Fall contracts consider the contract's exit price against the contract's entry price, based on your market prediction.</p><p>In both instances, the potential payout is fixed upon entry.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What does "reset" mean in Reset Call and Reset Put trades?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    `_t_In Reset Call and Reset Put trades, "reset" refers to the condition where the strike price is reset at the midpoint of the trade duration. This happens if the market is moving in the opposite of your market prediction. When this happens, the contract will compare your predicted direction against the reset price instead of the original spot price at the contract's expiry._t_`,
                ),
            },
        },
    ],
}
