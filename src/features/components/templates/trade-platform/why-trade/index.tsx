import React from 'react'
import { TradingPlatformWhyTradeProps } from '../types'
import { why_trade_card } from './why-trade.module.scss'
import Typography from 'features/components/atoms/typography'
import FlexBox from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

const TradingPlatformWhyTrade = ({
    trading_platform_why_trade,
}: {
    trading_platform_why_trade: TradingPlatformWhyTradeProps
}) => {
    return (
        <FlexBox.Box
            direction={'col'}
            margin_block={'20x'}
            margin_inline={'8x'}
            md={{ justify: 'center', margin_block: '40x' }}
        >
            <Typography.Heading align={'center'}>
                <Localize translate_text={trading_platform_why_trade['title']} />
            </Typography.Heading>
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                md={{ direction: 'row', justify: 'center', mt: '20x' }}
            >
                {trading_platform_why_trade['card_data'].map((card) => {
                    return (
                        <FlexBox.Box
                            key={card.title}
                            className={why_trade_card}
                            direction={'col'}
                            justify={'start'}
                            align={'start'}
                            radius={'8x'}
                            padding={'8x'}
                            mt={'12x'}
                            md={{ padding: '12x', mr: '12x', mt: '0x' }}
                        >
                            {card.icon}
                            <Typography.Paragraph
                                size={'xlarge'}
                                weight={'bold'}
                                mb={'4x'}
                                mt={'10x'}
                                md={{ mt: '14x' }}
                            >
                                <Localize translate_text={card.title} />
                            </Typography.Paragraph>
                            <Typography.Paragraph>
                                <Localize translate_text={card.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                    )
                })}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default TradingPlatformWhyTrade
