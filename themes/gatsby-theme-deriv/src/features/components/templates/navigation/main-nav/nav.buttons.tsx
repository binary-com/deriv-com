import React from 'react'
import { MobileNavToggle } from '@deriv-com/blocks'
import { Button } from '@deriv/quill-design'
// eslint-disable-next-line import/no-unresolved
import { LabelPairedGrid2CaptionBoldIcon } from '@deriv/quill-icons/LabelPaired'
import { Localize } from 'components/localization'
import { handleRedirectToTradersHub } from 'components/custom/utils'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { isBrowser } from 'common/utility'
import usePpc from 'features/hooks/use-ppc'
import './nav.buttons.scss'

const MainNavigationButtons = () => {
    const [is_logged_in] = useAuthCheck()
    const { is_ppc_redirect } = usePpc()
    const isRealDevice = isBrowser()

    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)

    const renderTradershubButton = isRealDevice && is_logged_in
    const renderLoginButton = isRealDevice && !is_logged_in
    const renderSignupButton = isRealDevice && !is_logged_in

    // needs unique class, as for some reason, there are multiple navs hidden on the same page
    // so the script needs to be scoped to one of them
    const uniq = `navbuttons_uniq_class_${Math.random().toString(36).substr(2, 9)}`

    return (
        <div className="flex items-center gap-gap-md" id={uniq}>
            <Button
                variant="secondary"
                colorStyle="black"
                size="lg"
                onClick={handleRedirectToTradersHub}
                icon={LabelPairedGrid2CaptionBoldIcon}
                iconPosition="start"
                className={`navbuttons_tradershub ${uniq} ${
                    renderTradershubButton ? '' : 'navbuttons_tradershub--hidden'
                }`}
            >
                {`Trader's Hub`}
            </Button>
            <Button
                variant="secondary"
                colorStyle="black"
                size="lg"
                onClick={handleLogin}
                className={`navbuttons_login ${uniq} ${
                    renderLoginButton ? '' : 'navbuttons_login--hidden'
                }`}
            >
                <Localize translate_text="_t_Log in_t_" />
            </Button>
            <Button
                size="lg"
                onClick={handleSignup}
                className={`hidden lg:block navbuttons_opendemo ${uniq} ${
                    renderSignupButton ? '' : 'navbuttons_opendemo--hidden'
                }`}
            >
                <Localize translate_text="_t_Open demo account_t_" />
            </Button>
            {/*
                for gatsby only, so gatsby rendered version have the script which immediately renders correct button
                while it's not impacting hydrated versions
                cannot be in gatsby-ssr due to the fact it would be added quite far from the actual dom element
                so there would be visible delay if it would be in gatsby-ssr
                still there might be micro flickering, but it should be completely marginal if ever visible
            */}
            <div
                style={{ display: 'none' }}
                dangerouslySetInnerHTML={{
                    __html: `
                    <script>
                        (function() {
                            const isLoggedIn = document?.cookie.split(';').some(function(item) { return item.trim().startsWith('client_information='); });
                            const isRealDevice = typeof window !== 'undefined';
    
                            if (isRealDevice) {
                                if (isLoggedIn) {
                                    document.querySelector('#${uniq} .navbuttons_tradershub').classList.remove('navbuttons_tradershub--hidden');
                                } else {
                                    document.querySelector('#${uniq} .navbuttons_login').classList.remove('navbuttons_login--hidden');
                                    document.querySelector('#${uniq} .navbuttons_opendemo').classList.remove('navbuttons_opendemo--hidden');
                                }
                            }
                        })();
                    </script>
                `,
                }}
            ></div>
            <MobileNavToggle data-cy="hamburger-menu" />
        </div>
    )
}

export default MainNavigationButtons
