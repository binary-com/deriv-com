import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StringParam, useQueryParam } from 'use-query-params'
import Layout from 'components/layout/layout'
import { localize } from 'components/localization'
import { SEO } from 'components/containers'
import device from 'themes/device'
import { useCheckExistingAccount } from 'components/hooks/use-check-existing-account'
import { isBrowser } from 'common/utility'
import apiManager from 'common/websocket'

const Wrapper = styled.section`
    padding: 8rem 0;
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    flex-direction: row;

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StyledDiv = styled.div`
    padding: 6rem 0;

    @media ${device.mobileL} {
        padding: 0;
    }
`

const StatusHeader = styled.h2`
    font-size: 48px;
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
        }
    }, [submit_status])

    return (
        <Layout type="static" margin_top={'0'}>
            <SEO
                title={localize('_t_Easy And Free Sign Up | Online Trading | Deriv.com_t_')}
                description={localize(
                    '_t_Signup to Deriv.com and trade online with as little as $1 USD on major currencies, stocks, indices, and commodities._t_',
                )}
            />
            <Wrapper>
                <StatusHeader>Logging in ...</StatusHeader>
            </Wrapper>
            <StyledDiv />
        </Layout>
    )
}

export default CtraderLogin
