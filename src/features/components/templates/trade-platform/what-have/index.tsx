import React from 'react'
import { TradingPlatformWhatHaveData } from '../types'
import { what_have_wrapper, flex_items, image_item } from './what-have.module.scss'
import FlexBox from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

export type TradingPlatformWhatHaveProps = {
    items: TradingPlatformWhatHaveData[]
}

const TradingPlatformWhatHave = ({ items }: TradingPlatformWhatHaveProps) => {
    return (
        <FlexBox.Box
            container={'fluid'}
            direction={'col'}
            padding_inline={'8x'}
            padding_block={'15x'}
            md={{ padding_inline: '0x', padding_block: '40x' }}
        >
            {items.map((content, index) => {
                return (
                    <FlexBox.Box
                        className={what_have_wrapper}
                        key={content?.id}
                        direction={'col'}
                        margin_block={'8x'}
                        align={'center'}
                        md={{
                            direction: index % 2 == 0 ? 'row' : 'row-reverse',
                        }}
                    >
                        <FlexBox.Box direction={'col'} justify={'center'} className={flex_items}>
                            <Typography.Heading mb={'6x'} align="left" textcolor="primary" mr="5x">
                                <Localize translate_text={content?.title} />
                            </Typography.Heading>
                            <Typography.Paragraph align={'left'} mb={'12x'} md={{ mb: '0x' }}>
                                <Localize translate_text={content?.subtitle} />
                            </Typography.Paragraph>
                        </FlexBox.Box>
                        <FlexBox.Box className={image_item} md={{ padding_inline: '40x' }}>
                            {content?.image}
                        </FlexBox.Box>
                    </FlexBox.Box>
                )
            })}
        </FlexBox.Box>
    )
}
export default TradingPlatformWhatHave
