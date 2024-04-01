import React from 'react'
import { Features, AccordionBlock, BlockWrapper } from '@deriv-com/blocks'
import { Text, FluidContainer, Heading } from '@deriv/quill-design'
import {
    DerivProductDerivTraderBrandLightLogoHorizontalIcon,
    IllustrativeDerivedIcon,
} from '@deriv/quill-icons'
import { CustomLink } from '@deriv-com/components'
import * as styles from './accumulators_faq.module.scss'
import { accumulatorCards, accumulatorOptionsVideoCard, mobileCards } from './data'
import AccumulatorOptions from 'images/svg/trade-types/accumulator-options.svg'
import { Localize, localize, is_rtl } from 'components/localization'
import OptionsLayout from 'features/components/quill/options-layout'
import Box from 'features/components/atoms/box'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import { BuildVariantType } from 'features/types'

interface SwiperOption {
    spaceBetween: number
    slidesPerView: number | 'auto'
    reverseDirection: true
    freeMode: true
}

const swiperOption: SwiperOption = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    reverseDirection: true,
    freeMode: true,
}

const AccumulatorsOptions = ({region}: BuildVariantType) => {
    return (
        <OptionsLayout
            heading="_t_Move fast,<br/>when the market doesn’t_t_"
            description="_t_Amplify your gains in sideways markets with accumulator options.<br/> Up to 5% compounded growth per tick._t_"
            has_content_block
            region={region}
        >
            <Features.Card
                className="hidden lg:block"
                title={
                    <Localize translate_text="_t_Why trade accumulator options on Deriv_t_" />
                }
                description={
                    <Localize translate_text="_t_Looking for a fast-paced, strategic and potentially explosive way to trade?_t_" />
                }
                cols="three"
                cards={accumulatorCards}
            />
            <Features.ContentSlider
                className="lg:hidden"
                title={
                    <Localize translate_text="_t_Why trade accumulator options on Deriv_t_" />
                }
                description={
                    <Localize translate_text="_t_Looking for a fast-paced, strategic and potentially explosive way to trade?_t_" />
                }
                cardSliderProps={{
                    swiperData: swiperOption,
                    slideClasses: 'max-w-[296px] !h-auto !mr-gap-none !ml-gap-none',
                    className: 'w-screen lg:w-full [&>*:nth-child(1)]:!gap-gap-lg ',
                    variant: 'ContentLeft',
                    cards: mobileCards,
                    dir: is_rtl() ? 'rtl' : 'ltr',
                }}
            />
            <BlockWrapper
                title={<Localize translate_text="_t_What are accumulator options?_t_" />}
                background="light"
            >
                <FluidContainer className="flex flex-col py-general-2xl gap-gap-xl">
                    <div className="flex max-lg:flex-col justify-between gap-gap-xl">
                        <div className="w-full md:w-1/2">
                            <div>
                                <Box
                                    as="iframe"
                                    src="https://player.vimeo.com/video/915479906?h=bf070a3ff6"
                                    frameBorder="0"
                                    width={'100%'}
                                    height={'360'}
                                    allowFullScreen
                                ></Box>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 gap-gap-md">
                            <div className="flex flex-row gap-gap-md">
                                <img
                                    src={AccumulatorOptions}
                                    alt={localize('_t_Accumulator options icon_t_')}
                                    width="32"
                                    height="32"
                                />
                                <Heading.H3>
                                    <Localize translate_text="_t_Accumulator_t_" />
                                </Heading.H3>
                            </div>

                            <Text>
                                <Localize translate_text="_t_With accumulator options, your payout grows exponentially as long as the current market spot price stays within a set range from the previous spot price. Choose between 1-5% growth rate - a higher growth rate means a narrower range for your price movements and higher risk. With volatility indices, you can also choose the volatility of your market._t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Secure your gains with manual or automatic profit-taking. With durations of up to 230 ticks, accumulator options are ideal for those looking for fast-paced, strategic trades while balancing risk and reward._t_" />
                            </Text>
                        </div>
                    </div>
                    <div className="flex max-lg:flex-col justify-between gap-gap-xl">
                        <div className="flex flex-col w-full md:w-1/2 gap-gap-xl">
                            <Heading.H3>
                                <Localize translate_text="_t_Markets available_t_" />
                            </Heading.H3>
                            <div className="flex gap-gap-md items-center">
                                <IllustrativeDerivedIcon fill="#000000" iconSize="sm" />
                                <CustomLink href={'/markets/synthetic/'} size="md">
                                    <Localize translate_text="_t_Derived indices_t_" />
                                </CustomLink>
                            </div>
                        </div>
                        <div className="flex flex-col w-full md:w-1/2 gap-gap-xl">
                            <Heading.H3>
                                <Localize translate_text="_t_Trade on_t_" />
                            </Heading.H3>
                            <div className="flex gap-gap-md items-center">
                                <DerivProductDerivTraderBrandLightLogoHorizontalIcon
                                    height="24px"
                                    width="24px"
                                />
                                <CustomLink href={'/dtrader/'} size="md">
                                    <Localize translate_text="_t_Deriv Trader_t_" />
                                </CustomLink>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block m-auto pt-general-md">
                        <TradersHubCtaButton className="flex" />
                    </div>
                </FluidContainer>
            </BlockWrapper>
            <Features.Card
                hasPadding
                className="xl:[&>*:nth-child(1)]:!px-50"
                title={<Localize translate_text="_t_How to trade accumulator options_t_" />}
                cols="two"
                variant="ContentTop"
                cards={accumulatorOptionsVideoCard}
            />
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
        </OptionsLayout>
    )
}

export default AccumulatorsOptions
