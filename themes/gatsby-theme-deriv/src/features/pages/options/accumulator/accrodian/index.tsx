import React from 'react'
import { AccordionBlock } from '@deriv-com/blocks'
import { Text } from '@deriv/quill-design'
import * as styles from '../accumulators_faq.module.scss'
import { Localize, localize } from 'components/localization'

const AccumulatorAccrodian = () => {
    return (
        <div id="faqs">
            <AccordionBlock
                className="border-opacity-black-100 border-x-none"
                content={{
                    data: [
                        [
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <Text>
                                            <Localize translate_text="_t_You can trade volatility indices, a type of derived indices, with accumulator options._t_" />
                                        </Text>
                                    )
                                },
                                title: localize(
                                    '_t_What markets can I trade with accumulator options?_t_',
                                ),
                                id: 'what-markets-can-i-trade-with-accumulator-options',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <Text>
                                            <Localize translate_text="_t_Not at the moment. You can only open one contract per instrument at a time._t_" />
                                        </Text>
                                    )
                                },
                                title: localize(
                                    '_t_Can I open multiple accumulator contracts at the same time?_t_',
                                ),
                                id: 'can-i-open-multiple-accumulator-contracts-at-the-same-time',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <Text>
                                            <Localize translate_text="_t_No, the growth rate can only be set before opening the contract. Once you open the contract, the growth rate cannot be changed._t_" />
                                        </Text>
                                    )
                                },
                                title: localize(
                                    '_t_Can I change my growth rate after opening the contract?_t_',
                                ),
                                id: 'can-i-change-my-growth-rate-after-opening-the-contract',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <div className="flex flex-col gap-800">
                                            <Text>
                                                <Localize translate_text="_t_Opening accumulator contracts for a specific instrument and growth rate may be temporarily unavailable when our internal aggregate stake limits have been reached for that particular combination. If this happens, you can choose another instrument or the same instrument with a different growth rate._t_" />
                                            </Text>
                                            <Text>
                                                <Localize translate_text="_t_The limits will reset when a loss condition is triggered or when someone trading the same combination closes their position. When this happens, you’ll be able to open new contracts again as normal._t_" />
                                            </Text>
                                        </div>
                                    )
                                },
                                title: localize(
                                    '_t_Can I open an accumulator contract at any time?_t_',
                                ),
                                id: 'can-i-open-an-accumulator-contract-at-any-time',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <Text>
                                            <Localize translate_text="_t_Yes, you can close your accumulator contract whenever you are satisfied with the payout amount. However, if the current spot price touches or breaches the limits of the predefined range, your contract will automatically close and you’ll lose your accumulated payout._t_" />
                                        </Text>
                                    )
                                },
                                title: localize(
                                    '_t_Can I close an accumulator contract at any time?_t_',
                                ),
                                id: 'can-i-close-an-accumulator-contract-at-any-time',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <div className="flex flex-col gap-800">
                                            <Text>
                                                <Localize translate_text="_t_No, the accumulated payout for accumulator options is not correlated with the direction of the underlying index._t_" />
                                            </Text>
                                            <Text>
                                                <Localize translate_text="_t_The payout growth depends solely on the underlying index’s price moving tick by tick while remaining within a predefined range. The range width is determined by the growth rate and the symbol selected._t_" />
                                            </Text>
                                            <Text>
                                                <Localize translate_text="_t_Whether the broader index moves up, down or sideways is irrelevant to the payout unless the price touches or breaches the range limits, triggering a loss._t_" />
                                            </Text>
                                        </div>
                                    )
                                },
                                title: localize(
                                    '_t_Is the accumulated payout correlated with the direction of the underlying index?_t_',
                                ),
                                id: 'is-the-accumulated-payout-correlated-with-the-direction-of-the-underlying-index',
                            },
                            {
                                className: `${styles.accordion_border}`,
                                content: function noRefCheck() {
                                    return (
                                        <Text>
                                            <Localize translate_text="_t_No, accumulator options are currently unavailable on Deriv Bot._t_" />
                                        </Text>
                                    )
                                },
                                title: localize(
                                    '_t_Are accumulators available as a trade type on Deriv Bot?_t_',
                                ),
                                id: 'are-accumulators-available-as-a-trade-type-on-deriv-bot',
                            },
                        ],
                    ],
                }}
                title={<Localize translate_text="_t_Browse our FAQs_t_" />}
                variant="Flush"
            />
        </div>
    )
}

export default AccumulatorAccrodian
