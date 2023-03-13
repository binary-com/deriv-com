import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './hero.scss'

type HeroTextProps = BaseTypographyProps<HeadingTagOptions>

const HeroText = ({ className, ...rest }: HeroTextProps) => {
    const classnames = clsx(className, 'hero')

    return <BaseTypography className={classnames} {...rest} />
}

export default HeroText
