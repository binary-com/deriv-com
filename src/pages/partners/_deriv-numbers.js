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
                {localize('_t_Deriv in numbers_t_')}
            </Header>
            <Wrapper mb="8rem">
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        20+
                    </CardHeader>
                    <Text align="center">{localize('_t_Years of industry experience_t_')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        2.5M+
                    </CardHeader>
                    <Text align="center">{localize('_t_Trading accounts opened_t_')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 10B+
                    </CardHeader>
                    <Text align="center">{localize('_t_Total trade turnover_t_')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        114M+
                    </CardHeader>
                    <Text align="center">{localize('_t_Trades last month_t_')}</Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 26M+
                    </CardHeader>
                    <Text align="center">{localize('_t_Withdrawals last month_t_')}</Text>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default DerivNumbers
