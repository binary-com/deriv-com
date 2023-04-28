import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
import { LocalizedLink, localize } from 'components/localization'
import Flex from 'components/containers/flex'
import device from 'themes/device'

type TItem = {
    text: string
    icon: string
    link: string
    smallText?: string
}

type TProps = {
    items?: TItem[]
    QRImage?: string
    QRHeading1?: string
    QRHeading2?: string
    is_rtl: boolean
}

const DownloadAppWrapper = styled.div<{ is_rtl: boolean }>`
    max-width: 384px;
    width: 100%;
    margin: 0 auto;
    direction: ${(props) => (props.is_rtl ? 'rtl' : 'ltr')};
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
const DownloadAppOsLinks = styled.div`
    padding: 24px;
    @media ${device.tabletL} {
        padding: 24px 5px;
    }
`
const StyledOsIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 8px;
`
const StyledItemText = styled(Header)`
    font-size: 17px;
    color: var(--color-white);
`
const StyledItemSmallText = styled(Header)`
    font-size: 10px;
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
const DownloadColumn: React.FC<TProps> = ({ items, QRImage, QRHeading1, QRHeading2, is_rtl }) => {
    return (
        <Flex ai="center">
            <DownloadAppWrapper is_rtl={is_rtl}>
                <QRScanBox>
                    <img src={QRImage} alt="Deriv GO QR" />
                    <div>
                        <StyledHeading as="p" weight="100">
                            {localize(`${QRHeading1}`)}
                        </StyledHeading>
                        <StyledHeading as="h5" weight="700">
                            {localize(`${QRHeading2}`)}
                        </StyledHeading>
                    </div>
                </QRScanBox>
                <DownloadAppOsLinks>
                    <StyledItemsWrapper>
                        {items.map((item, index) => (
                            <StyledItems key={index}>
                                <StyledOsIcon src={item.icon} alt="OS icon" />
                                <AppButton
                                    external
                                    to={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item?.smallText && (
                                        <StyledItemSmallText as="p" weight="400">
                                            {localize(item?.smallText)}
                                        </StyledItemSmallText>
                                    )}
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
    )
}

export default DownloadColumn
