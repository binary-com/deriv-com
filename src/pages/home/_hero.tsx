import React, { ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VerticalCarousel from './_vertical-carousel.js'
import Slideshow from 'components/elements/slideshow'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, Box, Flex } from 'components/containers'
import { BackgroundImage, Header } from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        hero_background: file(relativePath: { eq: "home/hero_bg.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform1: file(relativePath: { eq: "home/hero_platform1.png" }) {
            ...fadeIn
        }
        hero_platform2: file(relativePath: { eq: "home/hero_platform2.png" }) {
            ...fadeIn
        }
        hero_platform3: file(relativePath: { eq: "home/hero_platform3.png" }) {
            ...fadeIn
        }
        hero_platform4: file(relativePath: { eq: "home/hero_platform4.png" }) {
            ...fadeIn
        }
    }
`
type HeroProps = {
    is_ppc: boolean
}

const contents = [
    <Localize key={0} translate_text="Tight spreads" />,
    <Localize key={1} translate_text="Sharp prices" />,
    <Localize key={2} translate_text="24x7 trading" />,
    <Localize key={3} translate_text="100+ tradeable assets" />,
    <Localize key={4} translate_text="20+ years of experience" />,
]

const contents_ppc = [
    <Localize key={3} translate_text="Tight spreads" />,
    <Localize key={2} translate_text="Sharp prices" />,
    <Localize key={1} translate_text="100+ tradeable assets" />,
    <Localize key={0} translate_text="20+ years of experience" />,
]

const StyledContainer = styled(Container)`
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 12rem;

    @media ${device.laptopM} {
        padding: 0 8rem;
    }

    @media ${device.tabletL} {
        align-items: center;
        max-width: 588px;
        padding: 0 16px;
    }
`
const StyledHeroContainer = styled(Flex)`
    max-width: 1200px;
    margin: 0 auto;

    @media ${device.tabletL} {
        flex-direction: column;
        max-width: 100%;
    }
`
const StyledHeaderWrapper = styled(Flex)`
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
    }
`
const HeroWrapper = styled.section`
    width: 100%;
    padding: 80px 0;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
    position: relative;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: 40px 0 46px;
    }
`

const HeroButton = styled(LinkButton)`
    padding: 17px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;

    @media ${device.tabletL} {
        margin: 0 auto;
        font-size: 20px;
        line-height: 30px;
    }
    @media ${device.mobileS} {
        font-size: 18px;
        padding: 12px 20px;
    }
`
const StyledHeader = styled(Header)`
    font-size: 80px;
    line-height: 100px;

    @media ${device.tabletL} {
        font-size: 40px;
        line-height: 50px;
        margin-right: 8px;
        width: unset;
    }
`
const HeroText = styled(Header)`
    min-height: auto;
`

const Details = styled(Flex)`
    max-width: 486px;
    flex-direction: column;
    justify-content: flex-start;
    margin-right: 52px;
    @media ${device.bp1060} {
        max-height: unset;
    }
    @media ${device.tabletL} {
        width: unset;
        max-width: 100%;
        margin-right: unset;
        margin-bottom: 40px;
    }
`
const ImageWrapper = styled(Flex)`
    max-width: 662px;
    margin: 0 auto;
    align-items: center;

    @media ${device.tabletL} {
        margin-top: 0;
        width: unset;
        padding: 0 39px;
    }
`

const Hero = ({ is_ppc }: HeroProps): ReactNode => {
    const { hero_background, hero_platform1, hero_platform2, hero_platform3, hero_platform4 } =
        useStaticQuery(query)
    const text = !is_ppc
        ? localize('Trade forex, commodities, synthetic indices, stocks, and stock indices.')
        : localize('Trade forex, commodities, stocks, and stock indices')

    return (
        <HeroWrapper>
            <BackgroundImage is_unstyled data={hero_background}>
                <StyledContainer fd="column" ai="flex-start">
                    <StyledHeroContainer>
                        <Details>
                            <StyledHeaderWrapper
                                height="unset"
                                mb="16px"
                                direction="column"
                                tabletL={{ fd: 'row', mb: '8px', max_width: '100%' }}
                            >
                                <StyledHeader color="white">
                                    <Localize translate_text="Simple." />
                                </StyledHeader>
                                <StyledHeader color="white">
                                    <Localize translate_text="Flexible." />
                                </StyledHeader>
                                <StyledHeader color="white">
                                    <Localize translate_text="Reliable." />
                                </StyledHeader>
                            </StyledHeaderWrapper>
                            <HeroText
                                as="h2"
                                type="sub-section-title"
                                color="white"
                                max_width="430px"
                                weight="normal"
                            >
                                {text}
                            </HeroText>
                            <VerticalCarousel contents={!is_ppc ? contents : contents_ppc} />
                            <Box tabletL={{ mt: '-8px' }}>
                                <HeroButton
                                    id="dm-hero-signup"
                                    secondary="true"
                                    to="/signup/"
                                    p="17px 24px"
                                    height="64px"
                                >
                                    <Localize translate_text="Create free demo account" />
                                </HeroButton>
                            </Box>
                        </Details>
                        <ImageWrapper>
                            <Slideshow
                                images={[
                                    hero_platform1,
                                    hero_platform2,
                                    hero_platform3,
                                    hero_platform4,
                                ]}
                                interval={6}
                            />
                        </ImageWrapper>
                    </StyledHeroContainer>
                </StyledContainer>
            </BackgroundImage>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    is_ppc: PropTypes.bool,
}

export default Hero
