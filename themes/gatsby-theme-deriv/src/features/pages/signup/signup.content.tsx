import React from 'react'
import ExperimentalSignUpContent from './content/ExperimentalContent'
import OriginalSignUpContent from './content/OriginalContent'
import useGrowthbookFeatureFlag from 'components/hooks/use-growthbook-feature-flag'
import Flex from 'features/components/atoms/flex-box'

const SignUpContent = () => {
    const { featureFlagValue: growthbook_feature_flag__latam_signup_human_element_visible } =
        useGrowthbookFeatureFlag({
            featureFlag: 'latam-signup-human-element',
        })

    const {
        isFeatureAvailable: growthbook_feature_is_available__show_signup_content_in_bullet_point,
        featureFlagValue: growthbook_feature_flag__show_signup_content_in_bullet_point,
    } = useGrowthbookFeatureFlag({
        featureFlag: 'deriv-com-show-signup-content-bullet-point',
    })

    if (!growthbook_feature_is_available__show_signup_content_in_bullet_point) {
        return (
            <Flex.Box
                basis="6-12"
                visible="larger-than-tablet"
                direction="col"
                justify="center"
                align="center"
                gap="8x"
            />
        )
    }

    if (growthbook_feature_flag__show_signup_content_in_bullet_point) {
        return (
            <ExperimentalSignUpContent
                showLatamImage={!!growthbook_feature_flag__latam_signup_human_element_visible}
            />
        )
    } else {
        return (
            <OriginalSignUpContent
                showLatamImage={!!growthbook_feature_flag__latam_signup_human_element_visible}
            />
        )
    }
}

export default SignUpContent
