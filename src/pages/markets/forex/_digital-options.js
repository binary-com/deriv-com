import React from 'react'
import styled from 'styled-components'
import { MajorPairs, MinorPairs, SmartFX } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
//SVG
import Dtrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import SmartTrader from 'images/svg/smarttrader.svg'
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'
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
    margin-top: 2.4rem;

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
                    <Text align="center">
                        {localize(
                            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options and call/put spreads on forex.',
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
                    {localize('Option trades available on forex')}
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
                                svg={EbEo}
                                title={localize('In/Out')}
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
                    <Row>
                        <Col>
                            <AvailableOptions
                                svg={CallSpread}
                                title={localize('Call Spread/Put Spread')}
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
                    <Row>
                        <Col>
                            <AvailableOptions
                                svg={TNT}
                                title={localize('Touch/No Touch:')}
                                content={localize(
                                    'Predict whether the market will touch or not touch a target at any time during the contract period.',
                                )}
                            />
                        </Col>
                    </Row>
                </Options>
                <Text weight="bold" mt="2.4rem">
                    {localize('Instruments available for options trading')}
                </Text>
                <Row jc="flex-start" ai="center" mt="1.6rem" background="rgba(242, 243, 244, 0.3)">
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('Major pairs')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <MajorPairs />
                    </Col>
                </Row>
                <Row jc="flex-start" ai="center" romve_border_top>
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('Minor pairs')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <MinorPairs />
                    </Col>
                </Row>
                <Row
                    jc="flex-start"
                    ai="center"
                    romve_border_top
                    background="rgba(242, 243, 244, 0.3)"
                >
                    <Col max_width="13.2rem">
                        <Text weight="bold">{localize('SmartFX')}</Text>
                    </Col>
                    <Col wrap="wrap" jc="flex-start" p="2.4rem 0 0.8rem 1.6rem" border_left>
                        <SmartFX />
                    </Col>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default DigitalOptions
