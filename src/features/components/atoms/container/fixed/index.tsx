import React from 'react'
import Box, { BoxProps } from '../../box'
import { ContentSectionTagOptions } from 'features/types'
import dclsx from 'features/utils/dclsx'
import './container-fixed.scss'

const FixedContainer = ({ className, ...rest }: BoxProps<ContentSectionTagOptions>) => {
    const classnames = dclsx(className, 'container-fixed')

    return <Box className={classnames} {...rest} />
}

export default FixedContainer
