import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import InitialLoader from 'components/elements/dot-loader'
import { localize, WithIntl } from 'components/localization'
import { SEO, Container } from 'components/containers'
import { useLivechat } from 'components/hooks/use-livechat'

const StyledContainer = styled(Container)`
    text-align: center;
    height: 100vh;
    justify-content: center;
`

const LiveChatPage = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // The reason for this timeout is to help delay before calling LC_API.open_chat_window() function,
        // so that it only call the function if Live Chat is fully loaded.
        let script_timeout = null
        if (is_livechat_interactive) {
            script_timeout = setTimeout(() => {
                LC_API.open_chat_window()
                setLoading(false)
                document.querySelector('[aria-label="Minimize window"]').style.display = 'none'
            }, 1000)
        }

        return () => {
            clearTimeout(script_timeout)
        }
    }, [is_livechat_interactive])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('Live Chat')}
                description={localize('This page automatically open Live Chat window')}
                no_index
            />
            <StyledContainer>{loading && <InitialLoader />}</StyledContainer>
        </Layout>
    )
}

export default WithIntl()(LiveChatPage)
