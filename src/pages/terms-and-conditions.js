import React, { Component } from 'react'
import SideTab from 'components/elements/side-tab'
import { localize, WithIntl } from '../components/localization'
import Layout from '../components/layout/layout'
import SEO from '../components/containers/seo'
import Container from 'components/containers/container'

class TermsAndConditions extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <SEO title={localize('Home')} />
                <Container>
                    <SideTab />
                    <div>{localize('Hello terms and conditions')}</div>
                </Container>
            </Layout>
        )
    }
}

export default WithIntl()(TermsAndConditions)
