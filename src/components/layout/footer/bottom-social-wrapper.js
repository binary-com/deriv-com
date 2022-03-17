import React from 'react'
import PropTypes from 'prop-types'
import SocialWrapperComponent from './social-wrapper'
import { useWebsiteStatus } from 'components/hooks/use-website-status'
import { Mobile, UKEU, ROW } from 'components/containers'
import { isUKOrMXAccount } from 'common/utility'
import {
    fb_non_eu_url,
    fb_uk_url,
    fb_eu_url,
    instagram_non_eu_url,
    instagram_uk_url,
    instagram_eu_url,
    twitter_non_eu_url,
    twitter_uk_url,
    twitter_eu_url,
} from 'common/constants'

const BottomSocialSection = ({ type }) => {
    const [website_status] = useWebsiteStatus()
    const current_client_country = website_status?.clients_country || ''

    return (
        <>
            <ROW>
                <SocialWrapperComponent
                    is_career_page={type === 'careers'}
                    fb_url={fb_non_eu_url}
                    instagram_url={instagram_non_eu_url}
                    twitter_url={twitter_non_eu_url}
                />
            </ROW>

            <UKEU>
                <Mobile>
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
                </Mobile>
            </UKEU>
        </>
    )
}

BottomSocialSection.propTypes = {
    type: PropTypes.string,
}

export default BottomSocialSection
