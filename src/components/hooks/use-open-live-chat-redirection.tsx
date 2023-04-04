import React from 'react'
import { redirectOpenLiveChatBox } from 'common/utility'

export const useOpenLiveChat = (is_triggered?: boolean) => {
    const script_timeout = React.useRef(null)
    React.useEffect(() => {
        script_timeout.current = setTimeout(() => {
            redirectOpenLiveChatBox(is_triggered)
        }, 2000)

        return () => {
            clearTimeout(script_timeout.current)
        }
    }, [is_triggered])
}
