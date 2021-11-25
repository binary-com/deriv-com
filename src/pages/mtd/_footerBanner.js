import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import device from 'themes/device.js'
import { useBrowserResize } from 'components/hooks/use-browser-resize'
import pattern from 'images/common/binary-to-deriv/pattern.png'
import pattern_mobile from 'images/common/binary-to-deriv/pattern_mobile.png'

const query = graphql`
    {
        d_trader: file(relativePath: { eq: "binary-to-deriv/dtrader.png" }) {
            ...fadeIn
        }
        d_trader_mobile: file(relativePath: { eq: "binary-to-deriv/dtrader-mobile.png" }) {
            ...fadeIn
        }
    }
`
const BannerWrapper = styled(Flex)`
    border-top: 1px solid var(--color-grey-17);
    border-bottom: 1px solid var(--color-grey-17);

    @media (min-width: 1440px) {
        background-image: url(${(props) => props.background_pattern});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top right -65rem;
    }
`
const ParentWrapper = styled(Flex)`
    max-width: 1440px;
    height: 304px;
    z-index: 3;
    overflow: hidden;

    @media ${device.desktopL} {
        height: 370px;
    }

    @media ${device.laptop} {
        height: 280px;
    }

    @media ${device.tablet} {
        flex-direction: column;
        height: auto;
    }
`
const LeftWrapper = styled(Flex)`
    padding-left: 100px;
    padding-top: 52px;
    width: 35%;
    max-width: 494px;

    @media (max-width: 1414px) {
        padding-left: 36px;
    }

    @media (max-width: 1325px) {
        width: 50%;
    }
    @media ${device.laptopM} {
        padding-top: 36px;
        width: 58%;
    }

    @media ${device.tablet} {
        padding-left: 0;
        padding-top: 40px;
        width: 100%;
        max-width: unset;
        margin-bottom: 80px;
    }
`
const RightWrapper = styled(Flex)`
    justify-content: flex-start;
    max-width: 946px;
    width: fit-content;
    position: relative;

    @media ${device.tablet} {
        justify-content: center;
        width: 100%;
        max-width: unset;
        height: 360px;
    }
`
const RightItem = styled(Flex)`
    position: absolute;
    bottom: -2px;
    left: -54px;
    justify-content: flex-start;
    z-index: 2;

    @media ${device.tablet} {
        justify-content: center;
        flex-direction: column;
        bottom: unset;
        left: 50%;
        top: 24%;
        transform: translate(-50%, -50%);
    }
`
const RightHeaderWrapper = styled(Flex)`
    @media (max-width: 1325px) {
        max-width: 257px;
    }
    @media ${device.tablet} {
        max-width: 100%;
        margin-top: 40px;
        padding: 0 16px;
    }
`
const PatternWrapper = styled.img`
    width: 100%;
    height: 100%;

    @media (min-width: 1440px) {
        display: none;
    }
`
const PatternDivReplacer = styled.div`
    display: none;
    @media (min-width: 1440px) {
        display: flex;
        width: 946px;
    }
`
const BtnWrapper = styled(Flex)`
    margin-top: 24px;
`
const StyledLinkButton = styled(LinkButton)`
    padding: 10px 16px;
`
const StyledLinkRightButton = styled(LinkButton)`
    padding: 10px 16px;
    border: 2px solid var(--color-white);
`
const ImageWrapper = styled(Flex)`
    max-width: 561px;
    padding-top: 36px;
    height: auto;
    align-items: flex-end;

    @media (max-width: 1325px) {
        max-width: 550px;
    }
    @media ${device.laptopM} {
        max-width: 430px;
    }
    @media ${device.tablet} {
        padding-top: 40px;
        max-width: 280px;
    }
`
export const DesktopWrapper = styled(Flex)`
    @media ${device.tablet} {
        display: none;
    }
`
export const MobileWrapper = styled.div`
    display: none;

    @media ${device.tablet} {
        display: flex;
        justify-content: center;
        width: 100%;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.tablet} {
        font-size: 32px;
        line-height: 40px;
    }
`
const StyledHeaderBottom = styled(Header)`
    @media ${device.tablet} {
        font-size: 32px;
        line-height: 40px;
    }
`

const FooterBanner = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()

    return (
        <BannerWrapper background_pattern={pattern}>
            <ParentWrapper>
                <LeftWrapper>
                    <Flex
                        fd="column"
                        mb="8px"
                        laptopM={{ max_width: '360px' }}
                        tablet={{ max_width: '328px' }}
                    >
                        <StyledHeader
                            as="h3"
                            type="heading-3"
                            mb="8px"
                            tablet={{ align: 'center' }}
                        >
                            Binary.com has moved to Deriv since 30 November
                        </StyledHeader>
                        <Header
                            type="paragraph-1"
                            weight="normal"
                            laptopM={{ max_width: '320px' }}
                            tablet={{ align: 'center', p: '0 16px' }}
                        >
                            Start using Deriv with your Binary.com email and password.
                        </Header>
                        <BtnWrapper jc="flex-start" tablet={{ jc: 'center' }}>
                            <StyledLinkButton
                                to="https://deriv.com/signup/"
                                rel="noopener noreferrer"
                                secondary="true"
                            >
                                Trade on Deriv
                            </StyledLinkButton>
                        </BtnWrapper>
                    </Flex>
                </LeftWrapper>
                <RightWrapper>
                    {!is_mobile ? (
                        <PatternWrapper src={pattern} alt="" />
                    ) : (
                        <PatternWrapper src={pattern_mobile} alt="" />
                    )}
                    <PatternDivReplacer />
                    <RightItem>
                        <DesktopWrapper>
                            <ImageWrapper>
                                <QueryImage data={data['d_trader']} alt="DTrader" width="100%" />
                            </ImageWrapper>
                        </DesktopWrapper>
                        <MobileWrapper tablet={{ max_width: '280px' }}>
                            <ImageWrapper>
                                <QueryImage
                                    data={data['d_trader_mobile']}
                                    alt="DTrader"
                                    width="100%"
                                />
                            </ImageWrapper>
                        </MobileWrapper>
                        <RightHeaderWrapper fd="column" height="auto" max_width="388px">
                            <StyledHeaderBottom
                                type="heading-3"
                                color="white"
                                align="center"
                                tabletS={{ max_width: '380px', m: '0 auto' }}
                            >
                                Want to continue trading?
                            </StyledHeaderBottom>
                            <BtnWrapper height="auto">
                                <StyledLinkRightButton
                                    to="https://deriv.com/signup/"
                                    rel="noopener noreferrer"
                                    secondary="true"
                                >
                                    Try Deriv now
                                </StyledLinkRightButton>
                            </BtnWrapper>
                        </RightHeaderWrapper>
                    </RightItem>
                </RightWrapper>
            </ParentWrapper>
        </BannerWrapper>
    )
}

export default FooterBanner
