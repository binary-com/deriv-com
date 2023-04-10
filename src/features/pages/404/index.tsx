import React from 'react'
import NotFoundContainer from './content/not-found.container'
import { SEO } from 'components/containers'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import { localize } from 'components/localization'

const PageNotFound = () => {
    return (
        <Layout>
            <SEO
                title={localize('_t_404 - Page not found | Deriv_t_')}
                description={localize('_t_The page you are looking for does not exist._t_')}
            />
            <MainNav />
            <NotFoundContainer />
        </Layout>
    )
}

export default PageNotFound
