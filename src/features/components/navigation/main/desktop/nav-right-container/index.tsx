import React, { forwardRef, HTMLAttributes } from 'react'
import clsx from 'clsx'
import * as styles from './nav-right-container.module.scss'
import useAuthCheck from 'components/hooks/use-auth-check'
import useRegion from 'components/hooks/use-region'
import { LanguageSwitcher, Localize } from 'components/localization'
import SButton from 'features/components/button'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import usePpc from 'features/hooks/use-ppc'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'

interface INavRightContainerProps extends HTMLAttributes<HTMLDivElement> {
    scrolled: boolean
    hide_language_switcher?: boolean
    hide_signup_login?: boolean
}

const NavRightContainer = forwardRef<HTMLDivElement, INavRightContainerProps>(
    ({ scrolled, hide_signup_login, hide_language_switcher, className }, ref) => {
        const [is_logged_in] = useAuthCheck()
        const { is_region_loading } = useRegion()
        const { is_ppc_redirect } = usePpc()

        const handleLogin = useHandleLogin()
        const handleSignup = useHandleSignup(is_ppc_redirect)

        const renderButtons = () => {
            if (is_logged_in) {
                return (
                    <SButton
                        disabled={is_region_loading}
                        button_type="primary"
                        onClick={handleGetTrading}
                    >
                        <Localize translate_text="Get Trading" />
                    </SButton>
                )
            } else if (!hide_signup_login) {
                return (
                    <>
                        <SButton
                            disabled={is_region_loading}
                            id="dm-nav-login-button"
                            button_type="primary"
                            className={styles.login_button}
                            onClick={handleLogin}
                        >
                            <Localize translate_text="Log in" />
                        </SButton>
                        <SButton
                            disabled={is_region_loading}
                            button_type="secondary"
                            id="dm-nav-signup"
                            className={clsx(styles.dynamic_button, {
                                [styles.show]: scrolled,
                            })}
                            onClick={handleSignup}
                        >
                            <Localize translate_text="Create free demo account" />
                        </SButton>
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

NavRightContainer.displayName = 'NavRightContainer'

export default NavRightContainer
