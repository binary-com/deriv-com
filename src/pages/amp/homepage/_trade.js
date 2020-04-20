import React from 'react'
import styled from 'styled-components'
import { Container, Flex, Box } from 'components/containers'
import { Text, Header } from 'components/elements'
import { localize } from 'components/localization'
import Dtrader from 'images/common/dtrader_trade.png'
import Dbot from 'images/common/dbot_trade.png'
import Dmt5 from 'images/common/dmt5_trade.png'
import DtraderIcon from 'images/svg/dtrader-icon.svg'
import DbotIcon from 'images/svg/dbot-icon.svg'
import Dmt5Icon from 'images/svg/dmt5-icon.svg'

const FullWidth = styled(Box)`
    width: 100%;
`

const CarouselWrapper = styled(FullWidth)`
    margin-right: 5.6rem;

    @media (max-width: 1240px) {
        margin-right: 0;
        margin-bottom: 3.2rem;
    }
`

const Gradient = styled(Box)`
    background-image: linear-gradient(var(--color-grey-2), var(--color-white));
`

const Card = styled(Flex)`
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    width: 100%;
    background: var(--color-white);
    padding: 1.6rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.25s;

    &:hover {
        background: ${(props) => props.hover};
    }
`

const Trade = () => {
    return (
        <Gradient p="8rem 0 1.6rem" id="trade">
            <Container fd="column">
                <Header as="h2" align="center" mb="1.2rem">
                    {localize('Trade the way you like')}
                </Header>
                <Text align="center" size="var(--text-size-m)" mb="4rem" weight="300">
                    {localize('Choose from three powerful platforms — designed with you in mind')}
                </Text>
                <Flex fw="wrap" jc="center" ai="center">
                    <CarouselWrapper
                        max_width="65.8rem"
                        mr={[0, 0, 0, '5.6rem']}
                        mb={['5.6rem', '5.6rem', '5.6rem', 0]}
                        jc="center"
                        ai="center"
                    >
                        <amp-carousel
                            id="carousel-with-preview"
                            width="65.8rem"
                            height="38.7rem"
                            layout="responsive"
                            type="slides"
                            autoplay=""
                            loop=""
                            delay={3000}
                        >
                            <amp-img
                                src={Dtrader}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="apples"
                            ></amp-img>

                            <amp-img
                                src={Dbot}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="lemons"
                            ></amp-img>
                            <amp-img
                                src={Dmt5}
                                width="65.8rem"
                                height="38.7rem"
                                layout="responsive"
                                alt="blueberries"
                            ></amp-img>
                        </amp-carousel>
                    </CarouselWrapper>
                    <FullWidth max_width="38.4rem">
                        <Card
                            role="button"
                            tabIndex="-1"
                            ai="center"
                            mb="2.4rem"
                            on="tap:carousel-with-preview.goToSlide(index=0)"
                            hover="rgba(255, 68, 79, 0.02)"
                        >
                            <div>
                                <DtraderIcon width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <Header as="h4">{localize('Dtrader')}</Header>
                                <Text weight="300">
                                    {localize(
                                        'The platform to start with. It’s powerful yet easy to use.',
                                    )}
                                </Text>
                            </Box>
                        </Card>
                        <Card
                            role="button"
                            tabIndex="-1"
                            ai="center"
                            mb="2.4rem"
                            on="tap:carousel-with-preview.goToSlide(index=1)"
                            hover="rgba(255, 100, 68, 0.02)"
                        >
                            <div>
                                <DbotIcon width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <Header as="h4">{localize('DBot')}</Header>
                                <Text weight="300">
                                    {localize(
                                        'Automated trading at your fingertips. No coding needed.',
                                    )}
                                </Text>
                            </Box>
                        </Card>
                        <Card
                            role="button"
                            tabIndex="-1"
                            ai="center"
                            on="tap:carousel-with-preview.goToSlide(index=2)"
                            hover="rgba(133, 172, 176, 0.02)"
                        >
                            <div>
                                <Dmt5Icon width="72" height="72" />
                            </div>
                            <Box ml="1.6rem">
                                <Header as="h4">{localize('DMT5')}</Header>
                                <Text weight="300">
                                    {localize(
                                        'The platform of choice for professionals worldwide.',
                                    )}
                                </Text>
                            </Box>
                        </Card>
                    </FullWidth>
                </Flex>
            </Container>
        </Gradient>
    )
}

export default Trade
