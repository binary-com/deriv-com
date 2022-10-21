import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import VerticalCarousel from './_vertical-carousel'
import PlatformSlideshow from './_platform-slideshow'
import { contents, contents_ppc, header_items } from './_data'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Box, Flex } from 'components/containers'
import { BackgroundImage, Header } from 'components/elements'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { Localize } from 'components/localization'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'

const query = graphql`
    query {
        hero_background: file(relativePath: { eq: "home/hero_bg.png" }) {
            ...homePageHeroFadeIn
        }
    }
`

type HeroProps = {
    is_ppc?: boolean
}

const HeroWrapper = styled.section`
    width: 100%;
    padding: calc(7rem + 80px) 0;
    min-height: 915px;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
    position: relative;
    @media ${device.tabletL} {
        flex-wrap: wrap;
        justify-content: flex-start;
        padding: calc(7rem + 40px) 0 46px;
        min-height: 846px;
    }
`
const HeroButton = styled(Button)`
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

const HeroHeader = ({ text }: { text: TString }) => {
    return (
        <StyledHeader type="main-landing-title" color="white">
            <Localize translate_text={text} />
        </StyledHeader>
    )
}

const Hero = ({ is_ppc }: HeroProps) => {
    const data = useStaticQuery(query)
    const { is_uk, is_loading, is_eu, is_row } = useCountryRule()
    const handleSignup = useHandleSignup()

    return (
        <HeroWrapper>
            <BackgroundImage is_unstyled data={data.hero_background} loading="eager">
                <Container fd="column" ai="flex-start">
                    <Flex
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
                                {header_items.map((item) => (
                                    <HeroHeader key={item.id} text={item.text} />
                                ))}
                            </Flex>
                            <Header
                                as="h2"
                                type="sub-section-title"
                                color="white"
                                max_width="430px"
                                min_height="auto"
                                weight="normal"
                            >
                                {is_eu && (
                                    <>
                                        <Localize translate_text="Trade forex, synthetics, stocks & indices, cryptocurrencies, and commodities." />
                                    </>
                                )}
                                {is_uk && (
                                    <>
                                        <Localize translate_text="Trade forex, stocks & indices, and commodities." />
                                    </>
                                )}
                                {is_row && (
                                    <>
                                        <Localize translate_text="Trade forex, synthetics, stocks & indices, cryptocurrencies, basket indices, and commodities." />
                                    </>
                                )}
                            </Header>
                            <VerticalCarousel
                                contents={is_ppc && is_uk ? contents_ppc : contents}
                            />
                            <Box tabletL={{ mt: '-8px' }}>
                                <HeroButton
                                    disabled={is_loading}
                                    onClick={handleSignup}
                                    id="dm-hero-signup"
                                    secondary
                                >
                                    <Localize translate_text="Create free demo account" />
                                </HeroButton>
                            </Box>
                        </Flex>
                        <PlatformSlideshow />
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
