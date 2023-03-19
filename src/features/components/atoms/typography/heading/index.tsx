import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions, THeadingSize } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { generateHeadingSize } from 'features/styles/utils'

interface HeadingProps extends BaseTypographyProps<HeadingTagOptions> {
    size: THeadingSize
}

const Heading = ({ size = 'medium', weight, className, ...rest }: HeadingProps) => {
    const classnames = dclsx(className, generateHeadingSize(size))

    return <BaseTypography className={classnames} weight={weight ?? 'bold'} {...rest} />
}

export default Heading
