import React from 'react'
import SocialWrapperComponent from './social-wrapper'
import { DerivLogoWrapper, StyledLogo } from './common/style'
import { Desktop } from 'components/containers'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import {
    fb_eu_url,
    fb_uk_url,
    fb_non_eu_url,
    instagram_eu_url,
    instagram_uk_url,
    instagram_non_eu_url,
    twitter_eu_url,
    twitter_uk_url,
    twitter_non_eu_url,
} from 'common/constants'

type LogoSectionProps = {
    type?: string
}

const LogoSection = ({ type = '' }: LogoSectionProps) => {
    const { is_eu, is_uk } = useCountryRule()

    return (
        <DerivLogoWrapper>
            <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
            <Desktop>
                <SocialWrapperComponent
                    is_career_page={type === 'careers'}
                    fb_url={(is_eu && fb_eu_url) || (is_uk && fb_uk_url) || fb_non_eu_url}
                    instagram_url={
                        (is_eu && instagram_eu_url) ||
                        (is_uk && instagram_uk_url) ||
                        instagram_non_eu_url
                    }
                    twitter_url={
                        (is_eu && twitter_eu_url) || (is_uk && twitter_uk_url) || twitter_non_eu_url
                    }
                />
            </Desktop>
        </DerivLogoWrapper>
    )
}

export default LogoSection
