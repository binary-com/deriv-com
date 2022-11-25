import React from 'react'
import { Localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import { LinkText } from 'components/elements'
import { TString } from 'types/generics'

type LiveChatLinkTextProps = {
    text?: TString
    weight?: string
}

const LiveChatLinkText = ({ text, weight }: LiveChatLinkTextProps) => {
    const [is_livechat_interactive] = useLivechat()

    return (
        <LinkText
            color="red"
            mt="1rem"
            weight={weight}
            onClick={() => {
                is_livechat_interactive && window.LC_API.open_chat_window()
            }}
        >
            <Localize translate_text={text} />
        </LinkText>
    )
}

export default LiveChatLinkText
