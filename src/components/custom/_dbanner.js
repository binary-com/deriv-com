import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    height: 33.3rem;
    width: 100%;
    overflow: hidden;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);

    @media ${device.tabletS} {
        height: 23rem;
    }
    @media ${device.mobileL} {
        flex-direction: column;
        height: 414px;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    left: 5%;
    height: 100%;

    @media ${device.mobileL} {
        left: 0;
        height: unset;
        width: 100%;
        top: 12%;
        margin-bottom: 2rem;
    }
`

const ImageWrapper = styled(Flex)`
    position: relative;
    width: 39.8rem;
    z-index: 2;
    height: 100%;

    div {
        width: 100%;
    }

    @media ${device.tabletS} {
        width: 28rem;
    }
    @media ${device.mobileL} {
        height: auto;
        width: 286px;
        text-align: center;
        margin: 0 auto;
    }
`

const TextWrapper = styled.div`
    position: absolute;
    top: 9.5rem;
    left: 36%;
    margin: auto;

    @media ${device.laptopM} {
        left: 41%;
    }
    @media ${device.tablet} {
        top: 3rem;
        left: 54%;
        max-width: 250px;
    }
    @media ${device.mobileL} {
        top: 250px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        max-width: 329px;
    }
`
const DemoButton = styled.div`
    text-align: center;
    height: auto;

    @media ${device.mobileL} {
        margin: unset;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 4rem;
    }
    @media ${device.tabletS} {
        font-size: 25px;
    }
    @media ${device.mobileL} {
        font-size: 24px;
    }
`
const DBanner = ({ title, data, background_pattern }) => {
    const BannerBackgroundSVG = styled(background_pattern)`
        clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;

        @media ${device.laptopM} {
            height: unset;
        }
        @media ${device.tabletL} {
            width: 320px;
        }
        @media ${device.tabletS} {
            width: 230px;
        }
        @media ${device.mobileL} {
            width: unset;
            clip-path: polygon(0 0, 100% 0%, 305% 163%, 0% 60%);
        }
    `
    return (
        <Wrapper>
            <BannerBackgroundSVG />
            <ImageContainer>
                <ImageWrapper ai="center">
                    <QueryImage data={data['deriv_platform']} alt="deriv platform" width="100%" />
                </ImageWrapper>
            </ImageContainer>
            <TextWrapper>
                <StyledHeader align="center" color="white" size="5.6rem" mb="3.2rem">
                    {title}
                </StyledHeader>
                <DemoButton>
                    <LinkButton type="submit" secondary="true" to="/signup/">
                        {localize('Create free demo account')}
                    </LinkButton>
                </DemoButton>
            </TextWrapper>
        </Wrapper>
    )
}

DBanner.propTypes = {
    background_pattern: PropTypes.object,
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
}

export default DBanner
