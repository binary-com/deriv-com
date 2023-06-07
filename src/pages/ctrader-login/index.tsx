import React, { useEffect, useState } from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import styled from 'styled-components'
import Layout from 'components/layout/layout'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { isBrowser } from 'common/utility'
import apiManager from 'common/websocket'
import Loading from 'features/components/atoms/loading'

const ErrorMessage = styled.h3`
    font-size: 20px;
    text-align: center;
`

const CtraderLogin = () => {
    const [token] = useQueryParam('token1', StringParam)
    // API_TOKEN Sample: a1-tzAF6PBTnHkOH97ooBdSYvY26oFSm
    const { has_account, service_token } = useCheckExistingAccount('ctrader', token)
    const [error, setError] = useState('')
    const [submit_status, setSubmitStatus] = useState('')

    if (service_token) {
        if (isBrowser()) {
            window.location.href = `https://id-ct-uat.deriv.com/brokeroauth/success?token=${service_token}`
        }
    }

    // if (has_account === false) {
    //     if (isBrowser()) {
    //         window.location.href = 'https://oauth.deriv.com/oauth2/authorize?app_id=12345'
    //     }
    // }

    useEffect(() => {
        if (has_account === false) {
            apiManager
                .augmentedSend('trading_platform_new_account', {
                    trading_platform_new_account: 1,
                    account_type: 'demo',
                    market_type: 'all',
                    platform: 'ctrader',
                })
                .then((response) => {
                    if (response.error) {
                        setError(response.error.message)
                    } else {
                        setSubmitStatus('ctrader-account-created')
                    }
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
                .then((response) => {
                    if (response.error) {
                        setError(response.error.message)
                    } else {
                        // setServiceToken(response.service_token.ctrader.token)
                        setSubmitStatus('success')
                    }
                })
                .catch((reason) => {
                    setError(reason.error.message)
                })
        }
    }, [submit_status])

    return (
        <Layout type="static" margin_top={35}>
            {!error && <Loading />}
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Layout>
    )
}

export default CtraderLogin
