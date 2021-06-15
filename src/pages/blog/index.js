import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`

const DerivBlog = () => {
    return (
        <Layout is_ppc_redirect={true}>
            <MainWrapper>Testing</MainWrapper>
        </Layout>
    )
}

export default DerivBlog
