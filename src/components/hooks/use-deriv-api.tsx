import { useState, useLayoutEffect, useRef, useCallback } from 'react'
import DerivWS from 'common/websocket/api'

export type DerivApiProps = {
    send: (data: object, callback: (e: any) => void) => void
}

export const useDerivApi = () => {
    const [is_opened, setOpened] = useState(false)
    const ws = useRef(null)

    useLayoutEffect(() => {
        if (!is_opened) {
            const deriv_api = new DerivWS()
            setOpened(true)
            ws.current = deriv_api
        }
    }, [is_opened])

    /**
     * @description If you want to have an stream of data please use this
     */
    const send = useCallback(async (data: object, callback?: (e: object) => void) => {
        if (ws) {
            const response = await ws.current.send(data)
            callback?.(response)
        }
    }, [])

    /**
     * @description If you want to hit the websocket once use this one, this one will send the `forget` request on it's own
     */
    const sendOnce = useCallback(async (data: object, callback?: (e: object) => void) => {
        if (ws) {
            const response = await ws.current.send(data)
            callback?.(response)
            ws.current.send({ forget: { req_id: response?.req_id } })
        }
    }, [])

    return { send, sendOnce }
}
