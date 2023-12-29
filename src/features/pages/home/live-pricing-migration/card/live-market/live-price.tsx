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

type PriceComponentType = {
    mid: string
    big: string
    small?: string
    status: MarketStatus
}

const PriceContent = (price: string, status: MarketStatus) => {
    return (
        <div className="flex flex-row items-center gap-[2px]">
            <Text
                size="md"
                className={clsx('flex h-full items-end pb-[3px]', colorVariant[status])}
            >
                {price}
            </Text>
            {/* <Text className={clsx('text-400 leading-700', colorVariant[status])}>
          {price?.substring(4, 6)}
        </Text>
        <Text
          size="md"
          className={clsx(
            'flex h-full items-start pt-[3px]',
            colorVariant[status],
          )}
        >
          {price?.substring(6)}
        </Text> */}
        </div>
    )
}

export const LivePrice = ({ status, bidPrice, askPrice, textClass }: LivePriceProps) => {
    return (
        <div className="flex flex-row gap-gap-md">
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Bid
                </Text>
                {PriceContent(bidPrice, status)}
            </div>
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Ask
                </Text>
                {PriceContent(askPrice, status)}
            </div>
        </div>
    )
}

export default LivePrice
