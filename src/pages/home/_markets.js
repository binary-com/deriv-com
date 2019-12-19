import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer } from 'components/containers'
// Icons
// TODO: Icons
import ForexIcon from 'images/svg/markets-forex.svg'
import IndicesIcon from 'images/svg/markets-synthetic.svg'
import Test from 'images/svg/market-2-icon.svg'
import Three from 'images/svg/market-3-icons.svg'

const MarketWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 4.8rem;
`
const MarketCard = styled.article`
    display: flex;
    margin-bottom: 4.8rem;
    margin-right: ${props => props.marginRight || ''};

    svg {
        margin-right: 2rem;
        margin-top: 1.5rem;
    }
    div {
        max-width: 38.4rem;

        ${Text} {
            padding-top: 8px;
        }
    }
    @media (max-width: 1210px) {
        margin-right: 0;
    }
`
const Markets = () => (
    <SectionContainer>
        <Container direction="column">
            <Header align="center" font_size="3.6rem" as="h2">
                {localize('Markets')}
            </Header>
            <MarketWrapper>
                <MarketCard marginRight="3.6rem">
                    <ForexIcon />
                    <div>
                        <Header as="h4">{localize('Forex')}</Header>
                        <Text>
                            {localize(
                                'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard>
                    <IndicesIcon />
                    <div>
                        <Header as="h4">{localize('Indices')}</Header>
                        <Text>
                            {localize(
                                'Predict broader market trends and diversify your risk with indices that measure the overall performance of a market.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard marginRight="3.6rem">
                    <Test />
                    <div>
                        <Header as="h4">{localize('Commodities')}</Header>
                        <Text>
                            {localize(
                                'Trade natural resources that are central to the world’s economy and profit from the opportunities created by volatile markets.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard>
                    <Three />
                    <div>
                        <Header as="h4">{localize('Synthetic Indices')}</Header>
                        <Text>
                            {localize(
                                'Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
            </MarketWrapper>
        </Container>
    </SectionContainer>
)

export default Markets
