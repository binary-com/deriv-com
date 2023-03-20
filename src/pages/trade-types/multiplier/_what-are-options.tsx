import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { SmallContainer } from '../components/_style'
import { multipliers_content } from '../content/_multiplier'
import device from 'themes/device'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { StyledBox } from 'pages/markets/static/style/_markets-style'
import { FullWidthMultiColumn } from 'components/elements/full-width-multicolumn'
import useRegion from 'components/hooks/use-region'
// Icon
import useHandleSignup from 'components/hooks/use-handle-signup'
import { useIsRtl } from 'components/hooks/use-isrtl'

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
    const { is_eu, is_row } = useRegion()
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
            <SmallContainer direction="column" ai="flex-start">
                {is_eu ? (
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
                                            translate_text="<0>Without a multiplier</0>, if the market goes up by 25%, you'll gain 25% * $100 = <1>$25 profit</1>."
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
                                            components={[<strong key={0} />, <LossText key={1} />]}
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
                                            components={[<strong key={0} />, <LossText key={1} />]}
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
                                            translate_text="<0>Without a multiplier</0>, if the market goes up by 2%, you'll gain 2% * $100 = <1>$2 profit</1>."
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
                                            translate_text="<0>With an equivalent $100 position on CFDs</0>, with 1:500 leverage, you risk 2% * $50,000 = <1>$1,000 loss</1>."
                                            components={[<strong key={0} />, <LossText key={1} />]}
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
                                            components={[<strong key={0} />, <LossText key={1} />]}
                                        />
                                    </Text>
                                </TextWrapper>
                            </RowColumn>
                        </Row>
                    </Flex>
                )}
            </SmallContainer>
            <FullWidthMultiColumn
                header={<Localize translate_text="Why trade multipliers on Deriv" />}
                button_title={<Localize translate_text="Don't have a Deriv account yet?" />}
                button_text={<Localize translate_text="_t_Create free demo account_t_" />}
                multiple_row
            >
                {multipliers_content.map((content, index) => (
                    <StyledBox
                        key={index}
                        item_title={is_eu ? content.item_title_eu : content.item_title}
                        text={is_eu ? content.text_eu : content.text}
                        icon={<img src={content.src} alt="" />}
                    ></StyledBox>
                ))}
            </FullWidthMultiColumn>
        </>
    )
}

export default WhatAreOptions
