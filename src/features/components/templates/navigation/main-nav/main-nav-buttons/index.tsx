import React, { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'
import * as styles from './main-nav-buttons.module.scss'
import useAuthCheck from 'components/hooks/use-auth-check'
import useRegion from 'components/hooks/use-region'
import { LanguageSwitcher, Localize } from 'components/localization'
import Button from 'features/components/atoms/button'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import usePpc from 'features/hooks/use-ppc'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'

interface MainNavButtonsProps extends HTMLAttributes<HTMLDivElement> {
    scrolled: boolean
    hide_language_switcher?: boolean
    hide_signup_login?: boolean
}

const MainNavButtons = forwardRef<HTMLDivElement, MainNavButtonsProps>(
    ({ scrolled, hide_signup_login, hide_language_switcher, className }, ref) => {
        const [is_logged_in] = useAuthCheck()
        const { is_region_loading } = useRegion()
        const { is_ppc_redirect } = usePpc()

        const handleLogin = useHandleLogin()
        const handleSignup = useHandleSignup(is_ppc_redirect)

        const renderButtons = () => {
            if (is_logged_in) {
                return (
                    <Button.Primary disabled={is_region_loading} onClick={handleGetTrading}>
                        <Localize translate_text="_t_Get Trading_t_" />
                    </Button.Primary>
                )
            } else if (!hide_signup_login) {
                return (
                    <>
                        <Button.Primary
                            disabled={is_region_loading}
                            id="dm-nav-login-button"
                            className={styles.login_button}
                            onClick={handleLogin}
                        >
                            <Localize translate_text="_t_Log in_t_" />
                        </Button.Primary>
                        <Button.Secondary
                            disabled={is_region_loading}
                            id="dm-nav-signup"
                            className={clsx(styles.dynamic_button, {
                                [styles.show]: scrolled,
                            })}
                            onClick={handleSignup}
                        >
                            <Localize translate_text="_t_Create free demo account_t_" />
                        </Button.Secondary>
                    </>
                )
            }
            return null
        }

        return (
            <div ref={ref} className={clsx(className, styles.nav_right)}>
                {!hide_language_switcher && <LanguageSwitcher is_high_nav />}
                {renderButtons()}
            </div>
        )
    },
)

MainNavButtons.displayName = 'NavRightContainer'

export default MainNavButtons
