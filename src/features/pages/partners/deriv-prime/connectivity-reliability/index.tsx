import React from 'react'
import { connectivity_items } from './data'
import ConnectivityReliabilityItem from './connectivity-reliability-item'
import Container from 'features/components/atoms/container'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import Flex from 'features/components/atoms/flex-box'

const ConnectivityReliabilityType = () => {
    return (
        <Container.Fixed as="section" bgcolor="inverted" padding="20x" md={{ padding: '40x' }}>
            <Flex.Box direction="col">
                <Typography.Heading
                    as="h2"
                    size="large"
                    align="center"
                    textcolor="inverted"
                    pb="20x"
                    md={{ padding_block: '20x' }}
                >
                    <Localize translate_text="_t_Connectivity and reliability_t_" />
                </Typography.Heading>

                <Flex.Box
                    container="fluid"
                    direction="col"
                    justify="center"
                    align="center"
                    gap="12x"
                    md={{ direction: 'row', gap: '20x', pb: '20x' }}
                >
                    {connectivity_items.map((item) => (
                        <ConnectivityReliabilityItem key={item.id} item={item.data} />
                    ))}
                </Flex.Box>
            </Flex.Box>
        </Container.Fixed>
    )
}

export default ConnectivityReliabilityType
