import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_Where can I trade Up/Down options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_You can trade Up/Down options on the Deriv Trader, SmartTrader, and Deriv Bot trading platforms. They are available to trade on forex, stock indices, commodities, and derived indices._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_How can I open an Up/Down contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>To open a Up/Down contract, you'll need to:</p> <ul><li> Select your preferred market and trading asset.</li><li>Choose the type of Up/Down option you want to trade (Rise/Fall; Rise Equals/Falls Equals; Higher/Lower).</li><li>Set other optional contract parameters.</li><li> Choose the contract duration.</li><li> Enter your stake or preferred potential payout amount.</li><li> Open your contract.</li></ul>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_What are Up/Down options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Up/Down options are divided into two types:</p><p>Rise/Fall contracts, where you make a market prediction on whether your contract's exit price has risen or fallen by the end of the contract period. If you trade with the Allows Equals requirement, you're predicting that the contract's exit price can also be equal to the entry price.</p><p>Higher/Lower contracts, where you set a barrier before opening your contract and make a market prediction on whether the underlying asset's price is higher or lower than the predetermined barrier at the end of the contract period.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I close an open position before expiry?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>Yes, you can close an open Ups/Downs position before its expiry regardless of trade duration.</p><p>However, it is important to note that the availability of early exit may vary depending on the specific trade type. Some trade types may have restrictions or it may only be available within a certain timeframe.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Can I select the duration or expiry time for Rise/Fall and Higher/Lower trades?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Yes, both trade types allow you to choose the trade duration or expiry time. You'll just need to select the timeframe within which you expect the asset's price to move in your predicted direction.</p><p>For Rise/Fall, contract durations range from 1 tick and 365 days.</p><p>For Higher/Lower, contract durations range from 5 ticks to 365 days.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I enter multiple Up/Down contracts at the same time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    "_t_<p>Yes, you can enter multiple contracts at the same time. If you open multiple contract simultaneously, you'll get to diversify your trading portfolio and take advantage of various market opportunities.</p><p>Do note that the specific rules and limitations on the number of contracts you can enter simultaneously may vary depending on trade type. Some may have restrictions on the number of contracts you can open, while others may have other specific conditions that may allow for greater flexibility.</p>_t_",
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_How can I know my potential payout for a Rise/Fall or Higher/Lower trade?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>The potential payout is predetermined based on the specific details of the trade and if your market predictions are right.</p><p>For Rise/Fall contracts, potential payouts generally range from 85% to 95% of your stake.</p><p>For Higher/Lower contracts, potential payouts can range from 1% to 3,900% of your stake, depending on where the barrier is set.</p><p>The potential payout and potential loss (your initial stake) will be clearly displayed before you enter the trade.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_What is the difference between Rise/Fall and Higher/Lower contracts?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_A Higher/Lower contract is typically a Rise/Fall contract with an adjustable barrier that can be applied before purchasing the contract. For example, in a "Higher" contract, the further away the barrier is from the current market price, the higher the potential payout and vice versa for a Lower contract._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Are Higher/Lower contracts the same as High/Low Ticks?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>No, they are not the same.</p><p>When you trade a Higher/Lower contract, you speculate on the price direction of an underlying asset over a time period.</p><p>When you trade High/Low Ticks, you predict which tick is the highest within a 5-tick contract.</p>_t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_How do I predict the price movement in a Rise/Fall or Higher/Lower trade?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_<p>Traders typically analyse the underlying market and price trends to determine the likelihood of prices rising or falling over a given time period.</p><p>To identify trends, you can consider a number of factors, including:</p><ul><li>Recent price swings and market volatility</li><li>Economic news and events</li><li>Trends revealed by using technical indicators.</li></ul>_t_',
                ),
            },
        },
    ],
}
