import React, { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import Loading from 'features/components/atoms/loading'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Typography from 'features/components/atoms/typography'

const CtraderLogin = () => {
    const [token] = useQueryParam('token1', StringParam)
    const { has_account, service_token } = useCheckExistingAccount('ctrader', token)
    const [error, setError] = useState('')
    const [submit_status, setSubmitStatus] = useState('')

    if (service_token) {
        if (isBrowser()) {
            window.location.href = `https://id-ct-uat.deriv.com/brokeroauth/success?token=${service_token}`
        }
    }

    useEffect(() => {
        if (has_account === false) {
            apiManager
                .augmentedSend('trading_platform_new_account', {
                    trading_platform_new_account: 1,
                    account_type: 'demo',
                    market_type: 'all',
                    platform: 'ctrader',
                })
                .then(() => {
                    setSubmitStatus('ctrader-account-created')
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [has_account])

    useEffect(() => {
        if (submit_status === 'ctrader-account-created') {
            apiManager
                .augmentedSend('service_token', {
                    service_token: 1,
                    service: 'ctrader',
                })
                .then(() => {
                    // useCheckExistingAccount will handle login and redirection in this step
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [submit_status])

    return (
        <CtraderWrapper>
            {!error && <Loading />}
            {error && <Typography.Heading size="small">{error}</Typography.Heading>}
        </CtraderWrapper>
    )
}

export default CtraderLogin
