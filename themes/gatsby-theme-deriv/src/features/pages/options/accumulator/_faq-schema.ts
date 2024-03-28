import { localize } from 'components/localization'
import { FaqSchemaType } from 'features/types/faq-schema'

export const faq_schema: FaqSchemaType = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: localize('_t_What markets can I trade with accumulator options?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Accumulator options are currently offered on volatility indices under derived indices._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open multiple accumulator contracts at the same time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Not at the moment. You can only open one contract per instrument at a time._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I change my growth rate after opening the contract?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, the growth rate can only be set before opening the contract. Once you open the contract, the growth rate cannot be changed._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I open an accumulator contract at any time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Opening accumulator contracts for a specific instrument and growth rate may be temporarily unavailable when our internal aggregate stake limits have been reached for that particular combination. If this happens, you can choose another instrument or the same instrument with a different growth rate. The limits will reset when a loss condition is triggered or when someone trading the same combination closes their position. When this happens, you’ll be able to open new contracts again as normal. _t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Can I close an accumulator contract at any time?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_Yes, you can close your accumulator contract whenever you are satisfied with the payout amount. However, if the current spot price touches or breaches the limits of the predefined range, your contract will automatically close and you’ll lose your accumulated payout._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize(
                '_t_Is the accumulated payout correlated with the direction of the underlying index?_t_',
            ),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, the accumulated payout for accumulator options is not correlated with the direction of the underlying index. The payout growth depends solely on the underlying index’s price moving tick by tick while remaining within a predefined range. The range width is determined by the growth rate and the symbol selected. Whether the broader index moves up, down or sideways is irrelevant to the payout unless the price touches or breaches the range limits, triggering a loss._t_',
                ),
            },
        },
        {
            '@type': 'Question',
            name: localize('_t_Are accumulators available as a trade type on Deriv Bot?_t_'),
            acceptedAnswer: {
                '@type': 'Answer',
                text: localize(
                    '_t_No, accumulator options are not currently available on Deriv Bot at the moment._t_',
                ),
            },
        },
    ],
}
