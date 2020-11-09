import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
// SVG
import Comission from 'images/svg/pa-comission.svg'
import WithdrawDeposit from 'images/svg/pa-withdraw-deposit.svg'
import OpenAccount from 'images/svg/pa-open-account.svg'
import CloseAccount from 'images/svg/pa-close-account.svg'

const Card = styled(Flex)`
    padding: 3.2rem;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
    height: 13.6rem;
    width: auto;
    justify-content: flex-start;
`

const CardText = styled(Text)`
    max-width: 25.6rem;
    margin-left: 1.6rem;
`

const YourControl = () => {
    return (
        <SectionContainer background="grey-8">
            <Container direction="column">
                <Header as="h3" size="var(--text-size-header-1)" align="center">
                    {localize('You are in control')}
                </Header>
                <Text size="var(--text-size-m)" m="1.6rem 0 3.2rem">
                    {localize('As a payment agent, you are an independent exchanger. You can:')}
                </Text>
                <CssGrid
                    columns="repeat(2, 38.4rem)"
                    height="auto"
                    column_gap="2.4rem"
                    row_gap="2.4rem"
                    tablet_columns="repeat(2, 1fr)"
                    mobile_columns="1fr"
                >
                    <Card>
                        <img src={Comission} alt="comission" />
                        <CardText>
                            {localize(
                                'Determine your commission per transaction, subject to our established thresholds.',
                            )}
                        </CardText>
                    </Card>
                    <Card>
                        <img src={OpenAccount} alt="open account" />
                        <CardText>{localize('Open an agency account with just $200.')}</CardText>
                    </Card>
                    <Card>
                        <img src={WithdrawDeposit} alt="withdraw deposit" />
                        <CardText>
                            {localize('Perform multiple deposits and withdrawals per day.')}
                        </CardText>
                    </Card>
                    <Card>
                        <img src={CloseAccount} alt="close account" />
                        <CardText>{localize('Close your account at any time you want.')}</CardText>
                    </Card>
                </CssGrid>
            </Container>
        </SectionContainer>
    )
}

export default YourControl
