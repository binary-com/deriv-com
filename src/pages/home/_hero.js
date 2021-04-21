import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import VerticalCarousel from './_vertical-carousel.js'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, Box, Flex, Show } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        background: file(relativePath: { eq: "home/platform_devices.png" }) {
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
const FadeIn = keyframes`
    0% {
        opacity: 0;
        margin-left: -75px;
    }
    100% {
        opacity: 1;
        margin-left: 0;
    }
`
const StyledHeader = styled(Header)`
    animation-name: ${FadeIn};
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-delay: ${(props) => props.ad};
    will-change: opacity, margin-left;
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
    const typewriter_text = !is_ppc
        ? localize('Trade forex, commodities, synthetic and stock indices')
        : localize('Trade forex, commodities, and stock indices')
    const [type_writer, setTypeWriter] = React.useState('')
    const [check_first_load, setFirstLoad] = React.useState(false)
    let type_writer_timeout

    const typeWriterAnimation = (i = 0) => {
        if (i < typewriter_text.length) {
            setTypeWriter(typewriter_text.substring(0, i + 1))
            type_writer_timeout = setTimeout(() => typeWriterAnimation(i + 1), 13)
        }
    }

    React.useEffect(() => {
        let start_animations_timeout = setTimeout(() => {
            typeWriterAnimation()
        }, 1200)
        setFirstLoad(true)
        return () => {
            clearTimeout(start_animations_timeout)
            clearTimeout(type_writer_timeout)
        }
    }, [])

    return (
        <HeroWrapper>
            <StyledContainer fd="column" ai="flex-start">
                <StyledHeroContainer>
                    <Details>
                        <Show.Desktop>
                            <Flex mb="1.6rem" direction="column">
                                <StyledHeader color="white" ad="0.5s">
                                    <Localize translate_text="Simple." />
                                </StyledHeader>
                                <StyledHeader color="white" ad="0.6s">
                                    <Localize translate_text="Flexible." />
                                </StyledHeader>
                                <StyledHeader color="white" ad="0.7s">
                                    <Localize translate_text="Reliable." />
                                </StyledHeader>
                            </Flex>
                        </Show.Desktop>
                        {check_first_load && (
                            <Show.Mobile>
                                <Flex>
                                    <StyledHeader color="white" mb="2rem" as="h1">
                                        <Localize translate_text="Simple. Flexible. Reliable." />
                                    </StyledHeader>
                                </Flex>
                            </Show.Mobile>
                        )}

                        <TypeWriter
                            as="h2"
                            type="sub-section-title"
                            color="white"
                            max_width="430px"
                            weight="normal"
                        >
                            {localize(type_writer)}
                        </TypeWriter>
                        <VerticalCarousel contents={!is_ppc ? contents : contents_ppc} />
                    </Details>
                    <ImageWrapper>
                        {check_first_load && (
                            <Show.Mobile>
                                <QueryImage
                                    data={data.background}
                                    alt="platform devices mobile"
                                    width="100%"
                                    height="233"
                                />
                            </Show.Mobile>
                        )}
                        <Show.Desktop>
                            <QueryImage
                                data={data.background}
                                alt="platform devices"
                                width="100%"
                                height="346"
                            />
                        </Show.Desktop>
                    </ImageWrapper>
                </StyledHeroContainer>
                <ButtonWrapper>
                    <HeroButton secondary="true" to="/signup/">
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
