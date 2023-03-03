import { useState, useLayoutEffect, useRef, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import DerivWS from 'common/websocket/api'

export type DerivApiProps = {
    send: (data: object, callback: (e: any) => void) => void
}

export const useDerivApi = () => {
    const [is_opened, setOpened] = useState(false)
    const ws = useRef(null)

    const { i18n } = useTranslation()
    const current_lang = i18n.language ?? 'en'

    useLayoutEffect(() => {
        setOpened(false)
    }, [current_lang])

    useLayoutEffect(() => {
        if (!is_opened) {
            const deriv_api = new DerivWS(current_lang)
            setOpened(true)
            ws.current = deriv_api
        }
    }, [is_opened, current_lang])

    const send = useCallback(async (data: object, callback: (e: object) => void) => {
        if (ws) {
            const response = await ws.current.send(data)

            callback(response)
        }
    }, [])

    return { send, WS: ws.current }
}
