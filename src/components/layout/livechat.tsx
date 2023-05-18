import React from 'react'
import FloatingActionButton from './floating-action-button'
import { useLivechat } from 'components/hooks/use-livechat'
import LiveChatIC from 'images/svg/layout/livechat.svg'
import LiveChatHover from 'images/svg/layout/livechat-hover.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

const LiveChat = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const { is_mobile } = useBreakpoints()

    if (is_livechat_interactive)
        return (
            <FloatingActionButton
                className="gtm-deriv-livechat"
                onClick={() => LC_API.open_chat_window()}
            >
                {(has_hover) => (
                    <img
                        src={has_hover ? LiveChatHover : LiveChatIC}
                        width={is_mobile ? '20' : '32'}
                        height={is_mobile ? '20' : '32'}
                        alt="livechat icon"
                    />
                )}
            </FloatingActionButton>
        )

    return <></>
}

export default LiveChat
