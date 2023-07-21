import React from 'react'
import { useLivechat } from 'components/hooks/use-livechat'

const CompliantLiveChat = (key: any) => {
    const [is_livechat_interactive, LC_API] = useLivechat('complaint')

    const openChatWindow = () => {
        LC_API.open_chat_window()
    }

    if (!is_livechat_interactive) return <>{key.children[0]}</>

    return <strong onClick={openChatWindow}>{key.children[0]}</strong>
}

export default CompliantLiveChat
