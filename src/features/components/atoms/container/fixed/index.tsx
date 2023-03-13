import React from 'react'
import clsx from 'clsx'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import './fixed-container.scss'

const FixedContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = clsx(className, 'fixed-container')

    return <Box className={classnames} {...rest} />
}

export default FixedContainer
