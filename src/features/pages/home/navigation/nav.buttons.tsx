import React from 'react'
import { MobileNavToggle } from '@deriv-com/blocks'
import { Button } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { StandalonePlaceholderRegularIcon } from '@deriv/quill-icons/Standalone'
import { Localize } from 'components/localization'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import usePpc from 'features/hooks/use-ppc'

export const MainNavigationButtons = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_ppc_redirect } = usePpc()

    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)

    return (
        <div className="flex flex-row items-center gap-gap-sm">
            {is_logged_in ? (
                <Button
                    variant="secondary"
                    colorStyle="coral"
                    size="lg"
                    onClick={handleRedirectToTradersHub}
                    icon={StandalonePlaceholderRegularIcon}
                    iconPosition="start"
                >
                    <Localize translate_text="_t_Traders Hub_t_" />
                </Button>
            ) : (
                <>
                    <Button variant="secondary" colorStyle="black" size="lg" onClick={handleLogin}>
                        <Localize translate_text="_t_Log in_t_" />
                    </Button>
                    <Button size="lg" className="hidden lg:block" onClick={handleSignup}>
                        <Localize translate_text="_t_Open demo account_t_" />
                    </Button>
                </>
            )}

            <MobileNavToggle />
        </div>
    )
}

export default MainNavigationButtons
