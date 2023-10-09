import React from 'react'
import { TradingPlatformTextType } from '../types'
import { Localize } from 'components/localization'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'

export type TradingPlatformNumbersProps = {
    selling_points: TradingPlatformTextType[]
}

const TradingPlatformNumbers = ({ selling_points }: TradingPlatformNumbersProps) => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            md={{ margin_block: '20x' }}
            margin_block={'10x'}
        >
            <FlexBox.Box
                direction={'col'}
                align={'center'}
                md={{ direction: 'row', justify: 'between' }}
            >
                {selling_points.map((item) => (
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
