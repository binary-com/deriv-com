import React from 'react'
import styled from 'styled-components'
import { SectionContainer, Flex } from 'components/containers'
import { Header, Text } from 'components/elements'
import { LinkButton } from 'components/form'
import banner from 'images/common/p2p/banner.png'
import bannerBG from 'images/common/p2p/gradient_bg.png'
import mobilebannerBG from 'images/common/p2p/mobile_gradient_bg.png'
import mobilebanner from 'images/common/p2p/mobile_banner.png'
import device from 'themes/device'

const StyledSection = styled(SectionContainer)`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    border-radius: 10px;
    max-width: 1200px;
    padding: 0 0 80px;
    margin-top: 100px;

    @media (max-width: 1230px) {
        padding: 0 24px 80px;
    }

    @media ${device.tabletL} {
        width: 90%;
        padding: 0 0 40px;
    }
`
const MainWrapper = styled(Flex)`
    border-radius: 10px;
    height: 390px;
    background-image: url(${banner}), url(${bannerBG});
    background-repeat: no-repeat, no-repeat;
    background-size: 575px 335px, cover;
    background-position: bottom right;

    @media ${device.laptopM} {
        height: 360px;
    }

    @media (max-width: 1100px) {
        height: 330px;
    }

    @media ${device.laptopM} {
        background-size: 433px 305px, cover;
    }

    @media ${device.tabletL} {
        background-image: url(${mobilebanner}), url(${mobilebannerBG});
        background-size: 315px 206px, cover;
        height: 543px;
        width: 360px;
        background-position: bottom -1px center;
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
    max-width: 500px;
    z-index: 2;

    @media ${device.laptopM} {
        max-width: 514px;
    }
    @media (max-width: 1100px) {
        max-width: 480px;
    }

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
        max-width: 378px;
    }
`
const StyledText = styled(Text)`
    color: var(--color-white);
    margin-bottom: 3rem;
    font-size: 24px;
    line-height: 36px;

    & span {
        color: var(--color-red);
    }

    @media (max-width: 1100px) {
        margin-bottom: 16px;
    }

    @media ${device.tabletL} {
        max-width: 294px;
        font-size: 18px;
        line-height: 26px;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    border-radius: 4px;
    width: 146px;
    white-space: nowrap;

    @media ${device.tabletL} {
        height: fit-content;
        padding: 6px;
    }
`

const P2PBanner = () => {
    return (
        <StyledSection>
            <MainWrapper>
                <LeftWrapper>
                    <LeftChild>
                        <StyledHeader as="h3" type="section-title">
                            Looking for Deriv P2P instead?
                        </StyledHeader>
                        <StyledText>
                            We offer a <span>peer-to-peer payment service</span> where you can make
                            deposits and withdrawals in minutes via exchanges with fellow traders.
                        </StyledText>
                        <StyledLinkButton
                            secondary="true"
                            to="/p2p/"
                            external="true"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more
                        </StyledLinkButton>
                    </LeftChild>
                </LeftWrapper>
            </MainWrapper>
        </StyledSection>
    )
}
export default P2PBanner
