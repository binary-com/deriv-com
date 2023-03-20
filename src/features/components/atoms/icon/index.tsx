import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import { ClassProps } from 'features/types'
import './icon.scss'
import dclsx from 'features/utils/dclsx'

interface IconProps extends ImgHTMLAttributes<'img'>, ClassProps {
    size?: 'small' | 'medium' | 'large'
    has_rtl?: boolean
}

const Icon = ({ size = 'small', has_rtl, className, ...rest }: IconProps) => {
    const classnames = dclsx(className, `icon-${size}`, 'icon', {
        'icon-rtl': has_rtl,
    })

    return <Box as={'img'} className={classnames} {...rest} />
}

export default Icon
