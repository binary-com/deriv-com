import React from 'react'
import styled from 'styled-components'
import { Header, Text, Image } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'

const ClientCard = styled.article`
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: -2px 6px 15px 0 rgba(195, 195, 195, 0.31);
    width: 38.1rem;
    padding: 2.4rem;
    height: 100%;
    margin: ${props => (props.m ? props.m : '')};
    position: relative;
    overflow: hidden;

    @media (max-width: 1185px) {
        margin: 2rem;
        order: ${props => (props.order ? props.order : '')};
    }
`

const QuoteText = styled(Text)`
    padding-bottom: 2.1rem;
    border-bottom: 1px solid var(--color-grey-8);
    z-index: 10;
    position: relative;

    &::after {
        content: '“ "”" "‘" "’"';
        position: absolute;
        font-size: 24rem;
        z-index: -1;
        left: -4.7rem;
        top: -8.6rem;
        color: var(--color-grey-8);
    }
`

const SmallText = styled(Text)`
    font-size: var(--text-size-xs);
    opacity: 0.5;
`
const ImageWrapper = styled.div`
    width: 50px;
    margin-right: 1.6rem;
`

const WhatOurClientsSay = () => (
    <SectionContainer background="grey-10" padding="6rem 0">
        <Container direction="column">
            <Header align="center" font_size="var(--text-size-header-1)" as="h2">
                {localize('What our clients say about Deriv')}
            </Header>
        </Container>
        <Flex m="6rem 0 0 0" wrap="wrap">
            <ClientCard>
                <QuoteText as="blockquote">
                    {localize(
                        'Customer service support very awesome and first to respond to queries and helping on marketing part. No much struggle introducing new members to Binary.com since the company name already have a known truck of good ethics.',
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center" width="auto">
                        <ImageWrapper>
                            <Image
                                img_name="paul.png"
                                alt={localize('trader profile')}
                                width="100%"
                            />
                        </ImageWrapper>
                    </Flex>
                    <figure>
                        <Text weight="bold">Paul Mugenda</Text>
                        <SmallText>{localize('Forex trader')}</SmallText>
                    </figure>
                </Flex>
            </ClientCard>
            <ClientCard m="0 2rem" order="3">
                <QuoteText as="blockquote">
                    {localize(
                        'I am very excited about all the technology involved in Deriv.com —  an intuitive and optimised platform.',
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center" width="auto">
                        <ImageWrapper>
                            <Image
                                img_name="roberto.png"
                                alt={localize('trader profile')}
                                width="100%"
                            />
                        </ImageWrapper>
                    </Flex>
                    <figure>
                        <Text weight="bold">Roberto Arcanjo</Text>
                        <SmallText>{localize('CEO - Mercado Trader')}</SmallText>
                    </figure>
                </Flex>
            </ClientCard>
            <ClientCard>
                <QuoteText as="blockquote">
                    {localize(
                        'It surpassed my expectations. Binary got it right with Deriv. Trading on the platform is excellent and it allows for making accurate graphical analyses of the market and adding support and resistance markings with the use of horizontal lines, RSI, FIBO and much more.',
                    )}
                </QuoteText>
                <Flex jc="flex-start" p="2.1rem 0 0 0">
                    <Flex ai="center" width="auto">
                        <ImageWrapper>
                            <Image
                                img_name="fabio.png"
                                alt={localize('trader profile')}
                                width="100%"
                            />
                        </ImageWrapper>
                    </Flex>
                    <figure>
                        <Text weight="bold">Fábio Oliveira</Text>
                        <SmallText>{localize('CEO - Bitcoin Informer')}</SmallText>
                    </figure>
                </Flex>
            </ClientCard>
        </Flex>
    </SectionContainer>
)

export default WhatOurClientsSay
