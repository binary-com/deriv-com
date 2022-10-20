import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer, Grid, WhyTradeItem } from '../components/_style'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { Button } from 'components/form'
import { useCountryRule } from 'components/hooks/use-country-rule'
// Icon
import MinimalRisk from 'images/svg/trade-types/minimal-risk.svg'
import FullControl from 'images/svg/trade-types/full-control.svg'
import ResponsivePlatform from 'images/svg/trade-types/responsive-platform.svg'
import FriendlySupport from 'images/svg/trade-types/friendly-support.svg'
import Seven from 'images/svg/trade-types/seven.svg'
import CrashBoom from 'images/svg/trade-types/crash-boom.svg'
import useHandleSignup from 'components/hooks/use-handle-signup'

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

const StyledSectionContainer = styled(SectionContainer)`
    background: linear-gradient(to right, white 50%, var(--color-grey-31) 50%);
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
        text-align: right;
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
    const { is_non_uk, is_row, is_uk_eu } = useCountryRule()
    const handleSignup = useHandleSignup()

    return (
        <>
            <StyledSectionContainerHead padding="8rem 0 4rem">
                <SmallContainer direction="column" ai="flex-start">
                    <StyledHeader as="h2" size="4.8rem" mb="1.2rem">
                        {localize('What are multipliers?')}
                    </StyledHeader>
                    <Text>
                        <Localize translate_text="Deriv multipliers combines the upside of leverage trading with the limited risk of options. This means that when the market moves in your favour, you'll multiply your potential profits. If the market moves against your prediction, your losses are limited only to your stake." />
                    </Text>
                </SmallContainer>
            </StyledSectionContainerHead>
            <StyledSectionContainer padding="4rem 0 0">
                <SmallContainer direction="column" ai="flex-start">
                    {is_uk_eu ? (
                        <Flex fd="column">
                            <Row mb="2rem">
                                <RowColumn isHeader>
                                    <StyledHeaderContent as="h3" size="3.2rem">
                                        <Localize translate_text="Let’s say you predict that the market will go up." />
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
                                                translate_text="<0>Without a multiplier</0>, if the market goes up by 25%, you'll gain 25% * $100 = <1>$25 profit<1>."
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
                                                translate_text="<0>With a x5 multiplier</0>, if the market goes up by 25%, you'll gain 25% * $100 * 5 = <1>$125 profit</1>."
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
                                                translate_text="<0>With an equivalent $100 position on CFDs</0>, with 1:5 leverage, you risk 25% * $500 = <1>$125 loss</1>."
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
                                                translate_text="<0>With a x5 multiplier</0>, if the market goes down 25%, you'll <1>lose only $100</1>. An automatic stop out kicks in if your loss reaches your stake amount."
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
                                        <Localize translate_text="Let’s say you predict that the market will go up." />
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
                                                translate_text="<0>Without a multiplier</0>, if the market goes up by 2%, you'll gain 2% * $100 = <1>$2 profit<1>."
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
                                                translate_text="<0>With a x500 multiplier</0>, if the market goes up by 2%, you'll gain 2% * $100 * 500 = <1>$1,000 profit</1>."
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
                                                translate_text="<0>With an equivalent $100 margin trade</0>, with 1:500 leverage, you risk 2% * $50,000 = <1>$1,000 loss</1>."
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
                                                translate_text="<0>With a x500 multiplier</0>, if the market goes down 2%, you'll <1>lose only $100</1>. An automatic stop out kicks in if your loss reaches your stake amount."
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
                        {localize('Why trade multipliers on Deriv')}
                    </Header>
                    <Grid>
                        <WhyTradeItem>
                            <div>
                                <img src={MinimalRisk} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Better risk management')}
                            </Text>
                            <Text>
                                {localize(
                                    'Customise your contracts to suit your style and risk appetite using innovative features like stop loss, take profit, and deal cancellation.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FullControl} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Increased market exposure')}
                            </Text>
                            <Text>
                                {localize(
                                    'Get more market exposure while limiting risk to your stake amount.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={ResponsivePlatform} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Secure, responsive platform')}
                            </Text>
                            <Text>
                                {localize(
                                    'Enjoy trading on secure, intuitive platforms built for new and expert traders.',
                                )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={FriendlySupport} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Expert and friendly support')}
                            </Text>
                            <Text>
                                {localize('Get expert, friendly support when you need it.')}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={Seven} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {is_uk_eu
                                    ? localize('Trade anytime')
                                    : localize('Trade 24/7, 365 days a year')}
                            </Text>
                            <Text>
                                {is_uk_eu
                                    ? localize(
                                          'Trade multipliers on synthetic indices 24/7, 365 days a year. Trade multipliers on forex round the clock on weekdays.',
                                      )
                                    : localize(
                                          'Offered on forex and synthetic indices, you can trade multipliers 24/7, all-year-round.',
                                      )}
                            </Text>
                        </WhyTradeItem>
                        <WhyTradeItem>
                            <div>
                                <img src={CrashBoom} alt="" />
                            </div>
                            <Text mt="1.6rem" mb="0.8rem" weight="bold">
                                {localize('Crash/Boom indices')}
                            </Text>
                            <Text>
                                {localize(
                                    'Predict and gain from exciting spikes and dips with our Crash/Boom indices.',
                                )}
                            </Text>
                        </WhyTradeItem>
                    </Grid>
                    <Text mt="4rem" mb="1.6rem" weight="bold">
                        {localize("Don't have a Deriv.com account yet?")}
                    </Text>
                    <Button onClick={handleSignup} id="dm-multipliers-signup-1" to="" secondary>
                        {localize('Create free demo account')}
                    </Button>
                </SmallContainer>
            </SectionContainer>
        </>
    )
}

export default WhatAreOptions
