import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'

class Home extends Component {
    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <h1>Home</h1>
                <div
                    style={{
                        maxWidth: `300px`,
                        marginBottom: `1.45rem`,
                    }}
                >
                    <Image />
                </div>
            </Layout>
        )
    }
}
export default Home
