import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import VerticalCarousel from './_vertical-carousel.js'
import device from 'themes/device'
import { LinkButton } from 'components/form'
import { Container, CssGrid, Box, Flex, Show } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { Localize, localize } from 'components/localization'

const query = graphql`
    query {
        background: file(relativePath: { eq: "home/platform_devices.png" }) {
            ...fadeIn
        }
        background_mobile: file(relativePath: { eq: "home/platform_devices_mobile.png" }) {
            ...fadeIn
        }
    }
`

const HeroWrapper = styled.section`
    width: 100%;
    padding: 8rem 0;
    background-color: var(--color-black-7);
    position: relative;
`

const HeroButton = styled(LinkButton)`
    height: 4rem;
    display: flex;
    align-items: center;
    max-width: 20.5rem;

    @media ${device.tabletL} {
        margin: 0 auto;
        display: flex;
        font-size: 1.75rem;
        justify-content: center;
        max-width: 25.5rem;
        height: 5rem;
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
const TypeWriter = styled(Header)`
    min-height: 7.2rem;
`
const HeroContainer = styled(CssGrid)`
    grid-template-columns: repeat(12, 1fr);
    width: 100%;
    grid-column-gap: 2.4rem;
    grid-template-areas:
        'details details details details details video video video video video video video'
        'button button button button button button button button button button button button';

    @media ${device.tabletL} {
        grid-template-columns: repeat(1, 1fr);
        grid-template-areas:
            'details'
            'video'
            'button';
    }
`

const Details = styled(Box)`
    grid-area: details;
    max-height: 58.7rem;
`
const ButtonWrapper = styled(Box)`
    grid-area: button;

    @media ${device.tabletL} {
        margin-top: 3rem;
    }
`
const ImageWrapper = styled(Box)`
    grid-area: video;
    margin-top: 4rem;

    @media ${device.tabletL} {
        margin-top: 0;
    }
`
export const Hero = () => {
    const data = useStaticQuery(query)
    const typewriter_text = localize('Trade forex, commodities, synthetic and stock indices')
    const check_first_load = false

    return (
        <HeroWrapper>
            <Container>
                <HeroContainer>
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
                            as="h4"
                            type="sub-section-title"
                            color="white"
                            max_width="430px"
                            weight="normal"
                        >
                            {localize(typewriter_text)}
                        </TypeWriter>
                        <VerticalCarousel contents={contents} />
                    </Details>
                    <ImageWrapper>
                        {check_first_load && (
                            <Show.Mobile>
                                <QueryImage
                                    data={data.background_mobile}
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
                    <ButtonWrapper>
                        <HeroButton secondary="true" to="/signup/">
                            <Localize translate_text="Create free demo account" />
                        </HeroButton>
                    </ButtonWrapper>
                </HeroContainer>
            </Container>
        </HeroWrapper>
    )
}
