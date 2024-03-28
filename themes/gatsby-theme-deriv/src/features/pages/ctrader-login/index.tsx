import React from 'react'
import { navigate } from 'gatsby'
import Layout from 'features/components/templates/layout'
import { useDerivAuth } from 'features/hooks/use-deriv-auth'
import Loading from 'features/components/atoms/loading'
import CtraderWrapper from 'features/components/templates/ctrader/ctrader-wrapper'
import Typography from 'features/components/atoms/typography'
import { isBrowser } from 'common/utility'
import Button from 'features/components/atoms/button'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'
import { BuildVariantType } from 'features/types'

const CtraderLogin = ({region}: BuildVariantType) => {
    const url_params = new URLSearchParams((isBrowser() && window.location.search) || '')
    const token = url_params.get('token1')
    const { account_error, create_account_error } = useDerivAuth('ctrader', token, 'login')

    return (
        <Layout hide_layout_overlay region={region}>
            <CtraderWrapper>
                {account_error || create_account_error ? (
                    <Flex.Box direction="col" gap="10x">
                        <Typography.Heading size="small" pt="40x" align="center">
                            {account_error || create_account_error.message}
                        </Typography.Heading>
                        <Button.Primary onClick={() => navigate(-1)}>
                            <Localize translate_text="_t_Return_t_" />
                        </Button.Primary>
                    </Flex.Box>
                ) : (
                    <Loading />
                )}
            </CtraderWrapper>
        </Layout>
    )
}

export default CtraderLogin
