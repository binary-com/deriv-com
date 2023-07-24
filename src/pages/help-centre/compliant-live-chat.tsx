import React from 'react'
import { useLivechat } from 'components/hooks/use-livechat'
import { LinkText } from 'components/elements'

const CompliantLiveChat = (key: any) => {
    const [is_livechat_interactive, LC_API] = useLivechat('complaint')

    const openChatWindow = () => {
        is_livechat_interactive && LC_API.open_chat_window()
    }

    return (
        <LinkText color="red" onClick={openChatWindow}>
            {key?.children[0]}
        </LinkText>
    )
}

export default CompliantLiveChat
