import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header, CardStyle, Text } from 'components/elements'
import { localize } from 'components/localization'

const Wrapper = styled(Flex)`
    flex-wrap: wrap;
`

const Card = styled(Flex)`
    ${CardStyle}
    padding: 2.4rem;
    max-width: 20.8rem;
    min-height: 15.8rem;
    margin: 2rem 1.2rem 0;
    justify-content: flex-start;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }
`

const CardHeader = styled(Header)`
    white-space: nowrap;
`

const DerivNumbers = () => {
    return (
        <Container direction="column">
            <Header as="h2" type="page-title" align="center" mb="2rem">
                {localize('Deriv in numbers')}
            </Header>
            <Wrapper mb="8rem">
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        20+
                    </CardHeader>
                    <Text align="center">{localize('Years of industry experience')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        6.5M+
                    </CardHeader>
                    <Text align="center">{localize('Trading accounts opened')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 12T+
                    </CardHeader>
                    <Text align="center">{localize('Total trade turnover')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        200M+
                    </CardHeader>
                    <Text align="center">{localize('Trades last month')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 47M+
                    </CardHeader>
                    <Text align="center">{localize('Withdrawals last month')}</Text>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default DerivNumbers
