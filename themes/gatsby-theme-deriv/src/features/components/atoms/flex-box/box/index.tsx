import React from 'react'
import { FlexItemClasses, generateFlexItemClasses } from '../item'
import Box, { BoxProps } from '../../box'
import {
    ContentSectionTagOptions,
    TAlignItems,
    TContainerType,
    TFlexDirection,
    TFlexWrap,
    TJustifyContent,
    TSpacingSize,
} from 'features/types'
import dclsx from 'features/utils/dclsx'

interface FlexBoxClasses extends FlexItemClasses {
    align?: TAlignItems
    justify?: TJustifyContent
    direction?: TFlexDirection
    wrap?: TFlexWrap
    gap?: TSpacingSize
}

export interface FlexBoxProps<T extends ContentSectionTagOptions>
    extends BoxProps<ContentSectionTagOptions>,
        FlexBoxClasses {
    as?: T
    container?: TContainerType
    md?: FlexBoxClasses & BoxProps<ContentSectionTagOptions>
    lg?: FlexBoxClasses & BoxProps<ContentSectionTagOptions>
}

const generateFlexClasses = (options: FlexBoxClasses, prefix?: string) => {
    const { gap, align, justify, wrap, direction } = options
    const classPrefix = prefix ? `${prefix}-` : ''

    return dclsx({
        [`${classPrefix}gap-${gap}`]: gap,
        [`${classPrefix}align-items-${align}`]: align,
        [`${classPrefix}justify-${justify}`]: justify,
        [`${classPrefix}flex-wrap-${wrap}`]: wrap,
        [`${classPrefix}flex-dir-${direction}`]: direction,
    })
}

const FlexBoxContainer = <T extends ContentSectionTagOptions>({
    className,
    align_self,
    grow,
    shrink,
    basis,
    align,
    justify,
    direction,
    wrap,
    gap,
    md,
    container,
    lg,
    ...rest
}: FlexBoxProps<T>) => {
    const classnames = dclsx(
        'flex',
        className,
        {
            [`container-${container}`]: container,
        },
        generateFlexItemClasses({ align_self, grow, shrink, basis }),
        generateFlexItemClasses(md ?? {}, 'md'),
        generateFlexItemClasses(lg ?? {}, 'lg'),
        generateFlexClasses({ align, justify, direction, wrap, gap }),
        generateFlexClasses(md ?? {}, 'md'),
        generateFlexClasses(lg ?? {}, 'lg'),
    )
    return <Box className={classnames} md={md} lg={lg} {...rest} />
}

export default FlexBoxContainer
