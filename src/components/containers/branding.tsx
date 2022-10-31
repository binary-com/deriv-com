import React, { ReactNode } from 'react'

type BrandingType = {
    children: ReactNode
}
const Branding = ({ children }: BrandingType) => {
    return <>{children}</>
}
export default Branding
