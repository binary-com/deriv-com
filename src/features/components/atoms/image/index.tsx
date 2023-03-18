import clsx from 'clsx'
import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import './image.scss'

interface ImageProps extends ImgHTMLAttributes<'img'> {
    has_rtl?: boolean
}

const Image = ({ className, has_rtl, ...rest }: ImageProps) => {
    const classnames = clsx(className, {
        rtl_image: has_rtl,
    })

    return <Box as={'img'} className={classnames} {...rest} />
}

export default Image
