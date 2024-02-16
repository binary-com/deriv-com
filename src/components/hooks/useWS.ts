import { useCallback, useEffect, useState } from 'react'
import { TSocketEndpointNames, TSocketResponseData } from 'common/websocket/types'
import apiManager from 'common/websocket'
import { getLanguage, isBrowser } from 'common/utility'

const useWS = <T extends TSocketEndpointNames>(name: T) => {
    const [is_loading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<TSocketResponseData<T>>()
    const [websocketInitialized, setWebsocketInitialized] = useState(
        apiManager?.socket?.readyState === 0 || apiManager?.socket?.readyState === 1,
    )

    const clear = useCallback(() => {
        setError(null)
        setData(null)
    }, [])
    useEffect(() => {
        if (isBrowser() && !websocketInitialized) {
            const currentLanguage = getLanguage() ?? 'en'
            apiManager.reconnectIfNotConnected(currentLanguage).then(() => {
                setWebsocketInitialized(true)
            })
        }
    }, [websocketInitialized])

    const send = useCallback(
        async (data?: Parameters<typeof apiManager.augmentedSend<T>>[1]) => {
            if (websocketInitialized) {
                setIsLoading(true)
                try {
                    console.log(apiManager, 'wwwe')
                    const response = await apiManager.augmentedSend(name, data)
                    console.log(response, 'wwwe')
                    setData(response[name] as TSocketResponseData<T>)
                } catch (e) {
                    setError(e)
                } finally {
                    setIsLoading(false)
                }
            }
        },
        [name, websocketInitialized],
    )

    return { send, is_loading, error, data, clear }
}

export default useWS
