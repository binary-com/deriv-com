import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import BackgroundPattern from 'images/common/bg_banner_signup.png'
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
    }
`

const BackgroundWrapper = styled(Flex)`
    width: 25%;
    background-image: url(${BackgroundPattern});
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);

    @media (max-width: 800px) {
        display: none;
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
        display: none;
    }
`

const TextWrapper = styled.div`
    margin: auto;
`
const DemoButton = styled.div`
    text-align: center;
`
const StyledHeader = styled(Header)`
    @media ${device.laptopM} {
        font-size: 4rem;
        max-width: 60rem;
    }
`
const DBanner = ({ title, data }) => {
    return (
        <Wrapper>
            <div style={{ position: 'absolute', left: '5%', height: '100%' }}>
                <ImageWrapper ai="center">
                    <QueryImage data={data['deriv_platform']} alt="deriv platform" width="100%" />
                </ImageWrapper>
            </div>
            <BackgroundWrapper direction="column" ai="center"></BackgroundWrapper>
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
    data: PropTypes.object,
    title: PropTypes.string,
}

export default DBanner
