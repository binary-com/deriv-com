import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import './image.scss'
import dclsx from 'features/utils/dclsx'

interface ImageProps extends ImgHTMLAttributes<'img'> {
    has_rtl?: boolean
}

const Image = ({ className, has_rtl, ...rest }: ImageProps) => {
    const classnames = dclsx(className, {
        rtl_image: has_rtl,
    })

    return <Box as={'img'} className={classnames} {...rest} />
}

export default Image
