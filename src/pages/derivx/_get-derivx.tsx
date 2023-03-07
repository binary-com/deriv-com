import React from 'react'
import styled from 'styled-components'
import derivXLogo from '../../images/svg/deriv-x/derivX.svg'
import derivXQR from '../../images/svg/deriv-x/derivxQR.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import BrowserIcon from '../../images/svg/browser-icon.svg'
import GetAppMobileBG from '../../images/common/dtrader/getAppMobileBG.jpg'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import {
    derivx_android_url,
    derivx_huawei_url,
    derivx_ios_url,
    derivx_app_url,
} from 'common/constants'
import DownloadColumn from 'components/custom/_multi-width-column-download'

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

const DerivXGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const items = [
        { text: 'Google Play', icon: AndroidIcon, link: derivx_android_url },
        { text: 'App Store', icon: AppleIcon, link: derivx_ios_url },
        { text: 'AppGallery', icon: AppGalleryIcon, link: derivx_huawei_url },
        {
            text: 'Web Browser',
            icon: BrowserIcon,
            link: derivx_app_url,
            smallText: 'Use it on your',
        },
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
                <img src={derivXLogo} alt="Deriv Go logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv X_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                </TextAndButtonWrapper>
            </ContentWrapper>
            <DownloadColumn
                QRImage={derivXQR}
                QRHeading1="Scan to download"
                QRHeading2="Android, iOS, and Huawei"
                items={items}
            />
        </MultiWidthColumn>
    )
}

export default DerivXGetApp
