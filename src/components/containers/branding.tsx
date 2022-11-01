import React, { ReactNode } from 'react'
import { isShowBranding } from 'common/utility'

type BrandingProps = {
    children: ReactNode
}

const Branding = ({ children }: BrandingProps) => isShowBranding() && <>{children}</>

export default Branding
