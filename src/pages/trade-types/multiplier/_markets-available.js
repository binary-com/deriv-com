import React from 'react'
import styled from 'styled-components'
import MarketsCarousel from '../components/_markets-carousel'
import LearnMore from '../components/_learn-more'
import { SmallContainer, Card, MarketsItem } from '../components/_style'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import Forex from 'images/svg/trade-types/forex.svg'
import SyntheticIndices from 'images/svg/trade-types/synthetic-indices.svg'

const MobileCardHeader = styled(Flex)`
    margin-bottom: 0.8rem;
    flex-direction: column;
    height: auto;

    @media (max-width: 680px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;

        > img {
            width: 48px;
            height: 48px;
        }
    }
`
const StyledText = styled(Text)`
    margin-top: 1.6rem;

    @media (max-width: 680px) {
        font-size: 18px;
        margin-top: 0;
    }
`

const MarketsAvailable = () => {
    return (
        <>
            <SectionContainer background="white" padding="8rem 0" position="relative">
                <SmallContainer direction="column" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="2.4rem">
                        {localize('Markets available for multipliers trading')}
                    </Header>
                </SmallContainer>
                <MarketsCarousel>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img src={Forex} alt="forex" width="64" height="64" />

                                    <StyledText weight="bold">{localize('Forex')}</StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Speculate on the price movements of major forex pairs and increase your profit potential without losing more than your stake.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#forex"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                    <MarketsCarousel.Item>
                        <MarketsItem>
                            <Card>
                                <MobileCardHeader>
                                    <img
                                        src={SyntheticIndices}
                                        alt="synthetic indices"
                                        width="64"
                                        height="64"
                                    />

                                    <StyledText weight="bold">
                                        {localize('Synthetic indices')}
                                    </StyledText>
                                </MobileCardHeader>
                                <Text>
                                    {localize(
                                        'Trade multipliers on synthetic indices that are available 24/7 and increase your profit potential multiples times while limiting your risk.',
                                    )}
                                </Text>
                                <LearnMore
                                    text={<Localize translate_text="Learn more" />}
                                    to="/markets#synthetic"
                                />
                            </Card>
                        </MarketsItem>
                    </MarketsCarousel.Item>
                </MarketsCarousel>
            </SectionContainer>
        </>
    )
}

export default MarketsAvailable
