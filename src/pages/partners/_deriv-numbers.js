import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header, CardStyle, Text } from 'components/elements'

const Wrapper = styled(Flex)`
    flex-wrap: wrap;
`

const Card = styled(Flex)`
    ${CardStyle}
    padding: 2.4rem;
    max-width: 20.8rem;
    min-height: 15.8rem;
    margin: 0 1.2rem;
    justify-content: flex-start;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
    @media (max-width: 1360px) {
        margin: 1.2rem;
    }
`
const DerivNumbers = () => {
    return (
        <Container direction="column">
            <Header as="h2" align="center" mb="4rem">
                Deriv in numbers
            </Header>
            <Wrapper mb="8rem">
                <Card direction="column">
                    <Header as="h5" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        20+
                    </Header>
                    <Text align="center">Years of industry experience</Text>
                </Card>
                <Card direction="column">
                    <Header as="h5" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        1.2M+
                    </Header>
                    <Text align="center">Trading accounts opened</Text>
                </Card>
                <Card direction="column">
                    <Header as="h5" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 7B+
                    </Header>
                    <Text align="center">Total trade turnover</Text>
                </Card>
                <Card direction="column">
                    <Header as="h5" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        27M+
                    </Header>
                    <Text align="center">Trades last month</Text>
                </Card>
                <Card direction="column">
                    <Header as="h5" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 9M+
                    </Header>
                    <Text align="center">Withdrawals last month</Text>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default DerivNumbers
