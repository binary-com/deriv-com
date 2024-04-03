import type {
    ActiveSymbolsResponse,
    ActiveSymbolsRequest,
    APITokenRequest,
    APITokenResponse,
    ApplicationDeleteRequest,
    ApplicationDeleteResponse,
    ApplicationGetDetailsRequest,
    ApplicationGetDetailsResponse,
    ApplicationListRequest,
    ApplicationListResponse,
    ApplicationMarkupDetailsRequest,
    ApplicationMarkupDetailsResponse,
    ApplicationMarkupStatisticsRequest,
    ApplicationMarkupStatisticsResponse,
    ApplicationRegisterRequest,
    ApplicationRegisterResponse,
    ApplicationUpdateRequest,
    ApplicationUpdateResponse,
    AssetIndexRequest,
    AssetIndexResponse,
    AuthorizeRequest,
    AuthorizeResponse,
    BalanceRequest,
    BalanceResponse,
    BuyContractForMultipleAccountsRequest,
    BuyContractForMultipleAccountsResponse,
    BuyContractRequest,
    BuyContractResponse,
    CancelAContractRequest,
    CancelAContractResponse,
    CashierInformationRequest,
    CashierInformationResponse,
    UpdateContractHistoryRequest,
    UpdateContractHistoryResponse,
    UpdateContractRequest,
    UpdateContractResponse,
    ContractsForSymbolRequest,
    ContractsForSymbolResponse,
    CopyTradingStartRequest,
    CopyTradingStartResponse,
    CopyTradingStopRequest,
    CopyTradingStopResponse,
    CopyTradingListRequest,
    CopyTradingListResponse,
    CopyTradingStatisticsRequest,
    CopyTradingStatisticsResponse,
    CryptocurrencyConfigurationsRequest,
    CryptocurrencyConfigurationsResponse,
    DocumentUploadRequest,
    DocumentUploadResponse,
    EconomicCalendarRequest,
    EconomicCalendarResponse,
    ExchangeRatesRequest,
    ExchangeRatesResponse,
    ForgetAllRequest,
    ForgetAllResponse,
    ForgetRequest,
    ForgetResponse,
    AccountStatusRequest,
    AccountStatusResponse,
    GetFinancialAssessmentRequest,
    GetFinancialAssessmentResponse,
    AccountLimitsRequest,
    AccountLimitsResponse,
    GetSelfExclusionRequest,
    GetSelfExclusionResponse,
    GetAccountSettingsRequest,
    GetAccountSettingsResponse,
    IdentityVerificationAddDocumentRequest,
    IdentityVerificationAddDocumentResponse,
    LandingCompanyDetailsRequest,
    LandingCompanyDetailsResponse,
    LandingCompanyRequest,
    LandingCompanyResponse,
    LoginHistoryRequest,
    LoginHistoryResponse,
    LogOutRequest,
    LogOutResponse,
    MT5DepositRequest,
    MT5DepositResponse,
    MT5GetSettingRequest,
    MT5GetSettingResponse,
    MT5AccountsListRequest,
    MT5AccountsListResponse,
    MT5NewAccountRequest,
    MT5NewAccountResponse,
    MT5PasswordChangeRequest,
    MT5PasswordChangeResponse,
    MT5PasswordCheckRequest,
    MT5PasswordCheckResponse,
    MT5PasswordResetRequest,
    MT5PasswordResetResponse,
    MT5WithdrawalRequest,
    MT5WithdrawalResponse,
    NewRealMoneyAccountDerivInvestmentEuropeLtdRequest,
    NewRealMoneyAccountDerivInvestmentEuropeLtdResponse,
    NewRealMoneyAccountDefaultLandingCompanyRequest,
    NewRealMoneyAccountDefaultLandingCompanyResponse,
    NewVirtualMoneyAccountRequest,
    NewVirtualMoneyAccountResponse,
    OAuthApplicationsRequest,
    OAuthApplicationsResponse,
    P2PAdvertCreateRequest,
    P2PAdvertCreateResponse,
    P2PAdvertInformationRequest,
    P2PAdvertInformationResponse,
    P2PAdvertListRequest,
    P2PAdvertListResponse,
    P2PAdvertUpdateRequest,
    P2PAdvertUpdateResponse,
    P2PAdvertiserAdvertsRequest,
    P2PAdvertiserAdvertsResponse,
    P2PAdvertiserCreateRequest,
    P2PAdvertiserCreateResponse,
    P2PAdvertiserInformationRequest,
    P2PAdvertiserInformationResponse,
    P2PAdvertiserListRequest,
    P2PAdvertiserListResponse,
    P2PAdvertiserPaymentMethodsRequest,
    P2PAdvertiserPaymentMethodsResponse,
    P2PAdvertiserRelationsRequest,
    P2PAdvertiserRelationsResponse,
    P2PAdvertiserUpdateRequest,
    P2PAdvertiserUpdateResponse,
    P2PChatCreateRequest,
    P2PChatCreateResponse,
    P2POrderCancelRequest,
    P2POrderCancelResponse,
    P2POrderConfirmRequest,
    P2POrderConfirmResponse,
    P2POrderCreateRequest,
    P2POrderCreateResponse,
    P2POrderDisputeRequest,
    P2POrderDisputeResponse,
    P2POrderInformationRequest,
    P2POrderInformationResponse,
    P2POrderListRequest,
    P2POrderListResponse,
    P2POrderReviewRequest,
    P2POrderReviewResponse,
    P2PPaymentMethodsRequest,
    P2PPaymentMethodsResponse,
    P2PPingRequest,
    P2PPingResponse,
    PaymentMethodsRequest,
    PaymentMethodsResponse,
    PaymentAgentCreateRequest,
    PaymentAgentCreateResponse,
    PaymentAgentDetailsRequest,
    PaymentAgentDetailsResponse,
    PaymentAgentListRequest,
    PaymentAgentListResponse,
    PaymentAgentTransferRequest,
    PaymentAgentTransferResponse,
    PaymentAgentWithdrawRequest,
    PaymentAgentWithdrawResponse,
    PayoutCurrenciesRequest,
    PayoutCurrenciesResponse,
    PingRequest,
    PingResponse,
    PortfolioRequest,
    PortfolioResponse,
    ProfitTableRequest,
    ProfitTableResponse,
    PriceProposalOpenContractsRequest,
    PriceProposalOpenContractsResponse,
    PriceProposalRequest,
    PriceProposalResponse,
    RealityCheckRequest,
    RealityCheckResponse,
    CountriesListResponse,
    CountriesListRequest,
    RevokeOauthApplicationRequest,
    RevokeOauthApplicationResponse,
    SellContractsMultipleAccountsRequest,
    SellContractsMultipleAccountsResponse,
    SellExpiredContractsRequest,
    SellExpiredContractsResponse,
    SellContractRequest,
    SellContractResponse,
    SetAccountCurrencyRequest,
    SetAccountCurrencyResponse,
    SetFinancialAssessmentRequest,
    SetFinancialAssessmentResponse,
    SetSelfExclusionRequest,
    SetSelfExclusionResponse,
    SetAccountSettingsRequest,
    SetAccountSettingsResponse,
    StatementRequest,
    StatementResponse,
    StatesListRequest,
    StatesListResponse,
    TicksHistoryRequest,
    TicksHistoryResponse,
    TicksStreamRequest,
    TicksStreamResponse,
    ServerTimeRequest,
    ServerTimeResponse,
    TermsAndConditionsApprovalRequest,
    TermsAndConditionsApprovalResponse,
    TopUpVirtualMoneyAccountRequest,
    TopUpVirtualMoneyAccountResponse,
    TradingDurationsRequest,
    TradingDurationsResponse,
    TradingPlatformInvestorPasswordResetRequest,
    TradingPlatformInvestorPasswordResetResponse,
    TradingPlatformPasswordResetRequest,
    TradingPlatformPasswordResetResponse,
    ServerListRequest,
    ServerListResponse,
    TradingTimesRequest,
    TradingTimesResponse,
    TransactionsStreamRequest,
    TransactionsStreamResponse,
    TransferBetweenAccountsRequest,
    TransferBetweenAccountsResponse,
    UnsubscribeEmailResponse,
    UnsubscribeEmailRequest,
    VerifyEmailCellxpertRequest,
    VerifyEmailCellxpertResponse,
    VerifyEmailRequest,
    VerifyEmailResponse,
    ServerStatusResponse,
    ServerStatusRequest,
} from '@deriv/api-types'

export type TSocketEndpoints = {
    active_symbols: {
        request: ActiveSymbolsRequest
        response: ActiveSymbolsResponse
    }
    api_token: {
        request: APITokenRequest
        response: APITokenResponse
    }
    app_delete: {
        request: ApplicationDeleteRequest
        response: ApplicationDeleteResponse
    }
    app_get: {
        request: ApplicationGetDetailsRequest
        response: ApplicationGetDetailsResponse
    }
    app_list: {
        request: ApplicationListRequest
        response: ApplicationListResponse
    }
    app_markup_details: {
        request: ApplicationMarkupDetailsRequest
        response: ApplicationMarkupDetailsResponse
    }
    app_markup_statistics: {
        request: ApplicationMarkupStatisticsRequest
        response: ApplicationMarkupStatisticsResponse
    }
    app_register: {
        request: ApplicationRegisterRequest
        response: ApplicationRegisterResponse
    }
    app_update: {
        request: ApplicationUpdateRequest
        response: ApplicationUpdateResponse
    }
    asset_index: {
        request: AssetIndexRequest
        response: AssetIndexResponse
    }
    authorize: {
        request: AuthorizeRequest
        response: AuthorizeResponse
    }
    balance: {
        request: BalanceRequest
        response: BalanceResponse
    }
    buy_contract_for_multiple_accounts: {
        request: BuyContractForMultipleAccountsRequest
        response: BuyContractForMultipleAccountsResponse
    }
    buy: {
        request: BuyContractRequest
        response: BuyContractResponse
    }
    cancel: {
        request: CancelAContractRequest
        response: CancelAContractResponse
    }
    cashier: {
        request: CashierInformationRequest
        response: CashierInformationResponse
    }
    contract_update_history: {
        request: UpdateContractHistoryRequest
        response: UpdateContractHistoryResponse
    }
    contract_update: {
        request: UpdateContractRequest
        response: UpdateContractResponse
    }
    contracts_for: {
        request: ContractsForSymbolRequest
        response: ContractsForSymbolResponse
    }
    copy_start: {
        request: CopyTradingStartRequest
        response: CopyTradingStartResponse
    }
    copy_stop: {
        request: CopyTradingStopRequest
        response: CopyTradingStopResponse
    }
    copytrading_list: {
        request: CopyTradingListRequest
        response: CopyTradingListResponse
    }
    copytrading_statistics: {
        request: CopyTradingStatisticsRequest
        response: CopyTradingStatisticsResponse
    }
    crypto_config: {
        request: CryptocurrencyConfigurationsRequest
        response: CryptocurrencyConfigurationsResponse
    }
    document_upload: {
        request: DocumentUploadRequest
        response: DocumentUploadResponse
    }
    economic_calendar: {
        request: EconomicCalendarRequest
        response: EconomicCalendarResponse
    }
    exchange_rates: {
        request: ExchangeRatesRequest
        response: ExchangeRatesResponse
    }
    forget_all: {
        request: ForgetAllRequest
        response: ForgetAllResponse
    }
    forget: {
        request: ForgetRequest
        response: ForgetResponse
    }
    get_account_status: {
        request: AccountStatusRequest
        response: AccountStatusResponse
    }
    get_financial_assessment: {
        request: GetFinancialAssessmentRequest
        response: GetFinancialAssessmentResponse
    }
    get_limits: {
        request: AccountLimitsRequest
        response: AccountLimitsResponse
    }
    get_self_exclusion: {
        request: GetSelfExclusionRequest
        response: GetSelfExclusionResponse
    }
    get_settings: {
        request: GetAccountSettingsRequest
        response: GetAccountSettingsResponse
    }
    identity_verification_document_add: {
        request: IdentityVerificationAddDocumentRequest
        response: IdentityVerificationAddDocumentResponse
    }
    landing_company_details: {
        request: LandingCompanyDetailsRequest
        response: LandingCompanyDetailsResponse
    }
    landing_company: {
        request: LandingCompanyRequest
        response: LandingCompanyResponse
    }
    login_history: {
        request: LoginHistoryRequest
        response: LoginHistoryResponse
    }
    logout: {
        request: LogOutRequest
        response: LogOutResponse
    }
    mt5_deposit: {
        request: MT5DepositRequest
        response: MT5DepositResponse
    }
    mt5_get_settings: {
        request: MT5GetSettingRequest
        response: MT5GetSettingResponse
    }
    mt5_login_list: {
        request: MT5AccountsListRequest
        response: MT5AccountsListResponse
    }
    mt5_new_account: {
        request: MT5NewAccountRequest
        response: MT5NewAccountResponse
    }
    mt5_password_change: {
        request: MT5PasswordChangeRequest
        response: MT5PasswordChangeResponse
    }
    mt5_password_check: {
        request: MT5PasswordCheckRequest
        response: MT5PasswordCheckResponse
    }
    mt5_password_reset: {
        request: MT5PasswordResetRequest
        response: MT5PasswordResetResponse
    }
    mt5_withdrawal: {
        request: MT5WithdrawalRequest
        response: MT5WithdrawalResponse
    }
    new_account_maltainvest: {
        request: NewRealMoneyAccountDerivInvestmentEuropeLtdRequest
        response: NewRealMoneyAccountDerivInvestmentEuropeLtdResponse
    }
    new_account_real: {
        request: NewRealMoneyAccountDefaultLandingCompanyRequest
        response: NewRealMoneyAccountDefaultLandingCompanyResponse
    }
    new_account_virtual: {
        request: NewVirtualMoneyAccountRequest
        response: NewVirtualMoneyAccountResponse
    }
    oauth_apps: {
        request: OAuthApplicationsRequest
        response: OAuthApplicationsResponse
    }
    p2p_advert_create: {
        request: P2PAdvertCreateRequest
        response: P2PAdvertCreateResponse
    }
    p2p_advert_info: {
        request: P2PAdvertInformationRequest
        response: P2PAdvertInformationResponse
    }
    p2p_advert_list: {
        request: P2PAdvertListRequest
        response: P2PAdvertListResponse
    }
    p2p_advert_update: {
        request: P2PAdvertUpdateRequest
        response: P2PAdvertUpdateResponse
    }
    p2p_advertiser_adverts: {
        request: P2PAdvertiserAdvertsRequest
        response: P2PAdvertiserAdvertsResponse
    }
    p2p_advertiser_create: {
        request: P2PAdvertiserCreateRequest
        response: P2PAdvertiserCreateResponse
    }
    p2p_advertiser_info: {
        request: P2PAdvertiserInformationRequest
        response: P2PAdvertiserInformationResponse
    }
    p2p_advertiser_list: {
        request: P2PAdvertiserListRequest
        response: P2PAdvertiserListResponse
    }
    p2p_advertiser_payment_methods: {
        request: P2PAdvertiserPaymentMethodsRequest
        response: P2PAdvertiserPaymentMethodsResponse
    }
    p2p_advertiser_relations: {
        request: P2PAdvertiserRelationsRequest
        response: P2PAdvertiserRelationsResponse
    }
    p2p_advertiser_update: {
        request: P2PAdvertiserUpdateRequest
        response: P2PAdvertiserUpdateResponse
    }
    p2p_chat_create: {
        request: P2PChatCreateRequest
        response: P2PChatCreateResponse
    }
    p2p_order_cancel: {
        request: P2POrderCancelRequest
        response: P2POrderCancelResponse
    }
    p2p_order_confirm: {
        request: P2POrderConfirmRequest
        response: P2POrderConfirmResponse
    }
    p2p_order_create: {
        request: P2POrderCreateRequest
        response: P2POrderCreateResponse
    }
    p2p_order_dispute: {
        request: P2POrderDisputeRequest
        response: P2POrderDisputeResponse
    }
    p2p_order_info: {
        request: P2POrderInformationRequest
        response: P2POrderInformationResponse
    }
    p2p_order_list: {
        request: P2POrderListRequest
        response: P2POrderListResponse
    }
    p2p_order_review: {
        request: P2POrderReviewRequest
        response: P2POrderReviewResponse
    }
    p2p_payment_methods: {
        request: P2PPaymentMethodsRequest
        response: P2PPaymentMethodsResponse
    }
    p2p_ping: {
        request: P2PPingRequest
        response: P2PPingResponse
    }
    payment_methods: {
        request: PaymentMethodsRequest
        response: PaymentMethodsResponse
    }
    paymentagent_create: {
        request: PaymentAgentCreateRequest
        response: PaymentAgentCreateResponse
    }
    paymentagent_details: {
        request: PaymentAgentDetailsRequest
        response: PaymentAgentDetailsResponse
    }
    paymentagent_list: {
        request: PaymentAgentListRequest
        response: PaymentAgentListResponse
    }
    paymentagent_transfer: {
        request: PaymentAgentTransferRequest
        response: PaymentAgentTransferResponse
    }
    paymentagent_withdraw: {
        request: PaymentAgentWithdrawRequest
        response: PaymentAgentWithdrawResponse
    }
    payout_currencies: {
        request: PayoutCurrenciesRequest
        response: PayoutCurrenciesResponse
    }
    ping: {
        request: PingRequest
        response: PingResponse
    }
    portfolio: {
        request: PortfolioRequest
        response: PortfolioResponse
    }
    profit_table: {
        request: ProfitTableRequest
        response: ProfitTableResponse
    }
    proposal_open_contract: {
        request: PriceProposalOpenContractsRequest
        response: PriceProposalOpenContractsResponse
    }
    proposal: {
        request: PriceProposalRequest
        response: PriceProposalResponse
    }
    reality_check: {
        request: RealityCheckRequest
        response: RealityCheckResponse
    }
    residence_list: {
        request: CountriesListRequest
        response: CountriesListResponse
    }
    revoke_oauth_app: {
        request: RevokeOauthApplicationRequest
        response: RevokeOauthApplicationResponse
    }
    sell_contract_for_multiple_accounts: {
        request: SellContractsMultipleAccountsRequest
        response: SellContractsMultipleAccountsResponse
    }
    sell_expired: {
        request: SellExpiredContractsRequest
        response: SellExpiredContractsResponse
    }
    sell: {
        request: SellContractRequest
        response: SellContractResponse
    }
    set_account_currency: {
        request: SetAccountCurrencyRequest
        response: SetAccountCurrencyResponse
    }
    set_financial_assessment: {
        request: SetFinancialAssessmentRequest
        response: SetFinancialAssessmentResponse
    }
    set_self_exclusion: {
        request: SetSelfExclusionRequest
        response: SetSelfExclusionResponse
    }
    set_settings: {
        request: SetAccountSettingsRequest
        response: SetAccountSettingsResponse
    }
    statement: {
        request: StatementRequest
        response: StatementResponse
    }
    states_list: {
        request: StatesListRequest
        response: StatesListResponse
    }
    ticks_history: {
        request: TicksHistoryRequest
        response: TicksHistoryResponse
    }
    ticks: {
        request: TicksStreamRequest
        response: TicksStreamResponse
    }
    time: {
        request: ServerTimeRequest
        response: ServerTimeResponse
    }
    tnc_approval: {
        request: TermsAndConditionsApprovalRequest
        response: TermsAndConditionsApprovalResponse
    }
    topup_virtual: {
        request: TopUpVirtualMoneyAccountRequest
        response: TopUpVirtualMoneyAccountResponse
    }
    trading_durations: {
        request: TradingDurationsRequest
        response: TradingDurationsResponse
    }
    trading_platform_investor_password_reset: {
        request: TradingPlatformInvestorPasswordResetRequest
        response: TradingPlatformInvestorPasswordResetResponse
    }
    trading_platform_password_reset: {
        request: TradingPlatformPasswordResetRequest
        response: TradingPlatformPasswordResetResponse
    }
    trading_servers: {
        request: ServerListRequest
        response: ServerListResponse
    }
    trading_times: {
        request: TradingTimesRequest
        response: TradingTimesResponse
    }
    transaction: {
        request: TransactionsStreamRequest
        response: TransactionsStreamResponse
    }
    transfer_between_accounts: {
        request: TransferBetweenAccountsRequest
        response: TransferBetweenAccountsResponse
    }
    unsubscribe_email: {
        request: UnsubscribeEmailRequest
        response: UnsubscribeEmailResponse
    }
    verify_email_cellxpert: {
        request: VerifyEmailCellxpertRequest
        response: VerifyEmailCellxpertResponse
    }
    verify_email: {
        request: VerifyEmailRequest
        response: VerifyEmailResponse
    }
    website_status: {
        request: ServerStatusRequest
        response: ServerStatusResponse
    }
}
