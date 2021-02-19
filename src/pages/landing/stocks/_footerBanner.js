import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const BannerWrapper = styled(Flex)`
    overflow: hidden;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);
    padding: 53px 120px 56px;
    height: 100%;

    @media ${device.tabletL} {
        height: unset;
        padding: 16px;
    }
`
const MainWrapper = styled(Flex)`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    position: relative;
    @media ${device.desktopL} {
        max-width: 1600px;
    }
    @media ${device.tabletL} {
        flex-direction: column;
    }
`
const TextWrapper = styled(Flex)`
    width: 60%;
    justify-content: start;

    @media ${device.tabletL} {
        height: unset;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 24px 0;
    }
`
const TextDiv = styled(Flex)`
    width: 75%;
    max-width: 62rem;
    position: relative;
    text-align: left;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    z-index: 2;

    @media ${device.tabletL} {
        max-width: 100%;
        text-align: center;
        justify-content: center;
    }
`

const ImageWrapper = styled(Flex)`
    width: 40%;

    @media ${device.tabletL} {
        height: unset;
        width: 100%;
        align-items: center;
        padding: 36px 0;
    }
`
const ImageDiv = styled(Flex)`
    width: 488px;
    align-items: center;

    @media ${device.tabletL} {
        max-width: 300px;
    }
    @media ${device.tablet} {
        height: unset;
    }
`
const BtnDiv = styled(Flex)`
    width: 100%;
    justify-content: start;

    @media ${device.tabletL} {
        justify-content: center;
    }
`

const StyledLinkButton = styled(LinkButton)`
    padding: 14px 16px;
    width: auto;
    font-size: 14px;
    margin-right: 1.6rem;
    border: unset;
    @media ${device.mobileL} {
        white-space: nowrap;
    }
    @media (max-width: 360px) {
        margin-bottom: 1.6rem;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 3.2rem;
        max-width: 60rem;
    }
    @media ${device.tabletL} {
        font-size: 24px;
        text-align: center;
    }
`
const StyledHeaderSmall = styled(Header)`
    @media ${device.laptopM} {
        font-size: 2.4rem;
        max-width: 60rem;
    }
    @media ${device.tabletL} {
        font-size: 16px;
        text-align: center;
    }
`

const FooterBanner = ({ background_pattern, data, is_ppc, small_title, title }) => {
    const BackgroundPattern = styled.img`
        position: absolute;
        top: -93%;
        left: -6%;
        z-index: 1;
        width: 600px;

        @media ${device.laptopM} {
            width: 40rem;
            height: initial;
            top: -30%;
            left: 10%;
        }
        @media ${device.tabletL} {
            width: 40rem;
            top: 10%;
            left: 45%;
            transform: translate(-50%, -50%);
        }
        @media ${device.tablet} {
            display: none;
        }
    `

    return (
        <BannerWrapper>
            <MainWrapper>
                <TextWrapper>
                    <TextDiv>
                        <StyledHeader color="white" type="section-title" mb="1.6rem">
                            {title}
                        </StyledHeader>
                        <StyledHeaderSmall
                            color="white"
                            type="sub-section-title"
                            weight="normal"
                            size="2.4rem"
                            mb="3.2rem"
                        >
                            {small_title}
                        </StyledHeaderSmall>
                        <BtnDiv>
                            <StyledLinkButton
                                type="submit"
                                secondary="true"
                                to={is_ppc ? '/landing/signup/' : '/signup/'}
                            >
                                {localize('Sign up')}
                            </StyledLinkButton>
                        </BtnDiv>
                    </TextDiv>
                    <BackgroundPattern src={background_pattern} alt="background pattern" />
                </TextWrapper>
                <ImageWrapper>
                    <ImageDiv>
                        <QueryImage
                            data={data['stocks_banner']}
                            alt="deriv platform"
                            width="100%"
                        />
                    </ImageDiv>
                </ImageWrapper>
            </MainWrapper>
        </BannerWrapper>
    )
}

FooterBanner.propTypes = {
    background_pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    data: PropTypes.object.isRequired,
    is_ppc: PropTypes.bool,
    small_title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default FooterBanner
