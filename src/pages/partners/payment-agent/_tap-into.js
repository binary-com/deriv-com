import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'

const BlackFlex = styled(Flex)`
    background: var(--color-black);
`

const TapInto = () => {
    return (
        <SectionContainer>
            <Container justify="flex-end">
                <Flex direction="column" mr="2.4rem" max_width="58.8rem">
                    <Header as="h3" font_size="var(--text-size-header-1)" margin="0 0 1.6rem">
                        {localize('Tap into an established and growing market')}
                    </Header>
                    <Text size="var(--text-size-m)">
                        {localize(
                            'Reach hundreds of traders on our platform looking for ways to fund their accounts through local bank wires and e-payment methods.',
                        )}
                    </Text>
                </Flex>
                <BlackFlex width="486px" height="263px" />
            </Container>
        </SectionContainer>
    )
}

export default TapInto
