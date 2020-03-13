import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'

const BlackFlex = styled(Flex)`
    background: var(--color-black);
`
const Card = styled(Flex)`
    padding: 3.2rem;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
`

const CardText = styled(Text)`
    max-width: 25.6rem;
`

const YourControl = () => {
    return (
        <SectionContainer background="grey-8">
            <Container direction="column">
                <Header as="h3" font_size="var(--text-size-header-1)" align="center">
                    {localize('You are in control')}
                </Header>
                <Text size="var(--text-size-m)" margin="1.6rem 0 3.2rem">
                    {localize('As a payment agent you are an independent-exchanger. You can:')}
                </Text>
                <CssGrid
                    columns="repeat(2, 38.4rem)"
                    column_gap="2.4rem"
                    row_gap="2.4rem"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                >
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>
                            {localize(
                                'Determine your commission per transaction, subject to our established thresholds.',
                            )}
                        </CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>{localize('Open an agency account with just $200.')}</CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>
                            {localize('Perform multiple deposits and withdrawals per day.')}
                        </CardText>
                    </Card>
                    <Card>
                        <BlackFlex width="48px" height="48px" mr="1.6rem" />
                        <CardText>{localize('Close your account at any time you want.')}</CardText>
                    </Card>
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default YourControl
