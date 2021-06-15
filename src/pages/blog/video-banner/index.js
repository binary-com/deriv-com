import React from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { Flex } from 'components/containers'
import { WithIntl } from 'components/localization'

const MainWrapper = styled(Flex)`
    /* background-color: var(--color-white); */

    background-color: red;
    flex-direction: column;
    overflow: hidden;
    height: 400px;
`

const DVideoBanner = () => {
    return (
        <Layout>
            <MainWrapper></MainWrapper>
        </Layout>
    )
}

export default WithIntl()(DVideoBanner)
