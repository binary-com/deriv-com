import React from 'react'
import { useDerivAuth } from 'features/hooks/use-deriv-auth'
import Loading from 'features/components/atoms/loading'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Typography from 'features/components/atoms/typography'
import Layout from 'features/components/templates/layout'
import { isBrowser } from 'common/utility'

const CtraderLogin = () => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const token = url_params.get('token1')
    const { account_error, create_account_error } = useDerivAuth('ctrader', token, 'login')

    return (
        <Layout hide_layout_overlay>
            <CtraderWrapper>
                {account_error || create_account_error ? (
                    <Typography.Heading size="small" pt="40x" align="center">
                        {account_error || create_account_error.message}
                    </Typography.Heading>
                ) : (
                    <Loading />
                )}
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderLogin
