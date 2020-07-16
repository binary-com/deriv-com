import React from 'react'
import styled from 'styled-components'
import { Americas, AsiaOceania, Europe } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
import MarketsAccordion from '../_markets_accordion.js'
import AvailablePlatforms from '../_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
//SVG
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    max-width: 13.2rem;

    @media ${device.tabletL} {
        max-width: 10rem;
    }
`
const Row = styled(Flex)``

const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
    }
`
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    width: 100%;
    padding: 2.4rem 1.6rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);

        svg {
            width: 16px;
            height: 16px;
            margin-right: 4px;
        }
        ${Text} {
            font-size: 1.5rem;
            line-height: 1.5;
        }
    }
`
const Options = styled(Descriptions)`
    margin-top: 2.4rem;

    ${Row} {
        margin-top: 4rem;
        border: unset;
        justify-content: space-between;

        @media ${device.tabletL} {
            flex-direction: column;
        }

        ${Col} {
            max-width: 38.4rem;
        }
    }
    div:first-child {
        margin-top: 0;
    }
`
const StyledText = styled(Text)`
    @media ${device.tabletL} {
        font-size: 2rem;
        text-align: left;
    }
`
const Title = styled(Text)`
    @media ${device.tabletL} {
        text-align: center;
        max-width: 8rem;
        font-weight: 600;
    }
`

const DetailsContainer = styled(Flex)`
    flex-direction: column;

    ${Text} {
        font-size: 1.4rem;
        margin-top: 1.6rem;

        @media ${device.tabletL} {
            margin-top: 1rem;
        }
    }
`
const AmericasDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a segment of the US economy.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>The US Index</0> follows the stock performance of the 500 largest publicly-traded companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The US Tech Index</0> follows the stock performance of the 100 largest non-financial companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Wall Street Index</0> follows the stock performance of 30 large listed companies in the US."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
const AsiaOceaniaDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a financial market in the Asia/Oceania region.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Australian Index</0> tracks the stock performance of the 200 largest listed companies in Australia. "
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Hong Kong Index</0> tracks the stock performance of the 50 largest listed companies in Hong Kong."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Japanese Index</0> tracks the stock performance of 225 large, publicly owned companies in Japan."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
const EuropeDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'Each of these indices replicates the performance of top publicly traded companies in a financial market in Europe.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Dutch Index</0> follows the stock performance of the 25 most traded companies in the Netherlands."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Euro 50 Index</0> follows the performance of the 50 largest and most liquid stocks in the EU."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The French Index</0> tracks the performance of the 40 most traded stocks among the top 100 listed companies in France."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The German Index</0> follows the stock performance of the 30 major listed companies in Germany."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The Swiss Index</0> follows the performance of the 20 largest and most liquid stocks in Switzerland."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>The UK Index</0> follows the stock performance of the top 100 listed companies in the UK."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
const DigitalOptions = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on stock indices.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Option trades available on stock indices')}
                </StyledText>
                <Options>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Up/Down" />}
                                svg={RiseFall}
                                content={
                                    <Localize
                                        translate_text="<0>Rise/Fall:</0> Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                svg={HigherLower}
                                content={
                                    <Localize
                                        translate_text="<0>Higher/Lower:</0> Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="In/Out" />}
                                svg={EbEo}
                                content={
                                    <Localize
                                        translate_text="<0>Ends Between/Ends Outside:</0> Predict whether the exit spot will be inside or outside two price targets at the end of the contract period."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                svg={SbGo}
                                content={
                                    <Localize
                                        translate_text="<0>Stays Between/Goes Outside:</0> Predict whether the market will stay inside or go outside two price targets at any time during the contract period."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                svg={TNT}
                                title={<Localize translate_text="Touch/No Touch" />}
                                content={
                                    <Localize translate_text="Predict whether the market will touch or not touch a target at any time during the contract period." />
                                }
                            />
                        </Col>
                    </Row>
                </Options>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for options trading')}
                </Text>
                <MarketsWrapper direction="column">
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Americas')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    columns="repeat(3, 1fr)"
                                    mobile_col_template="repeat(2, 1fr)"
                                >
                                    <Americas />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={AmericasDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Asia/ Oceania')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    columns="repeat(3, 1fr)"
                                    mobile_col_template="repeat(1, 1fr)"
                                >
                                    <AsiaOceania />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={AsiaOceaniaDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold" max_width="9.7rem" align="center">
                                        {localize('Europe')}
                                    </Title>
                                </Col>
                                <MarketsList
                                    columns="repeat(4, 1fr)"
                                    mobile_col_template="repeat(2, 1fr)"
                                >
                                    <Europe />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={EuropeDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default DigitalOptions
