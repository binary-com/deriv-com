import React from 'react'
import { redirectOpenLiveChatBox } from 'common/utility'

export const useOpenLiveChat = (is_triggered?: boolean) => {
    let script_timeout = null
    const [is_mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        if (is_mounted) {
            script_timeout = setTimeout(() => {
                redirectOpenLiveChatBox(is_triggered)
            }, 2000)
        }
        setMounted(true)
        return () => {
            clearTimeout(script_timeout)
        }
    }, [is_mounted])
}
