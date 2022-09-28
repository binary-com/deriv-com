import React from 'react'
import SocialWrapperComponent from './social-wrapper'
import { DerivLogoWrapper, StyledLogo } from './common/style'
import { Desktop } from 'components/containers'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
import { Mobile } from 'pages/interim/_hero'

type LogoSectionProps = {
    type?: string
}

const LogoSection = ({ type = '' }: LogoSectionProps) => {
    return (
        <>
            <DerivLogoWrapper>
                <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
                <Desktop>
                    <SocialWrapperComponent is_career_page={type === 'careers'} />
                </Desktop>
            </DerivLogoWrapper>
            <Mobile>
                <SocialWrapperComponent is_career_page={type === 'careers'} />
            </Mobile>
        </>
    )
}

export default LogoSection
