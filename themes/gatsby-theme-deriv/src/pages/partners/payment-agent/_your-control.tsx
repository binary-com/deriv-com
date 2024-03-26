import React from 'react'
import styled from 'styled-components'
import { Container, SectionContainer, Flex, CssGrid } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header, Text } from 'components/elements'
import device from 'themes/device'
// SVG
import CloseAccount from 'images/svg/partners/pa-close-account.svg'
import Comission from 'images/svg/partners/pa-comission.svg'
import LoudSpeaker from 'images/svg/partners/icon-loudspeaker.svg'
import WithdrawDeposit from 'images/svg/partners/pa-withdraw-deposit.svg'
import { TString } from 'types/generics'

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
    card_text: TString
    alt: TString
}

const cardItems: CardItemType[] = [
    {
        img_src: Comission,
        card_text:
            '_t_Determine your commission per transaction, subject to our established thresholds._t_',
        alt: '_t_Commission per transaction_t_',
    },
    {
        img_src: LoudSpeaker,
        card_text: '_t_Promote your services to Deriv clients in your country._t_',
        alt: '_t_Spread the word_t_',
    },
    {
        img_src: WithdrawDeposit,
        card_text: '_t_Help Deriv clients to make multiple deposits and withdrawals daily._t_',
        alt: '_t_Multiple deposits and withdrawals_t_',
    },
    {
        img_src: CloseAccount,
        card_text: '_t_Close your account at any time you want._t_',
        alt: '_t_Close your account_t_',
    },
]

const YourControl = () => {
    return (
        <YourControlContainer>
            <Container direction="column">
                <Header as="h3" size="var(--text-size-header-1)" align="center">
                    <Localize translate_text="_t_You are in control_t_" />
                </Header>
                <StyledText size="2.4rem" align="center" m="12px 0 40px">
                    <Localize translate_text="_t_As a payment agent, you are an independent exchanger. You can:_t_" />
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
                    {cardItems.map(({ img_src, alt, card_text }) => (
                        <Card key={card_text}>
                            <img src={img_src} alt={localize(alt)} />
                            <CardText>
                                <Localize translate_text={card_text} />
                            </CardText>
                        </Card>
                    ))}
                </CssGrid>
            </Container>
        </YourControlContainer>
    )
}

export default YourControl
