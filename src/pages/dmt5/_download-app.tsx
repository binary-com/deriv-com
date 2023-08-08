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
import GetAppMobileBG from '../../images/common/getAppMobileBG.png'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
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
import DownloadColumn, { TDownloadColumnItem } from 'components/custom/_multi-width-column-download'
import { Flex } from 'components/containers'
import { Localize, localize } from 'components/localization'

const items: TDownloadColumnItem[] = [
    { text: 'Google Play', icon: AndroidIcon, link: dmt5_android_url },
    { text: 'App Store', icon: AppleIcon, link: dmt5_ios_url },
    { text: 'AppGallery', icon: AppGalleryIcon, link: dmt5_app_gallery_url },
    {
        text: 'Web Browser',
        icon: BrowserIcon,
        link: dmt5_web_browser_url,
        smallText: '_t_Use it on your_t_',
    },
    { text: 'Windows', icon: WinIcon, link: dmt5_windows },
    { text: 'macOS', icon: MacIcon, link: dmt5_mac_app_url },
    { text: 'Linux', icon: LinuxIcon, link: dmt5_linux_url },
]

const ContentWrapper = styled.div<{ is_rtl: boolean }>`
    display: flex;
    gap: 28px;
    flex: 1;
    z-index: 2;
    direction: ${(props) => (props.is_rtl ? 'rtl' : 'ltr')};
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
    const is_rtl = useIsRtl()

    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="59%"
            secondColumnWidth="45%"
            mobileBackgroundImage={GetAppMobileBG}
            secondColumnMobileMargin="115px 0 0"
            mobilePadding="40px 0 10px"
        >
            <ContentWrapper is_rtl={is_rtl}>
                <img
                    src={dmt5Logo}
                    alt={localize('_t_Deriv MT5 logo_t_')}
                    width="64px"
                    height="64px"
                />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv MT5_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : is_rtl ? 'right' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                    <Flex jc="stretch" ai="flex-start" height="auto">
                        <StyledInfoIcon src={InfoIcon} />
                        <InfoText>
                            <Localize
                                translate_text="_t_For mobile app sign-ups, set the broker code to <0>Deriv Holdings (Guernsey) Limited.<0>_t_"
                                components={[<strong key={0} />]}
                            />
                        </InfoText>
                    </Flex>
                </TextAndButtonWrapper>
            </ContentWrapper>
            <DownloadColumn
                is_rtl={is_rtl}
                QRImage={dmt5QR}
                QRHeading1="_t_Scan to download_t_"
                QRHeading2="_t_Android, Apple & Huawei_t_"
                items={items}
            />
        </MultiWidthColumn>
    )
}

export default DerivMT5GetApp
