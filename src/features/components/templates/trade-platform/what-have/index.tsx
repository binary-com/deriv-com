import React from 'react'
import { TradingPlatformWhatHaveProps } from '../types'
import { what_have_wrapper, flex_items } from './what-have.module.scss'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const TradingPlatformWhatHave = ({
    trading_platform_what_have,
}: {
    trading_platform_what_have: TradingPlatformWhatHaveProps
}) => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'8x'}
            pt={'20x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            {trading_platform_what_have.map((content, index) => {
                return (
                    <FlexBox.Box
                        className={what_have_wrapper}
                        key={content.id}
                        direction={'col'}
                        margin_block={'10x'}
                        align={'center'}
                        md={{
                            direction: index % 2 == 0 ? 'row' : 'row-reverse',
                        }}
                    >
                        <FlexBox.Box direction={'col'} justify={'center'} className={flex_items}>
                            <Typography.Heading mb={'6x'} align="left" textcolor="primary">
                                <Localize translate_text={content.title} />
                            </Typography.Heading>
                            <Typography.Paragraph align={'left'} mb={'12x'} md={{ mb: '0x' }}>
                                <Localize translate_text={content.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                        <FlexBox.Box className={flex_items}>{content.image}</FlexBox.Box>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default TradingPlatformWhatHave
