import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex, Show } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { zoho_url } from 'common/constants'
import banner from 'images/common/careers/besquare-banner.png'
import bannerMobile from 'images/common/careers/besquare-banner-mobile.png'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    width: 85%;
    margin: 0 auto;

    @media ${device.tablet} {
        width: 90%;
    }
`
const BackgroundImage = styled.div`
    background-color: var(--color-black);
    border-radius: 10px;
    padding: 70px 100px;
    color: white;
    position: relative;
    height: 41.9rem;

    @media ${device.laptopL} {
        height: 397px;
    }

    @media ${device.laptopM} {
        padding: 50px;
        height: 353px;
    }

    @media ${device.tablet} {
        background-image: url(${bannerMobile});
        background-position: bottom;
        background-size: cover;
        height: 100vh;
        padding: 20px;
    }
`

const BackgroundPattern = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 95rem;
    height: initial;
    border-radius: 10px;

    @media ${device.laptopL} {
        width: 90rem;
        height: initial;
    }
    @media ${device.laptopM} {
        width: 80rem;
        height: initial;
    }
    @media ${device.tabletL} {
        width: 54rem;
    }
    @media ${device.tablet} {
        width: 44rem;
    }
    @media ${device.tabletS} {
        width: 400px;
    }
    @media ${device.mobileL} {
        width: unset;
        max-width: unset;
    }
`

const StyledHeader = styled(Header)`
    font-size: 32px;
    line-height: 40px;
    color: var(--color-white);
    margin-bottom: 1rem;

    @media ${device.tablet} {
        font-size: 28px;
        line-height: 34px;
    }
`
const StyledText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    margin-bottom: 3rem;

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 20px;
    }
`

const StyledDiv = styled.div`
    width: 38%;

    @media ${device.laptopL} {
        width: 32%;
    }

    @media ${device.tablet} {
        width: 80%;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    border-radius: 4px;

    @media ${device.tablet} {
        font-size: 12px;
        line-height: 20px;
    }
`

const BeSquareBanner = () => {
    return (
        <StyledSection>
            <Flex position="relative">
                <BackgroundImage>
                    <StyledDiv>
                        <StyledHeader as="h3" type="section-title">
                            Join the Deriv graduate programme
                        </StyledHeader>
                        <StyledText>
                            Are you a go-getter who loves learning and taking on new challenges?
                            Then apply for the Deriv graduate programme to start an exciting journey
                            that will transform your professional life!
                        </StyledText>
                        <StyledLinkButton
                            secondary="true"
                            to={zoho_url}
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply now
                        </StyledLinkButton>
                    </StyledDiv>
                    <Show.Desktop>
                        <BackgroundPattern src={banner} alt="background pattern" />
                    </Show.Desktop>
                </BackgroundImage>
            </Flex>
        </StyledSection>
    )
}
export default BeSquareBanner
