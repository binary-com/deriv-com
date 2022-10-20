import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { SectionContainer, Show } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        example: file(relativePath: { eq: "trade-types/cfd-example-crash-boom.png" }) {
            ...fadeIn
        }
        example_mobile: file(
            relativePath: { eq: "trade-types/cfd-example-crash-boom-mobile.png" }
        ) {
            ...fadeIn
        }
    }
`
type ExampleImageType = {
    center?: string
}

const ExampleImage = styled(QueryImage)<ExampleImageType>`
    margin: ${(props) => (props.center ? '0 auto' : 'unset')};
    width: 792px;
    height: 453px;

    @media ${device.laptop} {
        width: 630px;
        height: 361px;
    }

    @media ${device.tabletL} {
        width: 328px;
        height: 506px;
    }

    @media ${device.mobileM} {
        width: 289px;
        height: 454px;
    }
`
export const StyledLinkButton = styled(LinkButton)`
    @media ${device.tabletL} {
        margin: 32px auto;
    }
`

const StyledSectionContainer = styled(SectionContainer)`
    @media ${device.tabletL} {
        padding-top: 0;
    }
`

const TradingCFDIncreases = () => {
    const data = useStaticQuery(query)
    return (
        <StyledSectionContainer background="white" padding="4rem 0 0">
            <SmallContainer direction="column" ai="flex-start">
                <Header as="h4" size="var(--text-size-m)" weight="bold" mb="0.8rem">
                    {localize('Trading CFDs increases both potential profit and loss')}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.2rem">
                    {localize(
                        'When you trade CFDs on margin, you increase your market exposure, thus amplifying both your potential profit and potential loss.',
                    )}
                </Header>
                <Header as="h4" size="var(--text-size-m)" weight="bold" mb="0.8rem">
                    {localize('CFD trading features on Deriv')}
                </Header>
                <Header as="h5" type="main-paragraph" weight="bold" mb="0.8rem">
                    {localize('Stop loss')}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'With stop loss, you minimise potential losses by setting the price at which you want the position to close in case the market moves against you. When the current market price surpasses this level, your trade will be closed automatically.',
                    )}
                </Header>
                <Header as="h5" type="main-paragraph" weight="bold" mb="0.8rem">
                    {localize('Stop loss with Crash/Boom/Range break indices')}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'Stop loss works slightly differently in Crash/Boom/Range break indices. This is because sudden fluctuations in market price from one tick to the next can sometimes surpass the stop loss you have set. When the market price exceeds your stop loss amount, your contract will be automatically closed at that point, instead of exactly at the stop loss level.',
                    )}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'For example, you predict that the market will go up, and buy a contract on Crash 500 index at 8,000 USD.',
                    )}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'When the market price climbs to 8,700 USD, you decide to set the stop loss level at 8,200 USD. After a few ticks, the price dives to 8,100 USD, surpassing your stop loss level. Your trade will automatically close at 8,100 USD.',
                    )}
                </Header>
                <Show.Desktop>
                    <ExampleImage
                        data={data['example']}
                        alt="Example for stop loss with crash/boom indices"
                    />
                </Show.Desktop>
                <Show.Mobile width="100%">
                    <ExampleImage
                        data={data['example_mobile']}
                        alt="Example for stop loss with crash/boom indices"
                    />
                </Show.Mobile>

                <Header mt="3.2rem" as="h5" type="main-paragraph" mb="0.8rem">
                    {localize('Stop out')}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'With stop out, if your margin level drops below Deriv’s stop out level, your positions may be closed automatically to protect you from further losses.',
                    )}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'Your margin level is the ratio of your equity (the total balance you would have if you close all your positions at that point) to your currently used margin.',
                    )}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'For example, if you close your position at a certain point, your equity is the total of your account balance plus the profit or loss at that point. If the ratio of this to your currently used margin is lower than Deriv’s stop out level, stop out may be applied.',
                    )}
                </Header>

                <Header as="h4" size="var(--text-size-m)" weight="bold" mb="0.8rem" mt="2.4rem">
                    {localize('Margin call')}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="2.4rem">
                    {localize(
                        'If your margin level drops below Deriv’s margin call level, you’ll get a margin call, which is a warning that your account is approaching the stop out level.',
                    )}
                </Header>
                <Header as="h4" type="sub-section-title" mb="0.8rem">
                    {localize('Swap rates (overnight funding)')}
                </Header>

                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'If you keep any position open overnight, an adjustment (swap rate) will be applied to your trading account to compensate for the cost of keeping that position open. Instruments traded on our platforms are subject to different swap rates. These rates are based on conditions such as time and number of days, including public holidays, that you hold your positions open.',
                    )}
                </Header>
                <Header weight="normal" type="main-paragraph" as="p" mb="1.6rem">
                    {localize(
                        'You can use our swap calculator to estimate the swap charges required to keep your positions open overnight on Deriv’s CFD trading platforms.',
                    )}
                </Header>
                <StyledLinkButton mb="4rem" secondary to="/trader-tools/swap-calculator/">
                    {localize('Swap calculator')}
                </StyledLinkButton>
            </SmallContainer>
        </StyledSectionContainer>
    )
}

export default TradingCFDIncreases
