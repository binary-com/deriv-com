import { useEffect, useState } from 'react'
import apiManager from 'common/websocket'

export const useCheckExistingAccount = (platform: string, token: string) => {
    const [has_account, setHasAccount] = useState(null)
    const [authorized, setAuthorized] = useState(false)
    const [account_loading, setLoading] = useState(true)
    const [email, setEmail] = useState('')
    const [account_error, setAccountError] = useState(null)
    const [service_token, setServiceToken] = useState('')

    useEffect(() => {
        if (token) {
            apiManager
                .augmentedSend('authorize', {
                    authorize: token,
                })
                .then((response) => {
                    if (response.error) {
                        setAccountError(response.error)
                    } else {
                        setEmail(response.authorize.email)
                        setAuthorized(true)
                    }
                })
        } else {
            setAccountError('Token in URL is required as token2= ')
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
                    if (!response.error) {
                        if (response.trading_platform_accounts.length > 0) {
                            setHasAccount(true)
                            setLoading(false)
                        } else {
                            setHasAccount(false)
                            setLoading(false)
                        }
                    }
                })
        }
    }, [authorized, platform])

    useEffect(() => {
        if (has_account === true) {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: platform,
                })
                .then((response) => {
                    if (response.error) {
                        setAccountError(response.error.message)
                    } else {
                        setServiceToken(response.service_token[platform].token)
                    }
                })
        }
    }, [has_account, platform])

    return { has_account, account_loading, email, account_error, service_token }
}
