import React from 'react'
import { Text } from '@deriv/quill-design'
import clsx from 'clsx'
import { MarketStatus } from '../types'

export interface LivePriceProps {
    status: MarketStatus
    bidPrice: string
    askPrice: string
    textClass: string
}

const colorVariant = {
    up: 'text-solid-emerald-900',
    down: 'text-solid-cherry-700',
    remain: 'text-typography-subtle',
    closed: 'text-typography-disabled',
}

const PriceContent = (price: string, status: MarketStatus) => {
    return (
        <div className="flex flex-row items-center gap-[2px]">
            <Text
                size="md"
                className={clsx('flex h-full items-end pb-[3px]', colorVariant[status])}
            >
                {price?.substring(0, 4)}
            </Text>
            <Text className={clsx('text-400 leading-700', colorVariant[status])}>
                {price?.substring(4, 6)}
            </Text>
            <Text
                size="md"
                className={clsx('flex h-full items-start pt-[3px]', colorVariant[status])}
            >
                {price?.substring(6)}
            </Text>
        </div>
    )
}

type PriceComponentType = {
    beforeDecimal: string
    afterDecimal: string
    status: MarketStatus
}

const FourDecimalPoint = ({ beforeDecimal, afterDecimal, status }: PriceComponentType) => {
    return (
        <div className="flex flex-row items-center gap-[2px]">
            <Text
                size="md"
                className={clsx('flex h-full items-end pb-[3px]', colorVariant[status])}
            >
                {beforeDecimal}
            </Text>
            <Text className={clsx('text-400 leading-700', colorVariant[status])}>
                {afterDecimal?.substring(0, 2)}
            </Text>
            <Text
                size="md"
                className={clsx('flex h-full items-start pt-[3px]', colorVariant[status])}
            >
                {afterDecimal?.substring(2)}
            </Text>
        </div>
    )
}

export const LivePrice = ({ status, bidPrice, askPrice, textClass }: LivePriceProps) => {
    const splittedBidPrice = bidPrice.split('.')
    const splittedAskPrice = askPrice.split('.')

    return (
        <div className="flex flex-row gap-gap-md">
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Bid
                </Text>
                {/* {PriceContent(bidPrice, status)} */}
                {splittedBidPrice[0].length <= 4 && splittedBidPrice[0].length > 1 && (
                    <FourDecimalPoint
                        beforeDecimal={splittedBidPrice[0]}
                        afterDecimal={splittedBidPrice[1]}
                        status={status}
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Ask
                </Text>
                {splittedAskPrice[0].length <= 4 && splittedAskPrice[0].length > 1 && (
                    <FourDecimalPoint
                        beforeDecimal={splittedAskPrice[0]}
                        afterDecimal={splittedAskPrice[1]}
                        status={status}
                    />
                )}
            </div>
        </div>
    )
}

export default LivePrice
