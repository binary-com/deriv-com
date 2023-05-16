import React, { useState } from 'react'
import { StepperTabTypes, TabItemTypes } from '../types'
import FlexBox from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'
import Typography from 'features/components/atoms/typography'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Localize } from 'components/localization'

const TabContent = ({ items: initial_tems, tab, direction = 'row' }: StepperTabTypes) => {
    const [selected, setSelected] = useState<number>(0)
    const [items, setItems] = useState<TabItemTypes[]>(initial_tems)
    const { is_mobile_or_tablet } = useBreakpoints()

    const image_style = !is_mobile_or_tablet ? { blockSize: '62.5rem' } : { blockSize: '43.5rem' }

    return (
        <FlexBox.Box
            direction={'col'}
            justify={'center'}
            align={'center'}
            margin_inline={'10x'}
            margin_block={'20x'}
            md={{ direction: direction, margin_block: '32x', margin_inline: '0x' }}
        >
            <FlexBox.Box
                margin_inline={'40x'}
                style={image_style}
                md={{ margin_block: '12x', margin_inline: '0x' }}
            >
                {items[selected]?.image}
            </FlexBox.Box>
            <FlexBox.Box>
                <Box as={'ul'}>
                    {items.map((item, index) => {
                        const is_selected = selected === index
                        return (
                            <Box
                                as={'li'}
                                pt={'12x'}
                                key={item.title}
                                style={{ cursor: 'pointer', maxWidth: '38.4rem' }}
                                onClick={() => setSelected(index)}
                            >
                                <Typography.Paragraph
                                    size={'xlarge'}
                                    color={is_selected ? 'secondary' : 'black'}
                                    weight={is_selected ? 'bold' : 'normal'}
                                >
                                    {`${index + 1}. `}
                                    <Localize
                                        translate_text={item.title}
                                        components={[item?.component]}
                                    />
                                </Typography.Paragraph>
                            </Box>
                        )
                    })}
                </Box>
            </FlexBox.Box>
        </FlexBox.Box>
    )
}

export default React.memo(TabContent)
