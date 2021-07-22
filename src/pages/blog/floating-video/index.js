import React from 'react'
import styled from 'styled-components'
import StickyVideoPlayer from '../components/sticky-video'
import { localize, WithIntl } from 'components/localization'
import Layout from 'components/layout/layout'
import { SEO } from 'components/containers'

// This component is for testing purposes only
const EmptyContainer = styled.div`
    height: 120rem;
    padding: 4rem;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    text-align: center;
`

const FloatingVideoPage = () => {
    return (
        <Layout>
            <SEO
                title={localize('Sticky Video Page')}
                description={localize('Sticky video component')}
            />
            <StickyVideoPlayer />
            <EmptyContainer>
                Play &
                <br />
                <br />
                Scroll Down
                <br />
                <br />
                &darr;
            </EmptyContainer>
        </Layout>
    )
}

export default WithIntl()(FloatingVideoPage)
