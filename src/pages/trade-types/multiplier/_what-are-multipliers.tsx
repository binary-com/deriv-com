import React from 'react'
import styled, { css } from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer, Grid, WhyTradeItem } from '../components/_style'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { Localize } from 'components/localization'
import { Button } from 'components/form'
import useRegion from 'components/hooks/use-region'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useIsRtl } from 'components/hooks/use-isrtl'
import { TString } from 'types/generics'
// Icon
import MinimalRisk from 'images/svg/trade-types/minimal-risk.svg'
import FullControl from 'images/svg/trade-types/full-control.svg'
import ResponsivePlatform from 'images/svg/trade-types/responsive-platform.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import Seven from 'images/svg/trade-types/seven.svg'
import CrashBoom from 'images/svg/trade-types/crash-boom.svg'

const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 28px;
    }
`
const StyledHeaderContent = styled(Header)`
    line-height: 1.25;
    width: 360px;
    @media ${device.tablet} {
        margin: auto;
        margin-bottom: 2rem;
        width: 100%;
    }
`

const StyledSectionContainer = styled(SectionContainer)<{ is_rtl: boolean }>`
    background: linear-gradient(to right, white 50%, var(--color-grey-31) 50%);
    ${({ is_rtl }) => {
        return is_rtl
            ? css`
                  background: linear-gradient(to left, white 50%, var(--color-grey-31) 50%);
              `
            : css`
                  background: linear-gradient(to right, white 50%, var(--color-grey-31) 50%);
              `
    }}
    background-position: 0 150px;
    @media ${device.tablet} {
        background: white;
        padding-top: 8px;
    }
`

const StyledSectionContainerHead = styled(SectionContainer)`
    @media ${device.tablet} {
        padding-top: 40px;
    }
`

const Row = styled(Flex)`
    flex-direction: row;
    justify-content: space-between;
    @media ${device.tablet} {
        flex-direction: column;
    }

    @media ${device.laptop} {
        justify-content: space-around;
    }
`

const RowColumn = styled.div<{ isHeader?: boolean }>`
    width: 360px;
    margin-right: 40px;

    &:last-child {
        margin-right: 0;
        margin-left: 40px;
        text-align: end;
    }

    @media ${device.tabletL} {
        width: inherit;
        margin: ${(props) => (props.isHeader ? '0' : '0 auto')};

        &:last-child {
            margin: 0 auto;
        }
    }
`

const ImgWrapper = styled.div`
    width: 360px;
    @media ${device.tabletL} {
        width: auto;
        margin: 1rem auto;
    }
`

const TextWrapper = styled.div`
    width: 360px;
    @media ${device.tabletL} {
        width: auto;
        margin: 0 auto;
    }
`

const ProfitText = styled.span`
    font-weight: bold;
    color: var(--color-blue-7);
`

const LossText = styled.span`
    font-weight: bold;
    color: var(--color-red-5);
`

const query = graphql`
    query {
        stake_amount: file(relativePath: { eq: "multiplier/image-stake-amount@3x.png" }) {
            ...fadeIn
        }
        multiplier_no_multi_loss: file(
            relativePath: { eq: "multiplier/multipliers-no-multiplier-loss@2x.png" }
        ) {
            ...fadeIn
        }
        multiplier_no_multi_win: file(
            relativePath: { eq: "multiplier/multipliers-no-multiplier-win@3x.png" }
        ) {
            ...fadeIn
        }
        multiplier_with_multi_loss: file(
            relativePath: { eq: "multiplier/multipliers-with-multiplier-loss@3x.png" }
        ) {
            ...fadeIn
        }
        multiplier_with_multi_win: file(
            relativePath: { eq: "multiplier/multipliers-with-multiplier-win@3x.png" }
        ) {
            ...fadeIn
        }
        multiplier_no_multi_loss_eu: file(
            relativePath: { eq: "multiplier/multipliers-no-multiplier-loss-eu.png" }
        ) {
            ...fadeIn
        }
        multiplier_no_multi_win_eu: file(
            relativePath: { eq: "multiplier/multipliers-no-multiplier-win-eu.png" }
        ) {
            ...fadeIn
        }
        multiplier_with_multi_loss_eu: file(
            relativePath: { eq: "multiplier/multipliers-with-multiplier-loss-eu.png" }
        ) {
            ...fadeIn
        }
        multiplier_with_multi_win_eu: file(
            relativePath: { eq: "multiplier/multipliers-with-multiplier-win-eu.png" }
        ) {
            ...fadeIn
        }
    }
`

const WhatAreOptions = () => {
    const data = useStaticQuery(query)
    const { is_eu } = useRegion()
    const handleSignup = useHandleSignup()
    const is_rtl = useIsRtl()

    const trade_anytime_contents: Record<string, TString> = {
        text1: is_eu ? '_t_Trade anytime_t_' : '_t_Trade 24/7, 365 days a year_t_',
        text2: is_eu
            ? '_t_Trade multipliers on synthetic indices 24/7, 365 days a year. Trade multipliers on forex round the clock on weekdays._t_'
            : '_t_Offered on forex and synthetic indices, you can trade multipliers 24/7, all-year-round._t_',
    }

    return (
        <>
            <StyledSectionContainerHead padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <StyledHeader as="h2" size="4.8rem" mb="1.2rem">
                        <Localize translate_text="_t_What are multipliers?_t_" />
                    </StyledHeader>
                    <Text>
                        <Localize translate_text="_t_Deriv multipliers combines the upside of leverage trading with the limited risk of options. This means that when the market moves in your favour, you'll multiply your potential profits. If the market moves against your prediction, your losses are limited only to your stake._t_" />
                    </Text>
                </SmallContainer>
            </StyledSectionContainerHead>
            <StyledSectionContainer is_rtl={is_rtl} padding="4rem 0 0">
                <SmallContainer direction="column" ai="flex-start">
                    {is_eu ? (
                        <Flex fd="column">
                            <Row mb="2rem">
                                <RowColumn isHeader>
                                    <StyledHeaderContent as="h3" size="3.2rem">
                                        <Localize translate_text="_t_Let’s say you predict that the market will go up._t_" />
                                    </StyledHeaderContent>
                                </RowColumn>

                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['stake_amount']}
                                            alt="Stake amount to start trade"
                                        />
                                    </ImgWrapper>
                                </RowColumn>
                            </Row>
                            <Row>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_no_multi_win_eu']}
                                            alt="Profit without multipliers"
                                        />
                                    </ImgWrapper>
                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>Without a multiplier</0>, if the market goes up by 25%, you'll gain 25% * $100 = <1>$25 profit</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <ProfitText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_with_multi_win_eu']}
                                            alt="Profit with x500 multipliers"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>With a x5 multiplier</0>, if the market goes up by 25%, you'll gain 25% * $100 * 5 = <1>$125 profit</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <ProfitText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                            </Row>

                            <Row mb="32px">
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_no_multi_loss_eu']}
                                            alt="Loss without Deriv's multiplier"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>With an equivalent $100 position on CFDs</0>, with 1:5 leverage, you risk 25% * $500 = <1>$125 loss</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <LossText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_with_multi_loss_eu']}
                                            alt="Loss with Deriv's multiplier"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text mt="1.6rem">
                                            <Localize
                                                translate_text="_t_<0>With a x5 multiplier</0>, if the market goes down 25%, you'll <1>lose only $100</1>. An automatic stop out kicks in if your loss reaches your stake amount._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <LossText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                            </Row>
                        </Flex>
                    ) : (
                        <Flex fd="column">
                            <Row mb="2rem">
                                <RowColumn isHeader>
                                    <StyledHeaderContent as="h3" size="3.2rem">
                                        <Localize translate_text="_t_Let’s say you predict that the market will go up._t_" />
                                    </StyledHeaderContent>
                                </RowColumn>

                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['stake_amount']}
                                            alt="Stake amount to start trade"
                                        />
                                    </ImgWrapper>
                                </RowColumn>
                            </Row>
                            <Row>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_no_multi_win']}
                                            alt="Profit without multipliers"
                                        />
                                    </ImgWrapper>
                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>Without a multiplier</0>, if the market goes up by 2%, you'll gain 2% * $100 = <1>$2 profit</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <ProfitText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_with_multi_win']}
                                            alt="Profit with x500 multipliers"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>With a x500 multiplier</0>, if the market goes up by 2%, you'll gain 2% * $100 * 500 = <1>$1,000 profit</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <ProfitText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                            </Row>

                            <Row mb="32px">
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_no_multi_loss']}
                                            alt="Loss without Deriv's multiplier"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text m="1.6rem 0 4rem 0">
                                            <Localize
                                                translate_text="_t_<0>With an equivalent $100 margin trade</0>, with 1:500 leverage, you risk 2% * $50,000 = <1>$1,000 loss</1>._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <LossText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                                <RowColumn>
                                    <ImgWrapper>
                                        <QueryImage
                                            data={data['multiplier_with_multi_loss']}
                                            alt="Loss with Deriv's multiplier"
                                        />
                                    </ImgWrapper>

                                    <TextWrapper>
                                        <Text mt="1.6rem">
                                            <Localize
                                                translate_text="_t_<0>With a x500 multiplier</0>, if the market goes down 2%, you'll <1>lose only $100</1>. An automatic stop out kicks in if your loss reaches your stake amount._t_"
                                                components={[
                                                    <strong key={0} />,
                                                    <LossText key={1} />,
                                                ]}
                                            />
                                        </Text>
                                    </TextWrapper>
                                </RowColumn>
                            </Row>
                        </Flex>
                    )}
                </SmallContainer>
            </StyledSectionContainer>
            <SectionContainer background="grey-23" padding="4rem 0">
                <SmallContainer direction="column" jc="flex-start" ai="flex-start">
                    <Header as="h3" size="3.2rem" mb="4rem">
                        <Localize translate_text="_t_Why trade multipliers on Deriv_t_" />
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <div>
                                <img src={MinimalRisk} alt="Risk manegement" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text="_t_Better risk management_t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FullControl} alt="Market risk" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text="_t_Increased market exposure_t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Get more market exposure while limiting risk to your stake amount._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={ResponsivePlatform} alt="Secured platform" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text="_t_Secure, responsive platform_t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Enjoy trading on secure, intuitive platforms built for new and expert traders._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FriendlySupport} alt="Chat support" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text="_t_Expert and friendly support_t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Get expert, friendly support when you need it._t_" />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={Seven} alt="Trade 24/7" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text={trade_anytime_contents.text1} />
                            </Text>
                            <Text>
                                <Localize translate_text={trade_anytime_contents.text2} />
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={CrashBoom} alt="Spikes and dips" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                <Localize translate_text="_t_Crash/Boom indices_t_" />
                            </Text>
                            <Text>
                                <Localize translate_text="_t_Predict and gain from exciting spikes and dips with our Crash/Boom indices._t_" />
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text mt="4rem" mb="1.6rem" weight="bold">
                        <Localize translate_text="_t_Don't have a Deriv.com account yet?_t_" />
                    </Text>
                    <Button onClick={handleSignup} id="dm-multipliers-signup-1" secondary>
                        <Localize translate_text="_t_Create free demo account_t_" />
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatAreOptions
