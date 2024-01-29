import React from 'react'
import styled from 'styled-components'
import derivGoLogo from '../../images/svg/deriv-go/derivGo.svg'
import derivGoQR from '../../images/svg/deriv-go/derivGoQR.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import GetAppMobileBG from '../../images/common/dtrader/getAppMobileBG.jpg'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useRegion from 'components/hooks/use-region'
import {
    deriv_go_playstore_url,
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
} from 'common/constants'
import DownloadColumn, { TDownloadColumnItem } from 'components/custom/_multi-width-column-download'
import { localize } from 'components/localization'

const ContentWrapper = styled.div<{ is_rtl: boolean }>`
    display: flex;
    gap: 16px;
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
        width: 328px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const DerivGoGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const is_rtl = useIsRtl()
    const { is_appgallery_supported, is_ios_supported, is_appgallery_and_ios_supported } =
        useRegion()

    const items: TDownloadColumnItem[] = [
        { text: 'Google Play', icon: AndroidIcon, link: deriv_go_playstore_url },
        ...(is_ios_supported && is_appgallery_and_ios_supported
            ? [{ text: 'App Store', icon: AppleIcon, link: deriv_go_ios_url }]
            : []),
        ...(is_appgallery_supported && is_appgallery_and_ios_supported
            ? [{ text: 'AppGallery', icon: AppGalleryIcon, link: deriv_go_huaweiappgallery_url }]
            : []),
    ]

    function findQRHeading(
        is_appgallery_supported,
        is_ios_supported,
        is_appgallery_and_ios_supported,
    ) {
        if (!is_appgallery_and_ios_supported) {
            return '_t_Android_t_'
        } else if (!is_ios_supported) {
            return '_t_Android and Huawei_t_'
        } else if (!is_appgallery_supported) {
            return '_t_Android, and iOS_t_'
        } else {
            return '_t_Android, iOS, and Huawei_t_'
        }
    }
    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="55%"
            secondColumnWidth="45%"
            mobilePadding="50px 0"
            mobileBackgroundImage={GetAppMobileBG}
            secondColumnMobileMargin="8rem 0 0 0"
        >
            <ContentWrapper is_rtl={is_rtl}>
                <img
                    src={derivGoLogo}
                    alt={localize('_t_Deriv Go logo_t_')}
                    width="64px"
                    height="64px"
                />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv GO_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : is_rtl ? 'right' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                </TextAndButtonWrapper>
            </ContentWrapper>
            <DownloadColumn
                QRImage={derivGoQR}
                QRHeading1="_t_Scan to download_t_"
                QRHeading2={findQRHeading(
                    is_appgallery_supported,
                    is_ios_supported,
                    is_appgallery_and_ios_supported,
                )}
                items={items}
                is_rtl={is_rtl}
            />
        </MultiWidthColumn>
    )
}

export default DerivGoGetApp
