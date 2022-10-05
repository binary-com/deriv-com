import React from 'react'
import Proptypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, SectionContainer, Desktop, Mobile } from 'components/containers'
import { Carousel, Header, LinkText, QueryImage, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { useCountryRule } from 'components/hooks/use-country-rule'

type CalculatorProps = {
    children?: React.ReactNode
    key?: number
    index?: number
    name: React.ReactElement
    text: React.ReactElement
    image_name: string
    image_alt_name: string
    button_text: React.ReactElement
    link: string
}

const query = graphql`
    query {
        margin_calculator: file(relativePath: { eq: "dmt5/dmt5-margin-calculator.png" }) {
            ...fadeIn
        }
        margin_calculator_mobile: file(
            relativePath: { eq: "dmt5/dmt5-margin-calculator-mobile.png" }
        ) {
            ...fadeIn
        }
        swap_calculator: file(relativePath: { eq: "dmt5/dmt5-swap-calculator.png" }) {
            ...fadeIn
        }
        swap_calculator_mobile: file(relativePath: { eq: "dmt5/dmt5-swap-calculator-mobile.png" }) {
            ...fadeIn
        }
    }
`
const CardContainer = styled(Flex)`
    max-width: 588px;
    @media ${device.tabletL} {
        max-width: 95%;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    width: 392px;
    height: 386px;
    object-fit: contain;
    margin-bottom: 2.4rem;

    @media ${device.tabletL} {
        align-items: center;
        justify-content: center;
        width: 232px;
        height: 229px;

        div {
            max-width: 232px;
            width: 100%;
            height: auto;
        }
    }
`

const MainHeader = styled(Header)`
    margin: 0 0 12px;
    @media ${device.tabletL} {
        font-size: 28px;
        margin-bottom: 24px;
        padding: 0 16px;
        text-align: center;
    }
`

const SubHeader = styled(Header)`
    font-size: 24px;
    color: var(--color-black-3);
    @media ${device.tabletL} {
        font-size: 20px;
        margin-bottom: 8px;
    }
`

const StyledBox = styled(Box)`
    max-width: 508px;
    margin: 11.9rem 4rem 0 16rem;
    @media ${device.tabletL} {
        max-width: 100%;
        margin: 40px 16px 24px;
    }
`

const StyledText = styled(Text)`
    margin-bottom: 24px;
`

const CardText = styled(StyledText)`
    margin: 0.8rem 4rem 2.4rem;
    @media ${device.tabletL} {
        margin: 0 0 24px;
    }
`

const StyledCardContainer = styled(Flex)`
    width: 100%;
    height: 684px;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media ${device.tabletL} {
        height: auto;
        min-height: 480px;
        justify-content: flex-start;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 1rem 1.6rem;
    font-size: 14px;
    height: 40px;
    width: auto;
    min-width: 210px;
    @media ${device.tabletL} {
        padding: 10px 15px;
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
    width: 100%;
    flex-wrap: nowrap;
    border: 1px solid var(--color-grey-34);
    @media ${device.tabletL} {
        flex-wrap: wrap;
        border: none;
    }
`

const StyledFlex = styled(Flex)`
    width: 50%;
    min-height: 694px;
    margin-right: 2.4rem;
    background-color: ${(props) => (props.has_color ? 'var(--color-grey-25)' : 'inherit')};
    @media ${device.tabletL} {
        width: 100%;
        min-height: 340px;
        margin-right: 0;
    }
`

const CalculatorCard = ({
    button_text,
    image_alt_name = '',
    image_name = '',
    link = '',
    name,
    text,
}: CalculatorProps) => {
    const data = useStaticQuery(query)
    return (
        <StyledCardContainer>
            <SubHeader as="h3" align="center">
                {name}
            </SubHeader>
            <CardText align="center">{text}</CardText>
            <ImageWrapper>
                <Desktop>
                    <QueryImage data={data[image_name]} alt={image_alt_name} />
                </Desktop>
                <Mobile>
                    <QueryImage data={data[image_name + '_mobile']} alt={image_alt_name} />
                </Mobile>
            </ImageWrapper>
            <StyledLinkButton tertiary to={link}>
                <Localize translate_text={button_text} />
            </StyledLinkButton>
        </StyledCardContainer>
    )
}

CalculatorCard.propTypes = {
    button_text: Proptypes.string,
    image_alt_name: Proptypes.string,
    image_name: Proptypes.string,
    is_mobile: Proptypes.bool,
    link: Proptypes.string,
    name: Proptypes.string,
    text: Proptypes.string,
}

const calculators: CalculatorProps[] = [
    {
        index: 0,
        name: <Localize translate_text="Margin calculator" />,
        text: (
            <Localize translate_text="Calculate the margin you need to open and hold your positions with our margin calculator." />
        ),
        image_name: 'margin_calculator',
        image_alt_name: localize('DMT5 margin trading calculator'),
        button_text: <Localize translate_text="Try our margin calculator" />,
        link: '/trader-tools/margin-calculator/',
    },
    {
        index: 1,
        name: <Localize translate_text="Swap calculator" />,
        text: (
            <Localize translate_text="Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract." />
        ),
        image_name: 'swap_calculator',
        image_alt_name: localize('DMT5 swap trading calculator'),
        button_text: <Localize translate_text="Try our swap calculator" />,
        link: '/trader-tools/swap-calculator/',
    },
]

const MarginCalculator = () => {
    const settings = {
        container_style: {
            maxWidth: '100%',
            margin: '0',
        },
        slide_style: {
            minWidth: '100%',
            position: 'relative',
        },
        chevron_style: {
            chevron_color: 'red',
            is_displayed_on_mobile: true,
        },
        navigation_style: {
            nav_color: 'red',
        },
    }

    const { is_uk_eu } = useCountryRule()
    return (
        <SectionContainer>
            <StyledFlexContainer>
                <StyledFlex
                    ai="center"
                    jc="flex-start"
                    tablet_jc="center"
                    fd="column"
                    wrap="wrap"
                    has_color={true}
                >
                    <StyledBox max_width="100%">
                        <MainHeader as="h2" type="page-title" lh="1.25" align="left">
                            <Localize translate_text="Take control of your trades on Deriv MT5" />
                        </MainHeader>
                        <StyledText>
                            {is_uk_eu && (
                                <>
                                    <Localize
                                        translate_text="Explore <0>CFDs</0> on Deriv MT5 (DMT5) and enjoy low spreads to increase your returns when the market moves in your favour."
                                        components={[
                                            <LinkText
                                                color="red"
                                                key={0}
                                                target="_blank"
                                                href="/trade-types/cfds/"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </>
                            )}
                            {!is_uk_eu && (
                                <>
                                    <Localize
                                        translate_text="Explore <0>CFDs</0> on Deriv MT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour."
                                        components={[
                                            <LinkText
                                                color="red"
                                                key={0}
                                                target="_blank"
                                                href="/trade-types/cfds/"
                                                rel="noopener noreferrer"
                                            />,
                                        ]}
                                    />
                                </>
                            )}
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="With the calculators and numerous analytical tools available on the Deriv MT5 platform, you’ll be able to manage your capital and trading positions better." />
                        </StyledText>
                    </StyledBox>
                </StyledFlex>
                <StyledFlex
                    fd="row"
                    jc="flex-start"
                    tablet_jc="center"
                    wrap="wrap"
                    ml="2.4rem"
                    tabletL={{ ml: '0px', pt: '24px', pl: '16px', pr: '16px' }}
                >
                    <CardContainer>
                        <Carousel {...settings}>
                            {calculators.map((calculator, idx) => (
                                <CalculatorCard
                                    key={idx}
                                    name={calculator.name}
                                    image_name={calculator.image_name}
                                    image_alt_name={calculator.image_alt_name}
                                    text={calculator.text}
                                    link={calculator.link}
                                    button_text={calculator.button_text}
                                />
                            ))}
                        </Carousel>
                    </CardContainer>
                </StyledFlex>
            </StyledFlexContainer>
        </SectionContainer>
    )
}

export default MarginCalculator
