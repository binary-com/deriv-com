import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { TTextSize } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { generateTextSize } from 'features/styles/utils'

interface ParagraphProps extends BaseTypographyProps<'p'> {
    size?: TTextSize
}

const Paragraph = ({ className, size = 'medium', ...rest }: Omit<ParagraphProps, 'as'>) => {
    const classnames = dclsx(className, generateTextSize(size))

    return <BaseTypography className={classnames} as={'p'} {...rest} />
}

export default Paragraph
