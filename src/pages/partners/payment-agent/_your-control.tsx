import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
// SVG
import CloseAccount from 'images/svg/partners/pa-close-account.svg'
import Comission from 'images/svg/partners/pa-comission.svg'
import LoudSpeaker from 'images/svg/partners/icon-loudspeaker.svg'
import WithdrawDeposit from 'images/svg/partners/pa-withdraw-deposit.svg'

const Card = styled(Flex)`
    padding: 24px 32px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(14, 14, 14, 0.1);
    background: var(--color-white);
    height: 12rem;
    width: auto;
    justify-content: flex-start;
    align-items: center;
    @media ${device.laptop} {
        height: 120px;
    }
    @media ${device.tabletL} {
        padding: 24px 24px 32px 24px;
        align-items: center;
        width: calc(100% - 16px);
        min-height: 96px;
        height: 120px;
    }
    @media ${device.mobileM} {
        height: 100%;
    }

    img {
        width: 48px;
        height: 48px;
    }
`

const CardText = styled(Text)`
    margin-left: 16px;
    @media ${device.laptopM} {
        font-size: 14px;
    }
    @media ${device.tabletL} {
        width: 100%;
        max-width: unset;
        margin: 16px 0 0;
        padding-left: 16px;
    }
`

const StyledText = styled(Text)`
    @media ${device.tablet} {
        font-size: 16px;
        margin: 16px 36px 24px 36px;
    }
`
const YourControlContainer = styled(SectionContainer)`
    background: var(--color-grey-8);

    @media ${device.tabletL} {
        padding: 40px 0;
    }
`

type CardItemType = {
    img_src: string
    card_text: ReactElement
}
const cardItems: CardItemType[] = [
    {
        img_src: Comission,
        card_text: (
            <Localize translate_text="Determine your commission per transaction, subject to our established thresholds." />
        ),
    },
    {
        img_src: LoudSpeaker,
        card_text: (
            <Localize translate_text="Promote your services to Deriv clients in your country." />
        ),
    },
    {
        img_src: WithdrawDeposit,
        card_text: (
            <Localize translate_text="Help Deriv clients to make multiple deposits and withdrawals daily." />
        ),
    },
    {
        img_src: CloseAccount,
        card_text: <Localize translate_text="Close your account at any time you want." />,
    },
]
const YourControl = () => {
    return (
        <YourControlContainer>
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
                    tablet_row_gap="24px"
                    mobile_columns="1fr"
                    mobile_row_gap="24px"
                >
                    {cardItems.map((item, index) => (
                        <Card key={`key-${index}`}>
                            <img src={item.img_src} alt={''} />
                            <CardText>{item.card_text}</CardText>
                        </Card>
                    ))}
                </CssGrid>
            </Container>
        </YourControlContainer>
    )
}

export default YourControl
