import { useEffect, useState } from 'react'
import { navigate } from 'gatsby'
import apiManager from 'common/websocket'
import { isBrowser } from 'common/utility'

export const useDerivAuth = (platform?: string, token?: string, auth_type?: 'login' | 'signup') => {
    const [loading, setLoading] = useState(false)
    const [has_account, setHasAccount] = useState(null)
    const [authorized, setAuthorized] = useState(false)
    const [account_error, setAccountError] = useState(null)
    const [create_account_error, setCreateAccountError] = useState(null)
    const [service_token, setServiceToken] = useState(null)
    const [redirect_to, setRedirectTo] = useState('ctrader_platform')

    useEffect(() => {
        if (token) {
            setLoading(true)
            apiManager
                .augmentedSend('authorize', {
                    authorize: token,
                })
                .then(() => {
                    setAuthorized(true)
                })
                .catch((reason) => {
                    setAccountError(reason.error.message)
                    setLoading(false)
                })
        } else {
            setAccountError('Token in URL is required as token1=')
        }
    }, [token])

    useEffect(() => {
        if (authorized) {
            apiManager
                .augmentedSend('trading_platform_accounts', {
                    trading_platform_accounts: 1,
                    platform,
                })
                .then((response) => {
                    if (response.trading_platform_accounts.length > 0) {
                        setHasAccount(true)
                    } else {
                        setHasAccount(false)
                    }
                })
                .catch((reason) => {
                    setAccountError(reason.error.message)
                    setLoading(false)
                })
        }
    }, [authorized, platform])

    useEffect(() => {
        if (has_account === false) {
            apiManager
                .augmentedSend('trading_platform_new_account', {
                    trading_platform_new_account: 1,
                    account_type: 'demo',
                    market_type: 'all',
                    platform,
                })
                .then(() => {
                    setHasAccount(true)
                    if (auth_type) {
                        setRedirectTo(auth_type)
                    }
                })
                .catch((reason) => {
                    setCreateAccountError({
                        type: reason.error.code,
                        message: reason.error.message,
                    })
                    setLoading(false)
                })
        }

        if (has_account === true) {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: platform,
                })
                .then((response) => {
                    setServiceToken(response.service_token[platform].token)
                })
                .catch((reason) => {
                    setAccountError(reason.error.message)
                    setLoading(false)
                })
        }
    }, [auth_type, has_account, platform])

    useEffect(() => {
        if (service_token) {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: platform,
                })
                .then((response) => {
                    if (isBrowser() && redirect_to === 'ctrader_platform') {
                        window.location.href = `https://id-ct.deriv.com/brokeroauth/success?token=${response.service_token.ctrader.token}`
                    }
                    if (isBrowser() && redirect_to === 'signup') {
                        navigate(
                            `/ctrader-signup/signup-success?token=${response.service_token.ctrader.token}`,
                        )
                    }
                    if (isBrowser() && redirect_to === 'login') {
                        navigate(
                            `/ctrader-login/login-success?token=${response.service_token.ctrader.token}`,
                        )
                    }
                })
                .catch((reason) => {
                    setCreateAccountError({
                        type: reason.error.code,
                        message: reason.error.message,
                    })
                    setLoading(false)
                })
        }
    }, [platform, redirect_to, service_token])

    return {
        loading,
        account_error,
        create_account_error,
    }
}
