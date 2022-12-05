import React from 'react'
import FloatingActionButton from './floating-action-button'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/layout/livechat.svg'
import LiveChatHover from 'images/svg/layout/livechat-hover.svg'


const LiveChat = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    if (is_livechat_interactive)
        return (
            <FloatingActionButton
                className="gtm-deriv-livechat"
                onClick={() => LC_API.open_chat_window()}
            >
                {(has_hover) => (
                    <img
                        src={has_hover ? LiveChatHover : LiveChatIC}
                        width="32"
                        height="32"
                        alt="livechat icon"
                    />
                )}
            </FloatingActionButton>
        )

    return <></>
}

export default LiveChat
