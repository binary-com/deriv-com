import React from 'react'
import styled from 'styled-components'
import dmt5Logo from '../../images/svg/dmt5/dmt5Logo.svg'
import dmt5QR from '../../images/svg/dmt5/dmt5QR.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import InfoIcon from '../../images/svg/info-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import BrowserIcon from '../../images/svg/browser-icon.svg'
import LinuxIcon from '../../images/svg/linux-icon.svg'
import MacIcon from '../../images/svg/mac-icon.svg'
import WinIcon from '../../images/svg/windows-icon.svg'
import GetAppMobileBG from '../../images/common/dtrader/getAppMobileBG.jpg'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import {
    dmt5_web_browser_url,
    dmt5_windows,
    dmt5_linux_url,
    dmt5_mac_app_url,
    dmt5_android_url,
    dmt5_app_gallery_url,
    dmt5_ios_url,
} from 'common/constants'
import DownloadColumn from 'components/custom/_multi-width-column-download'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'

const ContentWrapper = styled.div`
    display: flex;
    gap: 28px;
    flex: 1;
    z-index: 2;
    @media ${device.tabletL} {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const TextAndButtonWrapper = styled.div`
    @media ${device.tabletL} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const InfoText = styled.p`
    font-family: Ubuntu, sans-serif;
    font-size: 25px;
    margin-left: 16px;
    line-height: 34px;
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
    }
`
const StyledInfoIcon = styled.img`
    margin-top: 7px;
    width: 24px;
    height: 24px;
`
const DerivMT5GetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const items = [
        { text: 'Google Play', icon: AndroidIcon, link: dmt5_android_url },
        { text: 'App Store', icon: AppleIcon, link: dmt5_ios_url },
        { text: 'AppGallery', icon: AppGalleryIcon, link: dmt5_app_gallery_url },
        {
            text: 'Web Browser',
            icon: BrowserIcon,
            link: dmt5_web_browser_url,
            smallText: 'Use it on your',
        },
        { text: 'Windows', icon: WinIcon, link: dmt5_windows },
        { text: 'macOS', icon: MacIcon, link: dmt5_mac_app_url },
        { text: 'Linux', icon: LinuxIcon, link: dmt5_linux_url },
    ]

    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="50%"
            secondColumnWidth="50%"
            mobileBackgroundImage={GetAppMobileBG}
        >
            <ContentWrapper>
                <img src={dmt5Logo} alt="Deriv Go logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv MT5_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                    <Flex jc="stretch" ai="flex-start" height="auto">
                        <StyledInfoIcon src={InfoIcon} />
                        <InfoText>
                            <Localize
                                translate_text="For mobile app sign-ups, set the broker code to <0>Deriv limited.<0>"
                                components={[<strong key={0} />]}
                            />
                        </InfoText>
                    </Flex>
                </TextAndButtonWrapper>
            </ContentWrapper>
            <DownloadColumn
                QRImage={dmt5QR}
                QRHeading1="Scan to download"
                QRHeading2="Android, Apple & Huawei"
                items={items}
            />
        </MultiWidthColumn>
    )
}

export default DerivMT5GetApp
