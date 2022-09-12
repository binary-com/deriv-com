import React, { useContext, ReactNode } from 'react'
import { Media } from 'themes/media'
import { DerivStore } from 'store'

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

type DomainType = { children: ReactNode }

export const Eu = ({ children }: DomainType) => {
    const { is_eu_country } = useContext(DerivStore)

    if (is_eu_country) return <>{children}</>
    else return null
}

export const NonEU = Eu

export default {
    Eu,
    NonEU,
    Mobile,
    Desktop,
}
