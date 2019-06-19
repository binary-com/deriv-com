import React, { Component } from 'react'
import AppContext from '../context/AppContext'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'

class Home extends Component {
    render() {
        return (
            <AppContext.Consumer>
                {theme => (
                    <Layout>
                        <SEO title="Home" />
                        <h1>Home {theme.dark}</h1>
                        <div
                            style={{
                                maxWidth: `300px`,
                                marginBottom: `1.45rem`,
                            }}
                        >
                            <Image />
                        </div>
                    </Layout>
                )}
            </AppContext.Consumer>
        )
    }
}
export default Home
