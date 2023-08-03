import React from 'react'
import PageNotFound from 'features/pages/404-error'
import InitialLoader from 'components/elements/dot-loader'

interface ProtectedRouteProps {
    condition: boolean
    params?: any
    component: React.ComponentType<any>
    is_loading: boolean
}

const ProtectedRoute = ({
    condition,
    params,
    component: Component,
    is_loading = false,
}: ProtectedRouteProps) => {
    return is_loading ? <InitialLoader /> : condition ? <Component {...params} /> : <PageNotFound />
}

export default ProtectedRoute
