import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { SmallContainer } from '../components/_style'
import SideTab from '../components/_tabs'
import CommonHeaderSection from 'components/elements/common-header-section'
import { SectionContainer, Container } from 'components/containers'
import { Header } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { useBrowserResize } from 'components/hooks/use-browser-resize'

const StyledContainer = styled(Container)`
    width: 100% !important;
    display: flex;
    align-items: start;
    justify-content: start;
`

const HowAccumulatorsWork = () => {
    const [is_mobile] = useBrowserResize()

    return (
        <SectionContainer>
            <SmallContainer direction="column" ai="flex-start">
                <CommonHeaderSection
                    title="_t_How accumulators contracts work_t_"
                    title_font_size={is_mobile ? '28px' : '48px'}
                    margin_title="0 0 3.2rem 0"
                    font_weight_title="700"
                    line_height={is_mobile ? '34px' : '60px'}
                />
                <StyledContainer direction="column">
                    <CommonHeaderSection
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        line_height={is_mobile ? '20px' : '24px'}
                        font_weight_subtitle="350"
                        subtitle="_t_When you open a position, barriers are created around the asset’s price. The upper and lower barriers are automatically calculated for every tick based on your chosen asset and accumulator value. If you close your position before either of the barriers is reached, you will make a profit._t_"
                    />
                    <CommonHeaderSection
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        line_height={is_mobile ? '20px' : '24px'}
                        margin_subtitle="2rem 0 4rem 0"
                        font_weight_subtitle="350"
                        subtitle="_t_With each tick, your payout will increase based on the accumulator value you select, as long as the price change is within the barrier._t_"
                    />
                    <CommonHeaderSection
                        title="_t_Take profit_t_"
                        title_font_size={is_mobile ? '18px' : '24px'}
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        line_height={is_mobile ? '20px' : '24px'}
                        margin_subtitle="2rem 0 0 0"
                        font_weight_subtitle="350"
                        subtitle="_t_You can set a take profit or payout level. Your position will automatically close when your profit exceeds or reaches this amount._t_"
                    />
                    <CommonHeaderSection
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        margin_subtitle="2rem 0 4rem 0"
                        line_height={is_mobile ? '20px' : '24px'}
                        font_weight_subtitle="350"
                        subtitle="_t_ Based on the number of ticks and the accumulator value, your potential profit may exceed your set amount multiple times._t_"
                    />
                    <CommonHeaderSection
                        title="_t_Maximum payout_t_"
                        title_font_size={is_mobile ? '18px' : '24px'}
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        margin_subtitle="2rem 0 4rem 0"
                        font_weight_subtitle="350"
                        line_height={is_mobile ? '20px' : '24px'}
                        subtitle="_t_The maximum payout for every contract is limited and differs per asset. When the maximum payout is reached, the contract will be automatically closed._t_"
                    />
                    <CommonHeaderSection
                        title="_t_Maximum duration_t_"
                        title_font_size={is_mobile ? '18px' : '24px'}
                        subtitle_font_size={is_mobile ? '14px' : '16px'}
                        margin_subtitle="2rem 0 4rem 0"
                        line_height={is_mobile ? '20px' : '24px'}
                        font_weight_subtitle="350"
                        subtitle="_t_The maximum duration for every contract is limited and differs according to the chosen accumulator value. When the maximum duration is reached, the contract will be automatically closed._t_"
                    />
                </StyledContainer>
                <CommonHeaderSection
                    title="_t_How to buy your first accumulators contract on Deriv Trader_t_"
                    title_font_size={is_mobile ? '24px' : '32px'}
                    margin_title="40px 0 0 0"
                    line_height={is_mobile ? '30px' : '40px'}
                />
                <CommonHeaderSection
                    title="_t_Define your position_t_"
                    title_font_size={is_mobile ? '18px' : '24px'}
                    margin_title="3.2rem 0 2.4rem 0"
                    line_height={is_mobile ? '26px' : '36px'}
                />
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="1. Market" />}
                        description={
                            <Localize translate_text="Choose an asset from the list of markets." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-market.png"
                            alt="accumulators market"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="2. Trade type" />}
                        description={
                            <Localize translate_text="Choose accumulators from the list of trade types" />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-trade-type.png"
                            alt="accumulators trade type"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="3. Growth percentage" />}
                        description={
                            <Localize translate_text="Select the growth rate of your choice. Your potential profit will grow by this percentage at every tick throughout your contract duration." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-duration.png"
                            alt="accumulators duration"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                    <SideTab.Panel
                        label={<Localize translate_text="4. Stake" />}
                        description={
                            <Localize translate_text="Enter the amount you wish to trade with." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-stake.png"
                            alt="accumulators stake"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
                <CommonHeaderSection
                    title_font_size={is_mobile ? '18px' : '24px'}
                    font_weight_title="700"
                    line_height="3.6rem"
                    margin_title="3.2rem 0 2.4rem 0"
                    title="_t_Set optional parameters for your trade_t_"
                />
                <SideTab is_reverse>
                    <SideTab.Panel
                        label={<Localize translate_text="5. Take profit" />}
                        description={
                            <Localize translate_text="This feature allows you to set the level of profit that you are comfortable with when the market moves in your favour. Once the amount is reached, your position will be closed automatically and your earnings will be deposited into your Deriv account." />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-take-profit.png"
                            alt="accumulators take profit"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
                <CommonHeaderSection
                    title_font_size={is_mobile ? '18px' : '24px'}
                    font_weight_title="700"
                    line_height={is_mobile ? '26px' : '36px'}
                    margin_title="3.2rem 0 2.4rem 0"
                    title="_t_Open your trade_t_"
                />
                <SideTab>
                    <SideTab.Panel
                        label={<Localize translate_text="6. Trade" />}
                        description={
                            <Localize translate_text="_t_Click the Buy button to open your trade._t_" />
                        }
                    >
                        <StaticImage
                            src="../../../images/common/trade-types/accumulators-trade.png"
                            alt="accumulators take profit"
                            loading="eager"
                            formats={['avif', 'webp', 'auto']}
                            quality={30}
                            objectFit="contain"
                            placeholder="none"
                        />
                    </SideTab.Panel>
                </SideTab>
            </SmallContainer>
        </SectionContainer>
    )
}

export default HowAccumulatorsWork
