import React from 'react'
import { redirectOpenLiveChatBox } from 'common/utility'

export const useOpenLiveChat = (props) => {
    let script_timeout = null
    const [is_mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        if (is_mounted) {
            script_timeout = setTimeout(() => {
                redirectOpenLiveChatBox(props)
            }, 2000)
        }
        setMounted(true)
        return () => {
            clearTimeout(script_timeout)
        }
    }, [is_mounted])
}
