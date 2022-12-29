import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import { besquare_signup_url } from 'common/constants'
import banner from 'images/common/careers/besquare-banner.png'
import bannerMobile from 'images/common/careers/besquare-banner-mobile.png'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 1200px;
    padding: 0 0 80px;

    @media (max-width: 1230px) {
        padding: 0 24px 80px;
    }

    @media ${device.tabletL} {
        width: 90%;
        padding: 0 0 40px;
    }
`
const MainWrapper = styled(Flex)`
    background: var(--color-black);
    border-radius: 10px;
    height: 390px;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top right;

    @media ${device.laptopM} {
        height: 360px;
    }

    @media (max-width: 1100px) {
        height: 330px;
    }

    @media ${device.tabletL} {
        height: 546px;
        width: 328px;
        background-image: url(${bannerMobile});
        background-position: bottom -36px right;
    }
`
const LeftWrapper = styled(Flex)`
    padding: 55px 0 55px 100px;
    justify-content: flex-start;
    @media ${device.laptopM} {
        padding: 55px 0 55px 60px;
    }
    @media (max-width: 1100px) {
        padding: 55px 0 55px 32px;
    }
    @media ${device.tabletL} {
        padding: 40px 21px 0 29px;
        justify-content: center;
        align-items: flex-start;
    }
`
const LeftChild = styled(Flex)`
    flex-direction: column;
    color: white;
    max-width: 326px;
    z-index: 2;

    @media ${device.tabletL} {
        height: unset;
    }
`

const StyledHeader = styled(Header)`
    font-size: 32px;
    line-height: 40px;
    color: var(--color-white);
    margin-bottom: 16px;

    @media ${device.tabletL} {
        margin-bottom: 8px;
        font-size: 28px;
        line-height: 34px;
        max-width: 278px;
    }
`
const StyledText = styled(Text)`
    font-size: 16px;
    line-height: 24px;
    color: var(--color-white);
    margin-bottom: 3rem;

    @media (max-width: 1100px) {
        margin-bottom: 16px;
    }

    @media ${device.tabletL} {
        font-size: 11px;
        line-height: 16px;
        max-width: 224px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    border-radius: 4px;
    width: 102px;
    white-space: nowrap;

    @media ${device.tabletL} {
        height: fit-content;
        padding: 6px 16px;
    }
`

const BeSquareBanner = () => {
    return (
        <StyledSection>
            <MainWrapper>
                <LeftWrapper>
                    <LeftChild>
                        <StyledHeader as="h3" type="section-title">
                            Join the Deriv graduate programme
                        </StyledHeader>
                        <StyledText>
                            Are you a go-getter who loves learning and taking on new challenges?
                            Then apply for the Deriv graduate programme to start an exciting journey
                            that will transform your professional life!
                        </StyledText>
                        <StyledLinkButton
                            secondary
                            to={besquare_signup_url}
                            external
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Apply now
                        </StyledLinkButton>
                    </LeftChild>
                </LeftWrapper>
            </MainWrapper>
        </StyledSection>
    )
}
export default BeSquareBanner
