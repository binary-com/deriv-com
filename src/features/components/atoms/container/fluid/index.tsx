import React from 'react'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import dclsx from 'features/utils/dclsx'

const FluidContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = dclsx(className, 'container-fluid')

    return <Box className={classnames} {...rest} />
}

export default FluidContainer
