import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from 'components/containers'
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
    width: 100vw;
    max-width: 100%;
    height: 50vh;
    background-size: 75%;
    background-color: var(--color-black);
    border-radius: 10px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: right;
    padding: 100px;
    color: white;

    @media ${device.tablet} {
        background-image: url(${bannerMobile});
        background-position: bottom;
        background-size: contain;
        height: 85vh;
        padding: 50px 30px;
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
    width: 30%;

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
            <BackgroundImage>
                <StyledDiv>
                    <StyledHeader as="h3" type="section-title">
                        Apply now
                    </StyledHeader>
                    <StyledText>
                        Are you a go-getter who loves learning tech skills and taking on new
                        challenges? Then apply for Deriv graduate programme to start an exciting
                        journey that will transform your professional life!
                    </StyledText>
                    <StyledLinkButton
                        secondary="true"
                        to={zoho_url}
                        external="true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join BeSquare
                    </StyledLinkButton>
                </StyledDiv>
            </BackgroundImage>
        </StyledSection>
    )
}
export default BeSquareBanner
