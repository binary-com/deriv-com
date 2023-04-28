import React from 'react'
import styled from 'styled-components'
import derivEZLogo from '../../images/svg/deriv-ez/derivez-logo-red.svg'
import derivEZQR from '../../images/svg/deriv-ez/derivez-qr.svg'
import GrayAngle30 from '../../images/common/gray-angle.png'
import AppleIcon from '../../images/svg/apple-icon.svg'
import InfoIcon from '../../images/svg/info-icon.svg'
import AppGalleryIcon from '../../images/svg/appGallery-icon.svg'
import AndroidIcon from '../../images/svg/android-icon.svg'
import GetAppMobileBG from '../../images/common/getAppMobileBGUpdated.png'
import DownloadColumn from 'components/custom/_multi-width-column-download'
import CommonHeaderSection from 'components/elements/common-header-section'
import MultiWidthColumn from 'components/elements/multi-width-column'
import device from 'themes/device'
import { useIsRtl } from 'components/hooks/use-isrtl'
import useBreakpoints from 'components/hooks/use-breakpoints'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'
import { Flex } from 'components/containers'
import { Localize } from 'components/localization'

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
const DerivEZGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const is_rtl = useIsRtl()
    const items = [
        { text: 'Google Play', icon: AndroidIcon, link: deriv_go_playstore_url },
        { text: 'App Store', icon: AppleIcon, link: deriv_go_ios_url },
        { text: 'AppGallery', icon: AppGalleryIcon, link: deriv_go_huaweiappgallery_url },
    ]

    return (
        <MultiWidthColumn
            firstColumnBackground="#4C515C"
            secondColumnBackground={GrayAngle30}
            firstColumnWidth="59%"
            secondColumnWidth="45%"
            mobileBackgroundImage={GetAppMobileBG}
            secondColumnMobileMargin="140px 0 0"
            mobilePadding="40px 0 10px"
        >
            <ContentWrapper is_rtl={is_rtl}>
                <img src={derivEZLogo} alt="Deriv Go logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv EZ_t_"
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
                                translate_text="Deriv EZ is available on <0>Deriv GO.<0>"
                                components={[<strong key={0} />]}
                            />
                        </InfoText>
                    </Flex>
                </TextAndButtonWrapper>
            </ContentWrapper>
            <DownloadColumn
                is_rtl={is_rtl}
                QRImage={derivEZQR}
                QRHeading1="_t_Scan to download Deriv GO_t_"
                QRHeading2="Android, IOS & Huawei"
                items={items}
            />
        </MultiWidthColumn>
    )
}

export default DerivEZGetApp
