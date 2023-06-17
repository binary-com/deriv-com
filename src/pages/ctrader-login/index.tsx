import React from 'react'
import { StringParam, useQueryParam } from 'use-query-params'
import { useSigninAndSignup } from 'components/hooks/use-signin-and-signup'
import Loading from 'features/components/atoms/loading'
import CtraderWrapper from 'components/custom/_ctrader-wrapper'
import Typography from 'features/components/atoms/typography'
import Layout from 'features/components/templates/layout'

const CtraderLogin = () => {
    const [token] = useQueryParam('token1', StringParam)
    const { account_error } = useSigninAndSignup('ctrader', token)

    return (
        <Layout>
            <CtraderWrapper>
                {!account_error && <Loading />}
                {account_error && (
                    <Typography.Heading size="xs" align="center">
                        {account_error}
                    </Typography.Heading>
                )}
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderLogin
