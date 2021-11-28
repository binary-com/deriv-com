import React, { ReactNode } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VerticalCarousel from './_vertical-carousel.js'
import HeroSlideshow from './_hero-slideshow'
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

const StyledContainer = styled(Container)`
    @media ${device.tabletL} {
        align-items: center;
    }
`
const HeroWrapper = styled.section`
    width: 100%;
    padding: 8rem 0;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
    position: relative;
`

const HeroButton = styled(LinkButton)`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 205px;
    width: fit-content;

    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const StyledHeader = styled(Header)`
    font-size: 8rem;
    line-height: 1.25;

    @media ${device.tabletL} {
        font-size: 40px;
    }
`
const contents = [
    <Localize key={0} translate_text="20+ years of experience" />,
    <Localize key={1} translate_text="100+ tradeable assets" />,
    <Localize key={2} translate_text="24x7 trading" />,
    <Localize key={3} translate_text="Sharp prices" />,
    <Localize key={4} translate_text="Tight spreads" />,
]

const contents_ppc = [
    <Localize key={0} translate_text="20+ years of experience" />,
    <Localize key={1} translate_text="100+ tradeable assets" />,
    <Localize key={2} translate_text="Sharp prices" />,
    <Localize key={3} translate_text="Tight spreads" />,
]

const TypeWriter = styled(Header)`
    min-height: 7.2rem;
`
const StyledHeroContainer = styled(Flex)`
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const Details = styled(Box)`
    width: 57%;
    max-height: 58.7rem;
    @media ${device.bp1060} {
        max-height: unset;
    }
    @media ${device.tabletL} {
        width: unset;
    }
`
const ButtonWrapper = styled(Box)`
    @media ${device.tabletL} {
        margin-top: 3rem;
    }
`
const ImageWrapper = styled(Box)`
    width: 50.8%;
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin-top: 0;
        width: unset;
    }
`

type HeroProps = {
    is_ppc: boolean
}

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
                            <Flex height="unset" mb="1.6rem" direction="column">
                                <StyledHeader color="white">
                                    <Localize translate_text="Simple." />
                                </StyledHeader>
                                <StyledHeader color="white">
                                    <Localize translate_text="Flexible." />
                                </StyledHeader>
                                <StyledHeader color="white">
                                    <Localize translate_text="Reliable." />
                                </StyledHeader>
                            </Flex>
                            <TypeWriter
                                as="h2"
                                type="sub-section-title"
                                color="white"
                                max_width="430px"
                                weight="normal"
                            >
                                {text}
                            </TypeWriter>
                            <VerticalCarousel contents={!is_ppc ? contents : contents_ppc} />
                        </Details>
                        <ImageWrapper>
                            <HeroSlideshow
                                images={[
                                    hero_platform1,
                                    hero_platform2,
                                    hero_platform3,
                                    hero_platform4,
                                ]}
                                interval={4}
                            />
                        </ImageWrapper>
                    </StyledHeroContainer>
                    <ButtonWrapper>
                        <HeroButton id="dm-hero-signup" secondary="true" to="/signup/">
                            <Localize translate_text="Create free demo account" />
                        </HeroButton>
                    </ButtonWrapper>
                </StyledContainer>
            </BackgroundImage>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    is_ppc: PropTypes.bool,
}

export default Hero
