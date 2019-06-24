import React from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'

const Home = () => (
    <>
        <Layout>
            <SEO title="Home" />
            <h1>
                <Localize translate="Home" />
            </h1>
            <Image
                width="300px"
                img_name="practice.png"
                alt="gatsby astronaut"
            />
        </Layout>
    </>
)

export default Home
