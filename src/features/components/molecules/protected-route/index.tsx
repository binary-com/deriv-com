import React from 'react'
import PageNotFound from 'features/pages/404-error'
import InitialLoader from 'components/elements/dot-loader'

interface ProtectedRouteProps {
    is_page_available: boolean
    component: React.ReactNode
    is_loading: boolean
}

const ProtectedRoute = ({
    is_page_available,
    component,
    is_loading = false,
}: ProtectedRouteProps) => {
    return is_loading ? <InitialLoader /> : is_page_available ? <>{component}</> : <PageNotFound />
}

export default ProtectedRoute
