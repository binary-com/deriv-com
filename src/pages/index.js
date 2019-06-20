import React from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import { Localize } from '../components/containers/localize'

const Home = () => (
    <Layout>
        <SEO title="Home" />
        <h1>
            <Localize i18n_text="Home" />
        </h1>
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

export default Home
