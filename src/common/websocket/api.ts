import { getAppId, getSocketURL } from './config'
import { getCrowdin, getLanguage } from 'common/utility'
import { brand_name } from 'common/constants'

interface DerivAPIRequest {
    passthrough?: {
        [k: string]: unknown
    }
    req_id?: number
    [k: string]: unknown
}

interface DerivAPIResponse {
    echo_req: {
        [k: string]: unknown
    }
    req_id?: number
    [k: string]: unknown
}

class CustomPromise<T> {
    public readonly promise: Promise<T>
    private resolveFn!: (value: T | PromiseLike<T>) => void
    private rejectFn!: (reason?: any) => void

    public constructor() {
        this.promise = new Promise<T>((resolve, reject) => {
            this.resolveFn = resolve
            this.rejectFn = reject
        })
    }

    public reject(reason?: any) {
        this.rejectFn(reason)
    }

    public resolve(param: T) {
        this.resolveFn(param)
    }
}

export default class DerivWS {
    private pendingRequests: {
        [k: string]: CustomPromise<DerivAPIResponse>
    } = {}
    private reqId = 0
    private connected = new CustomPromise<void>()
    private socket_url = `${getSocketURL()}?app_id=${getAppId()}&l=${
        getLanguage() === 'ach' ? getCrowdin() : getLanguage()?.replace('-', '_')
    }&brand=${brand_name.toLowerCase()}`
    connection: WebSocket

    constructor() {
        const connection = new WebSocket(this.socket_url)
        connection.onopen = this.openHandler
        connection.onmessage = this.messageHandler

        this.connection = connection
    }

    isConnectionClosed() {
        const closed_state = [2, 3]
        return closed_state.includes(this.connection.readyState)
    }

    private openHandler = () => {
        if (this.connection.readyState === 1) {
            this.connected.resolve()
        } else {
            setTimeout(this.openHandler, 50)
        }
    }

    send(request: DerivAPIRequest) {
        const pending = new CustomPromise<DerivAPIResponse>()

        request.req_id = ++this.reqId

        this.pendingRequests[request.req_id] = pending

        this.connected.promise
            .then(() => {
                if (this.isConnectionClosed()) return

                this.connection.send(JSON.stringify(request))
            })
            .catch((e) => pending.reject(e))

        return pending.promise
    }

    private messageHandler = (msg: { data: string }) => {
        const response: DerivAPIResponse = JSON.parse(msg.data)
        const reqId = response.req_id

        if (reqId && reqId in this.pendingRequests) {
            this.pendingRequests[reqId].resolve(response)
            delete this.pendingRequests[reqId]
        }
    }
}
