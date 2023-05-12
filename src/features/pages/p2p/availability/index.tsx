import React from 'react'
import DP2Platform from './platform'
import { platform_wrap } from './styles.module.scss'
import { platforms } from './data'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import Flex from 'features/components/atoms/flex-box'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'

const DP2Availability = () => {
    return (
        <Container.Fixed as="section" pt="15x" pb="20x" md={{ pt: '40x' }}>
            <Container.Fluid>
                <Typography.Heading as="h2" size="large" align="center" mb="12x" md={{ mb: '20x' }}>
                    <Localize translate_text="_t_How to get Deriv P2P_t_" />
                </Typography.Heading>
                <Flex.Box
                    justify="between"
                    wrap="wrap"
                    gap="20x"
                    className={platform_wrap}
                    mb="28x"
                    md={{ mb: '40x' }}
                >
                    {platforms.map((platform) => (
                        <DP2Platform key={platform.id} item={platform.data} />
                    ))}
                </Flex.Box>
                <Typography.Paragraph
                    align="center"
                    size="xlarge"
                    textcolor="black"
                    md={{ pt: '20x' }}
                >
                    <Localize
                        translate_text="_t_Want to learn more about Deriv P2P? Head to our <0>Help centre</0>._t_"
                        components={[
                            <Link
                                textcolor="brand"
                                url={{
                                    type: 'internal',
                                    to: '/help-centre',
                                }}
                                key={0}
                            />,
                        ]}
                    />
                </Typography.Paragraph>
            </Container.Fluid>
        </Container.Fixed>
    )
}

export default DP2Availability
