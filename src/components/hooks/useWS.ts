import { useState, useCallback } from 'react'
import { useDerivApi } from './use-deriv-api'
import type { TSocketEndpointNames, TSocketRequestProps, TSocketResponseData } from 'types/types'

const useWS = <T extends TSocketEndpointNames>(name: T) => {
    const [is_loading, setIsLoading] = useState(false)
    const [error, setError] = useState<unknown>()
    const [data, setData] = useState<TSocketResponseData<T>>()
    const { WS } = useDerivApi()

    const send = useCallback(
        async (
            ...props: TSocketRequestProps<T> extends never ? [undefined?] : [TSocketRequestProps<T>]
        ) => {
            setIsLoading(true)

            try {
                const response = await WS.send({ [name]: 1, ...(props[0] || {}) })

                if (response.error) {
                    setError(response.error)
                } else {
                    setData(response[name])
                }
            } catch (e) {
                setError(e)
            } finally {
                setIsLoading(false)
            }
        },
        [WS, name],
    )

    return { send, is_loading, error, data }
}

export default useWS
