import React from 'react'
import styled from 'styled-components'
import { handleGetTrading } from '../util/nav-methods'
import { NavRight } from '../styles/nav-styles'
import { localize, LanguageSwitcher } from 'components/localization'
import { Button } from 'components/form'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleLogin from 'components/hooks/use-handle-login'
import useHandleSignup from 'components/hooks/use-handle-signup'
import useRegion from 'components/hooks/use-region'
import { useIsRtl } from 'components/hooks/use-isrtl'

type RightSectionProps = {
    is_ppc_redirect: boolean
    hide_language_switcher: boolean
    hide_signup_login: boolean
}

type LanguageProps = {
    hide_component: boolean
}

const StyledButton = styled(Button)`
    white-space: nowrap;
`
const SignupButton = styled(Button)`
    margin-left: 1.6rem;
    opacity: 1;
`
const Wrapper = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
`

const Language = ({ hide_component }: LanguageProps) =>
    !hide_component && <LanguageSwitcher is_high_nav />

const RightSection = ({
    is_ppc_redirect,
    hide_language_switcher,
    hide_signup_login,
}: RightSectionProps) => {
    const { is_region_loading } = useRegion()
    const handleLogin = useHandleLogin()
    const handleSignup = useHandleSignup(is_ppc_redirect)
    const [is_logged_in] = useAuthCheck()
    const is_rtl = useIsRtl()

    if (is_logged_in) {
        return (
            <Wrapper>
                <Language hide_component={hide_language_switcher} />
                <StyledButton onClick={handleGetTrading} primary>
                    {localize('Get Trading')}
                </StyledButton>
            </Wrapper>
        )
    }

    return (
        <NavRight is_rtl={is_rtl} hide_signup_login={hide_signup_login}>
            {!hide_signup_login && (
                <>
                    <StyledButton
                        disabled={is_region_loading}
                        id="dm-nav-login-button"
                        onClick={handleLogin}
                        primary
                    >
                        {localize('Log in')}
                    </StyledButton>
                    <SignupButton
                        disabled={is_region_loading}
                        onClick={handleSignup}
                        id="dm-nav-signup"
                        secondary
                    >
                        {localize('Create free demo account')}
                    </SignupButton>
                </>
            )}
            <Language hide_component={hide_language_switcher} />
        </NavRight>
    )
}

export default RightSection
