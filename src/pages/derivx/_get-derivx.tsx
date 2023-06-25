import React from 'react'
import styled from 'styled-components'
import derivXLogo from '../../images/svg/deriv-x/derivX.svg'
import derivXQR from '../../images/svg/deriv-x/derivxQR.png'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import BrowserIcon from '../../images/svg/browser-icon.svg'
import GetAppMobileBG from '../../images/common/getAppMobileBG.png'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import useBreakpoints from 'components/hooks/use-breakpoints'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useRegion from 'components/hooks/use-region'
import {
    derivx_android_url,
    derivx_huawei_url,
    derivx_ios_url,
    derivx_app_url,
} from 'common/constants'
import DownloadColumn from 'components/custom/_multi-width-column-download'

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

const Wrapper = styled.div`
    margin-top: 5rem;

    @media ${device.tabletL} {
        margin-top: -3rem;
    }
`

const DerivXGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const is_rtl = useIsRtl()
    const { is_appgallery_supported } = useRegion()
    const items = [
        { text: 'Google Play', icon: AndroidIcon, link: derivx_android_url },
        { text: 'App Store', icon: AppleIcon, link: derivx_ios_url },
        ...(is_appgallery_supported
            ? [{ text: 'AppGallery', icon: AppGalleryIcon, link: derivx_huawei_url }]
            : []),
        {
            text: 'Web Browser',
            icon: BrowserIcon,
            link: derivx_app_url,
            smallText: '_t_Use it on your_t_',
        },
    ]
    return (
        <Wrapper>
            <MultiWidthColumn
                firstColumnBackground="#4C515C"
                secondColumnBackground={GrayAngle30}
                firstColumnWidth="58%"
                secondColumnWidth="42%"
                mobileBackgroundImage={GetAppMobileBG}
                mobilePadding="25px 0 120px 0"
                secondColumnMobileMargin="95px 0 0"
            >
                <ContentWrapper is_rtl={is_rtl}>
                    <img src={derivXLogo} alt="Deriv X logo" width="64px" height="64px" />
                    <TextAndButtonWrapper>
                        <CommonHeaderSection
                            title="_t_Get trading with Deriv X_t_"
                            title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                            align_title={is_mobile_or_tablet ? 'center' : is_rtl ? 'right' : 'left'}
                            width="100%"
                            font_family_title="Ubuntu"
                            color="#fff"
                            margin_title={is_mobile_or_tablet ? '0' : '0 0 18px'}
                            line_height_title={is_mobile_or_tablet ? '50px' : 'normal'}
                        />
                    </TextAndButtonWrapper>
                </ContentWrapper>
                <DownloadColumn
                    is_rtl={is_rtl}
                    QRImage={derivXQR}
                    QRHeading1="_t_Scan to download_t_"
                    QRHeading2="Android, iOS, and Huawei"
                    items={items}
                />
            </MultiWidthColumn>
        </Wrapper>
    )
}

export default DerivXGetApp
