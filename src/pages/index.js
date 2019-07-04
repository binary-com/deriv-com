import React, { Component } from 'react'

import SEO from '../components/containers/seo'
import Button from '../components/form/button'
import { localize, WithIntl } from '../components/localization'
import Layout from '../components/layout/layout'
class Home extends Component {
    state = {
        is_modal_open: false,
    }

    render() {
        return (
            <Layout>
                <SEO title={localize('Home')} />
                <div>
                    <Button type="secondary">
                        {localize('secondary button example')}
                    </Button>
                </div>
            </Layout>
        )
    }
}

export default WithIntl()(Home)
