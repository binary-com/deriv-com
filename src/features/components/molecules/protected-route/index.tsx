import React from 'react'
import PageNotFound from 'features/pages/404-error'
import InitialLoader from 'components/elements/dot-loader'

interface ProtectedRouteProps {
    condition: boolean
    component: React.ReactNode
    is_loading: boolean
}

const ProtectedRoute = ({ condition, component, is_loading = false }: ProtectedRouteProps) => {
    return is_loading ? <InitialLoader /> : condition ? <>{component}</> : <PageNotFound />
}

export default ProtectedRoute
