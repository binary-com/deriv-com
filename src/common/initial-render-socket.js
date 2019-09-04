import { BinarySocketBase } from 'common/websocket/socket_base'
import { BinarySocketGeneral } from 'common/websocket/socket_general'
import { NetworkMonitorBase } from 'common/websocket/network_base'
import { toISOFormat, isBrowser } from 'common/utility'

// Make sure that language is passed on
export const initializeWebsocket = lang => {
    if (isBrowser()) {
        localStorage.setItem('i18n', lang)

        const binary_socket = BinarySocketBase.get()
        if (!binary_socket || BinarySocketBase.hasReadyState(2, 3)) {
            NetworkMonitorBase.init(BinarySocketGeneral)
        } else {
            binary_socket.close()
            NetworkMonitorBase.init(BinarySocketGeneral)
        }

        if (!localStorage.getItem('date_first_contact')) {
            BinarySocketBase.wait('time').then(response => {
                localStorage.setItem(
                    'date_first_contact',
                    toISOFormat(new Date(response.time * 1000)),
                )
            })
        }
    }
}
