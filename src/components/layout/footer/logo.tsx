import React from 'react'
import SocialWrapperComponent from './social-wrapper'
import { DerivLogoWrapper, StyledLogo } from './common/style'
import { Desktop, Branding } from 'components/containers'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
import { Mobile } from 'pages/interim/_hero'
import { DerivStore } from 'store'

type LogoSectionProps = {
    type?: string
}

const LogoSection = ({ type = '' }: LogoSectionProps) => {
    const is_career_page = type === 'careers'
    const { hide_branding } = React.useContext(DerivStore)

    return (
        <>
            <DerivLogoWrapper>
                <Branding>
                    <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
                    <Desktop>
                        <SocialWrapperComponent is_career_page={is_career_page} />
                    </Desktop>
                </Branding>
            </DerivLogoWrapper>
            <Mobile>
                <SocialWrapperComponent is_career_page={is_career_page} />
            </Mobile>
        </>
    )
}

export default LogoSection
