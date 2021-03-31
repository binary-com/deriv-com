import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/livechat.svg'
import LiveChatHover from 'images/svg/livechat-hover.svg'
import device from 'themes/device'

const StyledLiveChat = styled.div`
    position: fixed;
    bottom: 1.6rem;
    right: 1.6rem;
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    z-index: 9999;

    @media ${device.tabletS} {
        padding: 1rem;
    }
`

const LiveChat = () => {
    const [is_livechat_hover, setLivechatHover] = React.useState(false)
    const [is_livechat_interactive, LC_API] = useLivechat()

    return (
        <>
            {is_livechat_interactive && (
                <StyledLiveChat
                    className="gtm-deriv-livechat"
                    onClick={() => {
                        LC_API.open_chat_window()
                    }}
                    onMouseEnter={() => setLivechatHover(true)}
                    onMouseLeave={() => setLivechatHover(false)}
                >
                    {is_livechat_hover ? (
                        <img src={LiveChatHover} alt="livechat hover" />
                    ) : (
                        <img src={LiveChatIC} alt="livechat ic" />
                    )}
                </StyledLiveChat>
            )}
        </>
    )
}

LiveChat.propTypes = {
    is_livechat_interactive: PropTypes.bool,
    LC_API: PropTypes.object,
    setLiveChatInteractive: PropTypes.func,
}

export default LiveChat
