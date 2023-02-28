import React from 'react'
import styled from 'styled-components'
import { SmallContainer, OptionGrid } from '../components/_style'
import Notes from '../components/_notes'
import { Flex, SectionContainer } from 'components/containers'
import { Header, Text } from 'components/elements'
import { localize, Localize } from 'components/localization'
import device from 'themes/device'
// SVG
import CrashBoom from 'images/svg/options/crash-boom.svg'
import JumpIndices from 'images/svg/options/jump-indices.svg'
import VolatilityIndices from 'images/svg/options/volatility-indices.svg'
import useRegion from 'components/hooks/use-region'

const MiddleText = styled(Text)`
    margin-bottom: 0.8rem;

    @media ${device.tabletL} {
        margin-bottom: 1.6rem;
    }
`

const AccumulatorsToTrade = () => {
    const { is_eu } = useRegion()
    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h2" type="page-title" mb="4rem">
                    <Localize translate_text="Instruments available for accumulators trading" />
                </Header>
                <IndicesGrid />

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

const IndicesGrid = () => {
    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={CrashBoom} alt="rise fall" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Crash/Boom indices" />
                </Text>
                <MiddleText>
                    {localize(
                        'Crash/Boom indices mimic markets with sudden price movements, either a sharp drop (crash) or a spike (boom) in prices.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        ' These indices are characterised by an average of one crash or boom in a series of 1000, 500, or 300 ticks.',
                    )}
                </MiddleText>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={JumpIndices} alt="higher lower" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Jump indices" />
                </Text>
                <MiddleText>
                    {localize(
                        'Jump indices correspond to simulated markets with large, sudden price changes. They have constant volatilities ranging from 10% to 100%.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        'On average, there is an equal probability of an up or down jump every 20 minutes, and the jump size is around 30 times the normal price movement.',
                    )}
                </MiddleText>
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={VolatilityIndices} alt="higher lower" />
                </div>
                <Text weight="bold" mt="1.6rem" mb="0.8rem">
                    <Localize translate_text="Volatility indices" />
                </Text>
                <MiddleText>
                    {localize(
                        'Volatility indices correspond to markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%.',
                    )}
                </MiddleText>
                <MiddleText>
                    {localize(
                        ' The frequency of tick generation differs between indices, with some generating ticks every second and others generating them every two seconds.',
                    )}
                </MiddleText>
            </Flex>
        </OptionGrid>
    )
}

export default AccumulatorsToTrade
