import React from 'react'
import PropTypes from 'prop-types'
import SocialWrapperComponent from './social-wrapper'
import { DerivLogoWrapper, StyledLogo } from './common/style.js'
import { Desktop, UKEU } from 'components/containers'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import DerivLogo from 'images/svg/layout/deriv-footer.svg'
import { isUKOrMXAccount } from 'common/utility'
import {
    fb_uk_url,
    fb_eu_url,
    instagram_uk_url,
    instagram_eu_url,
    twitter_uk_url,
    twitter_eu_url,
} from 'common/constants'
import { DerivStore } from 'store'
const LogoSection = ({ type }) => {
    const [website_status] = useWebsiteStatus()
    const current_client_country = website_status?.clients_country || ''
    const { hide_branding } = React.useContext(DerivStore)
    return (
        <DerivLogoWrapper>
            {!hide_branding && <StyledLogo src={DerivLogo} alt="logo" width="147" height="25" />}
            <UKEU>
                <Desktop>
                    <SocialWrapperComponent
                        is_career_page={type === 'careers'}
                        fb_url={isUKOrMXAccount(current_client_country) ? fb_uk_url : fb_eu_url}
                        instagram_url={
                            isUKOrMXAccount(current_client_country)
                                ? instagram_uk_url
                                : instagram_eu_url
                        }
                        twitter_url={
                            isUKOrMXAccount(current_client_country)
                                ? twitter_uk_url
                                : twitter_eu_url
                        }
                    />
                </Desktop>
            </UKEU>
        </DerivLogoWrapper>
    )
}

LogoSection.propTypes = {
    type: PropTypes.string,
}

export default LogoSection
