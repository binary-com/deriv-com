import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { TextTagOptions } from 'features/types'
import './text.scss'

type TextProps = BaseTypographyProps<TextTagOptions>

const Text = ({ className, as, ...rest }: TextProps) => {
    const textAs = as ?? 'p'
    const classnames = clsx(className, 'text')

    return <BaseTypography as={textAs} className={classnames} {...rest} />
}

export default Text
