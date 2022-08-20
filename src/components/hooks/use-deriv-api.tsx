import { useState, useLayoutEffect, useRef } from 'react'
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

    const send = async (data: object, callback: (e: object) => void) => {
        if (ws) {
            const response = await ws.current.send(data)

            callback(response)
        }
    }

    return { send }
}
