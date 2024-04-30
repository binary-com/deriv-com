import React from 'react'
import { BlockWrapper } from '@deriv-com/blocks'
import { Text, FluidContainer, Heading } from '@deriv/quill-design'
import {
    DerivProductDerivTraderBrandLightLogoHorizontalIcon,
    DerivProductDerivGoBrandDarkLogoHorizontalIcon,
    IllustrativeDerivedIcon,
} from '@deriv/quill-icons'
import { CustomLink } from '@deriv-com/components'
import { StaticImage } from 'gatsby-plugin-image'
import AccumulatorOptions from 'images/svg/trade-types/accumulator-options.svg'
import { Localize, localize } from 'components/localization'
import TradersHubCtaButton from 'features/components/molecules/traders-hub-cta-button'
import { what_are_accumulator_video_id } from 'common/constants'

interface WhatAreAccumulatorOptionsProps {
    handleModalToggle: (isOpen: boolean, videoId: string) => void
}

const WhatAreAccumulatorOptions = ({ handleModalToggle }: WhatAreAccumulatorOptionsProps) => {
    return (
        <BlockWrapper
            title={<Localize translate_text="_t_What are accumulator options?_t_" />}
            background="light"
        >
            <FluidContainer className="flex flex-col py-general-2xl gap-gap-xl">
                <div className="flex max-lg:flex-col justify-between gap-gap-xl items-center">
                    <div className="w-full md:w-1/2">
                        <div
                            className="rounded-lg overflow-hidden"
                            onClick={() => handleModalToggle(true, what_are_accumulator_video_id)}
                        >
                            <StaticImage
                                src="../../../../../images/common/trade-types/accumulator-video-bg-3.png"
                                alt={localize('_t_what are trade accumulator options_t_')}
                                loading="lazy"
                                formats={['webp', 'auto']}
                                quality={100}
                                className="cursor-pointer object-cover h-full w-full"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2 gap-gap-md">
                        <div className="flex flex-row gap-gap-md items-center">
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

                        <div className="flex-grow">
                            <Text>
                                <Localize translate_text="_t_With accumulator options, your payout grows exponentially as long as the current market spot price stays within a set range from the previous spot price. Choose between 1-5% growth rate - a higher growth rate means a narrower range for your price movements and higher risk. With volatility indices, you can also choose the volatility of your market._t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Secure your gains with manual or automatic profit-taking. With durations of up to 230 ticks, accumulator options are ideal for those looking for fast-paced, strategic trades while balancing risk and reward._t_" />
                            </Text>
                        </div>
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
                        <div className="flex  gap-gap-lg ">
                            <div className="flex gap-gap-md items-center">
                                <DerivProductDerivTraderBrandLightLogoHorizontalIcon
                                    height="24px"
                                    width="24px"
                                />
                                <CustomLink href={'/dtrader/'} size="md">
                                    <Localize translate_text="_t_Deriv Trader_t_" />
                                </CustomLink>
                            </div>
                            <div className="flex gap-gap-md items-center">
                                <DerivProductDerivGoBrandDarkLogoHorizontalIcon
                                    height="24px"
                                    width="24px"
                                />
                                <CustomLink href={'/deriv-go'} size="md">
                                    <Localize translate_text="_t_Deriv GO_t_" />
                                </CustomLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block m-auto pt-general-md">
                    <TradersHubCtaButton className="flex" />
                </div>
            </FluidContainer>
        </BlockWrapper>
    )
}

export default WhatAreAccumulatorOptions
