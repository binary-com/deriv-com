import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Container, Flex, Desktop, Mobile } from 'components/containers'
import StocksHeaderOverlayBg from 'images/svg/stock-indices/stocksHeaderOverlayBg.svg'
import StocksHeaderOverlayBgMobile from 'images/svg/stock-indices/stocksHeaderOverlayBgMobile.svg'
import StocksHeaderOverlayBelowSectionBg from 'images/svg/stock-indices/stocksHeaderOverlayBelowSectionBg.svg'
import StocksHeaderBelowSection from 'images/svg/stock-indices/stocksHeaderBelowSection.svg'
import stocksHeaderBelowSectionM from 'images/svg/stock-indices/stocksHeaderBelowSection-m.svg'
import device from 'themes/device'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'

const query = graphql`
    query {
        mainHeaderImage: file(relativePath: { eq: "stock-indices/stocksMainHeaderImg.png" }) {
            ...fadeIn
        }
        mainHeaderImageMobile: file(
            relativePath: { eq: "stock-indices/stocksMainHeaderImg-m.png" }
        ) {
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
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 3vw));
    @media ${device.tabletL} {
        clip-path: polygon(0 0, 100% 0, 100% 96%, 0% 100%, 0 calc(100% - 4vw));
    }
`

const TopHeaderWrapper = styled(Container)`
    position: relative;
    margin-top: 40px;
    z-index: 2;

    @media ${device.tabletL} {
        height: unset;
        max-width: 58.8rem;
        flex-direction: column;
        margin-top: 41px;
    }
`

const BackgroundPattern = styled.img`
    position: absolute;
    top: 30%;
    left: 60.7%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 894px;
    height: 549px;

    @media ${device.tabletL} {
        top: 14.4%;
        left: 42.5%;
        right: unset;
        width: 272px;
        height: 224px;
    }
`

const BackgroundPatternSection = styled.img`
    width: 679px;
    position: absolute;
    top: 40px;
    left: 3px;
    z-index: 1;
    @media ${device.tabletL} {
        display: none;
    }
`

const TopHeaderTextDiv = styled(Flex)`
    width: 690px;
    margin-right: 24px;
    align-items: center;
    @media ${device.tabletL} {
        width: 100%;
        max-width: 100%;
        z-index: 3;
        margin-right: 0;
    }
`

const TopTextWrapper = styled(Flex)`
    flex-direction: column;
    margin-bottom: 26%;
    @media ${device.tabletL} {
        padding-bottom: 24px;
        margin-bottom: 0;
    }
`

const StyledLinkButton = styled(LinkButton)`
    border: unset;
    line-height: 20px;
`

const StyledHeader = styled(Header)`
    margin-bottom: 16px;
    @media ${device.tabletL} {
        font-size: 40px;
        margin-bottom: 8px;
    }
`

const StyledHeaderSmall = styled(Header)`
    font-size: 24px;
    max-width: 58rem;
    line-height: 1.5;
    margin-bottom: 24px;
    @media ${device.tabletL} {
        font-size: 20px;
        max-width: 100%;
    }
`

const BtnDiv = styled(Flex)`
    height: unset;
    justify-content: start;
`

const TopHeaderBgDiv = styled(Flex)`
    width: 486px;
    @media ${device.tabletL} {
        width: 100%;
        max-width: 216px;
        justify-content: center;
        position: relative;
    }
`

const TopHeaderImgWrapper = styled(Flex)`
    align-items: flex-end;
`

const DesktopImageWrapper = styled(Container)`
    width: 100%;
    @media ${device.tabletL} {
        display: none;
    }
`

const MobileImageWrapper = styled(Container)`
    display: none;
    @media ${device.tabletL} {
        display: flex;
        width: 100%;
    }
`

const SectionWrapper = styled(Container)`
    height: 704px;
    flex-direction: row;
    position: relative;
    margin: 0 auto 40px;
    @media ${device.tabletL} {
        max-width: 58.8rem;
        width: 100%;
        height: auto;
        margin: 0 auto;
        padding: 40px 16px;
        flex-direction: column-reverse;
    }
`

const SectionImgWrapper = styled(Flex)`
    width: 487px;
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
        max-width: 58.8rem;
    }
`

const SectionBannerImg = styled.img`
    width: 100%;
    position: absolute;
    top: -118px;
    left: 0;
    @media ${device.laptopM} {
        position: unset;
    }
    @media ${device.tabletL} {
        margin: 0 auto;
    }
`

const SectionTextWrapper = styled(Flex)`
    width: 588px;
    align-items: center;
    flex-direction: column;
    position: relative;
    margin-left: 125px;
    @media ${device.laptopM} {
        margin-left: 80px;
    }
    @media ${device.laptop} {
        margin-left: 60px;
    }
    @media ${device.tabletL} {
        width: 100%;
        margin: 0 auto;
    }
`

const SectionStyledHeader = styled(Header)`
    font-size: 64px;
    text-align: left;
    line-height: 1.25;
    margin-bottom: 16px;
    @media ${device.tabletL} {
        font-size: 40px;
        text-align: center;
        margin-bottom: 8px;
    }
`

const SectionStyledHeaderSmall = styled(Header)`
    font-size: 24px;
    max-width: 100%;
    text-align: left;
    line-height: 1.5;
    margin-bottom: 24px;
    @media ${device.tabletL} {
        font-size: 20px;
        text-align: center;
    }
`

const HeaderSection = () => {
    const data = useStaticQuery(query)

    return (
        <MainWrapper>
            <HeaderWrapper>
                <TopHeaderWrapper>
                    <TopHeaderTextDiv>
                        <TopTextWrapper>
                            <StyledHeader color="white" type="main-landing-title">
                                {localize('Stocks, unlocked')}
                            </StyledHeader>
                            <StyledHeaderSmall
                                color="white"
                                type="sub-section-title"
                                weight="normal"
                            >
                                {localize(
                                    'Trade global stocks and stock indices now on our Deriv MT5 platform',
                                )}
                            </StyledHeaderSmall>
                            <BtnDiv>
                                <StyledLinkButton type="submit" secondary to={'/landing/signup/'}>
                                    {localize('Create a demo account')}
                                </StyledLinkButton>
                            </BtnDiv>
                        </TopTextWrapper>
                    </TopHeaderTextDiv>
                    <TopHeaderBgDiv>
                        <TopHeaderImgWrapper>
                            <DesktopImageWrapper>
                                <QueryImage
                                    data={data['mainHeaderImage']}
                                    alt="deriv platform"
                                    width="100%"
                                    loading="eager"
                                />
                            </DesktopImageWrapper>
                            <MobileImageWrapper>
                                <QueryImage
                                    data={data['mainHeaderImageMobile']}
                                    alt="deriv platform mobile"
                                    width="100%"
                                />
                            </MobileImageWrapper>
                        </TopHeaderImgWrapper>
                    </TopHeaderBgDiv>
                </TopHeaderWrapper>
                <Desktop>
                    <BackgroundPattern src={StocksHeaderOverlayBg} alt="background pattern" />
                </Desktop>
                <Mobile>
                    <BackgroundPattern
                        src={StocksHeaderOverlayBgMobile}
                        alt="background pattern mobile"
                    />
                </Mobile>
            </HeaderWrapper>
            <SectionWrapper>
                <SectionImgWrapper>
                    <SectionImgDiv>
                        <Desktop>
                            <SectionBannerImg
                                src={StocksHeaderBelowSection}
                                alt="stocks favorite brand"
                            />
                        </Desktop>
                        <Mobile>
                            <SectionBannerImg
                                src={stocksHeaderBelowSectionM}
                                alt="stocks favorite brand"
                            />
                        </Mobile>
                    </SectionImgDiv>
                </SectionImgWrapper>
                <SectionTextWrapper>
                    <SectionStyledHeader type="display-title" mb="24px">
                        {localize('Spot your favourite brand?')}
                    </SectionStyledHeader>
                    <SectionStyledHeaderSmall type="sub-section-title" weight="normal">
                        {localize(
                            'Facebook. Tesla. Zoom. McDonald’s. Trade on the global household names you see every day on our Deriv MT5 platform. We’ve got all your favourite brands in tech, finance, retail, plus more.',
                        )}
                    </SectionStyledHeaderSmall>

                    <BackgroundPatternSection
                        src={StocksHeaderOverlayBelowSectionBg}
                        alt="background pattern section"
                    />
                </SectionTextWrapper>
            </SectionWrapper>
        </MainWrapper>
    )
}

export default HeaderSection
