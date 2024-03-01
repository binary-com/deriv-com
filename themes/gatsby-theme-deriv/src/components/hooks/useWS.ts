import { useCallback, useState } from 'react'
import { TSocketEndpointNames, TSocketResponseData } from 'common/websocket/types'
import apiManager, { ApiManager } from 'common/websocket'
import { getLanguage, isBrowser } from 'common/utility'

const useWS = <T extends TSocketEndpointNames>(name: T) => {
    const [is_loading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<TSocketResponseData<T>>()

    const clear = useCallback(() => {
        setError(null)
        setData(null)
    }, [])

    const send = useCallback(
        async (data?: Parameters<typeof apiManager.augmentedSend<T>>[1]) => {
            setIsLoading(true)
            const readyState = parseInt(ApiManager.readyState)
            if (readyState !== 1 && readyState !== 0) {
                if (isBrowser()) {
                    const currentLanguage = getLanguage() ?? 'en'
                    try {
                        // Connect to WebSocket if not connected
                        await apiManager.reconnectIfNotConnected(currentLanguage)
                    } catch (e) {
                        setError(e)
                        setIsLoading(false)
                        return
                    }
                } else {
                    setIsLoading(false)
                    return
                }
            }
            try {
                const response = await apiManager.augmentedSend(name, data)
                setData(response[name] as TSocketResponseData<T>)
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        },
        [name],
    )

    return { send, is_loading, error, data, clear }
}

export default useWS
