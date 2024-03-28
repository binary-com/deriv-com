import React from 'react'
import { LabelPairedCheckMdRegularIcon } from '@deriv/quill-icons'
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

            {growthbook_feature_flag__show_signup_content_in_bullet_point ? (
                <>
                    <Typography.Heading weight="bold" size="small" align="left" mb="10x">
                        <Localize translate_text="_t_New to trading?_t_" />
                        <br />
                        <Localize translate_text="_t_We got you covered_t_" />
                    </Typography.Heading>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_Tailored learning resources_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_Multilingual support anytime_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_Regulated and licensed globally_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_250+ tradeable financial and derived assests_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_24/7 trading on synthetics indices_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>

                    <Flex.Box direction="row" gap="8x">
                        <LabelPairedCheckMdRegularIcon />
                        <Typography.Paragraph align="left">
                            <Localize translate_text="_t_Rated ‘Excellent’ on Trustpilot_t_" />
                        </Typography.Paragraph>
                    </Flex.Box>
                </>
            ) : (
                <>
                    <Typography.Heading size="small" align="center">
                        <Localize translate_text="_t_Unique trade types. Hundreds of instruments. Financial and derived markets._t_" />
                    </Typography.Heading>
                    <Typography.Heading size="xxs" align="center" weight="normal">
                        <Localize translate_text="_t_Trade anywhere, anytime._t_" />
                    </Typography.Heading>
                    <Typography.Paragraph align="center">
                        <Localize translate_text="_t_Ready to join over 2.5 million traders who have chosen Deriv as their trusted broker? Enter your email address to create a free demo account._t_" />
                    </Typography.Paragraph>
                </>
            )}
        </Flex.Box>
    )
}

export default SignUpContent
