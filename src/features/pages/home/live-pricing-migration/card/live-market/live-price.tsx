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

const PriceContentV2 = ({ mid, big, small, status }: PriceComponentType) => {
    return (
        <div className="flex flex-row items-center gap-[2px]">
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

export const LivePrice = ({ status, bidPrice, askPrice, textClass }: LivePriceProps) => {
    const splittedBidPrice = bidPrice.split('.')
    const splittedAskPrice = askPrice.split('.')

    return (
        <div className="flex flex-row gap-gap-md">
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Bid
                </Text>
                {PriceContent(bidPrice, status)}
                {/* {splittedBidPrice[0].length <= 4 && splittedBidPrice[0].length > 1 && (
                    <PriceContentV2
                        mid={`${splittedBidPrice[0]}.`}
                        big={splittedBidPrice[1].substring(0, 2)}
                        small={splittedBidPrice[1].substring(2)}
                        status={status}
                    />
                )}
                {splittedBidPrice[0].length === 5 && (
                    <PriceContentV2
                        mid={splittedBidPrice[0]}
                        big={splittedBidPrice[0].substring(3, 5)}
                        small={`.${splittedBidPrice[1]}`}
                        status={status}
                    />
                )}
                {splittedBidPrice[0].length === 6 && (
                    <PriceContentV2
                        mid={splittedBidPrice[0]}
                        big={splittedBidPrice[0].substring(3, 6)}
                        small={`.${splittedBidPrice[1]}`}
                        status={status}
                    />
                )}
                {splittedBidPrice[0].length === 1 && (
                    <PriceContentV2
                        mid={`${splittedBidPrice[0]}.${splittedBidPrice[1]}`}
                        big={splittedBidPrice[0].substring(3, 6)}
                        small={`.${splittedBidPrice[1]}`}
                        status={status}
                    />
                )} */}
            </div>
            <div className="flex flex-1 flex-col">
                <Text size="sm" className={textClass}>
                    Ask
                </Text>
                {PriceContent(askPrice, status)}
                {/* {splittedAskPrice[0].length <= 4 && splittedAskPrice[0].length > 1 && (
                    <PriceContentV2
                        mid={`${splittedAskPrice[0]}.`}
                        big={splittedAskPrice[1].substring(0, 2)}
                        small={splittedAskPrice[1].substring(2)}
                        status={status}
                    />
                )}
                {splittedAskPrice[0].length === 5 && (
                    <PriceContentV2
                        mid={splittedAskPrice[0]}
                        big={splittedAskPrice[0].substring(3, 5)}
                        small={`.${splittedAskPrice[1]}`}
                        status={status}
                    />
                )}
                {splittedAskPrice[0].length === 6 && (
                    <PriceContentV2
                        mid={splittedAskPrice[0]}
                        big={splittedAskPrice[0].substring(3, 6)}
                        small={`.${splittedAskPrice[1]}`}
                        status={status}
                    />
                )} */}
            </div>
        </div>
    )
}

export default LivePrice
