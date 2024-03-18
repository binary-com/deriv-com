import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import { signup_latam_human_image, signup_latam_image_show } from './signup.module.scss'
import ExperimentalContent from './content/ExperimentalContent'
import OriginalContent from './content/OriginalContent'
import Flex from 'features/components/atoms/flex-box'
import MaleHuman from 'images/common/sign-up/latam-male-human.png'
import Image from 'features/components/atoms/image'
import useGrowthbookFeatureFlag from 'components/hooks/use-growthbook-feature-flag'
import dclsx from 'features/utils/dclsx'

const SignUpContent = () => {
    const is_growthbook_ready = Analytics?.getInstances()?.ab?.GrowthBook?.ready

    const growthbook_feature_flag__latam_signup_human_element_visible = useGrowthbookFeatureFlag({
        featureFlag: 'latam-signup-human-element',
    })

    const growthbook_feature_flag__show_signup_content_in_bullet_point = useGrowthbookFeatureFlag({
        featureFlag: 'deriv-com-show-signup-content-bullet-point',
    })

    const containerStylesOverride = growthbook_feature_flag__show_signup_content_in_bullet_point
        ? ({
              ml: '15x',
              align: 'start',
          } as const)
        : {}

    return (
        <Flex.Box
            basis="6-12"
            visible="larger-than-tablet"
            direction="col"
            justify="center"
            align="center"
            gap="8x"
            {...containerStylesOverride}
        >
            {/**
             * This is for growthbook a/b testing in the LATAM region * More info in the growthbook dashboard
             */}
            <Image
                className={dclsx(signup_latam_human_image, {
                    [signup_latam_image_show]:
                        growthbook_feature_flag__latam_signup_human_element_visible &&
                        !growthbook_feature_flag__show_signup_content_in_bullet_point,
                })}
                src={MaleHuman}
                alt="LATAM male human"
            />
            {is_growthbook_ready ? (
                growthbook_feature_flag__show_signup_content_in_bullet_point ? (
                    <ExperimentalContent />
                ) : (
                    <OriginalContent />
                )
            ) : null}
        </Flex.Box>
    )
}

export default SignUpContent
