import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import { ClassProps } from 'features/types'
import dclsx from 'features/utils/dclsx'

interface IconProps extends ImgHTMLAttributes<'img'>, ClassProps {
    size?: 'small' | 'medium' | 'large' | 'xlarge'
    has_rtl?: boolean
}

const Icon = ({ size = 'small', has_rtl, className, ...rest }: IconProps) => {
    const classnames = dclsx(className, `at-icon-${size}`, 'at-icon', {
        'at-icon-rtl': has_rtl,
    })

    return <Box as={'img'} className={classnames} {...rest} />
}

export default Icon
