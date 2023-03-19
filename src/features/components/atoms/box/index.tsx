import React, { HTMLAttributes } from 'react'
import { ClassProps } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { generateBackgroundColor, generateSpacingClasses } from 'features/styles/utils'

export interface BoxProps<T extends React.ElementType = 'p'>
    extends HTMLAttributes<T>,
        ClassProps<T> {}

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
    innerRef,
    bgcolor,
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
        generateBackgroundColor(bgcolor),
    )

    return <Component ref={innerRef} className={classnames === '' ? null : classnames} {...rest} />
}

export default Box
