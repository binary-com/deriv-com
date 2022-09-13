import React from 'react'
import styled from 'styled-components'
import { SmallContainer, OptionGrid, OptionGridSecondary } from '../components/_style'
import Notes from '../components/_notes'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import RiseFall from 'images/svg/options/rise-fall.svg'
import HigherLower from 'images/svg/options/higher-lower.svg'
import EbEo from 'images/svg/options/eb-eo.svg'
import SbGo from 'images/svg/options/sb-go.svg'
import MatchDiffers from 'images/svg/options/matches-differs.svg'
import EvenOdd from 'images/svg/options/even-odd.svg'
import OverUnder from 'images/svg/options/over-under.svg'
import RcRp from 'images/svg/options/rc-rp.svg'
import HighLowTicks from 'images/svg/options/hl-ticks.svg'
import TnT from 'images/svg/options/tnt.svg'
import Asians from 'images/svg/options/asians.svg'
import OuOd from 'images/svg/options/ou-od.svg'
import HighClose from 'images/svg/options/high-close.svg'
import CloseLow from 'images/svg/options/close-low.svg'
import HighLow from 'images/svg/options/high-low.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'

const MiddleText = styled(Text)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        margin-bottom: 1.6rem;
    }
`

const OptionsToTrade = () => {
    const { is_eu } = useCountryRule()
    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="4rem">
                    <Localize translate_text="Options to trade on Deriv" />
                </Header>
                <Header as="h3" type="section-title" mb="2.4rem">
                    <Localize translate_text="Digital options" />
                </Header>
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Up/Down" />
                </Header>
                <UpDownGrid />
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="In/Out" />
                </Header>
                <InOutGrid />
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Digits" />
                </Header>
                <DigitsGrid />
                <SingleOptionsGrid />
                <Notes
                    text={
                        <Localize translate_text="High Ticks/Low Ticks, Asians, Reset Call/Reset Put, Digits, and Only Ups/Only Downs are available exclusively on synthetic indices." />
                    }
                />
                <Header as="h4" type="sub-section-title" mt="4rem" mb="1.6rem">
                    <Localize translate_text="Lookbacks" />
                </Header>
                <LookbacksGrid />
                <Notes
                    text={
                        <Localize translate_text="Lookback options are available only on synthetic indices." />
                    }
                />
                {is_eu && (
                    <Text mt="0.8rem" color="grey-5" size="var(--text-size-xs)">
                        {localize(
                            'Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average.',
                        )}
                    </Text>
                )}
            </SmallContainer>
        </SectionContainer>
    )
}

const UpDownGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={RiseFall} alt="rise fall" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Rise/Fall" />
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
                    <img src={HigherLower} alt="higher lower" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Higher/Lower" />
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
                    <img src={EbEo} alt="eb eo" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Ends Between/Ends Outside" />
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
                    <img src={SbGo} alt="sb go" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Stays Between/Goes Outside" />
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
                    <img src={MatchDiffers} alt="matches differs" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Matches/Differs" />
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
                    <img src={EvenOdd} alt="even odd" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Even/Odd" />
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
                    <img src={OverUnder} alt="over under" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Over/Under" />
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
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Reset Call/Reset Put" />
                </Header>
                <div>
                    <img src={RcRp} alt="rc rp" />
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
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="High/Low Ticks" />
                </Header>
                <div>
                    <img src={HighLowTicks} alt="hl ticks" />
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
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Touch/No Touch" />
                </Header>
                <div>
                    <img src={TnT} alt="tnt" />
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
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Asians" />
                </Header>
                <div>
                    <img src={Asians} alt="asians" />
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
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="Only Ups/Only Downs" />
                </Header>
                <div>
                    <img src={OuOd} alt="ou od" />
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
                    <img src={HighClose} alt="high close" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="High-Close" />
                </Text>
                <Text>
                    {localize(
                        'When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={CloseLow} alt="close low" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Close-Low" />
                </Text>
                <Text>
                    {localize(
                        'When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract.',
                    )}
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={HighLow} alt="high low" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="High-Low" />
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

export default OptionsToTrade
