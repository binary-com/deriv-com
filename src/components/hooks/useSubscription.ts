import { useCallback, useState } from 'react'
import apiManager from 'features/websocket'
import {
    TSocketResponse,
    TSocketResponseData,
    TSocketSubscribableEndpointNames,
} from 'features/websocket/types'

const useSubscription = <T extends TSocketSubscribableEndpointNames>(name: T) => {
    const [is_loading, setIsLoading] = useState(false)
    const [is_subscribed, setSubscribed] = useState(false)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<TSocketResponseData<T>>()
    const [subscriber, setSubscriber] = useState<{ unsubscribe?: VoidFunction }>()

    const onData = useCallback(
        (response: TSocketResponse<T>) => {
            setData(response[name === 'ticks' ? 'tick' : name] as TSocketResponseData<T>)
            setIsLoading(false)
        },
        [name],
    )

    const onError = useCallback((response: TSocketResponse<T>) => {
        setError(response.error)
        setIsLoading(false)
    }, [])

    const subscribe = useCallback(
        (data: Parameters<typeof apiManager.augmentedSubscribe<T>>[1]) => {
            setIsLoading(true)
            setSubscribed(true)
            setSubscriber(apiManager.augmentedSubscribe(name, data).subscribe(onData, onError))
        },
        [name, onData, onError],
    )

    const unsubscribe = useCallback(() => {
        subscriber?.unsubscribe?.()
        setSubscribed(false)
    }, [subscriber])

    return { subscribe, unsubscribe, is_loading, is_subscribed, error, data }
}

export default useSubscription
