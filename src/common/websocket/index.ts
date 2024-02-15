import DerivAPIBasic from '@deriv/deriv-api/dist/DerivAPIBasic'
import type { AuthorizeRequest, AuthorizeResponse } from '@deriv/api-types'
import { Observable } from 'rxjs'
import {
    TSocketEndpointNames,
    TSocketRequestProps,
    TSocketResponse,
    TSocketSubscribableEndpointNames,
} from './types'
import { getAppId, getSocketURL } from './config'
import { getCrowdin, isBrowser } from 'common/utility'
import { brand_name } from 'common/constants'

export type TDerivApi = {
    send: (...requestData: unknown[]) => Promise<unknown>
    subscribe: (...requestData: unknown[]) => Observable<object>
    authorize: (requestData: AuthorizeRequest) => Promise<AuthorizeResponse>
    disconnect: () => void
}

const PING_INTERVAL = 30000

export class ApiManager {
    private socket: WebSocket
    public derivApi: TDerivApi
    private pingInterval: NodeJS.Timer
    private ready: boolean

    public static instance: ApiManager
    public static getInstance() {
        if (!ApiManager.instance) {
            ApiManager.instance = new ApiManager()
        }
        return ApiManager.instance
    }

    public init(lang?: string) {
        if (!this.ready) {
            if (!this.socket) {
                const language = lang === 'ach' ? getCrowdin() : lang?.replace('-', '_')
                const socket_url = getSocketURL()
                const app_id = getAppId()
                const websocket_connection_url = `${socket_url}?app_id=${app_id}&l=${language}&brand=${brand_name.toLowerCase()}`

                this.socket = new WebSocket(websocket_connection_url)
            }
            this.derivApi = new DerivAPIBasic({ connection: this.socket })
            // this.registerKeepAlive()
            this.ready = true
        }
    }

    public augmentedSend<T extends TSocketEndpointNames>(
        name: T,
        request?: TSocketRequestProps<T> extends never ? undefined : TSocketRequestProps<T>,
    ): Promise<TSocketResponse<T>> {
        return this.derivApi.send({ [name]: 1, ...request }) as Promise<TSocketResponse<T>>
    }

    public augmentedSubscribe<T extends TSocketSubscribableEndpointNames>(
        name: T,
        request?: TSocketRequestProps<T> extends never ? undefined : TSocketRequestProps<T>,
    ): Observable<TSocketResponse<T>> {
        return this.derivApi.subscribe({ [name]: 1, subscribe: 1, ...request }) as Observable<
            TSocketResponse<T>
        >
    }

    public authorize(token: string) {
        return this.derivApi.authorize({ authorize: token })
    }

    // private registerKeepAlive() {
    //     console.log("called")
    //     if (this.pingInterval) {
    //         clearInterval(this.pingInterval)
    //     }
    //     this.socket.addEventListener('open', () => {
    //         this.pingInterval = setInterval(() => {
    //             this.socket.send(JSON.stringify({ ping: 1 }))
    //         }, PING_INTERVAL)
    //     })

    //     this.socket.addEventListener('close', () => {
    //         clearInterval(this.pingInterval)
    //     })

    //     this.socket.addEventListener('error', () => {
    //         clearInterval(this.pingInterval)
    //     })
    // }

    public reset(language: string) {
        const socket_url = getSocketURL()
        const app_id = getAppId()
        const websocket_connection_url = `${socket_url}?app_id=${app_id}&l=${language}&brand=${brand_name.toLowerCase()}`

        this.derivApi.disconnect()
        this.socket.close()

        this.socket = new WebSocket(websocket_connection_url)
        this.derivApi = new DerivAPIBasic({ connection: this.socket })
        // this.registerKeepAlive()
    }
}
let apiManager: ApiManager
if (isBrowser()) {
    apiManager = ApiManager.getInstance()
}

export default apiManager
