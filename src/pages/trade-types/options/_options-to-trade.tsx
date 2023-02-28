import React from 'react'
import styled from 'styled-components'
import { SmallContainer, OptionGrid, OptionGridSecondary } from '../components/_style'
import Notes from '../components/_notes'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { Localize } from 'components/localization'
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
import useRegion from 'components/hooks/use-region'

const MiddleText = styled(Text)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        margin-bottom: 1.6rem;
    }
`

const OptionsToTrade = () => {
    const { is_eu } = useRegion()
    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="4rem">
                    <Localize translate_text="_t_Options to trade on Deriv_t_" />
                </Header>
                <Header as="h3" type="section-title" mb="2.4rem">
                    <Localize translate_text="_t_Digital options_t_" />
                </Header>
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_Up/Down_t_" />
                </Header>
                <UpDownGrid />
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_In/Out_t_" />
                </Header>
                <InOutGrid />
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_Digits_t_" />
                </Header>
                <DigitsGrid />
                <SingleOptionsGrid />
                <Notes text="_t_High Ticks/Low Ticks, Asians, Reset Call/Reset Put, Digits, and Only Ups/Only Downs are available exclusively on synthetic indices._t_" />
                <Header as="h4" type="sub-section-title" mt="4rem" mb="1.6rem">
                    <Localize translate_text="_t_Lookbacks_t_" />
                </Header>
                <LookbacksGrid />
                <Notes text="_t_Lookback options are available only on synthetic indices._t_" />
                {is_eu && (
                    <Text mt="0.8rem" color="grey-5" size="var(--text-size-xs)">
                        <Localize translate_text="_t_Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average._t_" />
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
                    <Localize translate_text="_t_Rise/Fall_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict whether the exit spot will be strictly higher or lower than the entry spot at the end of the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Rise’, you win the payout if the exit spot is strictly higher than the entry spot.If you select ‘Rise’, you win the payout if the exit spot is strictly higher than the entry spot._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Fall’, you win the payout if the exit spot is strictly lower than the entry spot._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Allow equals’, you win the payout if the exit spot is higher than or equal to the entry spot for ‘Rise’. Similarly, you win the payout if the exit spot is lower than or equal to the entry spot for ‘Fall’._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={HigherLower} alt="higher lower" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Higher/Lower_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict whether the exit spot will be higher or lower than a price target (the barrier) at the end of the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Higher’, you win the payout if the exit spot is strictly higher than the barrier._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Lower’, you win the payout if the exit spot is strictly lower than the barrier._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If the exit spot is equal to the barrier, you don't win the payout._t_" />
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
                    <Localize translate_text="_t_Ends Between/Ends Outside_t_" />
                </Text>

                <MiddleText>
                    <Localize translate_text="_t_Predict whether the exit spot will be inside or outside two price targets at the end of the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Ends Between’, you win the payout if the exit spot is strictly higher than the low barrier and lower than the high barrier._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Ends Outside’, you win the payout if the exit spot is either strictly higher than the high barrier, or strictly lower than the low barrier._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If the exit spot is equal to either the low barrier or the high barrier, you don't win the payout._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={SbGo} alt="sb go" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Stays Between/Goes Outside_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict whether the market will stay inside or go outside two price targets at any time during the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Stays Between’, you win the payout if the market stays between (does not touch). either the high barrier or the low barrier at any time during the contract period._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Goes Outside’, you win the payout if the market touches either the high barrier or the low barrier at any time during the contract period._t_" />
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
                    <Localize translate_text="_t_Matches/Differs_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict what number will be the last digit of the last tick of a contract._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Matches’, you will win the payout if the last digit of the last tick is the same as your prediction._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Differs’, you will win the payout if the last digit of the last tick is not the same as your prediction._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={EvenOdd} alt="even odd" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Even/Odd_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict whether the last digit of the last tick of a contract will be an even number or an odd number._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Even’, you will win the payout if the last digit of the last tick is an even number (i.e. 2, 4, 6, 8, or 0)._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Odd’, you will win the payout if the last digit of the last tick is an odd number (i.e. 1, 3, 5, 7, or 9)._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={OverUnder} alt="over under" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Over/Under_t_" />
                </Text>
                <MiddleText>
                    <Localize translate_text="_t_Predict whether the last digit of the last tick of a contract will be higher or lower than a specific number._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Over’, you will win the payout if the last digit of the last tick is greater than your prediction._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Under’, you will win the payout if the last digit of the last tick is less than your prediction._t_" />
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
                    <Localize translate_text="_t_Reset Call/Reset Put_t_" />
                </Header>
                <div>
                    <img src={RcRp} alt="rc rp" />
                </div>
                <MiddleText mt="1.6rem">
                    <Localize translate_text="_t_Predict whether the exit spot will be higher or lower than either the entry spot or the spot at reset time._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Reset-Call’, you win the payout if the exit spot is strictly higher than either the entry spot or the spot at reset time._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Reset-Put’, you win the payout if the exit spot is strictly lower than either the entry spot or the spot at reset time._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If the exit spot is equal to the barrier or the new barrier (if a reset occurs), you don't win the payout._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_High/Low Ticks_t_" />
                </Header>
                <div>
                    <img src={HighLowTicks} alt="hl ticks" />
                </div>
                <MiddleText mt="1.6rem">
                    <Localize translate_text="_t_Predict which will be the highest or the lowest tick in a series of five ticks._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘High Tick’, you win the payout if the selected tick is the highest among the next five ticks._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Low Tick’, you win the payout if the selected tick is the lowest among the next five ticks._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_Touch/No Touch_t_" />
                </Header>
                <div>
                    <img src={TnT} alt="tnt" />
                </div>
                <MiddleText mt="1.6rem">
                    <Localize translate_text="_t_Predict whether the market will touch or not touch a target at any time during the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Touches’, you win the payout if the market touches the barrier at any time during the contract period._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Does Not Touch’, you win the payout if the market never touches the barrier at any time during the contract period._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_Asians_t_" />
                </Header>
                <div>
                    <img src={Asians} alt="asians" />
                </div>
                <MiddleText mt="1.6rem">
                    <Localize translate_text="_t_Predict whether the exit spot (last tick) will be higher or lower than than the average of the ticks at the end of the contract period._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Asian Rise’, you will win the payout if the last tick is higher than the average of the ticks._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Asian Fall’, you will win the payout if the last tick is lower than the average of the ticks._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If the last tick is equal to the average of the ticks, you don't win the payout._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <Header as="h4" type="sub-section-title" mb="1.6rem">
                    <Localize translate_text="_t_Only Ups/Only Downs_t_" />
                </Header>
                <div>
                    <img src={OuOd} alt="ou od" />
                </div>
                <MiddleText mt="1.6rem">
                    <Localize translate_text="_t_Predict whether consecutive ticks will rise or fall successively after the entry spot._t_" />
                </MiddleText>
                <MiddleText>
                    <Localize translate_text="_t_If you select ‘Only Ups’, you win the payout if consecutive ticks rise successively after the entry spot. No payout if any tick falls or is equal to any of the previous ticks._t_" />
                </MiddleText>
                <Text>
                    <Localize translate_text="_t_If you select ‘Only Downs’, you win the payout if consecutive ticks fall successively after the entry spot. No payout if any tick rises or is equal to any of the previous ticks._t_" />
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
                    <Localize translate_text="_t_High-Close_t_" />
                </Text>
                <Text>
                    <Localize translate_text="_t_When you purchase a ‘High-Close’ contract, your win or loss will be equal to the multiplier times the difference between the high and the close over the duration of the contract._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={CloseLow} alt="close low" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_Close-Low_t_" />
                </Text>
                <Text>
                    <Localize translate_text="_t_When you purchase a ‘Close-Low’ contract, your win or loss will be equal to the multiplier times the difference between the close and the low over the duration of the contract._t_" />
                </Text>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={HighLow} alt="high low" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="_t_High-Low_t_" />
                </Text>
                <Text>
                    <Localize translate_text="_t_When you purchase a ‘High-Low’ contract, your win or loss will be equal to the multiplier times the difference between the high and the low over the duration of the contract._t_" />
                </Text>
            </Flex>
        </OptionGrid>
    )
}

export default OptionsToTrade
