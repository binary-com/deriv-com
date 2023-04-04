import React, { AnchorHTMLAttributes } from 'react'
import { BoxProps } from '../../box'
import BaseTypography, { TypographyProps } from '../base'
import { generateTextSize } from 'features/styles/utils'
import { TTextSize } from 'features/types'
import dclsx from 'features/utils/dclsx'
import './link.scss'
export interface TypographyLinkProps
    extends AnchorHTMLAttributes<'a'>,
        Omit<BoxProps<'a'>, 'as'>,
        TypographyProps {
    size?: TTextSize
}

const TypographyLink = ({ className, size, ...rest }: TypographyLinkProps) => {
    const classnames = dclsx(className, generateTextSize(size))
    return <BaseTypography as="a" className={dclsx(classnames, 'typography-link')} {...rest} />
}

export default TypographyLink
