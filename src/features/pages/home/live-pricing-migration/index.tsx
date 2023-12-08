import React from 'react'
import { LiveMarketBlock } from '@deriv-com/blocks'
import { CustomLink, CardSlider } from '@deriv-com/components'
import { Text } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { StandaloneChevronRightRegularIcon } from '@deriv/quill-icons/Standalone'
import { LivePriceData, swiperOption } from './data'
import { Localize, localize } from 'components/localization'

const LiveMarketSection = () => {
    return (
        <LiveMarketBlock.Tab
            className="bg-background-primary-base"
            header={localize('_t_Top trading assets & unique market indices_t_')}
            tabs={[
                { children: 'Forex' },
                { children: 'Derived indices' },
                { children: 'ETFs' },
                { children: 'Stocks & indices' },
                { children: 'Cryptocurrencies' },
                { children: 'Commodities' },
            ]}
        >
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>Forex at your fingertips.</0> Currency trading with major, minor, and exotic pairs. _t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/forex/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all forex pairs
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>Virtual markets, real opportunities.</0>Trade simulated markets, as volatile as you like._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/synthetic/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all derived indices pairs
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>You call the stocks</0> Take a position on 1500+ stocks and indices._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/exchange-traded-funds/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all ETFs pairs
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>Mine for commodities.</0> Trade the price of precious metals and oil._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/stock/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all stocks & indices pairs
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>Ride the crypto waves.</0> 24/7 trading on the price of popular cryptocurrencies._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/cryptocurrencies/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all cryptocurrencies
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
            <>
                <CardSlider
                    variant="LiveMarketCard"
                    swiperData={swiperOption}
                    slideClasses="max-w-[286px]"
                    cards={LivePriceData}
                />
                <Text className="text-center pt-gap-3xl">
                    <Localize
                        translate_text="_t_<0>Mine for commodities.</0> Trade the price of precious metals and oil._t_"
                        components={[<strong key={0} />]}
                    />
                </Text>
                <CustomLink
                    size="md"
                    href="/markets/commodities/"
                    className="flex items-center justify-center pt-gap-3xl"
                >
                    See all commodities
                    <StandaloneChevronRightRegularIcon className="text-solid-slate-1400" />
                </CustomLink>
            </>
        </LiveMarketBlock.Tab>
    )
}

export default LiveMarketSection
