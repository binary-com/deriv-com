import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './main-landing-title.scss'

type MainLandingTitleProps = BaseTypographyProps<HeadingTagOptions>

const MainLandingTitle = ({ className, ...rest }: MainLandingTitleProps) => {
    const classnames = clsx(className, 'main-landing-title')

    return <BaseTypography className={classnames} {...rest} />
}

export default MainLandingTitle
