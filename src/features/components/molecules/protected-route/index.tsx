import React from 'react'
import PageNotFound from 'features/pages/404-error'
import InitialLoader from 'components/elements/dot-loader'

interface ProtectedRouteProps {
    is_page_visible: boolean
    component: React.ReactNode
    is_loading: boolean
}

const ProtectedRoute = ({
    is_page_visible,
    component,
    is_loading = false,
}: ProtectedRouteProps) => {
    return is_loading ? <InitialLoader /> : is_page_visible ? <>{component}</> : <PageNotFound />
}

export default ProtectedRoute
