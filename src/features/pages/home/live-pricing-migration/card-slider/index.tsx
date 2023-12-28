import React from 'react'
import clsx from 'clsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { qtJoin } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { SwiperOptions } from 'swiper/types'
import Card, { CardVariants } from '../card'

type CardVariantType = keyof CardVariants

type CardVariantProps<T extends CardVariantType> = React.ComponentPropsWithoutRef<
    CardVariants[T]
> & {
    id: number
}

export interface CardSliderProps<T extends CardVariantType> {
    variant: T
    cards: CardVariantProps<T>[]
    className?: string
    slideClasses?: string
    swiperData?: SwiperOptions
}

const defaultSwiperProps: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
        enabled: true,
        clickable: true,
        horizontalClass: `[--swiper-pagination-color:#ff444f]`,
    },
}

export const CardSlider = <T extends CardVariantType>({
    variant,
    cards = [],
    className,
    slideClasses,
    swiperData,
}: CardSliderProps<T>) => {
    const { slidesPerView, spaceBetween, breakpoints } = Object.assign(
        defaultSwiperProps,
        swiperData,
    )
    const CardComponent = Card[variant]

    return (
        <div className="flex w-full justify-center">
            <Swiper
                className={qtJoin('h-full w-full', className)}
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                breakpoints={breakpoints}
            >
                {cards.map((card, index) => (
                    <SwiperSlide className={clsx(slideClasses)} key={index}>
                        {
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            <CardComponent {...card} />
                        }
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CardSlider
