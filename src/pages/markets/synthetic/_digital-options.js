import React from 'react'
import styled from 'styled-components'
import MarketsAccordion from '../_markets_accordion.js'
import { ContinuousIndices, DailyResetIndices } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
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
import MatchesDiffers from 'images/svg/options/matches-differs.svg'
import EvenOdd from 'images/svg/options/even-odd.svg'
import RcRp from 'images/svg/options/rc-rp.svg'
import HighLowTicks from 'images/svg/options/hl-ticks.svg'
import TNT from 'images/svg/options/tnt.svg'
import Asians from 'images/svg/options/asians.svg'
import OuOd from 'images/svg/options/ou-od.svg'
import HighClose from 'images/svg/options/high-close.svg'
import HighLow from 'images/svg/options/high-low.svg'
import CloseLow from 'images/svg/options/close-low.svg'

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
const MarketsWrapper = styled(Flex)`
    flex-direction: column;

    > div {
        margin-top: 2.4rem;
    }
`
const Row = styled(Flex)``
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
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    border-right: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(3, 1fr);
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
const ContinuousIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            {localize(
                'These indices correspond to simulated markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%.',
            )}
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every two seconds</0> for volatility indices <0>10, 25, 50, 75, and 100</0>."
                components={[<strong key={0} />]}
            />
        </Text>
        <Text>
            <Localize
                translate_text="<0>One tick</0> is generated <0>every second</0> for volatility indices <0>10 (1s), 25 (1s), 50 (1s), 75 (1s), and 100 (1s)</0>."
                components={[<strong key={0} />]}
            />
        </Text>
    </DetailsContainer>
)
const DailyResetIndicesDetails = () => (
    <DetailsContainer>
        <Text>
            <Localize
                translate_text="These indices replicate markets with <0>bullish and bearish trends</0> with constant volatility. The Bull Market and Bear Market indices start at 00:00 GMT each day, replicating bullish and bearish markets respectively."
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
                            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options and lookbacks on synthetic indices.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader dbot smarttrader tablet_direction="column" />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Option trades available on synthetic indices')}
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
                    <Row wrap="wrap">
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Digits" />}
                                svg={MatchesDiffers}
                                content={
                                    <Localize
                                        translate_text="<0>Matches/Differs:</0> Predict what number will be the last digit of the last tick of a contract."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                svg={OuOd}
                                content={
                                    <Localize
                                        translate_text="<0>Over/Under:</0> Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                remove_title
                                svg={EvenOdd}
                                content={
                                    <Localize
                                        translate_text="<0>Even/Odd:</0> Predict whether the last digit of the last tick of a contract will be an even number or an odd number."
                                        components={[<strong key={0} />]}
                                    />
                                }
                                mobile_pt="2.4rem"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Reset Call/Reset Put" />}
                                svg={RcRp}
                                content={
                                    <Localize translate_text="Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time." />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="High/Low Ticks" />}
                                svg={HighLowTicks}
                                content={
                                    <Localize translate_text="Predict which will be the highest or the lowest tick in a series of five ticks." />
                                }
                                mobile_pt="2.4rem"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Touch/No Touch" />}
                                svg={TNT}
                                content={
                                    <Localize translate_text="Predict whether the market will touch or not touch a target at any time during the contract period." />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Asians" />}
                                svg={Asians}
                                content={
                                    <Localize translate_text="Predict whether the exit spot (last tick) will be higher or lower than the average of the ticks at the end of the contract period." />
                                }
                                mobile_pt="2.4rem"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Only Ups/Only Downs" />}
                                svg={OuOd}
                                content={
                                    <Localize translate_text="Predict whether consecutive ticks will rise or fall successively after the entry spot." />
                                }
                            />
                        </Col>
                    </Row>
                    <Row wrap="wrap">
                        <Col>
                            <AvailableOptions
                                title={<Localize translate_text="Lookbacks" />}
                                svg={HighClose}
                                content={
                                    <Localize
                                        translate_text="<0>High-Close:</0> When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                svg={HighLow}
                                content={
                                    <Localize
                                        translate_text="<0>High-Low:</0> When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                remove_title
                                svg={CloseLow}
                                content={
                                    <Localize
                                        translate_text="<0>Close-Low:</0> When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract."
                                        components={[<strong key={0} />]}
                                    />
                                }
                                mobile_pt="2.4rem"
                            />
                        </Col>
                    </Row>
                </Options>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for options trading')}
                </Text>
                <MarketsWrapper>
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold" align="center" p="0 0.4rem">
                                        {localize('Continuous indices')}
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <ContinuousIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={ContinuousIndicesDetails}
                    />
                    <MarketsAccordion
                        renderTitle={() => (
                            <Row jc="flex-start" ai="center">
                                <Col>
                                    <Title weight="bold" align="center">
                                        {localize('Daily reset indices')}
                                    </Title>
                                </Col>
                                <MarketsList>
                                    <DailyResetIndices />
                                </MarketsList>
                            </Row>
                        )}
                        renderDetails={DailyResetIndicesDetails}
                    />
                </MarketsWrapper>
            </Flex>
        </SectionContainer>
    )
}

export default DigitalOptions
