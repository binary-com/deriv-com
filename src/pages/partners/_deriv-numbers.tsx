import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Header, CardStyle, Text } from 'components/elements'
import { Localize } from 'components/localization'

const Wrapper = styled(Flex)`
    direction: ltr;
    flex-wrap: wrap;
    margin-block-start: 2rem;
    gap: 2.4rem;
`

const Card = styled(Flex)`
    ${CardStyle}
    padding: 2.4rem;
    max-width: 28.2rem;
    min-height: 16.8rem;
    justify-content: flex-start;
    block-size: auto;
`

const CardHeader = styled(Header)`
    white-space: nowrap;
`

const DerivNumbers = () => {
    return (
        <Container direction="column">
            <Header as="h2" type="page-title" align="center" mb="2rem">
                <Localize translate_text="_t_Deriv in numbers_t_" />
            </Header>
            <Wrapper mb="8rem">
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        23
                    </CardHeader>
                    <Text align="center">
                        <Localize translate_text="_t_Years of industry experience_t_" />
                    </Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        1M+
                    </CardHeader>
                    <Text align="center">
                        <Localize translate_text="_t_Active traders_t_" />
                    </Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 15T+
                    </CardHeader>
                    <Text align="center">
                        <Localize translate_text="_t_Total trade turnover_t_" />
                    </Text>
                </Card>
                <Card direction="column">
                    <CardHeader as="p" size="var(--text-size-header-1)" mb="0.8rem" align="center">
                        USD 45M+
                    </CardHeader>
                    <Text align="center">
                        <Localize translate_text="_t_Withdrawals last month_t_" />
                    </Text>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default DerivNumbers
