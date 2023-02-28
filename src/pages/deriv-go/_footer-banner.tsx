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
import useBreakpoints from 'components/hooks/use-breakpoints'
import { Header } from 'components/elements/typography'
import Flex from 'components/containers/flex'
import { LocalizedLink, localize } from 'components/localization'
import {
    deriv_go_playstore_url,
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
} from 'common/constants'

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
const DownloadAppWrapper = styled.div`
    max-width: 384px;
    width: 100%;
    margin: 0 auto;
`
const QRScanBox = styled.div`
    border: 0.5px solid var(--color-white);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px;
    gap: 24px;
    border-radius: 24px;
    width: 100%;
`
const StyledHeading = styled(Header)`
    font-size: 16px;
    color: var(--color-white);
`
const QRTextWrapper = styled.div``
const DownloadAppOsLinks = styled.div`
    padding: 24px;
`
const StyledOsIcon = styled.img`
    width: 24px;
    margin-right: 8px;
`
const StyledItemText = styled(Header)`
    font-size: 17px;
    color: var(--color-white);
`
const StyledItems = styled.div`
    display: flex;
    align-items: center;
`
const AppButton = styled(LocalizedLink)`
    text-decoration: none;
`
const StyledItemsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
`
const DerivGoGetApp = () => {
    const { is_mobile_or_tablet } = useBreakpoints()

    const items = [
        { text: 'App Store', icon: AndroidIcon, link: deriv_go_playstore_url },
        { text: 'Google Play', icon: AppleIcon, link: deriv_go_ios_url },
        { text: 'AppGallery', icon: AppGalleryIcon, link: deriv_go_huaweiappgallery_url },
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
                <img src={derivGoLogo} alt="Deriv Go logo" width="64px" height="64px" />
                <TextAndButtonWrapper>
                    <CommonHeaderSection
                        title="_t_Get trading with Deriv GO_t_"
                        title_font_size={is_mobile_or_tablet ? '32px' : '64px'}
                        align_title={is_mobile_or_tablet ? 'center' : 'left'}
                        width="100%"
                        font_family_title="Ubuntu"
                        color="#fff"
                        margin_title="0 0 18px"
                    />
                </TextAndButtonWrapper>
            </ContentWrapper>
            <Flex ai="center">
                <DownloadAppWrapper>
                    <QRScanBox>
                        <img src={derivGoQR} alt="Deriv GO QR" />
                        <QRTextWrapper>
                            <StyledHeading as="p" weight="100">
                                {localize('Scan to download')}{' '}
                            </StyledHeading>
                            <StyledHeading as="h5" weight="700">
                                {localize('Android & Huawei')}{' '}
                            </StyledHeading>
                        </QRTextWrapper>
                    </QRScanBox>
                    <DownloadAppOsLinks>
                        <StyledItemsWrapper style={{}}>
                            {items.map((item, index) => (
                                <StyledItems key={index}>
                                    <StyledOsIcon src={item.icon} alt="OS icon" />
                                    <AppButton
                                        external
                                        to={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <StyledItemText as="p" weight="700">
                                            {item.text}
                                        </StyledItemText>
                                    </AppButton>
                                </StyledItems>
                            ))}
                        </StyledItemsWrapper>
                    </DownloadAppOsLinks>
                </DownloadAppWrapper>
            </Flex>
        </MultiWidthColumn>
    )
}

export default DerivGoGetApp
