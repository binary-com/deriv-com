import React from 'react'
import styled from 'styled-components'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import BrowserIcon from '../../images/svg/browser-icon.svg'
import GetAppMobileBG from '../../images/common/getAppMobileBG.png'
import { DerivXLogo } from 'images/svg/deriv-x'
import DerivXQR from 'images/svg/deriv-x/derivxQR.svg'
import {StyledHeaderForDownloadApp} from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useRegion from 'components/hooks/use-region'
import {
    derivx_android_url,
    derivx_huawei_url,
    derivx_ios_url,
    derivx_app_url,
    traders_hub,
} from 'common/constants'
import DownloadColumn, { TDownloadColumnItem } from 'components/custom/_multi-width-column-download'
import { localize } from 'components/localization'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'

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
    const is_rtl = useIsRtl()
    const { is_appgallery_supported } = useRegion()
    const deriv_x_apps_android = useThirdPartyFlags('deriv_x_apps.android')
    const deriv_x_apps_app_store = useThirdPartyFlags('deriv_x_apps.app_store')
    const deriv_x_apps_app_gallery = useThirdPartyFlags('deriv_x_apps.app_gallery')
    const deriv_x_apps_web_browser = useThirdPartyFlags('deriv_x_apps.web_browser')

    const items: TDownloadColumnItem[] = [
        {
            text: 'Google Play',
            icon: AndroidIcon,
            link: derivx_android_url,
            visibility: deriv_x_apps_android,
        },
        {
            text: 'App Store',
            icon: AppleIcon,
            link: derivx_ios_url,
            visibility: deriv_x_apps_app_store,
        },
        ...(is_appgallery_supported
            ? [
                  {
                      text: 'AppGallery',
                      icon: AppGalleryIcon,
                      link: derivx_huawei_url,
                      visibility: deriv_x_apps_app_gallery,
                  },
              ]
            : []),
        {
            text: 'Web Browser',
            icon: BrowserIcon,
            link: traders_hub,
            smallText: '_t_Use it on your_t_',
            visibility: deriv_x_apps_web_browser,
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
                    <img
                        src={DerivXLogo}
                        alt={localize('_t_Deriv X logo_t_')}
                        width="64px"
                        height="64px"
                    />
                    <TextAndButtonWrapper>
                        <StyledHeaderForDownloadApp
                            title="_t_Get trading with Deriv X_t_"
                            title_font_size='64px'
                            align_title={is_rtl ? 'right' : 'left'}
                            width="100%"
                            font_family_title="Ubuntu"
                            color="#fff"
                            margin_title='0 0 18px'
                            line_height_title='normal'
                        />
                    </TextAndButtonWrapper>
                </ContentWrapper>
                <DownloadColumn
                    is_rtl={is_rtl}
                    QRImage={DerivXQR}
                    QRHeading1="_t_Scan to download_t_"
                    QRHeading2={
                        is_appgallery_supported
                            ? '_t_Android, iOS, and Huawei_t_'
                            : '_t_Android and iOS_t_'
                    }
                    items={items}
                />
            </MultiWidthColumn>
        </Wrapper>
    )
}

export default DerivXGetApp
