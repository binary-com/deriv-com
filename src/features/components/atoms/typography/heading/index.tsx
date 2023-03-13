import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { HeadingTagOptions } from 'features/types'
import './heading.scss'

interface HeadingProps extends BaseTypographyProps<HeadingTagOptions> {
    size?: 1 | 2 | 3 | 4 | 5 | 6
}

const Heading = ({ size = 1, className, ...rest }: HeadingProps) => {
    const classnames = clsx(className, {
        [`heading-${size}`]: size,
    })

    return <BaseTypography className={classnames} as={`h${size}`} {...rest} />
}

export default Heading
