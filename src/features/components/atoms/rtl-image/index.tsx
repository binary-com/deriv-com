import clsx from 'clsx'
import React, { ImgHTMLAttributes } from 'react'
import Box from '../box'
import './rtl.image.scss'

const RtlImage = ({ className, ...rest }: ImgHTMLAttributes<'img'>) => {
    const classnames = clsx(className, 'rtl-image')

    return <Box as={'img'} className={classnames} {...rest} />
}

export default RtlImage
