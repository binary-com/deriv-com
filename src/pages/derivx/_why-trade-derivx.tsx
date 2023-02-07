import React from 'react'
import styled from 'styled-components'
import DTrading, { TradingType } from 'components/custom/_dtrading'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'
import Icon24_7 from 'images/svg/deriv-x/24-7.svg'
import IconMultipleMarketing from 'images/svg/deriv-x/multiple-marketing.svg'
import IconNewPromising from 'images/svg/deriv-x/new-promising.svg'
import { TString } from 'types/generics'

type CardType = {
    icon?: string
    title?: TString
    subtitle?: TString
    image_alt: string
}

const StyledHeader = styled(Header)`
    @media ${device.mobileL} {
        font-size: 24px;
        padding: 0 35px;
    }
    @media ${device.mobileM} {
        padding: 0 20px;
    }
`

const Card = styled(Flex)`
    flex-direction: column;
    min-width: 200px;
    max-width: 384px;
    height: auto;
    padding: 24px;
    border-radius: 8px;
    border: solid 1px var(--color-grey-21);
    margin-right: 2.4rem;
    margin-bottom: 2rem;
    justify-content: flex-start;

    :last-child {
        margin-right: 0;
    }

    @media ${device.tablet} {
        margin-right: unset;
    }
`

const trading: TradingType[] = [
    {
        title: '_t_Bespoke trading experience_t_',
        subtitle:
            '_t_Easily customise your trading environment. Drag and drop widgets, create your own layouts, and get the info you need, when you need it._t_',
        image_name: 'bespoke',
        image_alt: 'Deriv X widgets to customise your CFD trading',
    },
    {
        title: '_t_Intuitive tools_t_',
        subtitle:
            '_t_Keep track of your progress with the dashboard, learn from historical trades with the journal, and create custom watchlists for your favourite assets._t_',
        image_name: 'intuitive',
        image_alt: 'Deriv X dashboard with tools to track your online trading',
    },
    {
        title: '_t_Know your margin_t_',
        subtitle:
            "_t_You'll always be informed of the margin impact on your account before every trade._t_",
        image_name: 'margin',
        image_alt: 'Know the margin impact on your CFD trading',
    },
    {
        title: '_t_Feature-rich charts_t_',
        subtitle: '_t_Enjoy multiple chart views, 90+ indicators, and 13 drawing tools._t_',
        image_name: 'feature_rich',
        image_alt: 'Multiple charts to view your online trading',
    },
]

const card_data: CardType[] = [
    {
        icon: IconNewPromising,
        title: '_t_New and promising_t_',
        subtitle:
            '_t_Deriv X is our second CFD platform, after MT5. It’s packed with features and built to fit your trading style._t_',
        image_alt: 'New CFD trading platform',
    },
    {
        icon: IconMultipleMarketing,
        title: '_t_Multiple markets on a single platform_t_',
        subtitle: '_t_Trade various assets in multiple markets simultaneously._t_',
        image_alt: 'Trade on multiple markets',
    },
    {
        icon: Icon24_7,
        title: '_t_24/7 trading_t_',
        subtitle:
            '_t_Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays._t_',
        image_alt: 'Trade any time of the day and week',
    },
]

const WhyTradeDerivX = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader type="page-title" align="center" as="h2">
                        <Localize translate_text="_t_Why trade with Deriv X_t_" />
                    </StyledHeader>
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px">
                        {card_data.map(({ image_alt, icon, subtitle, title }, index) => {
                            return (
                                <Card key={index}>
                                    <div>
                                        <img src={icon} alt={image_alt} />
                                    </div>
                                    <Header
                                        width="240px"
                                        type="sub-section-title"
                                        mt="7px"
                                        mb="8px"
                                        as="h3"
                                    >
                                        <Localize translate_text={title} />
                                    </Header>
                                    <Text>
                                        <Localize translate_text={subtitle} />
                                    </Text>
                                </Card>
                            )
                        })}
                    </Flex>
                </Container>
            </SectionContainer>
            <DTrading trading={trading} />
        </div>
    )
}

export default WhyTradeDerivX
