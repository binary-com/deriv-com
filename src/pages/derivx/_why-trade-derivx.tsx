import React, { ReactElement } from 'react'
import styled from 'styled-components'
import DTrading from 'components/custom/_dtrading'
import { SectionContainer, Container, Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'
import { Header, Text } from 'components/elements/typography'
import device from 'themes/device'
import Icon24_7 from 'images/svg/deriv-x/24-7.svg'
import IconMultipleMarketing from 'images/svg/deriv-x/multiple-marketing.svg'
import IconNewPromising from 'images/svg/deriv-x/new-promising.svg'

type TradingType = {
    title?: ReactElement
    subtitle?: ReactElement
    image_name?: string
    image_alt?: string
}

type CardType = {
    icon?: string
    title?: JSX.Element
    subtitle?: JSX.Element
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
        title: <Localize translate_text="Bespoke trading experience" />,
        subtitle: (
            <Localize translate_text="Easily customise your trading environment. Drag and drop widgets, create your own layouts, and get the info you need, when you need it." />
        ),
        image_name: 'bespoke',
        image_alt: localize('Deriv X widgets to customise your CFD trading'),
    },
    {
        title: <Localize translate_text="Intuitive tools" />,
        subtitle: (
            <Localize translate_text="Keep track of your progress with the dashboard, learn from historical trades with the journal, and create custom watchlists for your favourite assets." />
        ),
        image_name: 'intuitive',
        image_alt: localize('Deriv X dashboard with tools to track your online trading'),
    },
    {
        title: <Localize translate_text="Know your margin" />,
        subtitle: (
            <Localize translate_text="You'll always be informed of the margin impact on your account before every trade." />
        ),
        image_name: 'margin',
        image_alt: localize('Know the margin impact on your CFD trading'),
    },
    {
        title: <Localize translate_text="Feature-rich charts" />,
        subtitle: (
            <Localize translate_text="Enjoy multiple chart views, 90+ indicators, and 13 drawing tools." />
        ),
        image_name: 'feature_rich',
        image_alt: localize('Multiple charts to view your online trading'),
    },
]

const card_data: CardType[] = [
    {
        icon: IconNewPromising,
        title: <Localize translate_text="New and promising" />,
        subtitle: (
            <Localize translate_text="Deriv X is our second CFD platform, after MT5. It’s packed with features and built to fit your trading style." />
        ),
    },
    {
        icon: IconMultipleMarketing,
        title: <Localize translate_text="Multiple markets on a single platform" />,
        subtitle: (
            <Localize translate_text="Trade various assets in multiple markets simultaneously." />
        ),
    },
    {
        icon: Icon24_7,
        title: <Localize translate_text="24/7 trading" />,
        subtitle: (
            <Localize translate_text="Trade cryptocurrencies and synthetic indices anytime, even on weekends and holidays." />
        ),
    },
]

const WhyTradeDerivX = () => {
    return (
        <div>
            <SectionContainer>
                <Container fd="column">
                    <StyledHeader type="page-title" align="center" as="h2">
                        {localize('Why trade with Deriv X')}
                    </StyledHeader>
                    <Flex tablet_direction="column" tablet_ai="center" mt="40px">
                        {card_data.map((card, index) => {
                            return (
                                <Card key={index}>
                                    <div>
                                        <img src={card.icon} alt="" />
                                    </div>
                                    <Header
                                        width="240px"
                                        type="sub-section-title"
                                        mt="7px"
                                        mb="8px"
                                        as="h3"
                                    >
                                        {card.title}
                                    </Header>
                                    <Text>{card.subtitle}</Text>
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
