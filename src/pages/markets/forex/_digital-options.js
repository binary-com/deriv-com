import React from 'react'
import { MajorPairs, MinorPairs, SmartFX } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
import AvailablePlatforms from '../_available-platforms.js'
import {
    Col,
    ContentWrapper,
    Descriptions,
    MarketsList,
    Row,
    Options,
    StyledText,
    Title,
} from '../_markets-style'
import { Text } from 'components/elements'
import { SectionContainer, Show } from 'components/containers'
import { localize, Localize } from 'components/localization'
//SVG
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'

const DigitalOptions = () => {
    const markets_list = {
        col: 4,
        tablet_col: 3,
        mobile_col: 2,
    }
    return (
        <SectionContainer padding="4rem 0 8rem">
            <ContentWrapper>
                <Descriptions>
                    <StyledText align="center">
                        {localize(
                            'Options trading allows for payouts from predicting market movements, without needing to buy an underlying asset. Trade digital options on forex.',
                        )}
                    </StyledText>
                    <AvailablePlatforms dtrader smarttrader dbot tablet_direction="column" />
                </Descriptions>
                <StyledText weight="bold" mt="2.4rem">
                    {localize('Option trades available on forex')}
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
                                svg={EbEo}
                                title={<Localize translate_text="In/Out" />}
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
                <Row mt="1.6rem">
                    <Col>
                        <Title>{localize('Major pairs')}</Title>
                    </Col>
                    <MarketsList {...markets_list}>
                        <MajorPairs />
                    </MarketsList>
                </Row>
                <Row>
                    <Col>
                        <Title>{localize('Minor pairs')}</Title>
                    </Col>
                    <MarketsList {...markets_list}>
                        <MinorPairs />
                    </MarketsList>
                </Row>
                <Row>
                    <Col>
                        <Show.Desktop>
                            <Title>{localize('SmartFX')}</Title>
                        </Show.Desktop>
                        <Show.Mobile>
                            <Title>{localize('Smart FX')}</Title>
                        </Show.Mobile>
                    </Col>
                    <MarketsList {...markets_list}>
                        <SmartFX />
                    </MarketsList>
                </Row>
            </ContentWrapper>
        </SectionContainer>
    )
}

export default DigitalOptions
