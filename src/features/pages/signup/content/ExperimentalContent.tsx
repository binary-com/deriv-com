import React from 'react'
import { LabelPairedCheckMdRegularIcon } from '@deriv/quill-icons'
import { signup_latam_human_image, signup_latam_image_show } from '../signup.module.scss'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import MaleHuman from 'images/common/sign-up/latam-male-human.png'
import Image from 'features/components/atoms/image'
import dclsx from 'features/utils/dclsx'
import { Localize } from 'components/localization'

const ExperimentalSignUpContent = ({ showLatamImage }: { showLatamImage: boolean }) => {
    return (
        <Flex.Box
            basis="6-12"
            visible="larger-than-tablet"
            direction="col"
            justify="center"
            align="start"
            ml="16x"
            gap="8x"
        >
            {/**
             * This is for growthbook a/b testing in the LATAM region * More info in the growthbook dashboard
             */}
            <Image
                className={dclsx(signup_latam_human_image, {
                    [signup_latam_image_show]: showLatamImage,
                })}
                src={MaleHuman}
                alt="LATAM male human"
            />

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
        </Flex.Box>
    )
}

export default ExperimentalSignUpContent
