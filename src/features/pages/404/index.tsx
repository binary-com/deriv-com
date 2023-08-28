import React from 'react'
import NotFoundContainer from './content/not-found.container'
import { SEO } from 'components/containers'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer'
import { TGatsbyHead } from 'features/types'

const PageNotFound = () => {
    return (
        <Layout>
            <MainNav />
            <NotFoundContainer />
            <Footer />
        </Layout>
    )
}

export default PageNotFound

export const Head = ({ pageContext }: TGatsbyHead) => (
    <SEO
        title="_t_404 - Page not found | Deriv_t_"
        description="_t_The page you are looking for does not exist._t_"
        pageContext={pageContext}
    />
)
