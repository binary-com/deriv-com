import React from 'react'
import { signup_latam_human_image, signup_latam_image_show } from './signup.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import MaleHuman from 'images/common/sign-up/latam-male-human.png'
import Image from 'features/components/atoms/image'
import useGrowthbookFeatureFlag from 'components/hooks/use-growthbook-feature-flag'
import dclsx from 'features/utils/dclsx'

const SignUpContent = () => {
    const growthbook_feature_flag__latam_signup_human_element_visible = useGrowthbookFeatureFlag({
        featureFlag: 'latam-signup-human-element',
        defaultValue: false,
    })

    return (
        <Flex.Box
            basis="6-12"
            visible="larger-than-tablet"
            direction="col"
            justify="center"
            align="center"
            gap="8x"
        >
            {/**
             * This is for growthbook a/b testing in the LATAM region * More info in the growthbook dashboard
             */}
            <Image
                className={dclsx(signup_latam_human_image, {
                    [signup_latam_image_show]:
                        growthbook_feature_flag__latam_signup_human_element_visible,
                })}
                src={MaleHuman}
                alt="LATAM male human"
            />
            <Typography.Heading size="small" align="center">
                <Localize translate_text="_t_Unique trade types. Hundreds of instruments. Financial and derived markets._t_" />
            </Typography.Heading>
            <Typography.Heading size="xxs" align="center" weight="normal">
                <Localize translate_text="_t_Trade anywhere, anytime._t_" />
            </Typography.Heading>
            <Typography.Paragraph align="center">
                <Localize translate_text="_t_Ready to join over 2.5 million traders who have chosen Deriv as their trusted broker? Enter your email address to create a free demo account._t_" />
            </Typography.Paragraph>
        </Flex.Box>
    )
}

export default SignUpContent
