import React from 'react'
import styled from 'styled-components'
import { MajorPairs, MinorPairs, SmartFX } from '../sub-markets/_submarkets.js'
import AvailableOptions from '../_available-options.js'
import AvailablePlatforms from '../_available-platforms.js'
import { Text } from 'components/elements'
import { SectionContainer, Flex, CssGrid, Show } from 'components/containers'
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
        max-width: 7rem;
    }
`
const Row = styled(Flex)`
    border: 1px solid var(--color-grey-22);
    margin-top: 2.4rem;
    border-radius: 8px;
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
const MarketsList = styled(CssGrid)`
    border-left: 1px solid var(--color-grey-22);
    grid-template-columns: repeat(5, 1fr);
    width: 100%;
    padding: 2.4rem;
    grid-row-gap: 1.6rem;

    @media ${device.tabletL} {
        grid-template-columns: ${(props) =>
            props.mobile_col_template ? props.mobile_col_template : 'repeat(3, 1fr)'};

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
        max-width: 4rem;
        font-weight: 600;
    }
`
const DigitalOptions = () => {
    return (
        <SectionContainer padding="4rem 0 8rem 0">
            <Flex max_width="79.2rem" m="0 auto" direction="column">
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
                <Row jc="flex-start" ai="center" mt="1.6rem">
                    <Col>
                        <Title weight="bold">{localize('Major pairs')}</Title>
                    </Col>
                    <MarketsList>
                        <MajorPairs />
                    </MarketsList>
                </Row>
                <Row jc="flex-start" ai="center">
                    <Col>
                        <Title weight="bold">{localize('Minor pairs')}</Title>
                    </Col>
                    <MarketsList>
                        <MinorPairs />
                    </MarketsList>
                </Row>
                <Row jc="flex-start" ai="center">
                    <Col>
                        <Show.Desktop>
                            <Title weight="bold">{localize('SmartFX')}</Title>
                        </Show.Desktop>
                        <Show.Mobile>
                            <Title weight="bold">{localize('Smart FX')}</Title>
                        </Show.Mobile>
                    </Col>
                    <MarketsList mobile_col_template="repeat(2, 1fr)">
                        <SmartFX />
                    </MarketsList>
                </Row>
            </Flex>
        </SectionContainer>
    )
}

export default DigitalOptions
