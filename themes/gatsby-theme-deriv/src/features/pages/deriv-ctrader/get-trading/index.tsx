import React from 'react'
import styled from 'styled-components'
import GrayAngle30 from '../../../../images/common/gray-angle.png'
import WindowsIcon from '../../../../images/svg/windows-icon.svg'
import AndroidIcon from '../../../../images/svg/android-icon.svg'
import BrowserIcon from '../../../../images/svg/browser-icon.svg'
import GetAppMobileBG from '../../../../images/common/getAppMobileBG.png'
import DerivCtraderQR from 'images/common/ctrader/derivCtraderQR.png'
import {StyledHeaderForDownloadApp} from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import MacIcon from 'images/svg/mac-icon.svg'
import {
    ctrader_android_url,
    ctrader_traders_hub_url,
    ctrader_windows_url,
    ctrader_apple_store_url,
    ctrader_mac_os_url,
} from 'common/constants'
import DownloadColumn, { TDownloadColumnItem } from 'components/custom/_multi-width-column-download'
import { localize } from 'components/localization'
import useThirdPartyFlags from 'components/hooks/use-third-party-flags'
import CTraderLogo from 'images/svg/trading-platforms/ctrader/ctrader-main-logo.svg'
import AppleIcon from 'images/svg/apple-icon.svg'

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

const DerivCtraderApp = () => {
    const is_rtl = useIsRtl()
    const ctrader_apps_windows = useThirdPartyFlags('ctrader_apps.windows')
    const ctrader_apps_android = useThirdPartyFlags('ctrader_apps.android')
    const ctrader_apps_web_browser = useThirdPartyFlags('ctrader_apps.web_browser')
    const ctrader_apps_store = useThirdPartyFlags('ctrader_apps.app_store')
    const ctrader_apps_mac_os = useThirdPartyFlags('ctrader_apps.mac_os')

    const items: TDownloadColumnItem[] = [
        {
            text: 'Google Play',
            icon: AndroidIcon,
            link: ctrader_android_url,
            visibility: ctrader_apps_android,
        },
        {
            text: `Web Browser`,
            icon: BrowserIcon,
            link: ctrader_traders_hub_url,
            smallText: `_t_Via Trader's Hub_t_`,
            visibility: ctrader_apps_web_browser,
        },
        {
            text: 'Windows',
            icon: WindowsIcon,
            link: ctrader_windows_url,
            visibility: ctrader_apps_windows,
        },
        {
            text: 'App Store',
            icon: AppleIcon,
            link: ctrader_apple_store_url,
            visibility: ctrader_apps_store,
        },
        {
            text: 'macOS',
            icon: MacIcon,
            link: ctrader_mac_os_url,
            visibility: ctrader_apps_mac_os,
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
                        src={CTraderLogo}
                        alt={localize('_t_Ctrader logo_t_')}
                        width="64px"
                        height="64px"
                    />
                    <TextAndButtonWrapper>
                        <StyledHeaderForDownloadApp
                            title="_t_Get trading with Deriv cTrader_t_"
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
                    QRImage={DerivCtraderQR}
                    QRHeading1="_t_Scan to download Deriv cTrader_t_"
                    QRHeading2={'_t_Android & App store_t_'}
                    items={items}
                />
            </MultiWidthColumn>
        </Wrapper>
    )
}

export default DerivCtraderApp
