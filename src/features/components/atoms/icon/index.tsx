import clsx from 'clsx'
import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import { SpaceProps } from 'features/types'
import './icon.scss'

interface IconProps extends ImgHTMLAttributes<'img'>, SpaceProps<'img'> {
    size?: 'small' | 'medium' | 'large'
    has_rtl?: boolean
}

const Icon = ({ size = 'small', has_rtl, className, ...rest }: IconProps) => {
    const classnames = clsx(className, `icon-${size}`, 'icon', {
        'icon-rtl': has_rtl,
    })

    return <Box as={'img'} className={classnames} {...rest} />
}

export default Icon
