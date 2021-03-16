import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
// import { Text } from 'components/elements/typography'
import { Flex, Show } from 'components/containers'
// import { localize } from 'components/localization'
import device from 'themes/device.js'
import DerivSmallLogo from 'images/svg/deriv-go/dgo-logo-footer.svg'
import { Header, LocalizedLinkText, QueryImage } from 'components/elements'
import { localize, Localize } from 'components/localization'
import { LinkButton } from 'components/form'
import { deriv_go_playstore_url } from 'common/utility'

const query = graphql`
    query {
        deriv_go_qr_code: file(relativePath: { eq: "deriv-go/qr-code.png" }) {
            ...fadeIn
        }
    }
`

const BannerWrapper = styled(Flex)`
    overflow: hidden;
    background-color: var(--color-grey-30);
    padding: 40px 0;
    @media ${device.laptopM} {
        padding: 20px;
    }
    @media ${device.tabletL} {
        padding: 20px 16px;
    }
`
const MainWrapper = styled(Flex)`
    max-width: 996px;
    margin: 0 auto;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    @media ${device.tabletL} {
        max-width: 58.8rem;
    }
`
const DGoSmallLogo = styled.img`
    width: 120px;
    height: 120px;
    margin-right: 24px;
    @media ${device.tabletL} {
        width: 32px;
        height: 32px;
        margin-right: 8px;
    }
`
const TextWrapper = styled(Flex)`
    margin-right: 24px;
    flex-direction: column;
`
const StyledHeader = styled(Header)`
    margin-bottom: 8px;
    line-height: 40px;
    @media ${device.tabletL} {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 0;
    }
`
const StyledHeaderSmall = styled(Header)`
    margin-bottom: 8px;
    line-height: 36px;
    @media ${device.tabletL} {
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 0;
    }
`
const StyledHeaderSub = styled(Header)`
    line-height: 1.5;
`
// const DesktopImageWrapper = styled(Container)`
//     width: 100%;
//     @media ${device.tabletL} {
//         display: none;
//     }
// `
// const MobileImageWrapper = styled(Container)`
//     display: none;
//     @media ${device.tabletL} {
//         display: flex;
//         width: 100%;
//     }
// `
const QRCodeImgWrapper = styled(Flex)`
    width: 96px;
    height: 96px;
    align-items: center;
`
const BtnDiv = styled(Flex)`
    width: 105px;
    justify-content: start;
`
const StyledLinkButton = styled(LinkButton)`
    font-size: 12px;
    font-weight: bold;
    line-height: 18px;
    background-color: var(--color-grey-30);
    border: 1px solid var(--color-grey-5);
    border-radius: 4px;
    color: var(--color-black-3);
    padding: 3px 8px;
`
const GoFooterBanner = () => {
    const data = useStaticQuery(query)

    return (
        <BannerWrapper>
            <MainWrapper>
                <DGoSmallLogo src={DerivSmallLogo} alt="Deriv-Go Logo" />
                <TextWrapper>
                    <Show.Desktop>
                        <StyledHeader type="section-title">
                            {localize('Get the new Deriv GO mobile app')}
                        </StyledHeader>
                    </Show.Desktop>
                    <Show.Mobile>
                        <StyledHeader type="section-title">{localize('Deriv Go')}</StyledHeader>
                    </Show.Mobile>

                    <Show.Desktop>
                        <StyledHeaderSmall type="sub-section-title" weight="normal">
                            <Localize
                                translate_text="Scan this QR code to download the app from the <0>Google Play Store</0>."
                                components={[
                                    <LocalizedLinkText
                                        to={deriv_go_playstore_url}
                                        target="_blank"
                                        size={24}
                                        color="red"
                                        key={0}
                                    />,
                                ]}
                            />
                        </StyledHeaderSmall>
                    </Show.Desktop>
                    <Show.Mobile>
                        <StyledHeaderSmall type="sub-section-title" weight="normal">
                            {localize('Trade on the GO')}
                        </StyledHeaderSmall>
                    </Show.Mobile>
                    <Show.Desktop>
                        <StyledHeaderSub type="main-paragraph" weight="normal">
                            {localize(
                                '(iOS users: We haven’t forgotten you. A version for you is in the works.)',
                            )}
                        </StyledHeaderSub>
                    </Show.Desktop>
                </TextWrapper>
                <Show.Desktop>
                    <QRCodeImgWrapper>
                        <QueryImage
                            data={data['deriv_go_qr_code']}
                            alt="deriv-go banner mobile"
                            width="100%"
                        />
                    </QRCodeImgWrapper>
                </Show.Desktop>
                <Show.Mobile>
                    <BtnDiv>
                        <StyledLinkButton
                            type="submit"
                            secondary="true"
                            to={deriv_go_playstore_url}
                        >
                            {localize('Get on Android')}
                        </StyledLinkButton>
                    </BtnDiv>
                </Show.Mobile>
            </MainWrapper>
        </BannerWrapper>
    )
}

export default GoFooterBanner
