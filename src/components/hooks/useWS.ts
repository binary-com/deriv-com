import { useCallback, useEffect, useState, useRef } from 'react'
import { TSocketEndpointNames, TSocketResponseData } from 'common/websocket/types'
import apiManager from 'common/websocket'
import { getLanguage, isBrowser } from 'common/utility'

const useWS = <T extends TSocketEndpointNames>(name: T) => {
    const [is_loading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<TSocketResponseData<T>>()
    const [websocketInitialized, setWebsocketInitialized] = useState(false)
    const readyStateRef = useRef<number>(parseInt(sessionStorage.getItem('websocket_ready_state')))

    const clear = useCallback(() => {
        setError(null)
        setData(null)
    }, [])

    useEffect(() => {
        const handleStorageChange = () => {
            readyStateRef.current = parseInt(sessionStorage.getItem('websocket_ready_state'))
        }

        window.addEventListener('storage', handleStorageChange)

        return () => {
            window.removeEventListener('storage', handleStorageChange)
        }
    }, [])

    const send = useCallback(
        async (data?: Parameters<typeof apiManager.augmentedSend<T>>[1]) => {
            const readyState = readyStateRef.current
            console.log(readyState, 'ddd')
            if (readyState === 1 || readyState === 0) {
                setIsLoading(true)
                try {
                    const response = await apiManager.augmentedSend(name, data)
                    console.log(response, 'www')
                    setData(response[name] as TSocketResponseData<T>)
                } catch (e) {
                    setError(e)
                } finally {
                    setIsLoading(false)
                }
            } else {
                if (isBrowser()) {
                    const currentLanguage = getLanguage() ?? 'en'
                    apiManager.reconnectIfNotConnected(currentLanguage).then(() => {
                        setWebsocketInitialized(true)
                        send()
                    })
                }
            }
        },
        [name],
    )

    return { send, is_loading, error, data, clear }
}

export default useWS
