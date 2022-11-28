import React, { ReactNode } from 'react'
import { DerivStore } from 'store'

type BrandingProps = {
    children: ReactNode
}

const Branding = ({ children }: BrandingProps) => {
    const { is_show_branding } = React.useContext(DerivStore)
    return is_show_branding ? <>{children}</> : null
}

export default Branding
