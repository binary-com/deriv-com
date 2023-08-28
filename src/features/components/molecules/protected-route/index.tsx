import React from 'react'
import PageNotFound from 'features/pages/404'
import InitialLoader from 'components/elements/dot-loader'
import Layout from 'features/components/templates/layout'

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
    return is_loading ? (
        <Layout>
            <InitialLoader />
        </Layout>
    ) : is_page_visible ? (
        <>{component}</>
    ) : (
        <PageNotFound />
    )
}

export default ProtectedRoute
