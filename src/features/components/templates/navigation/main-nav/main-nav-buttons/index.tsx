import React from 'react'
import clsx from 'clsx'
import * as styles from './main-nav-buttons.module.scss'
import useAuthCheck from 'components/hooks/use-auth-check'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import usePpc from 'features/hooks/use-ppc'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'

const MainNavButtons = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_region_loading } = useRegion()
    const { is_ppc_redirect } = usePpc()

    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)

    return (
        <div className={clsx(styles.nav_right)}>
            {is_logged_in ? (
                <Button.Primary disabled={is_region_loading} onClick={handleGetTrading}>
                    <Localize translate_text="_t_Get Trading_t_" />
                </Button.Primary>
            ) : (
                <>
                    <Button.Primary
                        disabled={is_region_loading}
                        id="dm-nav-login-button"
                        className={styles.login_button}
                        onClick={handleLogin}
                        outlined
                    >
                        <Localize translate_text="_t_Log in_t_" />
                    </Button.Primary>
                    <Button.Primary
                        disabled={is_region_loading}
                        id="dm-nav-signup"
                        onClick={handleSignup}
                    >
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button.Primary>
                </>
            )}
        </div>
    )
}

export default MainNavButtons
