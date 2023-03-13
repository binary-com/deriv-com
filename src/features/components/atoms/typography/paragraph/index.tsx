import clsx from 'clsx'
import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import './paragraph.scss'

interface ParagraphProps extends BaseTypographyProps<'p'> {
    size?: 1 | 2
}

const Paragraph = ({ className, size = 1, ...rest }: Omit<ParagraphProps, 'as'>) => {
    const classnames = clsx(className, `paragraph-${size}`)

    return <BaseTypography className={classnames} as={'p'} {...rest} />
}

export default Paragraph
