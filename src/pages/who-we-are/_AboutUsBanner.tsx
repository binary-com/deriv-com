import React from 'react'
import styled from 'styled-components'
import BgMobile from 'images/common/who-we-are/about-us-banner-mobile.jpg'
import Bg from 'images/common/who-we-are/about-us-banner.jpg'
import { localize } from 'components/localization'
import { SectionContainer, Flex } from 'components/containers'
import device from 'themes/device'
import { Header } from 'components/elements'
import { LinkButton } from 'components/form'

const StyledSectionContainer = styled(SectionContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px 120px;
    flex-wrap: nowrap;
    @media ${device.tablet} {
        padding: 0 40px 40px;
    }
    @media ${device.mobileL} {
        padding: 0 16px 40px;
    }
`

const StyledFlex = styled(Flex)`
    border-radius: 10px;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    @media ${device.laptopM} {
        width: 100%;
    }
    @media (max-width: 610px) {
        background-image: url(${BgMobile});
        background-position-x: unset;
        background-position: left;
        height: 546px;
    }
    @media (max-width: 359px) {
        background-position-x: -40px;
    }
`

const PictureFlex = styled(Flex)`
    width: 373px;
    margin: 32px 0 32px 100px;
    @media ${device.laptop} {
        margin: 32px 0 32px 50px;
    }
    @media ${device.tablet} {
        margin: 40px 0 0 29px;
        width: 250px;
    }
    @media (max-width: 359px) {
        margin: 10px 10px 0 29px;
    }
`

const StyledHeader = styled(Header)`
    line-height: 40px;
    @media ${device.laptop} {
        line-height: 34px;
    }
    @media ${device.tabletL} {
        font-size: 30px;
    }
    @media ${device.tablet} {
        font-size: 28px;
    }
`

const StyledHeader2 = styled(Header)`
    color: var(--color-white);
    margin: 12px 0 8px;
    @media ${device.tablet} {
        margin: 6px 0 10px;
        font-size: 11px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0;
    }
`

const StyledLinkButton = styled(LinkButton)`
    @media ${device.tablet} {
        padding: 8px 16px;
    }
`

const AboutUsBanner = () => {
    return (
        <StyledSectionContainer>
            <StyledFlex direction="column" height="auto" min_height="288px" width="1200px">
                <PictureFlex jc="start" ai="start" direction="column">
                    <StyledHeader as="h3" width="100%" type="unset" size="32px" color="white">
                        {localize('We have a huge mission, an incredible team, and rapid growth.')}
                    </StyledHeader>
                    <StyledHeader2
                        width="100%"
                        type="sub-paragraph"
                        as="p"
                        size="16px"
                        weight="400px"
                    >
                        {localize('Join and grow with us.')}
                    </StyledHeader2>
                    <StyledLinkButton secondary to="/careers/">
                        {localize('See our open positions')}
                    </StyledLinkButton>
                </PictureFlex>
            </StyledFlex>
        </StyledSectionContainer>
    )
}

export default AboutUsBanner
