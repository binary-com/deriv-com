import React from 'react'
import { redirectOpenLiveChatBox } from 'common/utility'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

export const useOpenLiveChat = (props) => {
    let script_timeout = null
    const [is_mounted] = usePageLoaded()
    React.useEffect(() => {
        if (is_mounted) {
            script_timeout = setTimeout(() => {
                redirectOpenLiveChatBox(props)
            }, 2000)
        }
        return () => {
            clearTimeout(script_timeout)
        }
    }, [is_mounted])
}
