import { useState, useLayoutEffect } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'

export const useWebsocket = () => {
    const [is_opened, setOpened] = useState(false)
    const [ws, setWS] = useState(null)
    const [ws_messages, setMessages] = useState([])
    const binary_socket = BinarySocketBase.init()

    useLayoutEffect(() => {
        if (!is_opened) {
            setOpened(true)
            setWS(binary_socket)
        }
    }, [BinarySocketBase])

    if (ws) {
        // List down all on message actions
    }

    return [ws, is_opened]
}
