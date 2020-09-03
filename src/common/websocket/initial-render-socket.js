import { BinarySocketBase } from 'common/websocket/socket_base'
import { toISOFormat, isBrowser } from 'common/utility'

// Make sure that language is passed on
export const initializeWebsocket = (lang) => {
    if (isBrowser()) {
        localStorage.setItem('i18n', lang)

        if (!localStorage.getItem('date_first_contact')) {
            const binary_socket = BinarySocketBase.init()
            binary_socket.onopen = () => {
                binary_socket.send(JSON.stringify({ time: 1 }))
            }

            binary_socket.onmessage = (msg) => {
                const data = JSON.parse(msg.data)
                localStorage.setItem('date_first_contact', toISOFormat(new Date(data.time * 1000)))
                binary_socket.close()
            }
        }
    }
}
