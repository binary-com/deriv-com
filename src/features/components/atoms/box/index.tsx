import React, { ComponentPropsWithRef, HTMLAttributes } from 'react'
import { ClassProps, TBGColor, TVisible } from 'features/types'
import dclsx from 'features/utils/dclsx'
import {
    generateBackgroundColor,
    generateBorderRadius,
    generateSpacingClasses,
    generateVisibleClasses,
} from 'features/styles/utils'

export interface BoxProps<T extends React.ElementType = 'div'>
    extends HTMLAttributes<T>,
        ClassProps {
    as?: T
    innerRef?: ComponentPropsWithRef<T>['ref']
    visible?: TVisible
    md?: ClassProps
    lg?: ClassProps
    bgcolor?: TBGColor
}

const Box = <T extends React.ElementType>({
    as,
    margin,
    padding,
    className,
    ml,
    mr,
    mt,
    mb,
    margin_inline,
    margin_block,
    pl,
    pr,
    pt,
    pb,
    padding_block,
    padding_inline,
    md,
    lg,
    innerRef,
    bgcolor,
    radius,
    visible,
    ...rest
}: BoxProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof BoxProps<T>>) => {
    const Component = as || 'div'

    const classnames = dclsx(
        className,
        generateSpacingClasses({
            margin,
            padding,
            ml,
            mr,
            mt,
            mb,
            margin_inline,
            margin_block,
            pl,
            pr,
            pt,
            pb,
            padding_block,
            padding_inline,
        }),
        generateVisibleClasses(visible),
        generateSpacingClasses(md ?? {}, 'md'),
        generateSpacingClasses(lg ?? {}, 'lg'),
        generateBackgroundColor(bgcolor),
        generateBorderRadius(radius),
    )

    return <Component ref={innerRef} className={classnames === '' ? null : classnames} {...rest} />
}

export default Box
