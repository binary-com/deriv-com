import React from 'react'
import useAuthCheck from 'components/hooks/use-auth-check'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import usePpc from 'features/hooks/use-ppc'
import LanguageSwitcher from 'features/components/molecules/language-switcher'
import Flex from 'features/components/atoms/flex-box'
import { handleGetTrading } from 'components/custom/utils'

const MainNavButtons = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_region_loading } = useRegion()
    const { is_ppc_redirect } = usePpc()

    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)

    return (
        <Flex.Box
            direction="row-reverse"
            md={{ direction: 'row' }}
            justify="center"
            align="center"
            gap="8x"
        >
            {is_logged_in ? (
                <Button.Primary
                    disabled={is_region_loading}
                    onClick={handleGetTrading}
                    aria-label="Get trading"
                    outlined
                >
                    <Localize translate_text="_t_Get trading_t_" />
                </Button.Primary>
            ) : (
                <>
                    <Button.Primary
                        disabled={is_region_loading}
                        id="dm-nav-login-button"
                        aria-label="Login"
                        onClick={handleLogin}
                        outlined
                    >
                        <Localize translate_text="_t_Log in_t_" />
                    </Button.Primary>
                    <Button.Primary
                        visible="larger-than-tablet"
                        disabled={is_region_loading}
                        aria-label="Signup"
                        id="dm-nav-signup"
                        onClick={handleSignup}
                    >
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button.Primary>
                </>
            )}
            <LanguageSwitcher />
        </Flex.Box>
    )
}

export default MainNavButtons
