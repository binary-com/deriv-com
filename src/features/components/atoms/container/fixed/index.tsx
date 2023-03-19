import React from 'react'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import './fixed-container.scss'
import dclsx from 'features/utils/dclsx'

const FixedContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = dclsx(className, 'fixed-container')

    return <Box className={classnames} {...rest} />
}

export default FixedContainer
