import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_How do I place a vanilla options trade?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>To place a vanilla options contract, you’ll need to:</p><ul><li>Select the underlying asset you want to trade.</li><li>Determine your contract duration or end time.</li><li>Predict the asset’s price movement by choosing Call or Put.</li><li>Select your preferred strike price</li><li>Enter your stake.</li><li>Purchase the contract</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I buy and sell vanilla options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Currently, you can only buy vanilla call and put options on Deriv._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How are vanilla options contracts settled?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>When you purchase a contract, you’ll pay a stake (also known as an option premium). This is the cost of entering a vanilla options trade.</p><p>If your market predictions are right within the contract period, you will receive a payout that is equivalent to the asset’s movement when the contract ends (or upon early termination).</p><p>If you decide to manually terminate the trade early (before the contract’s expiry), you will be charged an additional exit fee. Please note that it is not possible to terminate a contract with less than 15 seconds before expiry.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is payout per point?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Payout per point indicates the payout you will receive for each point above or below the strike price (which is selected before you enter the contract) within the contract period. This amount will depend on your stake.</p><p>For Call options, payout per point indicates the amount of payout you’ll gain for each point above the predetermined strike price, at the contract's expiry.</p><p>For Put options, payout per point indicates the amount of payout you’ll gain for each point below the predetermined strike price, at the contract's expiry.</p><p>Please note that this payout does not equal to potential profit. You'll only earn potential profit once the payout amount exceeds your stake amount.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade vanilla options on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade vanilla options on Deriv Trader. They are offered on volatility indices._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open multiple vanilla options contracts at the same time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple vanilla options contracts at the same time, depending on your options trading strategies._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Are vanilla options available on Deriv Bot?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, vanilla options are not currently available on the Deriv Bot trading platform._t_',
                ),
            },
        },
    ],
}
