import React from 'react'
import FloatingButton from '../floating-button'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/layout/livechat.svg'
import LiveChatHover from 'images/svg/layout/livechat-hover.svg'

const LiveChatButton = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    if (is_livechat_interactive)
        return (
            <FloatingButton
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
            </FloatingButton>
        )

    return <></>
}

export default LiveChatButton
