import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './page-title.scss'

type PageTitleProps = BaseTypographyProps<HeadingTagOptions>

const PageTitle = ({ className, ...rest }: PageTitleProps) => {
    const classnames = clsx(className, 'page-title')

    return <BaseTypography className={classnames} {...rest} />
}

export default PageTitle
