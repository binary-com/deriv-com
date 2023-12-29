import React, { useEffect, useRef, useState } from 'react'
import { qtMerge, Text } from '@deriv/quill-design'
import {
    StandaloneChartTrendDownRegularIcon,
    StandaloneChartTrendSidewayRegularIcon,
    StandaloneChartTrendUpRegularIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/Standalone'
import clsx from 'clsx'
import { MarketStatus } from '@deriv-com/components'
import { LiveMarketContent } from '../types'
import LivePrice from './live-price'
import { BuySellButtons } from './buy-sell.buttons'

const colorVariant: { [key: string]: string } = {
    up: 'fill-solid-emerald-900 text-solid-emerald-900',
    down: 'fill-solid-cherry-700 text-solid-cherry-700',
    remain: 'fill-opacity-black-400 text-typography-subtle',
    closed: 'fill-opacity-black-300 text-typography-disabled',
}

const ChartIcons = {
    up: <StandaloneChartTrendUpRegularIcon iconSize="sm" className={colorVariant['up']} />,
    down: <StandaloneChartTrendDownRegularIcon iconSize="sm" className={colorVariant['down']} />,
    remain: (
        <StandaloneChartTrendSidewayRegularIcon iconSize="sm" className={colorVariant['remain']} />
    ),
}

export interface LiveMarketCardProps extends Omit<LiveMarketContent, 'id'> {
    className?: string
}

export const LiveMarketCard: React.FC<LiveMarketCardProps> = ({
    className,
    instrumentIcon,
    instrument,
    changePercentage,
    status,
    bidPrice,
    askPrice,
    spread,
    mid,
    onClickBuyButton,
    onClickSellButton,
}) => {
    // const [prevMid, setPrevMid] = useState(null)
    // const [state, setState] = useState<MarketStatus>('closed')

    // useEffect(() => {
    //     if (prevMid !== null) {
    //         console.log("==>", { prevMid, mid })
    //         if (mid > prevMid) {
    //             setState('up')
    //         } else if (mid < prevMid) {
    //             setState('down')
    //         } else {
    //             setState('remain')
    //         }
    //     }

    //     // Update prevMid with the current mid
    //     setPrevMid(mid)
    // }, [mid, prevMid])

    const prevMid = useRef<HTMLDivElement>(null)
    const prevState = prevMid.current?.dataset['state'] as MarketStatus
    let state: MarketStatus
    if (mid > +prevMid?.current?.textContent) state = 'up'
    if (mid < +prevMid?.current?.textContent) state = 'down'
    if (mid === +prevMid?.current?.textContent) state = prevState || 'up'

    console.log('==>', state)

    const textClassName =
        status === 'closed' ? 'text-typography-disabled' : 'text-typography-default'

    return (
        <div
            className={qtMerge(
                'flex flex-col',
                'rounded-xl',
                'h-[284px] w-[296px]',
                'bg-background-primary-container',
                'p-general-xl',
                'gap-gap-xl',
                className,
            )}
        >
            <div className="flex h-[52px] shrink-0 grow flex-row gap-gap-sm">
                <div className="flex flex-1 flex-row gap-gap-md">
                    <div className={clsx(status === 'closed' && 'opacity-600')}>
                        {instrumentIcon}
                    </div>
                    <Text
                        size="md"
                        className={qtMerge(
                            'pt-general-xs',
                            status === 'closed' && 'text-typography-subtle',
                        )}
                    >
                        {instrument}
                    </Text>
                </div>
                <div className="flex flex-row gap-gap-md pt-[2px]">
                    {status !== 'closed' && ChartIcons[state]}
                    <Text size="md" className={colorVariant[state]}>
                        {changePercentage}
                    </Text>
                </div>
            </div>
            <div ref={prevMid} data-state={state} className="sr-only">
                {mid}
            </div>

            <LivePrice
                status={state}
                bidPrice={bidPrice}
                askPrice={askPrice}
                textClass={textClassName}
            />
            <BuySellButtons
                status={status}
                spread={spread}
                textClass={textClassName}
                onClickBuyButton={onClickBuyButton}
                onClickSellButton={onClickSellButton}
            />
        </div>
    )
}

export default LiveMarketCard
