import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex, Desktop, Mobile } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import MoreInfo from 'images/svg/dmt5/more_info.svg'
import device from 'themes/device'
import LinuxOs from 'images/svg/dmt5/dmt5_linux.svg'
import WebBrowser from 'images/svg/dmt5/dmt5_web_browser.svg'
import Windows from 'images/svg/dmt5/dmt5_windows.svg'
import MacOs from 'images/svg/dmt5/dmt5_macos_dmg.svg'
import GooglePlay from 'images/svg/dmt5/dmt5_google_play.svg'
import AppGallery from 'images/svg/dmt5/dmt5_app_gallery.svg'
import GooglePlayMobile from 'images/svg/dmt5/dmt5_google_play_mobile.svg'
import AppGalleryMobile from 'images/svg/dmt5/dmt5_app_gallery_mobile.svg'
import {
    dmt5_web_browser_url,
    dmt5_windows,
    dmt5_linux_url,
    dmt5_mac_app_url,
    dmt5_android_url,
    dmt5_app_gallery_url,
} from 'common/constants'

type ImageWrapperProps = {
    mt?: string
}
type LinkType = {
    mt?: string
    mb?: string
    mr?: string
}

const query = graphql`
    query {
        mobile_phone: file(relativePath: { eq: "dmt5/mobile-phone.png" }) {
            ...fadeIn
        }
    }
`

const DownloadLinkWrapper = styled.div<LinkType>`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 8px;
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    margin-bottom: ${(props) => (props.mb ? props.mb : '0')};

    @media ${device.tabletL} {
        grid-template-columns: 1fr 1fr;
    }
`
const DownloadLinkMobileWrapper = styled.div<LinkType>`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    grid-gap: 8px;
    margin-top: ${(props) => (props.mt ? props.mt : '0')};
    margin-bottom: ${(props) => (props.mb ? props.mb : '0')};
    margin-right: ${(props) => (props.mr ? props.mr : '0')};
`
const Section = styled.section`
    display: flex;
    align-items: flex-start;
    padding: 3rem 15rem;
    justify-content: center;
    width: 100%;
    background-color: var(--color-grey-25);

    @media ${device.laptopM} {
        gap: 20px;
    }
    @media ${device.laptopL} {
        padding: 0;
    }

    @media ${device.tabletL} {
        padding: 24px 0 0;
        flex-direction: column;
        height: auto;
        align-items: center;
        background-color: white;
    }
`
const Separator = styled.div`
    min-width: 2px;
    min-height: 312px;
    background-color: rgba(133, 147, 164, 0.16);
    margin-right: 10px;

    @media ${device.tabletL} {
        width: 100%;
        min-height: 1px;
        margin-top: 40px;
        margin-right: 0;
    }
`

const ImageWrapper = styled.div<ImageWrapperProps>`
    margin-top: 4rem;
    max-width: 38.4rem;
    position: relative;

    @media ${device.tabletL} {
        margin-top: 24px;
    }
`
const StyledInfo = styled.img`
    max-width: 24px;
    max-height: 24px;
    margin-top: 96px;

    @media ${device.tabletL} {
        max-width: 16px;
        max-height: 16px;
        margin-top: 0;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tabletL} {
        font-size: 20px;
        padding-left: 16px;
        margin-top: 24px;
    }
`
const StyledFlex = styled(Flex)`
    justify-content: flex-start;
    flex-direction: column;
    max-width: 27rem;
    margin-right: 100px;
    height: auto;
    background-color: var(--color-grey-25);

    @media ${device.laptopL} {
        max-width: 25rem;
    }

    @media ${device.tabletL} {
        justify-content: center;
        text-align: center;
        margin-right: 0;
        max-width: fit-content;
        box-shadow: inset 0 -2px 0 #e7e7e7;
    }
`
const StyledFlexMobile = styled(Flex)`
    margin-top: 0.8rem;
    height: auto;
    margin-bottom: 40px;
    flex-wrap: wrap;
`
const StyledFlexBottom = styled(Flex)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 38.4rem;

    @media ${device.tabletL} {
        padding: 0 160px;
        background: white;
        align-items: center;
        max-width: fit-content;
    }

    @media ${device.mobileL} {
        padding: 0 20px;
        background: white;
        align-items: center;
        max-width: fit-content;
    }
`
const StyledInfoContainer = styled(Flex)`
    display: flex;
    min-width: 32rem;
    margin-right: 100px;

    @media ${device.laptopL} {
        margin-right: 0;
    }

    @media ${device.laptopM} {
        margin-right: 0;
        min-width: 22rem;
    }
`
const StyledHeaderContent = styled(Header)`
    font-weight: normal;
    width: 100%;
    max-width: 30rem;
    margin-left: 1.6rem;
    font-size: 24px;
    margin-top: 96px;

    @media ${device.tabletL} {
        margin-left: 26px;
        font-size: 18px;
        max-width: 33rem;
        margin-top: 0;
    }
`
const DownloadApp = () => {
    const data = useStaticQuery(query)

    return (
        <Section>
            <StyledFlex>
                <Desktop>
                    <StyledHeader as="h4" type="subtitle-1" mt="8px">
                        {localize('Desktop')}
                    </StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start" height="auto">
                        <DownloadLinkWrapper>
                            <LocalizedLink
                                external
                                to={dmt5_linux_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinuxOs} alt="linux" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_web_browser_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={WebBrowser} alt="web browser" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_windows}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Windows} alt="windows" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_mac_app_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={MacOs} alt="macos" />
                            </LocalizedLink>
                        </DownloadLinkWrapper>
                    </Flex>

                    <StyledHeader mt="2.4rem" as="h4" type="subtitle-1">
                        {localize('Mobile')}
                    </StyledHeader>
                    <Flex mt="0.8rem" jc="flex-start" wrap="wrap">
                        <DownloadLinkWrapper>
                            <LocalizedLink
                                external
                                to={dmt5_android_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={GooglePlay} alt="google play" width="132" height="40" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_app_gallery_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={AppGallery} alt="app gallery" width="132" height="40" />
                            </LocalizedLink>
                        </DownloadLinkWrapper>
                    </Flex>
                </Desktop>

                <Mobile>
                    <StyledHeader mt="2.4rem" as="h4">
                        {localize('Desktop')}
                    </StyledHeader>
                    <StyledFlexMobile mt="1rem">
                        <DownloadLinkMobileWrapper mr="16px">
                            <LocalizedLink
                                external
                                to={dmt5_windows}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={Windows} alt="windows" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_mac_app_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={MacOs} alt="macos" />
                            </LocalizedLink>
                            <LocalizedLink
                                external
                                to={dmt5_linux_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={LinuxOs} alt="linux" />
                            </LocalizedLink>
                        </DownloadLinkMobileWrapper>
                    </StyledFlexMobile>

                    <StyledHeader as="h4">{localize('Mobile')}</StyledHeader>
                    <StyledFlexMobile mt="0.8rem">
                        <DownloadLinkMobileWrapper mr="8px">
                            <LocalizedLink
                                external
                                to={dmt5_android_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={GooglePlayMobile}
                                    alt="google play"
                                    width="160"
                                    height="40"
                                />
                            </LocalizedLink>

                            <LocalizedLink
                                external
                                to={dmt5_app_gallery_url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={AppGalleryMobile}
                                    alt="app gallery"
                                    width="180"
                                    height="40"
                                />
                            </LocalizedLink>
                        </DownloadLinkMobileWrapper>
                    </StyledFlexMobile>
                </Mobile>
            </StyledFlex>

            <Desktop>
                <StyledInfoContainer>
                    <Separator />

                    <StyledInfo src={MoreInfo} alt="more info" />
                    <StyledHeaderContent>
                        <Localize
                            translate_text="For mobile app sign-ups, set the broker code to <br/><0>Deriv Limited</0>."
                            components={[<strong key={0} />]}
                        />
                    </StyledHeaderContent>
                </StyledInfoContainer>
            </Desktop>
            <StyledFlexBottom>
                <Mobile>
                    <Flex
                        height="auto"
                        max_width="310px"
                        mt="10.8rem"
                        ai="flex-start"
                        tabletL={{ max_width: '320px', mt: '40px' }}
                        laptopM={{ mr: '2px', ml: '2px' }}
                        margin_left="-60px"
                    >
                        <StyledInfo src={MoreInfo} alt="more info" />

                        <StyledHeaderContent>
                            <Localize
                                translate_text="For mobile app sign-ups, set the broker code to <br/><0>Deriv Limited</0>."
                                components={[<strong key={0} />]}
                            />
                        </StyledHeaderContent>
                    </Flex>
                </Mobile>
                <ImageWrapper mt="4rem">
                    <QueryImage data={data['mobile_phone']} alt="DMT5 mobile app" />
                </ImageWrapper>
            </StyledFlexBottom>
        </Section>
    )
}

export default DownloadApp
