import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './display-title.scss'

type DisplayTitleProps = BaseTypographyProps<HeadingTagOptions>

const DisplayTitle = ({ className, ...rest }: DisplayTitleProps) => {
    const classnames = clsx(className, 'display-title')

    return <BaseTypography className={classnames} {...rest} />
}

export default DisplayTitle
