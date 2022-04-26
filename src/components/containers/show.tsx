import React, { ReactNode } from 'react'
import { Media } from 'themes/media'
import { DerivStore } from 'store'

type DesktopProps = {
    children?: ReactNode
    max_width?: string | number
}

type MobileProps = {
    children?: ReactNode
    min_width?: string | number
}

type EuProps = {
    children?: ReactNode
}

type NonEUProps = {
    children?: ReactNode
}

export const Desktop = ({ children, max_width, ...props }: DesktopProps) => (
    <Media greaterThanOrEqual={max_width || 'tabletL'} {...props}>
        {children}
    </Media>
)
export const Mobile = ({ children, min_width, ...props }: MobileProps) => (
    <Media between={['start', ...(min_width ? [min_width] : ['tabletL'])]} {...props}>
        {children}
    </Media>
)

export const Eu = ({ children }: EuProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    if (is_eu_country) return <>{children}</>
    else return null
}

export const NonEU = ({ children }: NonEUProps) => {
    const { is_eu_country } = React.useContext(DerivStore)

    if (is_eu_country === false) return <>{children}</>
    else return null
}

export default {
    Eu,
    NonEU,
    Mobile,
    Desktop,
}
