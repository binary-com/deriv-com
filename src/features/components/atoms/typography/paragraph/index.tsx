import React from 'react'
import BaseTypography, { BaseTypographyProps } from '../base'
import { TTextSize, TypographyTagOptions } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { generateTextSize } from 'features/styles/utils'

interface ParagraphProps extends BaseTypographyProps<TypographyTagOptions> {
    size?: TTextSize
}

const Paragraph = ({ className, size = 'medium', as = 'p', ...rest }: ParagraphProps) => {
    const classnames = dclsx(className, generateTextSize(size))

    return <BaseTypography className={classnames} as={as} {...rest} />
}

export default Paragraph
