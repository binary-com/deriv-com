import React from 'react'
import { boxData } from './data'
import Flex from 'features/components/atoms/flex-box'
import Container from 'features/components/atoms/container'
import ShadowBox from 'features/components/molecules/shadow-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import dclsx from 'features/utils/dclsx'

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
        <Flex.Box container="fluid" wrap="wrap" gap="8x">
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
            </Flex.Item>
        </Flex.Box>
    </Container.Fixed>
)

export default Potential
