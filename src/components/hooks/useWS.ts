import { useCallback, useState } from 'react'
import { TSocketEndpointNames, TSocketResponseData } from 'common/websocket/types'
import apiManager from 'common/websocket'

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
