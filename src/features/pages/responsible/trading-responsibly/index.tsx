import React from 'react'
import { Features } from '@deriv-com/blocks'
import { SectionMessage } from '@deriv/quill-design'
import { cards } from './data'
import { Localize, is_rtl, localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'

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

const TradingResponsibly = () => {
    const { is_eu } = useRegion()
    return (
        <>
            <Features.ContentSlider
                className="!bg-background-secondary-container"
                title={<Localize translate_text="_t_Trading responsibly_t_" />}
                cardSliderProps={{
                    swiperData: swiperOption,
                    slideClasses: 'max-w-[296px] !h-auto !mr-gap-none !ml-gap-none',
                    className: 'w-screen lg:w-full [&>*:nth-child(1)]:!gap-gap-lg ',
                    variant: 'ContentBottom',
                    cards: cards,
                    dir: is_rtl() ? 'rtl' : 'ltr',
                }}
                bottomContent={
                    is_eu && (
                        <SectionMessage.Information
                            size="sm"
                            colorStyle="information"
                            description={localize(
                                '_t_For more details on our products and the risks involved in online trading, read our key information documents (KIDs) on forex, stocks, stock indices, commodities, synthetic indices, and cryptocurrencies._t_',
                            )}
                        />
                    )
                }
            />
        </>
    )
}

export default TradingResponsibly
