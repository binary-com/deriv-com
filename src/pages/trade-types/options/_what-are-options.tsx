import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import Favourite from 'images/svg/trade-types/favourite.svg'
import Instant from 'images/svg/trade-types/instant.svg'
import UserFriendly from 'images/svg/trade-types/user-friendly.svg'
import Flexible from 'images/svg/trade-types/flexible.svg'
import { localize, Localize } from 'components/localization'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
// Icon

export type OptionsContentElement = {
    src: string
    alt: string
    item_title: React.ReactNode
    text: React.ReactNode
}

const digital_options: OptionsContentElement[] = [
    {
        src: Favourite,
        alt: 'favourite markets icon',
        item_title: <Localize translate_text="All favourite markets and more" />,
        text: (
            <Localize translate_text="Trade on all popular markets plus our proprietary synthetics that are available 24/7." />
        ),
    },
    {
        src: Instant,
        alt: 'instant access icon',
        item_title: <Localize translate_text="Instant access" />,
        text: (
            <Localize translate_text="Open an account now and gain access to the world of trading. No need to wait — you can begin trading in minutes." />
        ),
    },
    {
        src: UserFriendly,
        alt: 'user friendly icon',
        item_title: (
            <Localize translate_text="User-friendly platforms with powerful chart widgets" />
        ),
        text: (
            <Localize translate_text="Trade on secure, intuitive, and easy to use platforms with powerful chart technology." />
        ),
    },
    {
        src: Flexible,
        alt: 'flexible icon',
        item_title: (
            <Localize translate_text="Flexible trade types with minimal capital requirements" />
        ),
        text: (
            <Localize translate_text="Deposit as little as 5 USD to start trading and customise your trades to suit your strategy." />
        ),
    },
]
const WhatAreOptions = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        {localize('What are options?')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset. You only need to open a position that predicts how the asset will move over a period of time. This makes it possible for people to participate in the financial markets with minimal capital investment.',
                        )}
                    </Text>
                    <Header as="h3" type="section-title" mb="0.8rem">
                        {localize('Options available on Deriv')}
                    </Header>
                    <Text align="start" mb="0.8rem">
                        {localize('You can trade the following options on Deriv:')}
                    </Text>
                    <Ul>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Digital options</0> that allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Lookbacks</0> that allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="<0>Call/Put Spreads</0> that allow you to earn up to the specified payout depending on the position of the exit spot relative to the two defined barriers."
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                </SmallContainer>
            </SectionContainer>
            <FullWidthMultiColumn
                header={<Localize translate_text="Why trade options on Deriv" />}
                button_title={<Localize translate_text="Don't have a Deriv.com account yet?" />}
                button_text={<Localize translate_text="_t_Create free demo account_t_" />}
            >
                {digital_options.map((content, index) => (
                    <StyledBox
                        key={index}
                        item_title={content.item_title}
                        text={content.text}
                        icon={<img src={content.src} alt="" />}
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
        </>
    )
}

export default WhatAreOptions
