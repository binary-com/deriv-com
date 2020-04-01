import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-perfect-scrollbar'
import { ContinuousIndices, DailyResetIndices } from '../sub-markets/_submarkets.js'
import { Accordion, AccordionItem, Text } from 'components/elements'
import { SectionContainer, CssGrid, Box } from 'components/containers'
import { localize, Localize } from 'components/localization'
import 'react-perfect-scrollbar/dist/css/styles.css'

const header_style = {
    padding: '2.4rem 10.2rem',
    height: 'auto',
    borderBottom: 'unset',
    borderTop: '1px solid var(--color-grey-2)',
    boxShadow: 'unset',
}
const first_item_style = {
    padding: '2.4rem 10.2rem',
    height: 'auto',
    borderBottom: 'unset',
    borderTop: 'unset',
    boxShadow: 'unset',
}

const ContentWrapper = styled.div`
    padding-top: 2.5rem;
    padding-bottom: 4rem;
    max-width: 99.6rem;
    margin: 0 auto;
`
const Row = styled(Box)`
    border-radius: 4px;
    border: 1px solid var(--color-grey-22);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.04);

    div:last-child {
        border-right: unset;
    }
`
const Col = styled(Box)`
    border-right: 1px solid var(--color-grey-22);
    height: 100%;

    ${Text} {
        text-align: center;
    }
`

const DigitalOptions = () => {
    return (
        <SectionContainer padding="0">
            <Accordion>
                <AccordionItem
                    header={localize('Option trades available on Synthetic Indices')}
                    header_style={first_item_style}
                >
                    <ContentWrapper>
                        <Text weight="bold" align="center">
                            {localize('Up/Down')}
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Rise/Fall</0>: Predict whether the exit spot will be strictly higher or lower than the entry spot. If you select ‘Higher’, you win the payout if the exit spot is strictly higher than the entry spot. If you select ‘Lower’, you win the payout if the exit spot is strictly lower than the entry spot. If you select ‘Allow equals’, you win the payout if the exit spot is higher than or equal to the entry spot for ‘Higher’. Similarly, you win the payout if the exit spot is lower than or equal to the entry spot for ‘Lower’."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Higher/Lower</0>: Predict whether the market price will finish higher or lower than a price target (the barrier). If you select ‘Higher’, you win the payout if the exit spot is strictly higher than the barrier. If you select ‘Lower’, you win the payout if the exit spot is strictly lower than the barrier. If the exit spot is equal to the barrier, you don't win the payout."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text weight="bold" align="center" mt="1.8rem">
                            {localize('In/Out')}
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Ends Between/Ends Outside</0>: Predict whether the market will stop inside or outside two price targets at the end of the period. If you select ‘Ends Between’, you win the payout if the exit spot is strictly higher than the low barrier and lower than the high barrier. If you select ‘Ends Outside’, you win the payout if the exit spot is either strictly higher than the high barrier, or strictly lower than the low barrier. If the exit spot is equal to either the low barrier or the high barrier, you don't win the payout."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Stays Between/Goes Outside</0>: Predict whether the market will stay inside or go outside two price targets at any time during the contract period. If you select ‘Stays Between’, you win the payout if the market stays between (does not touch). either the high barrier or the low barrier at any time during the contract period. If you select ‘Goes Outside’, you win the payout if the market touches either the high barrier or the low barrier at any time during the contract period."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Digits')}
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Matches/Differs</0>: Predict whether the last digit of the last tick will match your prediction. If you select ‘Matches’, you will win the payout if the last digit of the last tick is the same as your prediction. If you select ‘Differs’, you will win the payout if the last digit of the last tick is not the same as your prediction"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Even/Odd</0>: Predict whether the last digit of the last tick will be an even number or odd number. If you select ‘Even’, you will win the payout if the last digit of the last tick is an even number (i.e. 2, 4, 6, 8, or 0). If you select ‘Odd’, you will win the payout if the last digit of the last tick is an odd number (i.e. 1, 3, 5, 7, or 9)"
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Over/Under</0>: Select whether the last digit of the last tick will be higher or lower than your prediction. If you select ‘Over’, you will win the payout if the last digit of the last tick is greater than your prediction. If you select ‘Under’, you will win the payout if the last digit of the last tick is less than your prediction."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Reset Call/Reset Put')}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                "Predict whether the market will end up higher or lower than either the current level or the level at a predetermined time (reset time) If you select ‘Reset-Call’, you win the payout if the exit spot is strictly higher than either the entry spot or the spot at reset time. If you select ‘Reset-Put’, you win the payout if the exit spot is strictly lower than either the entry spot or the spot at reset time. If the exit spot is equal to the barrier or the new barrier (if a reset occurs), you don't win the payout.",
                            )}
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('High/Low Ticks')}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'Predict the highest or lowest tick among the next five ticks. If you select ‘High Tick’, you win the payout if the selected tick is the highest among the next five ticks. If you select ‘Low Tick’, you win the payout if the selected tick is the lowest among the next five ticks.',
                            )}
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Touch/No Touch')}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'Predict whether the market will touch or not touch a target at any time during the contract period. If you select ‘Touches’, you win the payout if the market touches the barrier at any time during the contract period. If you select ‘Does Not Touch’, you win the payout if the market never touches the barrier at any time during the contract period.',
                            )}
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Asians')}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                "Predict whether the market will end higher or lower than the average price. If you select ‘Asian Rise’, you will win the payout if the last tick is higher than the average of the ticks. If you select ‘Asian Fall’, you will win the payout if the last tick is lower than the average of the ticks. If the last tick is equal to the average of the ticks, you don't win the payout.",
                            )}
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Only Ups/Only Downs')}
                        </Text>
                        <Text mt="1.8rem">
                            {localize(
                                'Predict whether consecutive ticks will rise or fall successively. If you select ‘Only Ups’, you win the payout if consecutive ticks rise successively after the entry spot. No payout if any tick falls or is equal to any of the previous ticks. If you select ‘Only Downs’, you win the payout if consecutive ticks fall successively after the entry spot. No payout if any tick rises or is equal to any of the previous ticks.',
                            )}
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Lookbacks')}
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>High-Close</0>: When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Close-Low</0>: When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>High-Low</0>: When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text weight="bold" align="center">
                            {localize('Call Spread/Put Spread')}
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Call Spread</0>: Predict whether the exit spot will be higher or equal to the upper barrier. Win maximum payout if the exit spot is higher than or equal to the upper barrier. Win up to maximum payout if the exit spot is between the lower and the upper barrier, in proportion to the difference between the exit spot and the lower barrier. No payout if the exit spot is below or equal to the lower barrier."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                        <Text mt="1.8rem">
                            <Localize
                                translate_text="<0>Put Spread</0>: Predict whether the exit spot will be lower or equal to the upper barrier. Win maximum payout if the exit spot is lower than or equal to the lower barrier. Win up to maximum payout if the exit spot is between the lower and the upper barrier, in proportion to the difference between the upper barrier and exit spot. No payout if the exit spot is above or equal to the upper barrier."
                                components={[<strong key={0} />]}
                            />
                        </Text>
                    </ContentWrapper>
                </AccordionItem>
                <AccordionItem
                    header_style={header_style}
                    header={localize('View Synthetic Indices available on Deriv')}
                >
                    <ContentWrapper>
                        <Row>
                            <CssGrid columns="repeat(2, 1fr)">
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Continuous indices')}</Text>
                                </Col>
                                <Col p="2.4rem 0">
                                    <Text weight="bold">{localize('Daily reset indices')}</Text>
                                </Col>
                            </CssGrid>
                        </Row>
                        <Row>
                            <Scrollbar style={{ maxHeight: '55.2rem' }}>
                                <CssGrid columns="repeat(2, 1fr)">
                                    <Col>
                                        <ContinuousIndices />
                                    </Col>
                                    <Col>
                                        <DailyResetIndices />
                                    </Col>
                                </CssGrid>
                            </Scrollbar>
                        </Row>
                    </ContentWrapper>
                </AccordionItem>
            </Accordion>
        </SectionContainer>
    )
}

export default DigitalOptions
