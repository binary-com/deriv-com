import clsx from 'clsx'
import React from 'react'
import Box, { BoxProps } from 'features/components/atoms/box'
import { ContentSectionTagOptions, SpacingSize } from 'features/types'

interface FlexBoxProps<T extends ContentSectionTagOptions>
    extends BoxProps<ContentSectionTagOptions> {
    as?: T
    wrap?: 'wrap' | 'nowrap' | 'wrap-reverse'
    direction?: 'row' | 'column' | 'reverse-row' | 'reverse-column'
    align?: 'start' | 'end' | 'center' | 'baseline'
    justify?: 'start' | 'end' | 'center' | 'baseline'
    gap?: SpacingSize
}

const FlexBox = <T extends ContentSectionTagOptions>({
    className,
    direction,
    align,
    justify,
    wrap,
    gap,
    ...rest
}: FlexBoxProps<T>) => {
    const classnames = clsx(
        {
            [`direction-${direction}`]: direction,
            [`align-${align}`]: align,
            [`justify-${justify}`]: justify,
            [wrap]: wrap,
            [`gap-${gap}`]: gap,
        },
        className,
    )

    return <Box className={classnames} {...rest} />
}

export default FlexBox
