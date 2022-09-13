import React, { ReactNode } from 'react'
import { Media } from 'themes/media'

type DesktopType = {
    children?: ReactNode
    max_width?: string & number
}

export const Desktop = ({ children, max_width, ...props }: DesktopType) => (
    <Media greaterThanOrEqual={max_width || 'tabletL'} {...props}>
        {children}
    </Media>
)

// We can't type it properly due fresnel
export const Mobile = ({ children, min_width, ...props }: any) => (
    <Media between={['start', ...(min_width ? [min_width] : ['tabletL'])]} {...props}>
        {children}
    </Media>
)
export default {
    Mobile,
    Desktop,
}
