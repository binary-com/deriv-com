import { useState, useLayoutEffect, useRef } from 'react'
import { BinarySocketBase } from 'common/websocket/socket_base'

type OnMessageType = {
    response?: (e) => void
    dependencies?: string[]
}

type SendCallbackType = {
    data?: string
    onmessage?: OnMessageType
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
            // Matching response with request message
            ws_messages.current.map(({ response, dependencies }) => {
                if (!dependencies.length || dependencies.includes(parsed_data.msg_type)) {
                    response(parsed_data)
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

    const send = ({ data, onmessage: { response, dependencies = [] } }: SendCallbackType) => {
        const request_data = JSON.stringify(data)

        if (response) {
            addWSMessageCallback({ response, dependencies })
        }

        if (ws) {
            ws.send(request_data)
        } else {
            send_requests.current.push(request_data)
        }
    }

    const addWSMessageCallback = ({ response, dependencies = [] }: OnMessageType) => {
        ws_messages.current.push({
            response,
            dependencies,
        })
    }

    const receive = addWSMessageCallback

    return { ws, send, receive }
}
