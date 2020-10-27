import React from 'react'
import styled from 'styled-components'
import { SmallContainer, OptionGrid, OptionGridSecondary } from '../components/_style'
import Notes from '../components/_notes'
import { Flex, SectionContainer, Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import { ReactComponent as RiseFall } from 'images/svg/options/rise-fall.svg'
import { ReactComponent as HigherLower } from 'images/svg/options/higher-lower.svg'
import { ReactComponent as EbEo } from 'images/svg/options/eb-eo.svg'
import { ReactComponent as SbGo } from 'images/svg/options/sb-go.svg'
import { ReactComponent as MatchDiffers } from 'images/svg/options/matches-differs.svg'
import { ReactComponent as EvenOdd } from 'images/svg/options/even-odd.svg'
import { ReactComponent as OverUnder } from 'images/svg/options/over-under.svg'
import { ReactComponent as RcRp } from 'images/svg/options/rc-rp.svg'
import { ReactComponent as HighLowTicks } from 'images/svg/options/hl-ticks.svg'
import { ReactComponent as TnT } from 'images/svg/options/tnt.svg'
import { ReactComponent as Asians } from 'images/svg/options/asians.svg'
import { ReactComponent as OuOd } from 'images/svg/options/ou-od.svg'
import { ReactComponent as HighClose } from 'images/svg/options/high-close.svg'
import { ReactComponent as CloseLow } from 'images/svg/options/close-low.svg'
import { ReactComponent as HighLow } from 'images/svg/options/high-low.svg'
import { ReactComponent as CallSpread } from 'images/svg/options/call-spread.svg'
import { ReactComponent as PutSpread } from 'images/svg/options/put-spread.svg'

const MiddleText = styled(Text)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        margin-bottom: 1.6rem;
    }
`

const WhatAreOptions = () => {
    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" mb="4rem">
                    {localize('Options to trade on Deriv')}
                </Header>
                <Header as="h3" mb="2.4rem">
                    {localize('Digital options')}
                </Header>
                <Header as="h4" mb="1.6rem">
                    {localize('Up/Down')}
                </Header>
                <UpDownGrid />
                <Header as="h4" mb="1.6rem">
                    {localize('In/Out')}
                </Header>
                <InOutGrid />
                <Header as="h4" mb="1.6rem">
                    {localize('Digits')}
                </Header>
                <DigitsGrid />
                <SingleOptionsGrid />
                <Notes
                    text={
                        <Localize translate_text="High Ticks/Low Ticks, Asians, Reset Call/Reset Put, Digits, and Only Ups/Only Downs are available exclusively on synthetic indices." />
                    }
                />
                <Header as="h4" mt="4rem" mb="1.6rem">
                    {localize('Lookbacks')}
                </Header>
                <LookbacksGrid />
                <Notes
                    text={
                        <Localize translate_text="Lookback options are available only on synthetic indices." />
                    }
                />
                <Show.Eu>
                    <Text mt="0.8rem" color="grey-5" size="var(--text-size-xs)">
                        {localize(
                            'Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average.',
                        )}
                    </Text>
                </Show.Eu>
                <Header as="h4" mt="4rem" mb="1.6rem">
                    {localize('Call/Put Spreads')}
                </Header>
                <SpreadGrid />
                <Notes
                    text={
                        <Localize translate_text="Call/Put Spreads are available on forex and synthetic indices." />
                    }
                />
            </SmallContainer>
        </SectionContainer>
    )
}

const UpDownGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <RiseFall />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Rise/Fall')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Higher’, you win the payout if the exit spot is strictly higher than the entry spot.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Lower’, you win the payout if the exit spot is strictly lower than the entry spot.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Allow equals’, you win the payout if the exit spot is higher than or equal to the entry spot for ‘Higher’. Similarly, you win the payout if the exit spot is lower than or equal to the entry spot for ‘Lower’.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <HigherLower />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Higher/Lower')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Higher’, you win the payout if the exit spot is strictly higher than the barrier.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Lower’, you win the payout if the exit spot is strictly lower than the barrier.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        "If the exit spot is equal to the barrier, you don't win the payout.",
                    )}
                </Text>
            </Flex>
        </OptionGrid>
    )
}

const InOutGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <EbEo />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Ends Between/Ends Outside')}
                </Text>

                <MiddleText>
                    {localize(
                        'Predict whether the exit spot will be inside or outside two price targets at the end of the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Ends Between’, you win the payout if the exit spot is strictly higher than the low barrier and lower than the high barrier.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Ends Outside’, you win the payout if the exit spot is either strictly higher than the high barrier, or strictly lower than the low barrier.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        "If the exit spot is equal to either the low barrier or the high barrier, you don't win the payout.",
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <SbGo />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Stays Between/Goes Outside')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict whether the market will stay inside or go outside two price targets at any time during the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Stays Between’, you win the payout if the market stays between (does not touch). either the high barrier or the low barrier at any time during the contract period.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Goes Outside’, you win the payout if the market touches either the high barrier or the low barrier at any time during the contract period.',
                    )}
                </Text>
            </Flex>
        </OptionGrid>
    )
}

const DigitsGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <MatchDiffers />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Matches/Differs')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict what number will be the last digit of the last tick of a contract.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Matches’, you will win the payout if the last digit of the last tick is the same as your prediction.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Differs’, you will win the payout if the last digit of the last tick is not the same as your prediction.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <EvenOdd />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Even/Odd')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict whether the last digit of the last tick of a contract will be an even number or an odd number.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Even’, you will win the payout if the last digit of the last tick is an even number (i.e. 2, 4, 6, 8, or 0).',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Odd’, you will win the payout if the last digit of the last tick is an odd number (i.e. 1, 3, 5, 7, or 9).',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <OverUnder />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Over/Under')}
                </Text>
                <MiddleText>
                    {localize(
                        'Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Over’, you will win the payout if the last digit of the last tick is greater than your prediction.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Under’, you will win the payout if the last digit of the last tick is less than your prediction.',
                    )}
                </Text>
            </Flex>
        </OptionGrid>
    )
}

const SingleOptionsGrid = () => {
    return (
        <OptionGridSecondary>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" mb="1.6rem">
                    {localize('Reset Call/Reset Put')}
                </Header>
                <div>
                    <RcRp />
                </div>
                <MiddleText mt="1.6rem">
                    {localize(
                        'Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Reset-Call’, you win the payout if the exit spot is strictly higher than either the entry spot or the spot at reset time.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Reset-Put’, you win the payout if the exit spot is strictly lower than either the entry spot or the spot at reset time.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        "If the exit spot is equal to the barrier or the new barrier (if a reset occurs), you don't win the payout.",
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" mb="1.6rem">
                    {localize('High/Low Ticks')}
                </Header>
                <div>
                    <HighLowTicks />
                </div>
                <MiddleText mt="1.6rem">
                    {localize(
                        'Predict which will be the highest or the lowest tick in a series of five ticks.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘High Tick’, you win the payout if the selected tick is the highest among the next five ticks.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Low Tick’, you win the payout if the selected tick is the lowest among the next five ticks.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" mb="1.6rem">
                    {localize('Touch/No Touch')}
                </Header>
                <div>
                    <TnT />
                </div>
                <MiddleText mt="1.6rem">
                    {localize(
                        'Predict whether the market will touch or not touch a target at any time during the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Touches’, you win the payout if the market touches the barrier at any time during the contract period.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Does Not Touch’, you win the payout if the market never touches the barrier at any time during the contract period.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" mb="1.6rem">
                    {localize('Asians')}
                </Header>
                <div>
                    <Asians />
                </div>
                <MiddleText mt="1.6rem">
                    {localize(
                        'Predict whether the exit spot (last tick) will be higher or lower than than the average of the ticks at the end of the contract period.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Asian Rise’, you will win the payout if the last tick is higher than the average of the ticks.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Asian Fall’, you will win the payout if the last tick is lower than the average of the ticks.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        "If the last tick is equal to the average of the ticks, you don't win the payout.",
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" mb="1.6rem">
                    {localize('Only Ups/Only Downs')}
                </Header>
                <div>
                    <OuOd />
                </div>
                <MiddleText mt="1.6rem">
                    {localize(
                        'Predict whether consecutive ticks will rise or fall successively after the entry spot.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'If you select ‘Only Ups’, you win the payout if consecutive ticks rise successively after the entry spot. No payout if any tick falls or is equal to any of the previous ticks.',
                    )}
                </MiddleText>
                <Text>
                    {localize(
                        'If you select ‘Only Downs’, you win the payout if consecutive ticks fall successively after the entry spot. No payout if any tick rises or is equal to any of the previous ticks.',
                    )}
                </Text>
            </Flex>
        </OptionGridSecondary>
    )
}

const LookbacksGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <HighClose />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('High-Close')}
                </Text>
                <Text>
                    {localize(
                        'When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <CloseLow />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Close-Low')}
                </Text>
                <Text>
                    {localize(
                        'When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <HighLow />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('High-Low')}
                </Text>
                <Text>
                    {localize(
                        'When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract.',
                    )}
                </Text>
            </Flex>
        </OptionGrid>
    )
}

const SpreadGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <CallSpread />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Call Spread')}
                </Text>
                <MiddleText>
                    {localize(
                        'With Call Spread, you win the maximum payout if your exit spot is equal to or higher than the upper barrier and no payout if your exit spot is below or equal to the lower barrier. If your exit spot is between the upper and lower barriers, your payout changes linearly from zero at the lower barrier to the maximum at the upper barrier.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'The Call Spread trade type on Deriv.com is based on the bull call spread strategy, which involves buying a call option with a lower barrier and selling a call option of the same duration with a higher barrier.',
                    )}
                </MiddleText>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <PutSpread />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    {localize('Put Spread')}
                </Text>
                <MiddleText>
                    {localize(
                        'With Put Spread, you can win up to the maximum payout if your exit spot is lower than or equal to the lower barrier and no payout if your exit spot is above or equal to the upper barrier. If your exit spot is between the upper and lower barriers, your payout changes linearly from zero at the upper barrier to the maximum at the lower barrier.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'The Put Spread trade type on Deriv.com is based on the bear put spread strategy, which involves buying a put option with a higher barrier and selling a put option of the same duration with a lower barrier.',
                    )}
                </MiddleText>
            </Flex>
        </OptionGrid>
    )
}

export default WhatAreOptions
