import React from 'react'
import styled from 'styled-components'
import { Container, Box, Flex } from 'components/containers'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import Fabio from 'images/common/fabio.png'
import Roberto from 'images/common/roberto.png'

const Wrapper = styled(Flex)`
    max-width: 58.2rem;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 1;
`

const ClientCard = styled.div`
    width: 788px;
    height: 220px;
    padding: 1.8rem 0 0;
    position: relative;

    &::after {
        content: '“';
        position: absolute;
        font-size: 24rem;
        left: 9.5rem;
        top: -2rem;
        color: var(--color-grey-6);
    }
`

const Divider = styled.div`
    height: 1px;
    width: 100%;
    margin-bottom: 1.6rem;
    max-width: 376px;
    background: var(--color-grey-2);
`

const FullWidth = styled.div`
    width: 100%;

    & > amp-carousel {
        height: 220px;
    }
`

const OurClients = () => {
    return (
        <Box p="8rem 0" bg="white" id="our-clients">
            <Container fd="column" ai="center">
                <Header as="h2" mb="2.2rem" align="center">
                    {localize('What our clients say about Deriv')}
                </Header>
                <FullWidth>
                    <amp-carousel
                        id="our-clients-carousel"
                        width="788px"
                        height="220px"
                        layout="responsive"
                        type="slides"
                        autoplay=""
                        loop=""
                        delay={3000}
                    >
                        <ClientCard>
                            <Wrapper>
                                <Text mb="3.2rem" align="center">
                                    {localize(
                                        'It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more.',
                                    )}
                                </Text>
                                <Divider />
                                <Flex>
                                    <div>
                                        <amp-img src={Fabio} width="50" height="50" />
                                    </div>
                                    <Box ml="0.8rem">
                                        <Text weight="bold" mb="0.4rem">
                                            Fábio Oliveira
                                        </Text>
                                        <Text size="var(--text-size-xs)">
                                            {localize('CEO - Bitcoin Informer')}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Wrapper>
                        </ClientCard>
                        <ClientCard>
                            <Wrapper>
                                <Text mb="3.2rem" align="center">
                                    {localize(
                                        'I am very excited about all the technology involved in Deriv.com — an intuitive and optimised platform.',
                                    )}
                                </Text>
                                <Divider />
                                <Flex>
                                    <div>
                                        <amp-img src={Roberto} width="50" height="50" />
                                    </div>
                                    <Box ml="0.8rem">
                                        <Text weight="bold" mb="0.4rem">
                                            Roberto Arcanjo
                                        </Text>
                                        <Text size="var(--text-size-xs)">
                                            {localize('CEO - Mercado Trader')}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Wrapper>
                        </ClientCard>
                    </amp-carousel>
                </FullWidth>
            </Container>
        </Box>
    )
}

export default OurClients
