import React from 'react'
import { SmallContainer, OptionGrid } from '../components/_style'
import { Flex, SectionContainer } from 'components/containers'
import { Text } from 'components/elements'
import CommonHeaderSection from 'components/elements/common-header-section'
import { Localize, localize } from 'components/localization'
// SVG
import CrashBoom from 'images/svg/options/option_crash_boom.svg'
import JumpIndices from 'images/svg/options/option_jump_indices.svg'
import VolatilityIndices from 'images/svg/options/option_volatility_indices.svg'
import useRegion from 'components/hooks/use-region'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const AccumulatorsToTrade = () => {
    const { is_eu } = useRegion()
    const [is_mobile] = useBrowserResize()

    return (
        <SectionContainer background="white" padding="0 0 4rem">
            <SmallContainer direction="column" ai="flex-start">
                <CommonHeaderSection
                    title_font_size={is_mobile ? '28px' : '48px'}
                    font_weight_title="700"
                    line_height={is_mobile ? '34px' : '60px'}
                    margin_title="0 0 4rem 0"
                    title="_t_Instruments available for accumulators trading_t_"
                />
                <IndicesGrid />

                {is_eu && (
                    <Text mt="0.8rem" color="grey-5" size="var(--text-size-xs)">
                        <Localize translate_text="_t_Return to player (RTP) % for lookbacks for a multiplier of 1 and 1m duration is around 87% on average._t_" />
                    </Text>
                )}
            </SmallContainer>
        </SectionContainer>
    )
}

const IndicesGrid = () => {
    const [is_mobile] = useBrowserResize()

    return (
        <OptionGrid>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={CrashBoom} alt={localize('_t_rise fall_t_')} />
                </div>
                <CommonHeaderSection
                    title="_t_Crash/Boom indices_t_"
                    title_font_size={is_mobile ? '14px' : '16px'}
                    margin_title="1.6rem 0 0.8rem 0"
                    font_weight_title="700"
                    line_height={is_mobile ? '20px' : '24px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    subtitle="_t_Crash/Boom indices mimic markets with sudden price movements, either a sharp drop (crash) or a spike (boom) in prices._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                />
                <CommonHeaderSection
                    subtitle="_t_These indices are characterised by an average of one crash or boom in a series of 1000, 500, or 300 ticks._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    line_height={is_mobile ? '20px' : '24px'}
                />
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={JumpIndices} alt={localize('_t_higher lower_t_')} />
                </div>
                <CommonHeaderSection
                    title="_t_Jump indices_t_"
                    title_font_size={is_mobile ? '14px' : '16px'}
                    margin_title="1.6rem 0 0.8rem 0"
                    font_weight_title="700"
                    line_height={is_mobile ? '20px' : '24px'}
                />
                <CommonHeaderSection
                    subtitle="_t_Jump indices correspond to simulated markets with large, sudden price changes. They have constant volatilities ranging from 10% to 100%._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    line_height={is_mobile ? '20px' : '24px'}
                />
                <CommonHeaderSection
                    subtitle="_t_On average, there is an equal probability of an up or down jump every 20 minutes, and the jump size is around 30 times the normal price movement._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    line_height={is_mobile ? '20px' : '24px'}
                />
            </Flex>
            <Flex fd="column" jc="flex-start" height="auto">
                <div>
                    <img src={VolatilityIndices} alt={localize('_t_higher lower_t_')} />
                </div>
                <CommonHeaderSection
                    title="_t_Volatility indices_t_"
                    title_font_size={is_mobile ? '14px' : '16px'}
                    margin_title="1.6rem 0 0.8rem 0"
                    font_weight_title="700"
                    line_height={is_mobile ? '20px' : '24px'}
                />
                <CommonHeaderSection
                    subtitle="_t_Volatility indices correspond to markets with constant volatilities of 10%, 25%, 50%, 75%, and 100%._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    line_height={is_mobile ? '20px' : '24px'}
                />
                <CommonHeaderSection
                    subtitle="_t_The frequency of tick generation differs between indices, with some generating ticks every second and others generating them every two seconds._t_"
                    subtitle_font_size={is_mobile ? '14px' : '16px'}
                    margin_subtitle={is_mobile ? '0 0 1.6rem 0' : '0 2rem 0.8rem 0'}
                    line_height={is_mobile ? '20px' : '24px'}
                />
            </Flex>
        </OptionGrid>
    )
}

export default AccumulatorsToTrade
