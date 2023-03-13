import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './section-title.scss'

type SectionTitleProps = BaseTypographyProps<HeadingTagOptions>

const SectionTitle = ({ className, ...rest }: SectionTitleProps) => {
    const classnames = clsx(className, 'section-title')

    return <BaseTypography className={classnames} {...rest} />
}

export default SectionTitle
