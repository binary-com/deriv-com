import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VerticalCarousel from './_vertical-carousel.js'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, Box, Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        background: file(relativePath: { eq: "home/platform_devices.png" }) {
            ...homePageHeroFadeIn
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
    background-color: var(--color-black-7);
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
const Hero = ({ is_ppc }) => {
    const data = useStaticQuery(query)
    const text = !is_ppc
        ? localize('Trade forex, commodities, synthetic indices, stocks, and stock indices.')
        : localize('Trade forex, commodities, stocks, and stock indices')

    return (
        <HeroWrapper>
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
                        <QueryImage
                            data={data.background}
                            alt="platform devices"
                            width="100%"
                            height="346"
                            loading="eager"
                        />
                    </ImageWrapper>
                </StyledHeroContainer>
                <ButtonWrapper>
                    <HeroButton id="dm-hero-signup" secondary="true" to="/signup/">
                        <Localize translate_text="Create free demo account" />
                    </HeroButton>
                </ButtonWrapper>
            </StyledContainer>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    is_ppc: PropTypes.bool,
}

export default Hero
