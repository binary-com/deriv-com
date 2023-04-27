import React, { useEffect, useState } from 'react'
import type { ImageDataLike } from 'gatsby-plugin-image'
import FlexBox from 'features/components/atoms/flex-box'
import Box from 'features/components/atoms/box'

type TItem = {
    title: JSX.Element
    image: ImageDataLike
    alt: JSX.Element
}

type TProps = {
    items: TItem[]
    chosen_tab?: string
    default_step?: number
    onStepChanged?: (step: number) => void
}

const StepperView: React.FC<TProps> = ({
    items: initialItems,
    default_step = 0,
    onStepChanged,
    chosen_tab,
}) => {
    const [selected, setSelected] = useState<number>(default_step)
    const [items, setItems] = useState<TItem[]>(initialItems)

    useEffect(() => {
        setItems(initialItems)
        setSelected(default_step)
    }, [chosen_tab, initialItems, default_step])

    useEffect(() => {
        onStepChanged?.(selected)
    }, [items, selected, onStepChanged])

    return (
        <FlexBox.Box align={'center'}>
            <FlexBox.Box direction={'col'} basis={'1-3'} gap={'8x'} md={{ gap: '12x' }}>
                <Box as={'ul'}>
                    {items.map((item, index) => (
                        <li
                            key={`${item.title}-${index}`}
                            style={{
                                fontWeight: selected === index ? 'bold' : 'normal',
                                color:
                                    selected === index
                                        ? 'var(--color-black-3)'
                                        : 'var(--color-grey-5)',
                            }}
                            onClick={() => setSelected(index)}
                        >
                            {item.title}
                        </li>
                    ))}
                </Box>
            </FlexBox.Box>
            <FlexBox.Box basis={'1-3'}>{items[selected]?.image}</FlexBox.Box>
        </FlexBox.Box>
    )
}

export default React.memo(StepperView)
