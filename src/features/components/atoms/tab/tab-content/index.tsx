import React, { useEffect, useState } from 'react'
import { StepperTabTypes, TabItemTypes } from '../types'
import { tab_images, tab_ul } from './tab-content.module.scss'
import FlexBox from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'

const TabContent = ({ items: initial_tems, direction = 'row' }: Omit<StepperTabTypes, 'tab'>) => {
    const [selected, setSelected] = useState<number>(0)
    const [items, setItems] = useState<TabItemTypes[]>(initial_tems)

    useEffect(() => {
        setItems(initial_tems)
        setSelected(0)
    }, [initial_tems])

    return (
        <FlexBox.Box
            direction={'col'}
            justify={'center'}
            align={'center'}
            margin_inline={'10x'}
            margin_block={'20x'}
            md={{
                direction: direction,
                margin_block: '32x',
                pb: '40x',
                margin_inline: '0x',
                gap: '40x',
            }}
        >
            <FlexBox.Box
                className={tab_images}
                margin_inline={'25x'}
                md={{ margin_block: '12x', margin_inline: '0x' }}
            >
                {items[selected]?.image}
            </FlexBox.Box>
            <FlexBox.Box padding="5x">
                <Box as={'ul'}>
                    {items.map((item, index) => {
                        const is_selected = selected === index
                        return (
                            <Box
                                className={tab_ul}
                                as={'li'}
                                pt={'12x'}
                                key={item.title}
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
                                        components={item?.component}
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
