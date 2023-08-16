import React from 'react'
import { border_bottom } from './potential.module.scss'
import { boxData } from './data'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import ShadowBox from 'features/components/molecules/shadow-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'
import Box from 'features/components/atoms/box'

const Potential = () => (
    <Container.Fixed as="section" pt="40x" md={{ pt: '40x' }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Flex.Box container="fluid" wrap="wrap" gap="20x">
            <Flex.Box basis="2-5" wrap="wrap" gap="8x" grow="1">
                {boxData.map((item) => {
                    return (
                        <ShadowBox
                            key={item.icon_URL}
                            basis="2-5"
                            icon_URL={item.icon_URL}
                            heading={item.heading}
                            icon_alt={item.icon_alt}
                        />
                    )
                })}
            </Flex.Box>
            <Flex.Item basis="2-5" grow="1">
                {/* className={dclsx(styled_heading)} */}
                <Typography.Heading>
                    <Localize translate_text="_t_Your potential. Our technology._t_" />
                </Typography.Heading>
                <Box mt="8x">
                    <Typography.Paragraph
                        size="large"
                        padding_block="10x"
                        className={dclsx(border_bottom)}
                    >
                        <Localize translate_text="_t_Unbeatable spreads_t_" />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        size="large"
                        padding_block="10x"
                        className={dclsx(border_bottom)}
                    >
                        <Localize translate_text="_t_Reliable access to deep market liquidity pools_t_" />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        size="large"
                        padding_block="10x"
                        className={dclsx(border_bottom)}
                    >
                        <Localize translate_text="_t_Available to trade 24/7 on popular crypto assets_t_" />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        size="large"
                        padding_block="10x"
                        className={dclsx(border_bottom)}
                    >
                        <Localize translate_text="_t_Fast execution with intelligent order routing_t_" />
                    </Typography.Paragraph>
                    <Typography.Paragraph
                        size="large"
                        padding_block="10x"
                        className={dclsx(border_bottom)}
                    >
                        <Localize translate_text="_t_Seamless integration with existing systems_t_" />
                    </Typography.Paragraph>
                    <Typography.Paragraph size="large" padding_block="10x">
                        <Localize translate_text="_t_Dedicated support for smooth operations_t_" />
                    </Typography.Paragraph>
                </Box>
            </Flex.Item>
        </Flex.Box>
    </Container.Fixed>
)

export default Potential
