import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements/typography'
import { Localize, LocalizedLink, localize } from 'components/localization'
import Flex from 'components/containers/flex'
import device from 'themes/device'
import { TString } from 'types/generics'

export type TDownloadColumnItem = {
    text: string
    icon: string
    link: string
    smallText?: TString
    visibility?: boolean
}

type TDownloadColumn = {
    items?: TDownloadColumnItem[]
    QRImage?: string
    QRHeading1?: TString
    QRHeading2?: TString | (() => void)
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

const DownloadColumn = ({ items, QRImage, QRHeading1, QRHeading2, is_rtl }: TDownloadColumn) => {
    const renderableItems = items.filter((item) => item.visibility)
    const containsHiddenItem = items.some((item) => !item.visibility)
    const isAllItemsAreHidden = items.every((item) => !item.visibility)

    return (
        <Flex ai="center">
            {!isAllItemsAreHidden && (
                <DownloadAppWrapper is_rtl={is_rtl}>
                    <QRScanBox>
                        <img
                            width="64px"
                            height="64px"
                            src={QRImage}
                            alt={localize('_t_Deriv GO QR_t_')}
                        />
                        <div>
                            <StyledHeading as="p" weight="100">
                                <Localize translate_text={QRHeading1} />
                            </StyledHeading>
                            {!containsHiddenItem && (
                                <StyledHeading as="h5" weight="700">
                                    <Localize translate_text={QRHeading2} />
                                </StyledHeading>
                            )}
                        </div>
                    </QRScanBox>
                    <DownloadAppOsLinks>
                        <StyledItemsWrapper>
                            {renderableItems.map(({ icon, link, text, smallText }) => (
                                <StyledItems key={text}>
                                    <StyledOsIcon src={icon} alt={localize('_t_OS icon_t_')} />
                                    <AppButton
                                        external
                                        to={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {smallText && (
                                            <StyledItemSmallText as="p" weight="400">
                                                <Localize translate_text={smallText} />
                                            </StyledItemSmallText>
                                        )}
                                        <StyledItemText as="p" weight="700">
                                            {text}
                                        </StyledItemText>
                                    </AppButton>
                                </StyledItems>
                            ))}
                        </StyledItemsWrapper>
                    </DownloadAppOsLinks>
                </DownloadAppWrapper>
            )}
        </Flex>
    )
}

export default DownloadColumn
