import React from 'react'
import { Text, TradeButton } from '@deriv/quill-design'
import { MarketStatus } from '..'

export type BuySellButtonsProps = {
    status: MarketStatus
    spread: string
    textClass: string
    onClickBuyButton?: () => void
    onClickSellButton?: () => void
}

export const BuySellButtons = ({
    status,
    spread,
    textClass,
    onClickBuyButton,
    onClickSellButton,
}: BuySellButtonsProps) => {
    return (
        <div className="flex flex-col gap-gap-md">
            <div className="flex flex-row gap-gap-md">
                <Text size="sm" className={textClass}>
                    Spread
                </Text>
                <Text size="sm" bold className={textClass}>
                    {spread}
                </Text>
            </div>
            <div className="flex flex-row gap-gap-md">
                <TradeButton
                    tradeType="buy"
                    variant="secondary"
                    disabled={status === 'closed'}
                    className="flex-1"
                    onClick={onClickBuyButton}
                >
                    Buy
                </TradeButton>
                <TradeButton
                    tradeType="sell"
                    variant="secondary"
                    disabled={status === 'closed'}
                    className="flex-1"
                    onClick={onClickSellButton}
                >
                    Sell
                </TradeButton>
            </div>
        </div>
    )
}
