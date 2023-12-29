import React from 'react'
import Box, { BoxProps } from '../../box'
import {
    ClassProps,
    ContentSectionTagOptions,
    TAlignSelf,
    TFlexBasis,
    TFlexGrow,
    TFlexShrink,
} from 'features/types'
import dclsx from 'features/utils/dclsx'

export interface FlexItemClasses extends ClassProps {
    align_self?: TAlignSelf
    grow?: TFlexGrow
    shrink?: TFlexShrink
    basis?: TFlexBasis
}

export interface FlexItemProps<T extends ContentSectionTagOptions>
    extends BoxProps<ContentSectionTagOptions>,
        FlexItemClasses {
    as?: T
    md?: FlexItemClasses & BoxProps<ContentSectionTagOptions>
    lg?: FlexItemClasses & BoxProps<ContentSectionTagOptions>
}

export const generateFlexItemClasses = (options: FlexItemClasses, prefix = '') => {
    const classPrefix = prefix ? `${prefix}-` : ''
    const { align_self, grow, shrink, basis } = options
    return dclsx({
        [`${classPrefix}at-align-self-${align_self}`]: align_self,
        [`${classPrefix}at-flex-grow-${grow}`]: grow,
        [`${classPrefix}at-flex-shrink-${shrink}`]: shrink,
        [`${classPrefix}at-flex-basis-${basis}`]: basis,
    })
}

const FlexItem = <T extends ContentSectionTagOptions>({
    className,
    align_self,
    grow,
    shrink,
    basis,
    md,
    lg,
    ...rest
}: FlexItemProps<T>) => {
    const classnames = dclsx(
        className,
        generateFlexItemClasses({ align_self, grow, shrink, basis }),
        generateFlexItemClasses(md ?? {}, 'md'),
        generateFlexItemClasses(lg ?? {}, 'lg'),
    )

    return <Box className={classnames} md={md} lg={lg} {...rest} />
}

export default FlexItem
