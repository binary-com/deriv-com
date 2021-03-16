import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import device from 'themes/device.js'
// svgs
import TopBannerLogo from 'images/svg/deriv-go/deriv-go-logo.svg'
import GooglePlayLogo from 'images/svg/deriv-go/google-play.svg'
import { localize } from 'components/localization'
import { Header, QueryImage } from 'components/elements'

const query = graphql`
    query {
        deriv_go_banner: file(relativePath: { eq: "deriv-go/banner-img.png" }) {
            ...fadeIn
        }
        deriv_go_banner_m: file(relativePath: { eq: "deriv-go/banner-img-m.png" }) {
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
    height: 562px;
    background: rgb(80, 133, 182);
    background: linear-gradient(180deg, rgba(80, 133, 182, 1) 0%, rgba(30, 60, 87, 1) 100%);
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0 100%);
    @media ${device.tabletL} {
        clip-path: polygon(0 0, 100% 0%, 100% 85%, 0 100%);
        height: 632px;
    }
`
const TopContent = styled(Flex)`
    max-width: 996px;
    padding: 0;
    margin: 0 auto;
    justify-content: flex-start;

    @media ${device.laptopM} {
        padding: 0 40px;
    }
    @media ${device.tabletL} {
        max-width: 58.8rem;
        flex-direction: column;
        justify-content: center;
        height: 367px;
        padding: 0 16px;
    }
`
const TopContentLeft = styled(Flex)`
    flex-direction: column;
    width: 486px;
    margin-right: 126px;
    justify-content: flex-start;
    align-items: flex-start;
    @media ${device.laptopM} {
        margin-right: 80px;
    }
    @media ${device.tabletL} {
        justify-content: center;
        margin-right: 0;
        width: 100%;
    }
`
const TopContentLogo = styled.img`
    width: 213px;
    height: 28px;
    margin-top: 32px;
    margin-bottom: 71px;
    @media ${device.tabletL} {
        width: 190px;
        height: 25px;
        margin: 32px auto 39px;
    }
`
const StyledHeader = styled(Header)`
    margin-bottom: 16px;
    line-height: 1.25;
    @media ${device.tabletL} {
        font-size: 40px;
        text-align: center;
    }
`
const StyledHeaderSmall = styled(Header)`
    max-width: 58rem;
    line-height: 1.5;
    margin-bottom: 40px;
    @media ${device.tabletL} {
        font-size: 20px;
        margin-bottom: 24px;
        max-width: 100%;
        text-align: center;
    }
`
const TopAppStoreWrapper = styled(Flex)`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        height: unset;
    }
`
const GoogleStoreLogo = styled.img`
    width: 138px;
    height: 40px;
    margin-right: 8px;
    @media ${device.tabletL} {
        margin-right: unset;
        margin-bottom: 6px;
    }
`
const StyledSmallAppstore = styled(Header)`
    max-width: 58rem;
    line-height: 1.5;
    @media ${device.tabletL} {
        max-width: 100%;
        text-align: center;
    }
`
const BottomWrapper = styled(Flex)`
    max-width: 996px;
    height: 126px;
    padding: 0;
    margin: 0 auto;
    justify-content: flex-end;
    position: relative;

    @media ${device.tabletL} {
        max-width: 58.8rem;
        height: 313px;
        justify-content: center;
        padding: 0 16px;
    }
`
const BannerImageWrapper = styled(Flex)`
    width: 384px;
    display: flex;
    align-items: flex-end;
    position: absolute;
    bottom: 0;
    @media ${device.tabletL} {
        max-width: 288px;
        width: 100%;
        bottom: 56px;
    }
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

const Banner = () => {
    const data = useStaticQuery(query)
    return (
        <MainWrapper>
            <HeaderWrapper>
                <TopContent>
                    <TopContentLeft>
                        <TopContentLogo src={TopBannerLogo} alt="deriv-go logo" />
                        <StyledHeader color="white" type="display-title">
                            {localize('Trade at the speed of touch')}
                        </StyledHeader>
                        <StyledHeaderSmall color="white" type="sub-section-title" weight="normal">
                            {localize(
                                'Get the new Deriv GO mobile app now from the Google Play Store.',
                            )}
                        </StyledHeaderSmall>
                        <TopAppStoreWrapper>
                            <GoogleStoreLogo src={GooglePlayLogo} alt="google store logo" />
                            <StyledSmallAppstore color="white" type="sub-paragraph" weight="normal">
                                {localize('(iOS coming soon)')}
                            </StyledSmallAppstore>
                        </TopAppStoreWrapper>
                    </TopContentLeft>
                </TopContent>
            </HeaderWrapper>
            <BottomWrapper>
                <BannerImageWrapper>
                    <DesktopImageWrapper>
                        <QueryImage
                            data={data['deriv_go_banner']}
                            alt="deriv-go banner"
                            width="100%"
                        />
                    </DesktopImageWrapper>
                    <MobileImageWrapper>
                        <QueryImage
                            data={data['deriv_go_banner_m']}
                            alt="deriv-go banner mobile"
                            width="100%"
                        />
                    </MobileImageWrapper>
                </BannerImageWrapper>
            </BottomWrapper>
        </MainWrapper>
    )
}

export default Banner
