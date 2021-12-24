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
            ...homePageHeroFadeIn
        }
        hero_platform2: file(relativePath: { eq: "home/hero_platform2.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform3: file(relativePath: { eq: "home/hero_platform3.png" }) {
            ...homePageHeroFadeIn
        }
        hero_platform4: file(relativePath: { eq: "home/hero_platform4.png" }) {
            ...homePageHeroFadeIn
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

const HeroWrapper = styled.section`
    width: 100%;
    padding: calc(7rem + 80px) 0;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
    position: relative;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: calc(7rem + 40px) 0 46px;
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
    @media ${device.tabletL} {
        margin-right: 8px;
        width: unset;
    }
`

const Hero = ({ is_ppc }: HeroProps): ReactNode => {
    const { hero_background, hero_platform1, hero_platform2, hero_platform3, hero_platform4 } =
        useStaticQuery(query)
    const text = !is_ppc
        ? localize('Trade forex, synthetics, stocks & indices, cryptocurrencies, and commodities.')
        : localize('Trade forex, commodities, stocks, and stock indices')

    return (
        <HeroWrapper>
            <BackgroundImage is_unstyled data={hero_background}>
                <Container
                    width="100%"
                    max_width="100%"
                    m="0 auto"
                    p="0 12rem"
                    fd="column"
                    ai="flex-start"
                    laptopM={{ p: '0 8rem' }}
                    tabletL={{ ai: 'center', max_width: '588px', p: '0 16px' }}
                >
                    <Flex
                        max_width="1200px"
                        m="0 auto"
                        tabletL={{
                            fd: 'column',
                            max_width: '100%',
                        }}
                    >
                        <Flex
                            max_width="486px"
                            fd="column"
                            jc="flex-start"
                            mr="52px"
                            bp1060={{ max_height: 'unset' }}
                            tabletL={{
                                width: 'unset',
                                max_width: '100%',
                                mr: 'unset',
                                mb: '40px',
                            }}
                        >
                            <Flex
                                height="unset"
                                mb="16px"
                                direction="column"
                                tabletL={{
                                    fd: 'row',
                                    fw: 'wrap',
                                    jc: 'flex-start',
                                    mb: '8px',
                                    max_width: '100%',
                                }}
                            >
                                <StyledHeader type="main-landing-title" color="white">
                                    <Localize translate_text="Simple." />
                                </StyledHeader>
                                <StyledHeader type="main-landing-title" color="white">
                                    <Localize translate_text="Flexible." />
                                </StyledHeader>
                                <StyledHeader type="main-landing-title" color="white">
                                    <Localize translate_text="Reliable." />
                                </StyledHeader>
                            </Flex>
                            <Header
                                as="h2"
                                type="sub-section-title"
                                color="white"
                                max_width="430px"
                                min_height="auto"
                                weight="normal"
                            >
                                {text}
                            </Header>
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
                        </Flex>
                        <Flex
                            max_width="662px"
                            m="0 auto"
                            tabletL={{ mt: '0', width: 'unset', p: '0 39px' }}
                        >
                            <Slideshow
                                images={[
                                    hero_platform1,
                                    hero_platform2,
                                    hero_platform3,
                                    hero_platform4,
                                ]}
                                interval={6}
                            />
                        </Flex>
                    </Flex>
                </Container>
            </BackgroundImage>
        </HeroWrapper>
    )
}

Hero.propTypes = {
    is_ppc: PropTypes.bool,
}

export default Hero
