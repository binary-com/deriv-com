import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { TextTagOptions } from 'features/types'
import './small.scss'

type SmallProps = BaseTypographyProps<TextTagOptions>

const Small = ({ className, ...rest }: SmallProps) => {
    const classnames = clsx(className, 'small')

    return <BaseTypography className={classnames} {...rest} />
}

export default Small
