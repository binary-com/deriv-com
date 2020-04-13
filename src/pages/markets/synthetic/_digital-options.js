import React from 'react'
import styled from 'styled-components'
import { ContinuousIndices, DailyResetIndices } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid } from 'components/containers'
import { localize, Localize } from 'components/localization'
//SVG
import Dtrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import SmartTrader from 'images/svg/smarttrader.svg'
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
import CallSpread from 'images/svg/options/call-spread.svg'
import PutSpread from 'images/svg/options/put-spread.svg'

const Descriptions = styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid var(--color-grey-21);
`
const Col = styled(Flex)`
    ${(props) => props.border_left && 'border-left: 1px solid #e3e4e5;'}
`
const Row = styled(Flex)`
    border: ${(props) => (props.remove_border ? '' : '1px solid #e3e4e5')};
    ${(props) => props.romve_border_top && 'border-top: unset;'}
`
const Options = styled(Descriptions)`
    margin-top: 1.6rem;

    ${Row} {
        margin-top: 4rem;
        border: unset;
        justify-content: space-between;

        ${Col} {
            max-width: 38.4rem;
        }
    }
    div:first-child {
        margin-top: 0;
    }
`

const DigitalOptions = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
                <Descriptions>
                    <Text>
                        {localize(
                            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options, lookbacks, and call/put spreads on Synthetic Indices.',
                        )}
                    </Text>
                    <Flex jc="flex-end" ai="center" mt="2rem">
                        <Text mr="0.8rem">{localize('Available on')}</Text>
                        <Dtrader style={{ marginRight: '0.8rem' }} />
                        <DBot style={{ marginRight: '0.8rem' }} />
                        <SmartTrader width="32px" height="32px" />
                    </Flex>
                </Descriptions>
                <Text weight="bold" mt="2.4rem">
                    {localize('Option trades available on Synthetic Indices')}
                </Text>
                <Options>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('Up/Down')}
                                svg={RiseFall}
                                content={
                                    <Localize
                                        translate_text="<0>Rise/Fall:</0> Predict whether the exit spot will be strictly higher or lower than the entry spot."
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
                                        translate_text="<0>Higher/Lower:</0> Predict whether the market price will finish higher or lower than a price target (the barrier)."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('In/Out')}
                                svg={EbEo}
                                content={
                                    <Localize
                                        translate_text="<0>Ends Between/Ends Outside:</0> Predict whether the market will stop inside or outside two price targets at the end of the period."
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
                                title={localize('Digits')}
                                svg={MatchesDiffers}
                                content={
                                    <Localize
                                        translate_text="<0>Matches/Differs:</0> Predict whether the last digit of the last tick will match your prediction."
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
                                        translate_text="<0>Over/Under:</0> Select whether the last digit of the last tick will be higher or lower than your prediction."
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
                                        translate_text="<0>Even/Odd:</0> Predict whether the last digit of the last tick will be an even number or odd number."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('Reset Call/Reset Put')}
                                svg={RcRp}
                                content={localize(
                                    'Predict whether the market will end up higher or lower than either the current level or the level at a predetermined time (reset time).',
                                )}
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                title={localize('High/Low Ticks')}
                                svg={HighLowTicks}
                                content={localize(
                                    'Predict the highest or lowest tick among the next five ticks.',
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('Touch/No Touch:')}
                                svg={TNT}
                                content={localize(
                                    'Predict whether the market will touch or not touch a target at any time during the contract period.',
                                )}
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                title={localize('Asians')}
                                svg={Asians}
                                content={localize(
                                    'Predict whether the market will end higher or lower than the average price.',
                                )}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('Only Ups/Only Downs')}
                                svg={OuOd}
                                content={localize(
                                    'Predict whether consecutive ticks will rise or fall successively.',
                                )}
                            />
                        </Col>
                    </Row>
                    <Row wrap="wrap">
                        <Col>
                            <AvailableOptions
                                title={localize('Lookbacks')}
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
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <AvailableOptions
                                title={localize('Call Spread/Put Spread')}
                                svg={CallSpread}
                                content={
                                    <Localize
                                        translate_text="<0>Call Spread:</0> Predict whether the exit spot will be higher or equal to the upper barrier."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                        <Col>
                            <AvailableOptions
                                svg={PutSpread}
                                content={
                                    <Localize
                                        translate_text="<0>Put Spread:</0> Predict whether the exit spot will be lower or equal to the upper barrier."
                                        components={[<strong key={0} />]}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                </Options>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for options trading')}
                </Text>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold" align="center">
                            {localize('Continuous indices')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2rem 0 2.4rem 1.6rem" border_left>
                        <CssGrid columns="1fr 1fr 1fr" row_gap="1.6rem">
                            <ContinuousIndices />
                        </CssGrid>
                    </Col>
                </Row>
                <Row jc="flex-start" ai="center" romve_border_top>
                    <Col max_width="13.2rem">
                        <Text weight="bold" align="center">
                            {localize('Daily reset indices')}
                        </Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="3.2rem 0 3.2rem 1.6rem" border_left>
                        <DailyResetIndices />
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default DigitalOptions
