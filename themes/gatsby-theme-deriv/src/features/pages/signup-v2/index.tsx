import React, { useEffect, useState } from 'react'
import { Analytics } from '@deriv-com/analytics'
import {
    BrandDerivWordmarkCoralIcon,
    BrandDerivWordmarkWhiteIcon,
    LabelPairedCheckLgRegularIcon,
    LabelPairedChevronUpMdBoldIcon,
} from '@deriv/quill-icons'
import { Link, navigate } from 'gatsby'
import { isMobile } from 'react-device-detect'
import { Button } from '@deriv/quill-design'
import Layout from 'features/components/templates/layout'
import {
    signup_wrapper,
    deriv_icon_wrapper,
    signup_experimental_page_container,
    signup_form_blur_effect,
    signup_modal_container,
    signup_hide_form,
    signup_pointer_events_none,
    signup_text_underline,
    signup_bullet_point_container,
    signup_experimental_page_bg_image,
    signup_plain_background_layout,
} from './signup.module.scss'
import TrustpilotSection from './trustpilot'
import SignUpFormContainer from './form-container'
import BackgroundGradient from './background-gradient'
import Flex from 'features/components/atoms/flex-box'
import { isBrowser } from 'common/utility'
import { BuildVariantType } from 'features/types'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import { Box } from 'components/containers'
import dclsx from 'features/utils/dclsx'
import useGrowthbookFeatureFlag from 'components/hooks/use-growthbook-feature-flag'
import { usePageLoaded } from 'components/hooks/use-page-loaded'

const SignUpExperimental = ({ region }: BuildVariantType) => {
    const [is_mounted] = usePageLoaded()

    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: 'virtual_signup_web_mobile_exp003',
    }

    const growthbook_feature_flag_start_signup_journey_cta_button = useGrowthbookFeatureFlag({
        featureFlag: 'signup-start-journey-cta-button',
    })

    const growthbook_feature_flag_signup_plain_background = useGrowthbookFeatureFlag({
        featureFlag: 'signup-plain-background',
    })

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        if (isMobile) {
            Analytics?.trackEvent('ce_virtual_signup_form', { action: 'open', ...analyticsData })
        } else {
            navigate('/signup')
        }
    }, [])

    const handleModalOpen = () => {
        setIsModalOpen(true)
        Analytics?.trackEvent('ce_virtual_signup_form', {
            action: 'signup_modal_open',
            ...analyticsData,
        })
    }

    const handleModalClose = () => {
        setIsModalOpen(false)
        Analytics?.trackEvent('ce_virtual_signup_form', {
            action: 'signup_modal_close',
            ...analyticsData,
        })
    }

    const textStyleOverrides = !growthbook_feature_flag_signup_plain_background
        ? ({ textcolor: 'white' } as const)
        : {}

    const iconStyleOverrides = !growthbook_feature_flag_signup_plain_background
        ? ({ fill: 'white' } as const)
        : {}

    if (!is_mounted) return null

    return (
        <Box
            className={dclsx(signup_experimental_page_container, {
                [signup_experimental_page_bg_image]:
                    !growthbook_feature_flag_signup_plain_background,
            })}
        >
            {!growthbook_feature_flag_signup_plain_background && <BackgroundGradient />}

            <Layout hide_live_chat={true} region={region}>
                <Flex.Box pl="8x" pr="8x" className={deriv_icon_wrapper}>
                    <Link to="/">
                        {growthbook_feature_flag_signup_plain_background ? (
                            <BrandDerivWordmarkCoralIcon width={73} height={24} />
                        ) : (
                            <BrandDerivWordmarkWhiteIcon width={73} height={24} />
                        )}
                    </Link>
                </Flex.Box>
                <Flex.Box justify="end" direction="col" className={signup_wrapper}>
                    <Box
                        className={dclsx(signup_modal_container, {
                            [signup_form_blur_effect]:
                                !growthbook_feature_flag_signup_plain_background,
                            [signup_pointer_events_none]: !isModalOpen,
                            [signup_hide_form]: !isModalOpen,
                        })}
                    >
                        <SignUpFormContainer
                            theme={
                                growthbook_feature_flag_signup_plain_background ? 'plain' : 'dark'
                            }
                            onModalClose={handleModalClose}
                        />
                    </Box>

                    {!isModalOpen && (
                        <>
                            <Flex.Box
                                className={dclsx({
                                    [signup_plain_background_layout]:
                                        growthbook_feature_flag_signup_plain_background,
                                })}
                                direction="col"
                            >
                                <Flex.Box
                                    className={dclsx({
                                        [signup_bullet_point_container]:
                                            !growthbook_feature_flag_signup_plain_background,
                                    })}
                                    container="fixed"
                                    pl="8x"
                                    pr="8x"
                                    direction="col"
                                >
                                    <Typography.Heading
                                        weight="bold"
                                        size="medium"
                                        align="left"
                                        mb="10x"
                                        {...textStyleOverrides}
                                    >
                                        <Localize translate_text="_t_Start trading today from just $5_t_" />
                                    </Typography.Heading>

                                    <Flex.Box direction="row" gap="8x">
                                        <LabelPairedCheckLgRegularIcon {...iconStyleOverrides} />
                                        <Typography.Paragraph
                                            size="large"
                                            align="left"
                                            {...textStyleOverrides}
                                        >
                                            <Localize translate_text="_t_Master your skills with a free $10.000 practice account_t_" />
                                        </Typography.Paragraph>
                                    </Flex.Box>
                                    <Flex.Box direction="row" gap="8x">
                                        <LabelPairedCheckLgRegularIcon {...iconStyleOverrides} />
                                        <Typography.Paragraph
                                            size="large"
                                            align="left"
                                            {...textStyleOverrides}
                                        >
                                            <Localize translate_text="_t_Access free trading tools, video tutorials and eBooks_t_" />
                                        </Typography.Paragraph>
                                    </Flex.Box>
                                    <Flex.Box direction="row" gap="8x">
                                        <LabelPairedCheckLgRegularIcon {...iconStyleOverrides} />
                                        <Typography.Paragraph
                                            size="large"
                                            align="left"
                                            {...textStyleOverrides}
                                        >
                                            <Localize translate_text="_t_Trade from a trusted secure and friendly platform 24/7_t_" />
                                        </Typography.Paragraph>
                                    </Flex.Box>

                                    <Typography.Paragraph
                                        size="large"
                                        align="left"
                                        pb={
                                            growthbook_feature_flag_signup_plain_background
                                                ? '8x'
                                                : '0x'
                                        }
                                        pt={
                                            growthbook_feature_flag_signup_plain_background
                                                ? '8x'
                                                : '0x'
                                        }
                                        {...textStyleOverrides}
                                    >
                                        <Localize translate_text="_t_Join over 2.5 million traders around the globe and discover the Deriv difference with fast deposit and withdrawals_t_" />
                                    </Typography.Paragraph>
                                </Flex.Box>

                                <Flex.Box padding="8x" justify="center" direction="row" gap="4x">
                                    {growthbook_feature_flag_start_signup_journey_cta_button ? (
                                        <Button onClick={handleModalOpen} fullWidth size="lg">
                                            <Localize translate_text="_t_YES, start my trading journey_t_" />
                                        </Button>
                                    ) : (
                                        <>
                                            <Typography.Paragraph
                                                onClick={handleModalOpen}
                                                size="large"
                                                className={signup_text_underline}
                                                weight="bold"
                                                align="center"
                                                {...textStyleOverrides}
                                            >
                                                <Localize translate_text="_t_YES, start my trading journey_t_" />
                                            </Typography.Paragraph>
                                            <LabelPairedChevronUpMdBoldIcon
                                                {...iconStyleOverrides}
                                            />
                                        </>
                                    )}
                                </Flex.Box>
                            </Flex.Box>
                            <TrustpilotSection
                                variant={
                                    growthbook_feature_flag_signup_plain_background
                                        ? 'plain'
                                        : 'dark'
                                }
                            />
                        </>
                    )}
                </Flex.Box>
            </Layout>
        </Box>
    )
}

export default SignUpExperimental
