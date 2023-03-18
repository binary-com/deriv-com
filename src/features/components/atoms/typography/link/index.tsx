import clsx from 'clsx'
import React, { AnchorHTMLAttributes } from 'react'
import BaseTypography, { TypographyProps } from '../base'
import './typography-link.scss'

export interface TypographyLinkProps extends AnchorHTMLAttributes<'a'>, TypographyProps<'a'> {}

const TypographyLink = ({ className, ...rest }: TypographyLinkProps) => {
    return <BaseTypography as="a" className={clsx(className, 'typography-link')} {...rest} />
}

export default TypographyLink
