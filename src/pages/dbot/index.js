import React, { Component } from 'react'
import styled from 'styled-components'
import { TradeWithDbot } from './_trade-with-dbot'
import { OtherPlatform } from './_other-platform'
import SEO from 'components/containers/seo'
import Layout from 'components/layout/layout'
import Container from 'components/containers/container'
import { localize, WithIntl } from 'components/localization'
// import { getLocationHash, sanitize } from 'common/utility'
// import device from 'themes/device'

const MyContainer = styled(Container)`
    background: red;
`

class Dbot extends Component {
    render() {
        return (
            <Layout>
                <SEO title={localize('Dbot')} />
                <TradeWithDbot />
                <OtherPlatform />
            </Layout>
        )
    }
}

export default WithIntl()(Dbot)
