import React from 'react'
import { redirectOpenLiveChatBox } from 'common/utility'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

export const useOpenLiveChat = (is_triggered?: boolean) => {
    let script_timeout = null
    const [is_mounted] = usePageLoaded()
    React.useEffect(() => {
        if (is_mounted) {
            script_timeout = setTimeout(() => {
                redirectOpenLiveChatBox(is_triggered)
            }, 2000)
        }
        return () => {
            clearTimeout(script_timeout)
        }
    }, [is_mounted])
}
