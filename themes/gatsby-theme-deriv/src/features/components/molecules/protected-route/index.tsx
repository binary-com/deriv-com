import React from 'react'
import PageNotFound from 'features/pages/404'
import { BuildVariantContextType } from 'features/contexts/build-variant/build-variant.context'

interface ProtectedRouteProps {
    region: BuildVariantContextType["region"]
    component: React.ReactNode
    is_page_visible: boolean
}

const ProtectedRoute = ({
    is_page_visible,
    component,
    region
}: ProtectedRouteProps) => {
    return is_page_visible ? (
        <>{component}</>
    ) : (
        <PageNotFound region={region}/>
    )
}

export default ProtectedRoute
