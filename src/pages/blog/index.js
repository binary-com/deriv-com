import React from 'react'
import Subscribe from './components/_subscribe';
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const Blog = () => {
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <SEO
                title={localize('Blog')}
                description={localize('Blog like a boss')}
                no_index
            />
            <Container>
                <Flex direction="column" ai="flex-start" jc="space-between">
                    <Subscribe />
                </Flex>
            </Container>
        </Layout>
    )
}

export default WithIntl()(Blog)
