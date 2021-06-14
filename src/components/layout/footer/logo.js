import React from 'react'
import SocialWrapperComponent  from './social-wrapper'
import { DerivLogoWrapper, StyledLogo, } from './common/style.js'
import { Show } from 'components/containers'
import DerivLogo from 'images/svg/deriv-footer.svg'

const LogoSection = ( type ) => {
    return (
        <DerivLogoWrapper>
            <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
            <Show.Eu>
                <Show.Desktop>
                    <SocialWrapperComponent is_career_page={type === 'careers'} />
                </Show.Desktop>
            </Show.Eu>
        </DerivLogoWrapper>
    )
}

export default LogoSection;