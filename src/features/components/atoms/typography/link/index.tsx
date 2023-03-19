import clsx from 'clsx'
import React, { AnchorHTMLAttributes } from 'react'
import { BoxProps } from '../../box'
import BaseTypography, { TypographyProps } from '../base'

export interface TypographyLinkProps
    extends AnchorHTMLAttributes<'a'>,
        Omit<BoxProps<'a'>, 'as'>,
        TypographyProps<'a'> {}

const TypographyLink = ({ className, ...rest }: TypographyLinkProps) => {
    return <BaseTypography as="a" className={clsx(className, 'typography-link')} {...rest} />
}

export default TypographyLink
