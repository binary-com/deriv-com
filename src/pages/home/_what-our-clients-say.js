import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
// Icons
// TODO: Icons
const Flex = styled.div`
    display: flex;
    justify-content: ${props => (props.jc ? props.jc : 'center')};
    align-items: ${props => (props.ai ? props.ai : '')};
    margin: ${props => (props.m ? props.m : '')};
    padding: ${props => (props.p ? props.p : '')};
`
const ClientCard = styled.article`
    background-color: var(--color-white);
    width: 38.1rem;
    padding: 2.4rem;
    height: 100%;
    margin: ${props => (props.m ? props.m : '')};
    position: relative;
    overflow: hidden;
`
const ProfileImg = styled.figure`
    margin-right: 1.7rem;
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
    background-color: black;
    width: 5rem;
    height: 5rem;
`
const QuoteText = styled(Text)`
    padding-bottom: 2.1rem;
    border-bottom: 1px solid var(--color-grey-8);
    line-height: 1.38;
    position: relative;
    z-index: 10;

    /* &::before {
        content: '\201C';
        position: absolute;
        font-size: 24rem;
        z-index: 5;
        left: -48px;
        top: -86px;
        color: var(--color-grey-8);
        z-index: -300;
        opacity: 0.5;
    } */
`
const SmallText = styled(Text)`
    font-size: 1.4rem;
    opacity: 0.5;
`

const WhatOurClientsSay = () => (
    <SectionContainer background="grey-9">
        <Container direction="column">
            <Header align="center" font_size="3.6rem" as="h2">
                {localize('What our clients say about Deriv')}
            </Header>
        </Container>
        <Flex m="4rem 0 0 0">
            <ClientCard m="4rem 0 0 0">
                <QuoteText align="center" as="blockquote">
                    {localize(
                        'Customer service support very awesome and first to respond to queries and helping on marketing part. No much struggle introducing new members to binary.com since the company name already have a known truck of good ethics.',
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center">
                        <ProfileImg />
                    </Flex>
                    <div>
                        <Text weight="bold">Paul Mugenda</Text>
                        <SmallText>{localize('Forex trader')}</SmallText>
                    </div>
                </Flex>
            </ClientCard>
            <ClientCard m="0 2rem">
                <QuoteText align="center" as="blockquote">
                    {localize(
                        "I'm very excited about all the technology involved in Deriv.com, an intuitive and optimized platform.",
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center">
                        <ProfileImg />
                    </Flex>
                    <div>
                        <Text weight="bold">Roberto Arcanjo</Text>
                        <SmallText>{localize('CEO - Mercado Trader')}</SmallText>
                    </div>
                </Flex>
            </ClientCard>
            <ClientCard m="4rem 0 0 0">
                <QuoteText align="center" as="blockquote">
                    {localize(
                        'It surpassed my expectations, Binary got it right with Deriv, it was excellent to operate allowing to make an accurate graphic analysis of the market and support and resistance markings with horizontal line, RSI, FIBO and much more.',
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center">
                        <ProfileImg />
                    </Flex>
                    <div>
                        <Text weight="bold">Fábio Oliveira</Text>
                        <SmallText>{localize('CEO - Bitcoin Informer')}</SmallText>
                    </div>
                </Flex>
            </ClientCard>
        </Flex>
    </SectionContainer>
)

export default WhatOurClientsSay
