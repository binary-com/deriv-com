import React from 'react'
import { SEO } from 'components/containers'
import { Text } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, WithIntl } from 'components/localization'
import GetStartedImage from 'images/common/help-centre/dbot-button-get-started.png'

const Home = () => {
    return (
        <Layout>
            <SEO
                title={localize('Online trading platform | Forex, commodities and indices')}
                description={localize(
                    'Deriv - An online trading platform that offers a wide selection of derivatives to trade on 24/7.',
                )}
            />
            <Text>Hello AMP</Text>
            <img src={GetStartedImage} layout="responsive" width="266" height="150"></img>
        </Layout>
    )
}

export default WithIntl()(Home)
