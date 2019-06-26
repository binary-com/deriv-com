import React, { Component } from 'react'

import Layout from '../components/layout/layout'
import Image from '../components/elements/image'
import SEO from '../components/containers/seo'
import Localize from '../components/containers/localize'
import Button from '../components/form/button'

class Home extends Component {
    state = {
        is_modal_open: false,
    }

    render() {
        return (
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
                <div>
                    <Button type="secondary">secondary button example</Button>
                </div>
            </Layout>
        )
    }
}

export default Home
