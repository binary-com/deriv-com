import React, { ReactNode } from 'react'
import { DerivStore } from 'store'

type BrandingProps = {
    children: ReactNode
}

const Branding = ({ children }: BrandingProps) => {
    const { hide_branding } = React.useContext(DerivStore)

    return hide_branding && <>{children}</>
}
export default Branding
