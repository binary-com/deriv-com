import React, { useEffect, useState } from 'react'
import { Analytics } from '@deriv-com/analytics'
import {
    BrandDerivWordmarkWhiteIcon,
    LabelPairedCheckLgRegularIcon,
    LabelPairedChevronUpMdBoldIcon,
} from '@deriv/quill-icons'
import { Link, navigate } from 'gatsby'
import { isMobile } from 'react-device-detect'
import Layout from 'features/components/templates/layout'
import {
    signup_wrapper,
    deriv_icon_wrapper,
    signup_experimental_page_container,
    signup_form_blur_effect,
    signup_hide_form,
    signup_pointer_events_none,
    signup_text_underline,
    signup_bullet_point_container,
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

const SignUpExperimental = ({ region }: BuildVariantType) => {
    const analyticsData: Parameters<typeof Analytics.trackEvent>[1] = {
        form_source: isBrowser() && window.location.hostname,
        form_name: 'virtual_signup_web_mobile_exp003',
    }

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

    return (
        <Box className={signup_experimental_page_container}>
            <BackgroundGradient />

            <Layout hide_live_chat={true} region={region}>
                <Flex.Box pl="8x" pr="8x" className={deriv_icon_wrapper}>
                    <Link to="/">
                        <BrandDerivWordmarkWhiteIcon width={73} height={24} />
                    </Link>
                </Flex.Box>
                <Flex.Box justify="end" direction="col" className={signup_wrapper}>
                    <Box
                        className={dclsx(signup_form_blur_effect, {
                            [signup_pointer_events_none]: !isModalOpen,
                            [signup_hide_form]: !isModalOpen,
                        })}
                    >
                        <SignUpFormContainer onModalClose={handleModalClose} />
                    </Box>

                    {!isModalOpen && (
                        <>
                            <Flex.Box
                                className={signup_bullet_point_container}
                                container="fixed"
                                pl="8x"
                                pr="8x"
                                direction="col"
                            >
                                <Typography.Heading
                                    textcolor="white"
                                    weight="bold"
                                    size="medium"
                                    align="left"
                                    mb="10x"
                                >
                                    <Localize translate_text="_t_Start trading today from just $5_t_" />
                                </Typography.Heading>

                                <Flex.Box direction="row" gap="8x">
                                    <LabelPairedCheckLgRegularIcon fill="white" />
                                    <Typography.Paragraph
                                        size="large"
                                        textcolor="white"
                                        align="left"
                                    >
                                        <Localize translate_text="_t_Master your skills with a free $10.000 practice account_t_" />
                                    </Typography.Paragraph>
                                </Flex.Box>
                                <Flex.Box direction="row" gap="8x">
                                    <LabelPairedCheckLgRegularIcon fill="white" />
                                    <Typography.Paragraph
                                        size="large"
                                        textcolor="white"
                                        align="left"
                                    >
                                        <Localize translate_text="_t_Access free trading tools, video tutorials and eBooks_t_" />
                                    </Typography.Paragraph>
                                </Flex.Box>
                                <Flex.Box direction="row" gap="8x">
                                    <LabelPairedCheckLgRegularIcon fill="white" />
                                    <Typography.Paragraph
                                        size="large"
                                        textcolor="white"
                                        align="left"
                                    >
                                        <Localize translate_text="_t_Trade from a trusted secure and friendly platform 24/7_t_" />
                                    </Typography.Paragraph>
                                </Flex.Box>

                                <Typography.Paragraph size="large" textcolor="white" align="left">
                                    <Localize translate_text="_t_Join over 2.5 million traders around the globe and discover the Deriv difference with fast deposit and withdrawals_t_" />
                                </Typography.Paragraph>
                            </Flex.Box>

                            <Flex.Box mb="8x" mt="8x" justify="center" direction="row" gap="4x">
                                <Typography.Paragraph
                                    onClick={handleModalOpen}
                                    size="large"
                                    className={signup_text_underline}
                                    weight="bold"
                                    textcolor="white"
                                    align="center"
                                >
                                    <Localize translate_text="_t_YES, start my trading journey_t_" />
                                </Typography.Paragraph>
                                <LabelPairedChevronUpMdBoldIcon fill="white" />
                            </Flex.Box>
                            <TrustpilotSection />
                        </>
                    )}
                </Flex.Box>
            </Layout>
        </Box>
    )
}

export default SignUpExperimental
