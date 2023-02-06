import React from 'react'
import { SmallContainer, Grid, Ul, WhyTradeItem } from '../components/_style'
import { digital_options } from '../content/static/_option'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
// Icon

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
