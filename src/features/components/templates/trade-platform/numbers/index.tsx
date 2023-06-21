import React from 'react'
import { TradingPlatformNumbersProps } from '../types'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

const TradingPlatformNumbers = ({
    trading_platform_numbers,
}: {
    trading_platform_numbers: TradingPlatformNumbersProps
}) => {
    return (
        <FlexBox.Box container={'fluid'} direction={'col'} margin_block={'20x'}>
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                md={{ direction: 'row', justify: 'between' }}
            >
                {trading_platform_numbers['selling_points'].map((item) => (
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

export default TradingPlatformNumbers
