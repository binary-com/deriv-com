import React from 'react'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import './fluid-container.scss'
import dclsx from 'features/utils/dclsx'

const FluidContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = dclsx(className, 'fluid-container')

    return <Box className={classnames} {...rest} />
}

export default FluidContainer
