import React from 'react'
import SocialSharing from '../_social-sharing'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Index = () => {
    return (
        <Layout>
            <SocialSharing />
        </Layout>
    )
}

export default WithIntl()(Index)