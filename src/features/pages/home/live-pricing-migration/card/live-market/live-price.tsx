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
    length: number
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

const PriceContentV2 = ({ mid, big, small, status, length }: PriceComponentType) => {
    return (
        <div className="flex flex-row items-center gap-[2px]" data-item={length}>
            <Text
                size="md"
                className={clsx('flex h-full items-end pb-[3px]', colorVariant[status])}
            >
                {mid}
            </Text>
            <Text className={clsx('text-400 leading-700', colorVariant[status])}>{big}</Text>
            {small && (
                <Text
                    size="md"
                    className={clsx('flex h-full items-start pt-[3px]', colorVariant[status])}
                >
                    {small}
                </Text>
            )}
        </div>
    )
}

function formatNumber(number: number): string {
    // Check if the number has no decimal or only one decimal place
    if (Number.isInteger(number) || (number * 10) % 1 === 0) {
        return `${number.toFixed(2)}`
    } else {
        return `${number}`
    }
}

export const LivePrice = ({ status, bidPrice, askPrice, textClass }: LivePriceProps) => {
    const splittedBidPrice = formatNumber(+bidPrice).split('.')
    const splittedAskPrice = formatNumber(+askPrice).split('.')

    return (
        <div className="flex flex-row gap-gap-md">
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Bid
                </Text>
                {/* {PriceContent(bidPrice, status)} */}
                {splittedBidPrice[0].length <= 4 && splittedBidPrice[0].length > 1 && (
                    <PriceContentV2
                        mid={`${splittedBidPrice[0]}.`}
                        big={splittedBidPrice[1].substring(0, 2)}
                        small={splittedBidPrice[1].substring(2)}
                        status={status}
                        length={splittedBidPrice[0].length}
                    />
                )}
                {splittedBidPrice[0].length === 5 && (
                    <PriceContentV2
                        mid={splittedBidPrice[0].substring(0, 3)}
                        big={`${splittedBidPrice[0].slice(-2)}.`}
                        small={splittedBidPrice[1]}
                        status={status}
                        length={splittedBidPrice[0].length}
                    />
                )}
                {splittedBidPrice[0].length >= 6 && (
                    <PriceContentV2
                        mid={splittedBidPrice[0].slice(0, -3)}
                        big={`${splittedBidPrice[0].slice(-3)}.`}
                        small={splittedBidPrice[1]}
                        status={status}
                        length={splittedBidPrice[0].length}
                    />
                )}
                {splittedBidPrice[0].length === 1 && (
                    <PriceContentV2
                        mid={`${splittedBidPrice[0]}.`}
                        big={splittedBidPrice[1].substring(0, 2)}
                        small={splittedBidPrice[1].substring(2)}
                        status={status}
                        length={splittedBidPrice[0].length}
                    />
                )}
            </div>
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Ask
                </Text>
                {/* {PriceContent(askPrice, status)} */}
                {splittedAskPrice[0].length <= 4 && splittedAskPrice[0].length > 1 && (
                    <PriceContentV2
                        mid={`${splittedAskPrice[0]}.`}
                        big={splittedAskPrice[1].substring(0, 2)}
                        small={splittedAskPrice[1].substring(2)}
                        status={status}
                        length={splittedAskPrice[0].length}
                    />
                )}
                {splittedAskPrice[0].length === 5 && (
                    <PriceContentV2
                        mid={splittedAskPrice[0].substring(0, 3)}
                        big={`${splittedAskPrice[0].slice(-2)}.`}
                        small={splittedAskPrice[1]}
                        status={status}
                        length={splittedAskPrice[0].length}
                    />
                )}
                {splittedAskPrice[0].length >= 6 && (
                    <PriceContentV2
                        mid={splittedAskPrice[0].slice(0, -3)}
                        big={`${splittedAskPrice[0].slice(-3)}.`}
                        small={splittedAskPrice[1]}
                        status={status}
                        length={splittedAskPrice[0].length}
                    />
                )}
                {splittedAskPrice[0].length === 1 && (
                    <PriceContentV2
                        mid={`${splittedAskPrice[0]}.`}
                        big={splittedAskPrice[1].substring(0, 2)}
                        small={splittedAskPrice[1].substring(2)}
                        status={status}
                        length={splittedAskPrice[0].length}
                    />
                )}
            </div>
        </div>
    )
}

export default LivePrice
