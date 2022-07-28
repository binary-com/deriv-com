import React, { useContext, ReactNode } from 'react'
import { Media } from 'themes/media'
import { DerivStore } from 'store'

type ResponseType = {
    children?: ReactNode
    max_width?: string & number
    min_width?: string & number
}

export const Desktop = ({ children, max_width, ...props }: ResponseType) => (
    <Media greaterThanOrEqual={max_width || 'tabletL'} {...props}>
        {children}
    </Media>
)

// We can't type it properly due fresnel
export const Mobile = ({ children, min_width, ...props }: ResponseType) => (
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

export const NonEU = ({ children }: DomainType) => {
    const { is_eu_country } = useContext(DerivStore)

    if (is_eu_country === false) return <>{children}</>
    else return null
}

export default {
    Eu,
    NonEU,
    Mobile,
    Desktop,
}
