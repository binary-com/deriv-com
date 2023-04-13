import { TSocketEndpoints } from './api.calls.types'

export type TSocketEndpointNames = keyof TSocketEndpoints

export type TSocketSubscribableEndpointNames =
    | KeysMatching<TSocketEndpoints, { request: { subscribe?: number } }>
    | 'exchange_rates'

export type TSocketResponse<T extends TSocketEndpointNames> = TSocketEndpoints[T]['response']

export type TSocketResponseData<T extends TSocketEndpointNames> =
    TSocketResponse<T>[T extends 'ticks' ? 'tick' : T]

export type TSocketRequest<T extends TSocketEndpointNames> = TSocketEndpoints[T]['request']

export type TSocketRequestCleaned<T extends TSocketEndpointNames> = Omit<
    TSocketRequest<T>,
    | (T extends KeysMatching<TSocketRequest<T>, 1> ? T : never)
    | 'passthrough'
    | 'req_id'
    | 'subscribe'
>

export type TSocketRequestProps<T extends TSocketEndpointNames> =
    TSocketRequestCleaned<T> extends Record<string, never> ? never : TSocketRequestCleaned<T>
