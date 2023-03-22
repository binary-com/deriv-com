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
    const is_career_page = type === 'careers'

    return (
        <>
            <DerivLogoWrapper>
                <img src={DerivLogo} alt="logo" width="108" height="40" />
                <Desktop>
                    <SocialWrapperComponent is_career_page={is_career_page} />
                </Desktop>
            </DerivLogoWrapper>
            <Mobile>
                <SocialWrapperComponent is_career_page={is_career_page} />
            </Mobile>
        </>
    )
}

export default LogoSection
