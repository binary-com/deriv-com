import React from 'react'
import styled from 'styled-components'
import { Header, Text, LocalizedLinkText } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Container, SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
// Icons
import CommoditiesIcon from 'images/svg/markets/commodities.svg'
import ForexIcon from 'images/svg/markets/forex.svg'
import StockIcon from 'images/svg/markets/stock.svg'
import SyntheticIndicesIcon from 'images/svg/markets/synthetic.svg'

const StyledSection = styled(SectionContainer)`
    box-shadow: inset 0 1px 0 0 var(--color-grey-8);
    padding: 8rem 0 6rem;

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
const MarketCard = styled.article<{ mb?: string; mr?: string }>`
    display: flex;
    margin-bottom: ${({ mb }) => mb};
    margin-right: ${({ mr }) => mr};

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
const MarketLink = styled(LocalizedLinkText)`
    display: block;
    margin-top: 0.8rem;
`

type MarketsProps = {
    is_ppc: boolean
}

const Markets = ({ is_ppc }: MarketsProps) => {
    return (
        <StyledSection>
            <Container direction="column">
                <Header align="center" as="h3" type="section-title">
                    <Localize translate_text="_t_Markets_t_" />
                </Header>
                <MarketWrapper wrap="wrap">
                    <MarketCard mr="2.4rem" mb="4rem">
                        <img src={ForexIcon} alt={localize('_t_Forex_t_')} width="64" height="64" />
                        <div>
                            <Header as="h4" type="sub-section-title">
                                <Localize translate_text="_t_Forex_t_" />
                            </Header>
                            <Text>
                                <Localize translate_text="_t_Take part in the world’s largest financial market where more than $5 trillion worth of currencies are bought and sold each day._t_" />
                            </Text>
                            <Localize
                                translate_text="_t_<0>Learn more</0>_t_"
                                components={[
                                    <MarketLink key={0} to="/markets/forex/" color="red" />,
                                ]}
                            />
                        </div>
                    </MarketCard>
                    <MarketCard mb="4rem">
                        <img
                            src={StockIcon}
                            alt={localize('_t_Stocks & indices_t_')}
                            width="64"
                            height="64"
                        />
                        <div>
                            <Header as="h4" type="sub-section-title">
                                <Localize translate_text="_t_Stocks & indices_t_" />
                            </Header>
                            <Text>
                                <Localize translate_text="_t_Predict market trends and diversify your risk by trading the world’s top performing stocks & indices._t_" />
                            </Text>
                            <Localize
                                translate_text="_t_<0>Learn more</0>_t_"
                                components={[
                                    <MarketLink key={0} to="/markets/stock/" color="red" />,
                                ]}
                            />
                        </div>
                    </MarketCard>
                    {!is_ppc && (
                        <MarketCard mr="2.4rem">
                            <img
                                src={SyntheticIndicesIcon}
                                alt={localize('_t_Synthetic indices_t_')}
                                width="64"
                                height="64"
                            />
                            <div>
                                <Header as="h4" type="sub-section-title">
                                    <Localize translate_text="_t_Synthetic indices_t_" />
                                </Header>
                                <Text>
                                    <Localize translate_text="_t_Enjoy synthetic markets that emulate the excitement of real-world markets without unpredictable real-world disruptions._t_" />
                                </Text>
                                <Localize
                                    translate_text="_t_<0>Learn more</0>_t_"
                                    components={[
                                        <MarketLink key={0} to="/markets/synthetic/" color="red" />,
                                    ]}
                                />
                            </div>
                        </MarketCard>
                    )}
                    <MarketCard>
                        <img
                            src={CommoditiesIcon}
                            alt={localize('_t_Commodities_t_')}
                            width="64"
                            height="64"
                        />
                        <div>
                            <Header as="h4" type="sub-section-title">
                                <Localize translate_text="_t_Commodities_t_" />
                            </Header>
                            <Text>
                                <Localize translate_text="_t_Trade natural resources that are central to the world’s economy and profit from the opportunities created by the markets._t_" />
                            </Text>
                            <Localize
                                translate_text="_t_<0>Learn more</0>_t_"
                                components={[
                                    <MarketLink key={0} to="/markets/commodities/" color="red" />,
                                ]}
                            />
                        </div>
                    </MarketCard>
                </MarketWrapper>
            </Container>
        </StyledSection>
    )
}

export default Markets
