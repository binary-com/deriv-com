import React, { AnchorHTMLAttributes } from 'react'
import { BoxProps } from '../../box'
import BaseTypography, { TypographyProps } from '../base'
import { generateTextSize } from 'features/styles/utils'
import { TTextSize } from 'features/types'
import dclsx from 'features/utils/dclsx'
export interface TypographyLinkProps
    extends AnchorHTMLAttributes<'a'>,
        Omit<BoxProps<'a'>, 'as'>,
        TypographyProps {
    size?: TTextSize
    no_hover?: boolean
}

const TypographyLink = ({ className, size, no_hover, ...rest }: TypographyLinkProps) => {
    const classnames = dclsx(className, generateTextSize(size))
    return (
        <BaseTypography
            as="a"
            className={dclsx(classnames, 'at-typography-link', {
                'at-typography-hover': !no_hover,
            })}
            {...rest}
        />
    )
}

export default TypographyLink
