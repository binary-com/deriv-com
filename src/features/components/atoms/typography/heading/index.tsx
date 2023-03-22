import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions, THeadingSize } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { generateHeadingSize } from 'features/styles/utils'

interface HeadingProps extends BaseTypographyProps<HeadingTagOptions> {
    size: THeadingSize
}

const Heading = ({ size = 'medium', weight, className, as = 'h1', ...rest }: HeadingProps) => {
    const classnames = dclsx(className, generateHeadingSize(size))

    return <BaseTypography as={as} className={classnames} weight={weight ?? 'bold'} {...rest} />
}

export default Heading
