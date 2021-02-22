import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import StocksHeaderOverlayBg from 'images/svg/stock-indices/stocksHeaderOverlayBg.svg'
import StocksHeaderOverlayBelowSectionBg from 'images/svg/stock-indices/stocksHeaderOverlayBelowSectionBg.svg'
import StocksHeaderBelowSection from 'images/svg/stock-indices/stocksHeaderBelowSection.svg'
import stocksHeaderBelowSectionM from 'images/svg/stock-indices/stocksHeaderBelowSection-m.svg'
import Show from 'components/containers/show'
import device from 'themes/device.js'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'

const query = graphql`
    query {
        mainHeaderImage: file(relativePath: { eq: "stock-indices/stocksMainHeaderImg.png" }) {
            ...fadeIn
        }
    }
`

const MainWrapper = styled(Flex)`
    background-color: var(--color-white);
    flex-direction: column;
    overflow: hidden;
`
const HeaderWrapper = styled(Flex)`
    position: relative;
    overflow: hidden;
    background-color: var(--color-black-8);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
    @media ${device.tablet} {
        clip-path: polygon(0 0, 100% 0, 100% 92%, 0% 100%, 0 calc(100% - 5vw));
    }
`

const TopHeaderWrapper = styled(Flex)`
    position: relative;
    height: 680px;
    width: 100%;
    max-width: 1200px;
    padding: 0 4rem;
    z-index: 2;

    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.laptopM} {
        padding: 0 12rem;
    }
    @media ${device.laptop} {
        height: 580px;
        padding: 0 60px;
    }
    @media ${device.tablet} {
        flex-direction: column;
        margin-top: 24px;
        padding: 0 20px;
        max-width: 58.8rem;
    }
    @media ${device.tabletS} {
        height: 495px;
        padding: 0 16px;
        margin-top: 0;
        max-width: 100%;
    }
    @media ${device.mobileL} {
        height: 385px;
        margin-top: 10px;
    }
`
const BackgroundPattern = styled.img`
    position: absolute;
    top: 23%;
    right: -5%;
    transform: translate(-50%, -50%);
    z-index: 1;

    @media ${device.tablet} {
        left: 0;
        top: 0;
        right: unset;
        transform: unset;
        width: 262px;
    }
`
const BackgroundPatternSection = styled.img`
    position: absolute;
    top: -3%;
    right: -10%;
    z-index: 1;
    @media ${device.tabletL} {
        display: none;
    }
`
const TopHeaderTextDiv = styled(Flex)`
    width: 60%;
    align-items: center;
    @media ${device.laptopM} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 100%;
        max-width: 460px;
        z-index: 3;
    }
    @media ${device.tabletS} {
        max-width: 100%;
        margin-top: 10%;
    }
`
const TopTextWrapper = styled(Flex)`
    flex-direction: column;

    @media ${device.laptopM} {
        margin-top: -20px;
    }
    @media ${device.laptop} {
        margin-top: -10px;
    }
`
const StyledLinkButton = styled(LinkButton)`
    padding: 14px 16px;
    width: auto;
    margin-right: 1.6rem;
    border: unset;
    @media ${device.mobileL} {
        white-space: nowrap;
    }
    @media (max-width: 360px) {
        margin-bottom: 1.6rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 6.4rem;
        max-width: 60rem;
    }
    @media ${device.tabletS} {
        font-size: 4rem;
        max-width: 60rem;
        margin-bottom: 8px;
    }
`
const StyledHeaderSmall = styled(Header)`
    @media ${device.laptopM} {
        font-size: 2.4rem;
        max-width: 100%;
    }
    @media ${device.tabletS} {
        font-size: 1.6rem;
        max-width: 100%;
        margin-bottom: 24px;
    }
`
const BtnDiv = styled(Flex)`
    height: unset;
    justify-content: start;
    @media ${device.tablet} {
        justify-content: start;
    }
`
const TopHeaderBgDiv = styled(Flex)`
    width: 40%;
    @media ${device.laptopM} {
        width: 50%;
    }
    @media ${device.tablet} {
        width: 100%;
        justify-content: flex-end;
        position: relative;
    }
`
const TopHeaderImgWrapper = styled(Flex)`
    align-items: flex-end;

    @media ${device.laptop} {
        max-width: 400px;
    }
    @media ${device.tabletL} {
        max-width: 400px;
    }
    @media ${device.tablet} {
        width: 275px;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 2;
    }
    @media ${device.tabletS} {
        width: 230px;
    }
    @media ${device.mobileL} {
        width: 185px;
    }
`
const SectionWrapper = styled(Flex)`
    height: 720px;
    padding: 0 120px;
    flex-direction: row;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.laptopM} {
        /* height: 625px; */
    }
    @media ${device.tabletL} {
        /* height: 545px; */
        padding: 32px 60px 27px;
        flex-direction: column-reverse;
    }
    @media ${device.tabletS} {
        padding: 32px 16px 62px;
        height: auto;
    }
    @media ${device.mobileL} {
        width: 90%;
    }
`
const SectionImgWrapper = styled(Flex)`
    width: 45%;
    @media ${device.laptopM} {
        align-items: center;
    }
    @media ${device.tabletL} {
        width: 100%;
        justify-content: center;
    }
`
const SectionImgDiv = styled.div`
    width: 100%;
    position: relative;
    z-index: 3;
    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
    }
`
const SectionBannerImg = styled.img`
    width: 100%;
    position: absolute;
    top: -15%;
    left: 0;
    @media ${device.laptopM} {
        position: unset;
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`
const SectionTextWrapper = styled(Flex)`
    width: 55%;
    align-items: center;
    flex-direction: column;
    margin-left: 120px;
    @media ${device.laptopM} {
        margin-left: 80px;
    }
    @media ${device.laptop} {
        margin-left: 60px;
    }
    @media ${device.tabletL} {
        width: 100%;
        max-width: 58.8rem;
        margin: 0 auto;
    }
`
const SectionStyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 6.4rem;
        max-width: 60rem;
        text-align: center;
    }
    @media ${device.tabletS} {
        font-size: 4rem;
        max-width: 60rem;
        margin-bottom: 4px;
    }
`
const SectionStyledHeaderSmall = styled(Header)`
    @media ${device.tabletL} {
        font-size: 2.4rem;
        max-width: 100%;
        text-align: center;
    }
    @media ${device.tabletS} {
        font-size: 1.6rem;
        max-width: 100%;
    }
`
const is_ppc = true

const HeaderSection = () => {
    const data = useStaticQuery(query)

    return (
        <MainWrapper>
            <HeaderWrapper>
                <TopHeaderWrapper>
                    <TopHeaderTextDiv>
                        <TopTextWrapper>
                            <StyledHeader color="white" type="main-landing-title" mb="2.4rem">
                                {localize('Stocks, unlocked')}
                            </StyledHeader>
                            <StyledHeaderSmall
                                color="white"
                                type="sub-section-title"
                                weight="normal"
                                size="2.4rem"
                                mb="4.0rem"
                            >
                                {localize(
                                    'Trade global stocks and stock indices now on our DMT5 platform',
                                )}
                            </StyledHeaderSmall>
                            <BtnDiv>
                                <StyledLinkButton
                                    type="submit"
                                    secondary="true"
                                    to={is_ppc ? '/landing/signup/' : '/signup/'}
                                >
                                    {localize('Sign up')}
                                </StyledLinkButton>
                            </BtnDiv>
                        </TopTextWrapper>
                    </TopHeaderTextDiv>
                    <TopHeaderBgDiv>
                        <TopHeaderImgWrapper>
                            <QueryImage
                                data={data['mainHeaderImage']}
                                alt="deriv platform"
                                width="100%"
                            />
                        </TopHeaderImgWrapper>
                    </TopHeaderBgDiv>
                </TopHeaderWrapper>
                <BackgroundPattern src={StocksHeaderOverlayBg} alt="background pattern" />
            </HeaderWrapper>
            <SectionWrapper>
                <SectionImgWrapper>
                    <SectionImgDiv>
                        <Show.Desktop>
                            <SectionBannerImg
                                src={StocksHeaderBelowSection}
                                alt="stocks favorite brand"
                            />
                        </Show.Desktop>
                        <Show.Mobile>
                            <SectionBannerImg
                                src={stocksHeaderBelowSectionM}
                                alt="stocks favorite brand"
                            />
                        </Show.Mobile>
                    </SectionImgDiv>
                </SectionImgWrapper>
                <SectionTextWrapper>
                    <SectionStyledHeader type="display-title" mb="2.4rem">
                        {localize('Spot your favourite brand?')}
                    </SectionStyledHeader>
                    <SectionStyledHeaderSmall
                        type="sub-section-title"
                        weight="normal"
                        size="2.4rem"
                        mb="4.0rem"
                    >
                        {localize(
                            'Facebook. Tesla. Zoom. Mcdonalds. Trade on the global household names you see every day on our DMT5 platform. We’ve got all your favourite brands in tech, finance, retail, plus more.',
                        )}
                    </SectionStyledHeaderSmall>
                </SectionTextWrapper>
                <BackgroundPatternSection
                    src={StocksHeaderOverlayBelowSectionBg}
                    alt="background pattern section"
                />
            </SectionWrapper>
        </MainWrapper>
    )
}

export default HeaderSection
