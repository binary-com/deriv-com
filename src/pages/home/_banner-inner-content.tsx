import React from 'react'
import styled from 'styled-components'
import { contents, contents_ppc, header_items } from './_data'
import VerticalCarousel from './_vertical-carousel'
import { Header } from 'components/elements'
import { Container, Box, Flex } from 'components/containers'
import { Button } from 'components/form'
import useRegion from 'components/hooks/use-region'
import { Localize } from 'components/localization'
import useAuthCheck from 'components/hooks/use-auth-check'
import useHandleSignup from 'components/hooks/use-handle-signup'
import { TString } from 'types/generics'
import device from 'themes/device'
import { handleGetTrading } from 'components/layout/nav/util/nav-methods'

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
type HeroProps = {
    is_ppc?: boolean
}

const HeroHeader = ({ text }: { text: TString }) => {
    return (
        <StyledHeader type="main-landing-title" color="white">
            <Localize translate_text={text} />
        </StyledHeader>
    )
}

const BannerInnerContent = ({ is_ppc }: HeroProps) => {
    const { is_region_loading, is_eu, is_row } = useRegion()
    const handleSignup = useHandleSignup()
    const [is_logged_in] = useAuthCheck()
    return (
        <Container fd="column" ai="flex-start">
            <Flex
                m="0 auto"
                jc="left"
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
                        min_height="auto"
                        weight="normal"
                    >
                        {is_eu && (
                            <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                        )}
                        {is_row && (
                            <Localize translate_text="Trade forex, stocks & indices, cryptocurrencies, commodities, and derived." />
                        )}
                    </Header>
                    <VerticalCarousel contents={is_ppc ? contents_ppc : contents} />
                    <Box tabletL={{ mt: '-8px' }}>
                        {is_logged_in ? (
                            <HeroButton onClick={handleGetTrading} id="dm-hero-signup" secondary>
                                <Localize translate_text="Get Trading" />
                            </HeroButton>
                        ) : (
                            <HeroButton
                                disabled={is_region_loading}
                                onClick={handleSignup}
                                id="dm-hero-signup"
                                secondary
                            >
                                <Localize translate_text="Create free demo account" />
                            </HeroButton>
                        )}
                    </Box>
                </Flex>
                {/* <PlatformSlideshow /> */}
            </Flex>
        </Container>
    )
}

export default BannerInnerContent
