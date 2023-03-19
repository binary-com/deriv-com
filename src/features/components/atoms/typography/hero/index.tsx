import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import dclsx from 'features/utils/dclsx'

type HeroTextProps = BaseTypographyProps<HeadingTagOptions>

const HeroText = ({ className, ...rest }: HeroTextProps) => {
    const classnames = dclsx(className, 'heading-xxxl')

    return <BaseTypography className={classnames} {...rest} />
}

export default HeroText
