import { useState, useLayoutEffect, useRef } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'

export type OnMessageType = {
    action?: (e) => void
    dependencies?: string[]
}

export type SendCallbackType = {
    data?: object
    onmessage?: OnMessageType
}

export type DerivSocketProps = {
    ws: any
    send: ({ data, onmessage: { action, dependencies } }: SendCallbackType) => void
    receive: ({ action, dependencies }: OnMessageType) => void
}

export const useWebsocket = () => {
    const [is_opened, setOpened] = useState(false)
    const [ws, setWS] = useState(null)

    const send_requests = useRef([])
    const ws_messages = useRef([])

    useLayoutEffect(() => {
        if (!is_opened) {
            const binary_socket = BinarySocketBase.init()
            setOpened(true)
            setWS(binary_socket)
        }
    }, [BinarySocketBase])

    if (ws) {
        ws.onmessage = (msg) => {
            const parsed_data = JSON.parse(msg.data)
            // Matching action with request message
            ws_messages.current.map(({ action, dependencies }) => {
                if (!dependencies.length || dependencies.includes(parsed_data.msg_type)) {
                    action(parsed_data)
                }
            })
        }

        ws.onopen = () => {
            // firing websocket calls requested before ws open
            send_requests.current.map((request) => {
                ws.send(request)
            })
        }
    }

    const send = ({ data, onmessage: { action, dependencies = [] } }: SendCallbackType) => {
        const request_data = JSON.stringify(data)

        if (action) {
            addWSMessageCallback({ action, dependencies })
        }

        if (ws) {
            ws.send(request_data)
        } else {
            send_requests.current.push(request_data)
        }
    }

    const addWSMessageCallback = ({ action, dependencies = [] }: OnMessageType) => {
        ws_messages.current.push({
            action,
            dependencies,
        })
    }

    const receive = addWSMessageCallback

    return { ws, send, receive }
}
