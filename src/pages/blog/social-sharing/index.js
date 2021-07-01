import React from 'react'
import SocialSharing from '../_social-sharing'
import useSiteMetadata from 'components/hooks/use-site-metadata'
import { WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'

const Index = () => {
    const { siteUrl } = useSiteMetadata();
    return (
        <Layout>
            <SocialSharing siteUrl={siteUrl} />
        </Layout>
    )
}

export default WithIntl()(Index)