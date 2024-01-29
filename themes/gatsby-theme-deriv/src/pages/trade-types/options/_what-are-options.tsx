import React from 'react'
import { SmallContainer, Ul } from '../components/_style'
import { digital_options } from '../content/static/_option'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import { SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { StyledBox } from 'pages/markets/static/style/_markets-style'

const WhatAreOptions = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" type="page-title" mb="1.2rem">
                        <Localize translate_text="_t_What are options?_t_" />
                    </Header>
                    <Text mb="4rem">
                        <Localize translate_text="_t_Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset. You only need to open a position that predicts how the asset will move over a period of time. This makes it possible for people to participate in the financial markets with minimal capital investment._t_" />
                    </Text>
                    <Header as="h3" type="section-title" mb="1.6rem">
                        <Localize translate_text="_t_Options available on Deriv_t_" />
                    </Header>
                    <Text align="start" mb="1.6rem">
                        <Localize translate_text="_t_You can trade the following options on Deriv:_t_" />
                    </Text>
                    <Ul>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="_t_<0>Digital options</0> that allow you to predict the outcome from two possible results and earn a fixed payout if your prediction is correct._t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                        <li>
                            <Text>
                                <Localize
                                    translate_text="_t_<0>Lookbacks</0> that allow you to earn a payout depending on the optimum high or low achieved by the market during the duration of a contract._t_"
                                    components={[<strong key={0} />]}
                                />
                            </Text>
                        </li>
                    </Ul>
                </SmallContainer>
            </SectionContainer>
            <FullWidthMultiColumn
                header="_t_Why trade options on Deriv_t_"
                button_title="_t_Don't have a Deriv account yet?_t_"
                button_text="_t_Create free demo account_t_"
            >
                {digital_options.map(({ alt, item_title, src, text }) => (
                    <StyledBox
                        key={text}
                        item_title={item_title}
                        text={text}
                        icon={<img width="48px" height="48px" src={src} alt={localize(alt)} />}
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
        </>
    )
}

export default WhatAreOptions
