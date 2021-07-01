import React from 'react'
import styled from 'styled-components'
import Subscribe from './_subscribe'
import Layout from 'components/layout/layout'
import { SEO, Container, Flex } from 'components/containers'
import { localize, WithIntl } from 'components/localization'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const SubscriptionForm = () => {
    return (
        <Layout type="blog" is_ppc_redirect={true}>
            <MainWrapper>
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
            </MainWrapper>
        </Layout>
    )
}

export default WithIntl()(SubscriptionForm)