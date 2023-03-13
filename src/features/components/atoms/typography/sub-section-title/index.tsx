import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './sub-section-title.scss'

type SubSectionTitleProps = BaseTypographyProps<HeadingTagOptions>

const SubSectionTitle = ({ className, ...rest }: SubSectionTitleProps) => {
    const classnames = clsx(className, 'sub-section-title')

    return <BaseTypography className={classnames} {...rest} />
}

export default SubSectionTitle
