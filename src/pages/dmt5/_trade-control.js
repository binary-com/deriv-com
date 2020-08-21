import { graphql, useStaticQuery } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, SectionContainer } from 'components/containers'
import { Header, QueryImage, Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import device from 'themes/device'

const query = graphql`
    query {
        swap_calculator: file(relativePath: { eq: "swap-calculator.png" }) {
            ...fadeIn
        }
        margin_calculator: file(relativePath: { eq: "margin-calculator.png" }) {
            ...fadeIn
        }
    }
`
const Section = styled(SectionContainer)`
    display: flex;
    padding: 0 12rem 0 0;
    justify-content: center;
    margin-top: 8rem;
    align-items: flex-start;
    box-shadow: inset 0 1px 0 0 var(--color-grey-8), inset 0 -1px 0 0 var(--color-grey-8);

    @media ${device.tablet} {
        flex-direction: column;
        padding: unset;
    }
`
const ImageWrapper = styled.div`
    margin: 2.4rem 3.4rem;
    width: 38.4rem;
    position: relative;

    @media ${device.mobileL} {
        width: 100%;
        max-width: 232px;
        margin: 24px 16px;
    }
`
const Button = styled(Flex)`
    width: 64px;
    height: 40px;
    border-radius: 23px;
    background-color: var(--color-grey-25);
    opacity: ${(props) => (props.isLeft ? ' 1' : ' 0.32')};
    border: unset;
    cursor: pointer;
`
const Arrow = styled.div`
    border: solid red;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    margin: auto;
`

const ArrowRight = styled(Arrow)`
    transform: rotate(-45deg);
`
const ArrowLeft = styled(Arrow)`
    transform: rotate(135deg);
`
const SmallCircle = styled.div`
    height: 8px;
    width: 8px;
    background-color: ${(props) => (props.isLeft ? ' var(--color-grey-21)' : ' var(--color-red)')};
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.8rem;
    margin-top: 4rem;
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        text-align: center;
    }
    @media ${device.mobileL} {
        font-size: ${(props) => props.mobile_font_size};
    }
`

const StyledText = styled(Text)`
    @media ${device.mobileL} {
        font-size: 16px;
        max-width: 328px;
    }
`
const StyledLocalizedLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);

    &:hover {
        text-decoration: underline;
    }
`
const TradeControl = () => {
    const data = useStaticQuery(query)

    const [isLeft, setLeft] = useState(true)
    const buttonClick = (left) => {
        setLeft(left)
    }

    return (
        <Section>
            <Flex
                bg="var(--color-grey-25)"
                width="58%"
                p="11.9rem 4rem 27.3rem 16rem"
                fd="column"
                laptopM={{ p: '11.9rem 4rem 10rem 3rem' }}
                tablet={{ p: '40px 16px 24px', width: '100%' }}
            >
                <StyledHeader mobile_font_size="32px" as="h2" mb="1.2rem">
                    {localize('Take control of your trades on DMT5')}
                </StyledHeader>
                <StyledText>
                    <Localize
                        translate_text="Explore <0>margin trading</0> on DMT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour."
                        components={[<StyledLocalizedLink to="/trade-types/margin/" key={0} />]}
                    />
                </StyledText>
                <StyledText mt="2.4rem">
                    {localize(
                        'With the calculators and numerous analytical tools available on the DMT5 platform, you’ll be able to manage your capital and trading positions better.',
                    )}
                </StyledText>
            </Flex>
            <Flex
                p="4rem 0"
                fd="column"
                ml="2.4rem"
                ai="center"
                width="50%"
                tablet={{ width: '100%', padding: '24px 16px 40px', ml: '0' }}
            >
                <StyledHeader mobile_font_size="16px" align="center" as="h4" mb="0.8rem">
                    {isLeft && localize('Margin calculator')}
                    {!isLeft && localize('Swap calculator')}
                </StyledHeader>
                <StyledText align="center" max_width="50.8rem">
                    {isLeft &&
                        localize(
                            'Calculate the margin you need to open and hold your positions with our margin calculator.',
                        )}
                    {!isLeft &&
                        localize(
                            'Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract.',
                        )}
                </StyledText>
                <Flex ai="center" mobileL={{ width: '360px' }}>
                    <Button isLeft={!isLeft} onClick={() => buttonClick(true)}>
                        <ArrowLeft />
                    </Button>

                    {isLeft && (
                        <ImageWrapper>
                            <QueryImage data={data['margin_calculator']} alt="margin calculator" />
                        </ImageWrapper>
                    )}
                    {!isLeft && (
                        <ImageWrapper>
                            <QueryImage data={data['swap_calculator']} alt="swap calculator" />
                        </ImageWrapper>
                    )}

                    <Button isLeft={isLeft} onClick={() => buttonClick(false)}>
                        <ArrowRight />
                    </Button>
                </Flex>
                <Flex>
                    <SmallCircle isLeft={!isLeft} />
                    <SmallCircle isLeft={isLeft} />
                </Flex>
            </Flex>
        </Section>
    )
}

export default TradeControl
