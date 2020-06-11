import React from 'react'
import styled from 'styled-components'
import SmallContainer from '../components/_small-container'
import { SEO, Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import Layout from 'components/layout/layout'
import { localize, Localize, WithIntl } from 'components/localization'
import Patterns from 'images/common/trade-types/trade-patterns.png'
import FixedPayout from 'images/svg/trade-types/fixed-payout.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'
import InstantAccess from 'images/svg/trade-types/instant-access.svg'
import UserFriendly from 'images/svg/trade-types/user-friendly-platforms.svg'
import FlexibleTrade from 'images/svg/trade-types/flexible-trade-types.svg'

const Hero = styled(Flex)`
    height: 40rem;
    background: var(--color-black);
    background-image: url(${Patterns});
    background-size: cover;
`

const Ul = styled.ul`
    list-style-type: disc;
    font-size: var(--text-size-s);
    padding-left: 1.8rem;

    & > li {
        margin-bottom: 0.8rem;
    }
    & > li:last-child {
        margin-bottom: 0;
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
`

const Options = () => {
    return (
        <Layout>
            <SEO
                title={localize('Trade types | Options')}
                description={localize(
                    'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset.',
                )}
            />
            <Hero jc="cneter" ai="center">
                <SmallContainer>
                    <Header as="h1" color="white" align="center">
                        {localize('Options')}
                    </Header>
                </SmallContainer>
            </Hero>
            <SectionContainer background="white" padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h2" mb="1.2rem">
                        {localize('What are options?')}
                    </Header>
                    <Text mb="4rem">
                        {localize(
                            'Options are products that allow for payouts from predicting market movements, without needing to buy the underlying asset. You only need to open a position that predicts how the asset will move over a period of time. This makes it possible for people to participate in the financial markets with minimal capital investment.',
                        )}
                    </Text>
                    <Header as="h3" mb="0.8rem">
                        {localize('Options available on Deriv')}
                    </Header>
                    <Text align="left" mb="0.8rem">
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
                    </Ul>
                </SmallContainer>
            </SectionContainer>
            <SectionContainer background="grey-23" padding="4rem 0">
                <SmallContainer direction="column">
                    <Header as="h3" mb="4rem">
                        {localize('Why trade options on Deriv')}
                    </Header>
                    <Grid>
                        <Flex direction="column" jc="flex-start" max_width="237px">
                            <div>
                                <FixedPayout />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Fixed, predictable payout')}
                            </Text>
                            <Text>
                                {localize(
                                    'Know your potential profit or loss even before purchasing a contract.',
                                )}
                            </Text>
                        </Flex>
                        <Flex direction="column" jc="flex-start" max_width="237px">
                            <div>
                                <SyntheticIndices />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('All favourite markets and more')}
                            </Text>
                            <Text>
                                {localize(
                                    'Trade on all popular markets plus our proprietary synthetic indices that are available 24/7.',
                                )}
                            </Text>
                        </Flex>
                        <Flex direction="column" jc="flex-start" max_width="237px">
                            <div>
                                <InstantAccess />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Instant access')}
                            </Text>
                            <Text>{localize('Open an account and start trading in minutes.')}</Text>
                        </Flex>
                        <Flex direction="column" jc="flex-start" max_width="237px">
                            <div>
                                <UserFriendly />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('User-friendly platforms with powerful chart widgets')}
                            </Text>
                            <Text>
                                {localize(
                                    'Trade on secure, intuitive, and easy to use platforms with powerful chart technology.',
                                )}
                            </Text>
                        </Flex>
                        <Flex direction="column" jc="flex-start" max_width="237px">
                            <div>
                                <FlexibleTrade />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Flexible trade types with minimal capital requirements')}
                            </Text>
                            <Text>
                                {localize(
                                    'Deposit as little as 5 USD to start trading and customise your trades to suit your strategy.',
                                )}
                            </Text>
                        </Flex>
                    </Grid>
                    <Text>{localize("Don't have a Deriv.com account yet?")}</Text>
                </SmallContainer>
            </SectionContainer>
        </Layout>
    )
}

export default WithIntl()(Options)
