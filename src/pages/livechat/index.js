import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import InitialLoader from 'components/elements/dot-loader'
import { localize, WithIntl } from 'components/localization'
import { SEO, Container } from 'components/containers'
import { useLivechat } from 'components/hooks/use-livechat'

const StyledContainer = styled(Container)`
    text-align: center;
    height: 100vh;
    font-size: 5.5em;
    justify-content: center;
`

const LiveChat = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    useEffect(() => {
        if (is_livechat_interactive) {
            window.LiveChatWidget.on('ready', () => {
                LC_API.open_chat_window()
            })
        }
    }, [is_livechat_interactive])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO title={localize('Live Chat')} description={localize('Live chat')} no_index />
            <StyledContainer>
                <InitialLoader />
            </StyledContainer>
        </Layout>
    )
}

export default WithIntl()(LiveChat)
