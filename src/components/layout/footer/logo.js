import React from 'react'
import PropTypes from 'prop-types'
import SocialWrapperComponent  from './social-wrapper'
import { DerivLogoWrapper, StyledLogo, } from './common/style.js'
import { Show } from 'components/containers'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import DerivLogo from 'images/svg/deriv-footer.svg'
import { isUKOrMXAccount } from 'common/utility'
import {
    fb_uk_url,
    fb_eu_url,
    instagram_uk_url,
    instagram_eu_url,
    twitter_uk_url,
    twitter_eu_url,
} from 'common/constants'

const LogoSection = ({ type }) => {
    const [website_status] = useWebsiteStatus()
    const current_client_country = website_status?.clients_country || ''

    return (
        <DerivLogoWrapper>
            <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />
            <Show.Eu>
                <Show.Desktop>
                    <SocialWrapperComponent is_career_page={type === 'careers'}
                        fb_url={isUKOrMXAccount(current_client_country) ? fb_uk_url : fb_eu_url}
                        instagram_url={isUKOrMXAccount(current_client_country) ? instagram_uk_url : instagram_eu_url}
                        twitter_url={isUKOrMXAccount(current_client_country) ? twitter_uk_url : twitter_eu_url}
                    />
                </Show.Desktop>
            </Show.Eu>
        </DerivLogoWrapper>
    )
}

LogoSection.propTypes = {
    type: PropTypes.string,
}

export default LogoSection;