import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from 'components/containers'
import { Header, QueryImage } from 'components/elements'
import { LinkButton } from 'components/form'
import { localize } from 'components/localization'
import device from 'themes/device.js'

const Wrapper = styled(Flex)`
    padding: 0 0 0 12rem;
    position: relative;
    height: 40rem;
    justify-content: flex-start;
    border-top: 1px solid rgba(151, 151, 151, 0.2);
    background-color: var(--color-black);

    @media (max-width: 800px) {
        flex-direction: column;
        height: 414px;
    }
`

const ImageWrapper = styled(Flex)`
    position: absolute;
    width: 50rem;
    top: -2rem;
    right: 12rem;
    z-index: 1;
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
    margin-top: 8rem;

    @media (max-width: 800px) {
        margin-top: 35px;
        margin-bottom: 40px;
    }
`
const DemoButtonWrapper = styled.div`
    text-align: left;
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
    const BackgroundPattern = styled(background_pattern)`
        position: absolute;
        top: 0;
        right: 0;
    `
    return (
        <Flex position="relative">
            <ImageWrapper ai="center">
                <QueryImage data={data['deriv_platform']} alt="deriv platform" width="100%" />
            </ImageWrapper>
            <Wrapper>
                <TextWrapper>
                    <StyledHeader color="white" size="5.6rem" mb="3.2rem" max_width="47rem">
                        {title}
                    </StyledHeader>
                    <DemoButtonWrapper>
                        <LinkButton type="submit" secondary="true" to="/signup/">
                            {localize('Create free demo account')}
                        </LinkButton>
                    </DemoButtonWrapper>
                </TextWrapper>
                <BackgroundPattern />
            </Wrapper>
        </Flex>
    )
}

DBanner.propTypes = {
    background_pattern: PropTypes.object,
    data: PropTypes.object.isRequired,
    title: PropTypes.string,
}

export default DBanner
