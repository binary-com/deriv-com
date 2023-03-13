import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { TextTagOptions } from 'features/types'
import './sub-text.scss'

type SubTextProps = BaseTypographyProps<TextTagOptions>

const SubText = ({ className, ...rest }: SubTextProps) => {
    const classnames = clsx(className, 'sub-text')

    return <BaseTypography className={classnames} {...rest} />
}

export default SubText
