import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import device, { size } from 'themes/device'
import { Box, Flex, SectionContainer } from 'components/containers'
import { Carousel, Header, LinkText, QueryImage, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize } from 'components/localization'
import { isBrowser } from 'common/utility'

const query = graphql`
    query {
        margin_calculator: file(relativePath: { eq: "dmt5-margin-calculator.png" }) {
            ...fadeIn
        }
        margin_calculator_mobile: file(relativePath: { eq: "dmt5-margin-calculator-mobile.png" }) {
            ...fadeIn
        }
        swap_calculator: file(relativePath: { eq: "dmt5-swap-calculator.png" }) {
            ...fadeIn
        }
        swap_calculator_mobile: file(relativePath: { eq: "dmt5-swap-calculator-mobile.png" }) {
            ...fadeIn
        }
    }
`

const ImageWrapper = styled.div`
    max-width: 39.2rem;
    width: 100%;
    height: 38.6rem;
    object-fit: contain;
    margin-bottom: 2.4rem;

    @media ${device.mobileL} {
        max-width: 232px;
        width: 100%;
        margin: 0 0 24px;
        height: unset;

        div {
            max-width: 232px;
            width: 100%;
        }
    }
`

const MainHeader = styled(Header)`
    font-size: 48px;
    margin: 0 0 12px;
    line-height: 1.25;
    text-align: left;
    color: var(--color-black-3);
    @media ${device.mobileL} {
        font-size: 32px;
        margin-bottom: 24px;
        padding: 0 16px;
        text-align: center;
    }
`

const SubHeader = styled(Header)`
    font-size: 24px;
    color: var(--color-black-3);
    @media ${device.mobileL} {
        font-size: 20px;
        margin-bottom: 8px;
    }
`

const StyledBox = styled(Box)`
    max-width: 508px;
    margin: 11.9rem 4rem 0 16rem;
    @media ${device.mobileL} {
        max-width: 100%;
        margin: 4rem 1.6rem 2.4rem;
    }
`

const StyledText = styled(Text)`
    text-align: ${(props) => (props.align ? 'center' : 'left')};
    margin-bottom: 24px;
    @media ${device.mobileL} {
        font-size: 16px;
    }
`

const CardText = styled(StyledText)`
    margin: 0.8rem 4rem 2.4rem;
    @media ${device.mobileL} {
        margin: 0 0 24px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1rem 1.6rem;
    font-size: 14px;
    height: 4rem;
    width: 21rem;
    @media ${device.mobileL} {
        padding: 1rem 1.5rem;
        width: 198px;
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

const StyledFlexContainer = styled(Flex)`
    border: 1px solid var(--color-grey-34);
`

const StyledFlexRight = styled(Flex)`
    margin-right: 2.4rem;
    @media ${device.mobileL} {
        margin: 0;
    }
`

const StyledFlexLeft = styled(Flex)`
    background-color: var(--color-grey-25);
    margin: 0;
`

const CalculatorCard = ({ name, image, image_alt_name, text, link, button_text, is_mobile }) => (
    <Flex
        jc="center"
        tablet_jc="center"
        ai="center"
        fd="column"
        wrap={is_mobile ? 'nowrap' : 'wrap'}
        width={is_mobile ? '100%' : '58.8rem'}
        height={is_mobile ? 'auto' : '69.4rem'}
    >
        <SubHeader align="center">{name}</SubHeader>
        <CardText align="center">{text}</CardText>
        <ImageWrapper>
            <QueryImage data={image} alt={image_alt_name} />
        </ImageWrapper>
        <StyledLinkButton tertiary="true" to={link} external="true" target="_blank">
            <Localize translate_text={button_text} />
        </StyledLinkButton>
    </Flex>
)

CalculatorCard.propTypes = {
    button_text: Proptypes.string,
    image: Proptypes.object,
    image_alt_name: Proptypes.string,
    image_name: Proptypes.string,
    is_mobile: Proptypes.bool,
    link: Proptypes.string,
    name: Proptypes.string,
    text: Proptypes.string,
}

const calculators = [
    {
        index: 0,
        name: <Localize translate_text="Margin calculator" />,
        text: (
            <Localize translate_text="Calculate the margin you need to open and hold your positions with our margin calculator." />
        ),
        image_name: 'margin_calculator',
        button_text: 'Try our margin calculator',
        link: '/trader-tools#marginCalculator',
    },
    {
        index: 1,
        name: <Localize translate_text="Swap calculator" />,
        text: (
            <Localize translate_text="Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract." />
        ),
        image_name: 'swap_calculator',
        button_text: 'Try our swap calculator',
        link: '/trader-tools/#swapCalculator',
    },
]

const MarginCalculator = () => {
    const [is_mobile, setMobile] = useState(false)
    const handleResizeWindow = () => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
    }
    useEffect(() => {
        setMobile(isBrowser() ? window.screen.width <= size.tabletS : false)
        window.addEventListener('resize', handleResizeWindow)

        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    })

    const data = useStaticQuery(query)

    const settings = {
        container_style: {
            maxWidth: is_mobile ? '100%' : '588px',
            maxHeight: '518px',
            margin: '0',
        },
        slide_style: {
            minWidth: '100%',
            minHeight: '518px',
            position: 'relative',
        },
        chevron_style: {
            chevron_color: 'red',
        },
        navigation_style: {
            nav_color: 'red',
        },
    }

    return (
        <SectionContainer>
            <StyledFlexContainer fd="row" width="100%" wrap={is_mobile ? 'wrap' : 'nowrap'}>
                <StyledFlexLeft
                    ai="flex-end"
                    jc="flex-start"
                    tablet_jc="center"
                    fd="column"
                    wrap="wrap"
                    width={is_mobile ? '100%' : '50%'}
                    min_height={is_mobile ? '36.8rem' : '69.4rem'}
                    tabletL={{ mt: '0', ml: '16px', mr: '16px' }}
                >
                    <StyledBox max_width="100%">
                        <MainHeader>
                            <Localize translate_text="Take control of your trades on DMT5" />
                        </MainHeader>
                        <StyledText>
                            <Localize
                                translate_text="Explore <0>margin trading</0> on DMT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour."
                                components={[
                                    <LinkText
                                        color="red"
                                        key={0}
                                        target="_blank"
                                        href="/trade-types/margin"
                                        rel="noopener noreferrer"
                                    />,
                                ]}
                            />
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="With the calculators and numerous analytical tools available on the DMT5 platform, you’ll be able to manage your capital and trading positions better." />
                        </StyledText>
                    </StyledBox>
                </StyledFlexLeft>
                <StyledFlexRight
                    fd="row"
                    jc="center"
                    tablet_jc="center"
                    wrap="wrap"
                    width={is_mobile ? '100%' : '50%'}
                    min_height={is_mobile ? '51.8rem' : '69.4rem'}
                    tabletL={{ mt: '0', pt: '24px', pl: '16px', pr: '16px' }}
                >
                    <Carousel {...settings}>
                        {calculators.map((calculator, idx) => (
                            <CalculatorCard
                                key={idx}
                                name={calculator.name}
                                image={
                                    data[
                                        is_mobile
                                            ? calculator.image_name + '_mobile'
                                            : calculator.image_name
                                    ]
                                }
                                image_alt_name={calculator.image_name}
                                text={calculator.text}
                                link={calculator.link}
                                button_text={calculator.button_text}
                                is_mobile={is_mobile}
                            />
                        ))}
                    </Carousel>
                </StyledFlexRight>
            </StyledFlexContainer>
        </SectionContainer>
    )
}

export default MarginCalculator
