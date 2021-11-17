import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
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

const ParentWrapper = styled(Flex)`
    max-width: 1440px;
    height: 304px;
    border: 1px solid var(--color-grey-17);
    z-index: 3;
    overflow: hidden;

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
        height: 240px;
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

const FooterBanner = () => {
    const data = useStaticQuery(query)
    const [is_mobile] = useBrowserResize()

    return (
        <Flex>
            <ParentWrapper>
                <LeftWrapper>
                    <Flex
                        fd="column"
                        mb="8px"
                        laptopM={{ max_width: '360px' }}
                        tablet={{ max_width: '328px' }}
                    >
                        <Header
                            as="h3"
                            type="heading-3"
                            tablet={{ align: 'center', p: '0 40px 8px' }}
                        >
                            Binary.com has moved to Deriv since 30 November
                        </Header>
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
                                to="/signup/"
                                rel="noopener noreferrer"
                                secondary="true"
                            >
                                {localize('Trade on Deriv')}
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
                            <Header type="heading-3" color="white" align="center">
                                Want to continue trading?
                            </Header>
                            <BtnWrapper height="auto">
                                <StyledLinkRightButton
                                    to="/signup/"
                                    rel="noopener noreferrer"
                                    secondary="true"
                                >
                                    {localize('Try Deriv now')}
                                </StyledLinkRightButton>
                            </BtnWrapper>
                        </RightHeaderWrapper>
                    </RightItem>
                </RightWrapper>
            </ParentWrapper>
        </Flex>
    )
}

export default FooterBanner
