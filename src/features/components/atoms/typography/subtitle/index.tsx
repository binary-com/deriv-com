import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions, TextTagOptions } from 'features/types'
import './subtitle.scss'

interface SubtitleProps extends BaseTypographyProps<TextTagOptions | HeadingTagOptions> {
    size?: 1 | 2
}

const Subtitle = ({ className, size = 1, ...rest }: SubtitleProps) => {
    const classnames = clsx(className, `subtitle-${size}`)

    return <BaseTypography className={classnames} {...rest} />
}

export default Subtitle
