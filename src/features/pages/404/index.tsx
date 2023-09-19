import React from 'react'
import NotFoundContainer from './content/not-found.container'
import Layout from 'features/components/templates/layout'
import MainNav from 'features/components/templates/navigation/main-nav'
import Footer from 'features/components/templates/footer'

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
