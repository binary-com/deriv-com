import React, { useState, useLayoutEffect } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'
import { DerivStore } from 'store'

export const useWebsocket = () => {
    const { ws_messages_hook } = React.useContext(DerivStore)
    const [is_opened, setOpened] = useState(false)
    const [ws, setWS] = useState(null)
    const [ws_messages] = ws_messages_hook
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

    return [ws, ws_messages, is_opened]
}
