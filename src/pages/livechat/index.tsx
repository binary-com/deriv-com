import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import InitialLoader from 'components/elements/dot-loader'
import { localize, WithIntl } from 'components/localization'
import { SEO, Container, Show } from 'components/containers'
import { DerivStore } from 'store'

type CoverMinimizeButtonProps = {
    loading: boolean
}

const StyledContainer = styled(Container)`
    text-align: center;
    height: 100vh;
    justify-content: center;
`

const CoverMinimizeButton = styled.div<CoverMinimizeButtonProps>`
    width: 70px;
    height: 50px;
    background-color: rgb(255 255 255);
    display: ${({ loading }) => (loading ? 'none' : 'block')};
    position: absolute;
    top: -85px;
    right: 0;
    z-index: 999999999999999999;
`

const LiveChatPage = () => {
    const { is_livechat_interactive, LC_API, setFirstLoadOpenLc } = useContext(DerivStore)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (is_livechat_interactive) {
            LC_API.open_chat_window()
            setLoading(false)
        } else setFirstLoadOpenLc(true)
    }, [is_livechat_interactive])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('Live Chat')}
                description={localize('This page automatically open Live Chat window')}
                no_index
            />
            <StyledContainer>{loading && <InitialLoader />}</StyledContainer>
            <Show.Mobile>
                <CoverMinimizeButton loading={loading} />
            </Show.Mobile>
        </Layout>
    )
}

export default WithIntl()(LiveChatPage)
