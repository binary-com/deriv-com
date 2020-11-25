import React from 'react'
import styled from 'styled-components'
import { Header, Text } from 'components/elements'
import { localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
// Icons
import CommoditiesIcon from 'images/svg/markets/commodities.svg'
import ForexIcon from 'images/svg/markets/forex.svg'
import StockIcon from 'images/svg/markets/stock.svg'
import SyntheticIndicesIcon from 'images/svg/markets/synthetic.svg'
// Images
const StyledSection = styled(SectionContainer)`
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);
    padding: 0 0 6rem;

    @media ${device.tabletL} {
        padding: 5rem 0;
    }
`
const MarketWrapper = styled(Flex)`
    margin-top: 4rem;

    @media ${device.tabletL} {
        article:last-child {
            margin-bottom: 0;
        }
    }
`
const MarketCard = styled.article`
    display: flex;
    margin-bottom: ${(props) => props.mb || ''};
    margin-right: ${(props) => props.mr || ''};

    svg {
        margin-right: 2rem;
    }
    img {
        margin-right: 2rem;
    }
    div {
        max-width: 40rem;

        ${Text} {
            padding-top: 8px;
        }
    }
    @media (max-width: 1210px) {
        margin-right: 0;
    }
    @media ${device.tabletL} {
        flex-direction: column;

        svg {
            width: 6rem;
            height: 6rem;
            margin-bottom: 1rem;
        }
        img {
            width: 6rem;
            height: 6rem;
            margin-bottom: 1rem;
        }
    }
    @media (max-width: 860px) {
        margin-bottom: 4rem;
    }
`
const Markets = () => (
    <StyledSection>
        <Container direction="column">
            <Header align="center" as="h2">
                {localize('Markets')}
            </Header>
            <MarketWrapper wrap="wrap">
                <MarketCard mr="2.4rem" mb="4rem">
                    <img src={ForexIcon} alt="forex" width="64" height="64" />
                    <div>
                        <Header as="h3" size="var(--text-size-m)">
                            {localize('Forex')}
                        </Header>
                        <Text>
                            {localize(
                                'Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard mb="4rem">
                    <img src={StockIcon} alt="stock" width="64" height="64" />
                    <div>
                        <Header as="h3" size="var(--text-size-m)">
                            {localize('Stock indices')}
                        </Header>
                        <Text>
                            {localize(
                                'Predict broader market trends and diversify your risk with indices that measure the overall performance of a market.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard mr="2.4rem">
                    <img src={CommoditiesIcon} alt="commodities" width="64" height="64" />
                    <div>
                        <Header as="h3" size="var(--text-size-m)">
                            {localize('Commodities')}
                        </Header>
                        <Text>
                            {localize(
                                'Trade natural resources that are central to the world’s economy and profit from the opportunities created by volatile markets.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
                <MarketCard>
                    <img src={SyntheticIndicesIcon} alt="synthetic" width="64" height="64" />
                    <div>
                        <Header as="h3" size="var(--text-size-m)">
                            {localize('Synthetic indices')}
                        </Header>
                        <Text>
                            {localize(
                                'Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions.',
                            )}
                        </Text>
                    </div>
                </MarketCard>
            </MarketWrapper>
        </Container>
    </StyledSection>
)

export default Markets
