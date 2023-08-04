import React from 'react'
import PageNotFound from 'features/pages/404-error'
import InitialLoader from 'components/elements/dot-loader'

interface ProtectedRouteProps {
    condition: boolean
    component: React.ComponentType<any>
    is_loading: boolean
}

const ProtectedRoute = ({
    condition,
    component: Component,
    is_loading = false,
    ...restProps // Any additional props to be passed to the component
}: ProtectedRouteProps) => {
    return is_loading ? (
        <InitialLoader />
    ) : condition ? (
        <Component {...restProps} />
    ) : (
        <PageNotFound />
    )
}

export default ProtectedRoute
