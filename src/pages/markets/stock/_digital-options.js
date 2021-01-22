import React from 'react'
import { Americas, AsiaOceania, Europe } from '../sub-markets/_submarkets'
import AvailableOptions from '../_available-options'
import AvailablePlatforms from '../_available-platforms'
import MarketsAccordion from '../_markets_accordion'
import {
    Col,
    ContentWrapper,
    Descriptions,
    MarketsList,
    MarketsWrapper,
    Row,
    Options,
    StyledText,
    Title,
} from '../_markets-style'
import { AmericasDetails, AsiaOceaniaDetails, EuropeDetails } from './_details'
import { Text } from 'components/elements'
import { SectionContainer } from 'components/containers'
import { localize, Localize } from 'components/localization'
//SVG
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import TNT from 'images/svg/options/tnt.svg'

const DigitalOptions = () => (
    <SectionContainer padding="4rem 0 8rem">
        <ContentWrapper>
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
            <MarketsWrapper>
                <MarketsAccordion
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            <Col>
                                <Title>{localize('Americas')}</Title>
                            </Col>
                            <MarketsList has_right_border={true}>
                                <Americas />
                            </MarketsList>
                        </Row>
                    )}
                    renderDetails={AmericasDetails}
                />
                <MarketsAccordion
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            <Col>
                                <Title>{localize('Asia/ Oceania')}</Title>
                            </Col>
                            <MarketsList has_right_border={true}>
                                <AsiaOceania />
                            </MarketsList>
                        </Row>
                    )}
                    renderDetails={AsiaOceaniaDetails}
                />
                <MarketsAccordion
                    renderTitle={() => (
                        <Row is_accordion_row={true}>
                            <Col>
                                <Title>{localize('Europe')}</Title>
                            </Col>
                            <MarketsList col={4} has_right_border={true}>
                                <Europe />
                            </MarketsList>
                        </Row>
                    )}
                    renderDetails={EuropeDetails}
                    custom_index={-1}
                />
            </MarketsWrapper>
        </ContentWrapper>
    </SectionContainer>
)

export default DigitalOptions
