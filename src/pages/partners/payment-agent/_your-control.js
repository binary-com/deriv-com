import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
// SVG
import CloseAccount from 'images/svg/pa-close-account.svg'
import Comission from 'images/svg/pa-comission.svg'
import LoudSpeaker from 'images/svg/icon-loudspeaker.svg'
import WithdrawDeposit from 'images/svg/pa-withdraw-deposit.svg'

const Card = styled(Flex)`
    padding: 24px 32px;
    border-radius: 4px;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    background: var(--color-white);
    height: 12rem;
    width: auto;
    justify-content: flex-start;
    align-items: center;

    @media ${device.laptop} {
        height: 120px;
    }

    @media ${device.tabletL} {
        flex-direction: column;
        padding: 24px;
        width: 328px;
        min-height: 184px;
        height: auto;
    }
    @media ${device.mobileM} {
        width: 100%;
    }
`

const CardText = styled(Text)`
    margin-left: 16px;

    @media ${device.laptopM} {
        font-size: 16px;
    }

    @media ${device.tabletL} {
        width: 100%;
        max-width: unset;
        margin: 16px 0 0;
        text-align: center;
    }
`

const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
        margin: 16px 0 24px;
    }
`

const YourControl = () => {
    return (
        <SectionContainer background="grey-8">
            <Container direction="column">
                <Header as="h3" size="var(--text-size-header-1)" align="center">
                    {localize('You are in control')}
                </Header>
                <StyledText size="2.4rem" align="center" m="12px 0 40px">
                    {localize('As a payment agent, you are an independent exchanger. You can:')}
                </StyledText>
                <CssGrid
                    columns="repeat(2, 38.4rem)"
                    height="auto"
                    column_gap="2.4rem"
                    row_gap="2.4rem"
                    tablet_columns="1fr"
                    tablet_row_gap="16px"
                    mobile_columns="1fr"
                    mobile_row_gap="16px"
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
                        <img src={LoudSpeaker} alt="promote services" />
                        <CardText>
                            {localize(
                                'Choose which countries to service, and promote your services your way.',
                            )}
                        </CardText>
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
