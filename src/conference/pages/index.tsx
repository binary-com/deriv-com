import React from 'react'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'
import { Flex } from 'components/containers'

const Home = () => {
    return (
        <Layout>
            <Flex jc="center" ai="center" pt={'20rem'} pb={'20rem'}>
                <Header type="heading-1" width="auto">
                    Conference Home page
                </Header>
            </Flex>
        </Layout>
    )
}

export default WithIntl()(Home)
