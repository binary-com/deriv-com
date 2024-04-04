import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Box, Flex, SectionContainer, Desktop, Mobile, Container } from 'components/containers'
import { Carousel, CarouselProps, Header, LinkText, QueryImage, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'
import { useLangDirection } from 'components/hooks/use-lang-direction'
import { TString } from 'types/generics'
import useBuildVariant from 'features/hooks/use-build-variant'

type CalculatorProps = {
    children?: React.ReactNode
    key?: number
    index?: number
    name: TString
    text: TString
    image_name: string
    image_alt: TString
    button_text: TString
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
        eu_margin_calculator: file(relativePath: { eq: "dmt5/eu-dmt5-margin-calculator.png" }) {
            ...fadeIn
        }
        eu_margin_calculator_mobile: file(
            relativePath: { eq: "dmt5/eu-dmt5-margin-calculator-mobile.png" }
        ) {
            ...fadeIn
        }
        swap_calculator: file(relativePath: { eq: "dmt5/dmt5-swap-calculator.png" }) {
            ...fadeIn
        }
        swap_calculator_mobile: file(relativePath: { eq: "dmt5/dmt5-swap-calculator-mobile.png" }) {
            ...fadeIn
        }
        eu_swap_calculator: file(relativePath: { eq: "dmt5/eu-dmt5-swap-calculator.png" }) {
            ...fadeIn
        }
        eu_swap_calculator_mobile: file(
            relativePath: { eq: "dmt5/eu-dmt5-swap-calculator-mobile.png" }
        ) {
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
    object-fit: contain;
    margin-bottom: 2.4rem;

    @media ${device.tabletL} {
        align-items: center;
        justify-content: center;
        width: 232px;

        div {
            max-width: 232px;
            width: 100%;
            height: auto;
        }
    }
`

const MainHeader = styled(Header)`
    margin: 0 0 12px;
    color: var(--color-black-9);

    @media ${device.tabletL} {
        font-size: 28px;
        margin-bottom: 24px;
        padding: 0 16px;
        text-align: center;
    }
`

const SubHeader = styled(Header)`
    font-size: 24px;
    color: var(--color-black-9);
    @media ${device.tabletL} {
        font-size: 20px;
        margin-bottom: 8px;
    }
`

const StyledBox = styled(Box)`
    @media ${device.tabletL} {
        max-width: 100%;
        margin: 0 16px 0;
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
    color: var(--color-black-9);
    border-radius: 16px;

    @media ${device.tabletL} {
        padding: 10px 15px;
        margin-bottom: 1rem;
    }

    :active {
        outline: none;
        border: none;
    }
    :focus {
        outline: 0;
    }
`

const StyledFlex = styled(Flex)<{ has_color?: boolean }>`
    width: 50%;
    min-height: 694px;
    margin-right: 2.4rem;
    background-color: inherit;
    align-items: center;
    justify-content: center;
    @media ${device.tabletL} {
        width: 100%;
        min-height: auto;
        margin-right: 0;
    }
`
const StyledSectionContainer = styled(SectionContainer)`
    padding: 4rem 0;
    @media ${device.tabletL} {
        padding: 2rem 0;
    }
`

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`

const CalculatorCard = ({
    button_text,
    image_alt,
    image_name = '',
    link = '',
    name,
    text,
}: CalculatorProps) => {
    const { region } = useBuildVariant()
    const data = useStaticQuery(query)

    return (
        <StyledCardContainer>
            <SubHeader as="h3" align="center">
                <Localize translate_text={name} />
            </SubHeader>
            <CardText align="center">
                <Localize translate_text={text} />
            </CardText>
            <ImageWrapper>
                <Desktop>
                    <QueryImage
                        data={region === "eu" ? data['eu_' + image_name] : data[image_name]}
                        alt={localize(image_alt)}
                    />
                </Desktop>
                <Mobile>
                    <QueryImage
                        data={
                            region === "eu"
                                ? data['eu_' + image_name + '_mobile']
                                : data[image_name + '_mobile']
                        }
                        alt={localize(image_alt)}
                    />
                </Mobile>
            </ImageWrapper>
            <StyledLinkButton tertiary to={link}>
                <Localize translate_text={button_text} />
            </StyledLinkButton>
        </StyledCardContainer>
    )
}

const calculators: CalculatorProps[] = [
    {
        index: 0,
        name: '_t_Margin calculator_t_',
        text: '_t_Calculate the margin you need to open and hold your positions with our margin calculator._t_',
        image_name: 'margin_calculator',
        image_alt: '_t_DMT5 margin trading calculator_t_',
        button_text: '_t_Try our margin calculator_t_',
        link: '/trader-tools/margin-calculator/',
    },
    {
        index: 1,
        name: '_t_Swap calculator_t_',
        text: '_t_Calculate your swap fee and know exactly what you are expected to pay or will earn for maintaining an overnight contract._t_',
        image_name: 'swap_calculator',
        image_alt: '_t_DMT5 swap trading calculator_t_',
        button_text: '_t_Try our swap calculator_t_',
        link: '/trader-tools/swap-calculator/',
    },
]

const MarginCalculator = () => {
    const { region } = useBuildVariant()
    const lang_direction = useLangDirection()

    const settings: CarouselProps = {
        options: {
            direction: lang_direction,
        },
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
            bottom_offset: '0',
        },
    }

    return (
        <StyledSectionContainer>
            <StyledContainer>
                <StyledFlex ai="center" jc="flex-start" tablet_jc="center" fd="column" wrap="wrap">
                    <StyledBox max_width="100%">
                        <MainHeader as="h2" type="page-title" lh="1.25" align="start">
                            <Localize translate_text="_t_Take control of your trades on Deriv MT5_t_" />
                        </MainHeader>
                        <StyledText>
                            {region === "eu" && (
                                <Localize
                                    translate_text="_t_Explore <0>CFDs</0> on Deriv MT5 and enjoy low spreads to increase your returns when the market moves in your favour._t_"
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
                            )}
                            {region !== "eu" && (
                                <Localize
                                    translate_text="_t_Explore <0>CFDs</0> on Deriv MT5, and enjoy high leverage and low spreads to increase your returns when the market moves in your favour._t_"
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
                            )}
                        </StyledText>
                        <StyledText>
                            <Localize translate_text="_t_With the calculators and numerous analytical tools available on the Deriv MT5 platform, you’ll be able to manage your capital and trading positions better._t_" />
                        </StyledText>
                    </StyledBox>
                </StyledFlex>
                <StyledFlex
                    fd="row"
                    jc="flex-start"
                    tablet_jc="center"
                    wrap="wrap"
                    ml="2.4rem"
                    tabletL={{ ml: '0px', pl: '16px', pr: '16px' }}
                >
                    <CardContainer>
                        <Carousel {...settings}>
                            {calculators.map((calculator) => (
                                <CalculatorCard
                                    key={calculator.index}
                                    name={calculator.name}
                                    image_name={calculator.image_name}
                                    image_alt={calculator.image_alt}
                                    text={calculator.text}
                                    link={calculator.link}
                                    button_text={calculator.button_text}
                                />
                            ))}
                        </Carousel>
                    </CardContainer>
                </StyledFlex>
            </StyledContainer>
        </StyledSectionContainer>
    )
}

export default MarginCalculator
