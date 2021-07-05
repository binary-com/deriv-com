import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'
import { WithIntl } from 'components/localization'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const DerivBlog = () => {
    return (
        <Layout>
            <MainWrapper>Testing</MainWrapper>
        </Layout>
    )
}

export default WithIntl()(DerivBlog)
