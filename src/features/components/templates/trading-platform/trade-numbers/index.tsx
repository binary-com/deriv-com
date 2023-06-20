import React from 'react'
import { TradingPlatformTextType } from '../types'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

type TradingPlatformNumbersProps = {
    trading_platform_numbers: TradingPlatformTextType[]
}
const TradePlatformNumbers = ({ trading_platform_numbers }: TradingPlatformNumbersProps) => {
    return (
        <FlexBox.Box container={'fluid'} direction={'col'} margin_block={'20x'}>
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                md={{ direction: 'row', justify: 'between' }}
            >
                {trading_platform_numbers.map((item) => (
                    <FlexBox.Item basis={'3-12'} key={item.title} pb={'12x'}>
                        <Typography.Heading align={'center'} md={{ mb: '4x' }}>
                            <Localize translate_text={item.title} />
                        </Typography.Heading>
                        <Typography.Paragraph align={'center'}>
                            <Localize translate_text={item.subtitle} />
                        </Typography.Paragraph>
                    </FlexBox.Item>
                ))}
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default TradePlatformNumbers
