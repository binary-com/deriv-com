import React from 'react'
import styled from 'styled-components'
import { StaticImage } from 'gatsby-plugin-image'
import VerticalCarousel from './_vertical-carousel'
import PlatformSlideshow from './_platform-slideshow'
import { contents, contents_ppc, header_items } from './_data'
import useAuthCheck from 'components/hooks/use-auth-check'
import device from 'themes/device'
import { Button } from 'components/form'
import { Container, Box, Flex } from 'components/containers'
import { Header } from 'components/elements'
import useRegion from 'components/hooks/use-region'
import { Localize, localize } from 'components/localization'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'
import { handleGetTrading } from 'components/custom/utils'

type HeroProps = {
    is_ppc?: boolean
}

const HeroWrapper = styled.section`
    position: relative;
    width: 100%;
    padding: calc(7rem + 80px) 0;
    min-height: 915px;
    background: linear-gradient(241.35deg, #122434 12.86%, #060c11 85.61%, #060c11 85.61%);
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
        width: 100%;
        font-size: 14px;
        padding: 14px 16px;
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
    const { is_region_loading, is_eu, is_row } = useRegion()
    const [is_logged_in, is_auth_checked] = useAuthCheck()
    const handleSignup = useHandleSignup()

    return (
        <HeroWrapper>
            <Flex
                height="100%"
                position="absolute"
                ai="center"
                top="0"
                tablet={{ ai: 'flex-end', pb: '20rem' }}
            >
                <Box>
                    <StaticImage
                        src="../../images/common/home/hero_bg.png"
                        alt={localize('_t_world map_t_')}
                        loading="eager"
                        formats={['avif', 'webp', 'auto']}
                        quality={26}
                        objectFit="contain"
                        placeholder="none"
                    />
                </Box>
            </Flex>
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
                        z_index="2"
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
                            min_height="auto"
                            weight="normal"
                        >
                            {is_eu && (
                                <Localize translate_text="_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived._t_" />
                            )}
                            {is_row && (
                                <Localize translate_text="_t_Trade forex, stocks & indices, cryptocurrencies, commodities, and derived._t_" />
                            )}
                        </Header>
                        <VerticalCarousel contents={is_ppc ? contents_ppc : contents} />
                        <Box tabletL={{ mt: '-8px' }}>
                            {is_auth_checked &&
                                (is_logged_in ? (
                                    <HeroButton
                                        onClick={handleGetTrading}
                                        id="dm-hero-signup"
                                        secondary
                                    >
                                        <Localize translate_text="_t_Get Trading_t_" />
                                    </HeroButton>
                                ) : (
                                    <HeroButton
                                        disabled={is_region_loading}
                                        onClick={handleSignup}
                                        id="dm-hero-signup"
                                        secondary
                                    >
                                        <Localize translate_text="_t_Create free demo account_t_" />
                                    </HeroButton>
                                ))}
                        </Box>
                    </Flex>
                    <PlatformSlideshow />
                </Flex>
            </Container>
        </HeroWrapper>
    )
}

export default Hero
