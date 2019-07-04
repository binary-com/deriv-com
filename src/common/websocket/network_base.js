import { BinarySocketBase } from './socket_base'

/*
 * Monitors the network status and initialises the WebSocket connection
 * 1. online : check the WS status (init/send: blink after timeout, open/message: online)
 * 2. offline: it is offline
 */
const NetworkMonitorBase = (() => {
    const pendings = {}
    const pending_keys = {
        ws_init: 'ws_init',
        ws_request: 'ws_request',
    }
    const pending_timeouts = {
        [pending_keys.ws_init]: 5000,
        [pending_keys.ws_request]: 10000,
    }

    let ws_config, network_status

    const init = socket_general_functions => {
        ws_config = Object.assign(
            { wsEvent, isOnline },
            socket_general_functions,
        )

        if ('onLine' in navigator) {
            window.addEventListener('online', setStatus)
            window.addEventListener('offline', setStatus)
        } else {
            // if not supported, default to online and fallback to WS checks
            navigator.onLine = true
        }

        if (isOnline()) {
            BinarySocketBase.init(ws_config)
        }

        setStatus(isOnline() ? 'online' : 'offline')
    }

    const isOnline = () => navigator.onLine

    const wsReconnect = () => {
        if (isOnline() && BinarySocketBase.hasReadyState(2, 3)) {
            // CLOSING or CLOSED
            BinarySocketBase.init(ws_config)
        } else {
            BinarySocketBase.send({ ping: 1 }) // trigger a request to get stable status sooner
        }
    }

    const setStatus = status => {
        if (!isOnline()) {
            network_status = 'offline'
        } else if (pending_keys[status] || network_status === 'offline') {
            network_status = 'blinking'
            wsReconnect()
        } else {
            network_status = 'online'
        }
    }

    const ws_events_map = {
        init: () => setPending(pending_keys.ws_init),
        open: () => clearPendings(pending_keys.ws_init),
        send: () => setPending(pending_keys.ws_request),
        message: () => clearPendings(),
        close: () => setPending(pending_keys.ws_init),
    }

    const wsEvent = event => {
        if (typeof ws_events_map[event] === 'function') {
            ws_events_map[event]()
        }
    }

    const setPending = key => {
        if (!pendings[key]) {
            pendings[key] = setTimeout(() => {
                pendings[key] = undefined
                setStatus(key)
            }, pending_timeouts[key])
        }
    }

    const clearPendings = key => {
        const clear = k => {
            clearTimeout(pendings[k])
            pendings[k] = undefined
            if (k === pending_keys.ws_request) {
                setStatus('online')
            }
        }

        if (key) {
            clear(key)
        } else {
            Object.keys(pendings).forEach(clear)
        }
    }

    return {
        init,
        wsEvent,
    }
})()

export { NetworkMonitorBase }
