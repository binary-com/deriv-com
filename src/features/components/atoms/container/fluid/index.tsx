import clsx from 'clsx'
import React from 'react'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import './fluid-container.scss'

const FluidContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = clsx(className, 'fluid-container')

    return <Box className={classnames} {...rest} />
}

export default FluidContainer
