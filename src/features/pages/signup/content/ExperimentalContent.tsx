import React from 'react'
import { LabelPairedCheckMdRegularIcon } from '@deriv/quill-icons'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'

const ExperimentalContent = () => {
    return (
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
    )
}

export default ExperimentalContent
