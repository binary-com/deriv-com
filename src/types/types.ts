import type {
    BalanceRequest,
    BalanceResponse,
    ExchangeRatesRequest,
    ExchangeRatesResponse,
    NewVirtualMoneyAccountRequest,
    NewVirtualMoneyAccountResponse,
    PingRequest,
    PingResponse,
    ServerStatusRequest,
    ServerStatusResponse,
    TermsAndConditionsApprovalRequest,
    TermsAndConditionsApprovalResponse,
    TicksStreamRequest,
    TicksStreamResponse,
    TransferBetweenAccountsRequest,
    TransferBetweenAccountsResponse,
    VerifyEmailRequest,
    VerifyEmailResponse,
    AccountStatusRequest,
    AccountStatusResponse,
} from '@deriv/api-types'

export type TSocketEndpoints = {
    ping: {
        request: PingRequest
        response: PingResponse
    }
    verify_email: {
        request: VerifyEmailRequest
        response: VerifyEmailResponse
    }
    exchange_rates: {
        request: ExchangeRatesRequest
        response: ExchangeRatesResponse
    }
    website_status: {
        request: ServerStatusRequest
        response: ServerStatusResponse
    }
    tnc_approval: {
        request: TermsAndConditionsApprovalRequest
        response: TermsAndConditionsApprovalResponse
    }
    transfer_between_accounts: {
        request: TransferBetweenAccountsRequest
        response: TransferBetweenAccountsResponse
    }
    balance: {
        request: BalanceRequest
        response: BalanceResponse
    }
    ticks: {
        request: TicksStreamRequest
        response: TicksStreamResponse
    }
    new_account_virtual: {
        request: NewVirtualMoneyAccountRequest
        response: NewVirtualMoneyAccountResponse
    }
    get_account_status: {
        request: AccountStatusRequest
        response: AccountStatusResponse
    }
}

export type TSocketEndpointNames = keyof TSocketEndpoints

export type TSocketSubscribableEndpointNames =
    | KeysMatching<TSocketEndpoints, { request: { subscribe?: number } }>
    | 'exchange_rates'

export type TSocketResponse<T extends TSocketEndpointNames> = TSocketEndpoints[T]['response']

export type TSocketResponseData<T extends TSocketEndpointNames> =
    TSocketResponse<T>[T extends 'ticks' ? 'tick' : T]

export type TSocketRequest<T extends TSocketEndpointNames> = TSocketEndpoints[T]['request']

type TSocketRequestCleaned<T extends TSocketEndpointNames> = Omit<
    TSocketRequest<T>,
    | (T extends KeysMatching<TSocketRequest<T>, 1> ? T : never)
    | 'passthrough'
    | 'req_id'
    | 'subscribe'
>

export type TSocketRequestProps<T extends TSocketEndpointNames> =
    TSocketRequestCleaned<T> extends Record<string, never> ? never : TSocketRequestCleaned<T>
