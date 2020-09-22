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

    @media (max-width: 800px) {
        flex-direction: column;
        height: 414px;
    }
`

const BackgroundWrapper = styled(Flex)`
    width: 25%;
    background-image: url(${(props) => props.background_pattern});
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);

    @media (max-width: 800px) {
        clip-path: polygon(0 0, 100% 0%, 305% 163%, 0% 60%);
        width: 100%;
        height: 50%;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    left: 5%;
    height: 100%;

    @media (max-width: 800px) {
        left: 0;
        height: unset;
        width: 100%;
        top: 12%;
        margin-bottom: 2rem;
    }
`

const ImageWrapper = styled(Flex)`
    position: relative;
    width: 41.1rem;
    z-index: 2;
    height: 100%;

    div {
        width: 100%;
    }

    @media (max-width: 1350px) {
        width: 30rem;
    }
    @media (max-width: 800px) {
        height: auto;
        width: 286px;
        text-align: center;
        margin: 0 auto;
    }
`

const TextWrapper = styled.div`
    margin: auto;

    @media (max-width: 800px) {
        margin-top: 35px;
        margin-bottom: 40px;
    }
`
const DemoButton = styled.div`
    text-align: center;
    height: auto;

    @media (max-width: 800px) {
        margin: unset;
    }
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
    @media (max-width: 800px) {
        font-size: 24px;
        max-width: 329px;
    }
`
const DBanner = ({ title, data, background_pattern }) => {
    return (
        <Wrapper>
            <ImageContainer>
                <ImageWrapper ai="center">
                    <QueryImage data={data['deriv_platform']} alt="deriv platform" width="100%" />
                </ImageWrapper>
            </ImageContainer>
            <BackgroundWrapper
                background_pattern={background_pattern}
                direction="column"
                ai="center"
            ></BackgroundWrapper>
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
    background_pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    data: PropTypes.object.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default DBanner
