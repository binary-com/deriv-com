import React from 'react'
import Box, { BoxProps } from 'features/components/atoms/box'
import {
    ClassProps,
    ContentSectionTagOptions,
    TAlignItems,
    TContainerType,
    TFlexBasis,
    TFlexDirection,
    TFlexGrow,
    TFlexShrink,
    TFlexWrap,
    TJustifyContent,
    TSpacingSize,
} from 'features/types'
import dclsx from 'features/utils/dclsx'

interface FlexBoxClasses extends ClassProps {
    align?: TAlignItems
    justify?: TJustifyContent
    grow?: TFlexGrow
    shrink?: TFlexShrink
    direction?: TFlexDirection
    basis?: TFlexBasis
    wrap?: TFlexWrap
    gap?: TSpacingSize
}

export interface FlexBoxProps<T extends ContentSectionTagOptions>
    extends BoxProps<ContentSectionTagOptions>,
        FlexBoxClasses {
    as?: T
    container?: TContainerType
    md?: FlexBoxClasses
    lg?: FlexBoxClasses
}

const generateFlexClasses = (options: FlexBoxClasses, prefix?: string) => {
    const { gap, align, justify, grow, shrink, wrap, direction, basis } = options
    const classPrefix = prefix ? `${prefix}-` : ''

    return dclsx({
        [`${classPrefix}gap-${gap}`]: gap,
        [`${classPrefix}align-items-${align}`]: align,
        [`${classPrefix}justify-${justify}`]: justify,
        [`${classPrefix}flex-grow-${grow}`]: grow,
        [`${classPrefix}flex-shrink-${shrink}`]: shrink,
        [`${classPrefix}flex-wrap-${wrap}`]: wrap,
        [`${classPrefix}flex-dir-${direction}`]: direction,
        [`${classPrefix}flex-basis-${basis}`]: basis,
    })
}

const FlexBox = <T extends ContentSectionTagOptions>({
    className,
    gap,
    align,
    justify,
    grow,
    shrink,
    wrap,
    direction,
    basis,
    md,
    lg,
    container,
    ...rest
}: FlexBoxProps<T>) => {
    const classnames = dclsx(
        'flex',
        className,
        {
            [`container-${container}`]: container,
        },
        generateFlexClasses({ gap, align, justify, grow, shrink, wrap, direction, basis }),
        generateFlexClasses(md ?? {}, 'md'),
        generateFlexClasses(lg ?? {}, 'lg'),
    )

    return <Box className={classnames} md={md} lg={lg} {...rest} />
}

export default FlexBox
