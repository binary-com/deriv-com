import React from 'react'
import { SectionContainer, Flex } from 'components/containers'
import { Header } from 'components/elements'
import Layout from 'components/layout/layout'
import { WithIntl } from 'components/localization'

const TestRedirect = () => {
    return (
        <Layout>
            <SectionContainer direction="row">
                <Flex>
                    <Header type="heading-3" width="fit-content">
                        Test Redirection
                    </Header>
                </Flex>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(TestRedirect)
