import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_How can I open a turbo options trade on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>To place a turbo options trade on Deriv, you’ll need to:</p><ul><li>Select the underlying asset you want to trade.</li><li>Choose your preferred contract duration or end time.</li><li>Select Long or Short depending on your market predictions.</li><li>Determine a trade barrier.</li> <li>Enter your stake amount.</li><li>Open your contract.</li></ul>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I buy or sell turbo options on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Currently, you can only buy Long and Short turbo options contracts on Deriv._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How do turbo options work?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>When you open a turbo options contract, you’ll pay an initial stake amount. This is the cost of entering the turbo options trade. You’ll also need to determine a trade barrier. The spot price must not touch or breach this barrier throughout your contract duration, otherwise your contract will be terminated early without any gains.</p><p>If the spot price never touches or breaches your predetermined barrier, you will receive a potential payout based on the movement of the underlying asset, when your contract expires.</p><p>Please bear in mind that if you decide to manually terminate the trade early (before expiry), you will be charged an additional exit fee. Additionally, early termination less than 15 seconds before expiry is not possible.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is payout per point?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>Payout per point indicates the potential payout you will receive at the contract’s expiry for every point above or below your predetermined barrier.</p><p>This amount is calculated based on your stake and the barrier you have selected.</p><p>For Long turbo options, the payout per point indicates the amount of potential payout you gain for each point above the barrier, at the contract’s expiry.</p><p>For Short turbo options, the payout per point indicates the amount of potential payout you gain for each point below the barrier, at the contract’s expiry.</p><p>Please note that this payout amount does not equal the potential profit. You‘ll only earn profit once this amount exceeds your stake amount. In case the spot price touches or breaches the barrier, your contract is terminated and you will not receive a payout.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade turbo options on Deriv?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade turbo options on the Deriv Trader trading platform, on volatility indices under Deriv’s derived indices._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open multiple turbo options contracts simultaneously?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can open multiple turbo options contracts at the same time._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is the maximum I can lose when I trade turbo options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_The maximum you can lose is the initial stake amount that you pay when you open a turbo options contract._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I adjust or remove the barrier once a position is open?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, the trade barrier can only be set before you open a contract. Once your turbo options contract is opened, the barrier cannot be changed._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How are payouts calculated for different stake amounts?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>The higher your stake amount, the higher the payout per point.</p><p>This means that the potential payout amount you’ll receive at your contract’s expiry will be higher for every point between the barrier and the spot price, as long as the barrier is not touched or breached throughout the contract duration.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How are payouts calculated for different barriers?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>The closer the barrier is to the spot price, the higher the chance for your turbo options contract to expire worthless (which means, your contract will expire without any payout or profit).</p><p>Deriv offers a higher potential payout per point to compensate for this risk. The amount you’ll potentially receive at your contract’s expiry will be higher for every point above or below the barrier, as long as the barrier is not touched or breached throughout the contract duration.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I close a turbo options contract before the end of the contract duration?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can only close time-based contracts up to 15 seconds before the contract duration expires. If you have opened a tick-based contract, you cannot close your position before it expires._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What are the different contract durations available for turbo options?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can open turbo options contracts with trade durations of 5 to 10 ticks, or from 15 seconds up to 365 days._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What is the difference between turbo and vanilla options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>With turbo options, you need to define a barrier before opening a contract. If the spot price touches or breaches this barrier at any time throughout the contract duration, your contract will expire worthless. This means that you will not receive a payout and will lose your initial stake amount. To compensate for this risk, turbo options will have a higher payout per point and potential payout, depending on how far the selected barrier is from the opening spot price. Another difference to note is that trading turbo options carries more risk than trading vanilla options.</p><p>With vanilla options, there are no barriers involved and your potential payout is determined by how much the final price is above or below the predetermined strike price.</p>_t_',
                ),
            },
        },
    ],
}
