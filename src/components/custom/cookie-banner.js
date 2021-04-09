import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Button } from 'components/form'
import { Text, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'
import device from 'themes/device'

const FadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(0);
    }
    to {
        opacity: 1;
        transform: translateY(-18.4rem);
    }
`
const FadeOutUp = keyframes`
    from {
        opacity: 1;
        transform: translateY(-18.4rem);
    }
    to {
        opacity: 0;
        transform: translateY(0);
    }
`

const Wrapper = styled.div`
    background: var(--color-black);
    position: fixed;
    bottom: -18.4rem;
    width: 100%;
    height: 18.4rem;
    padding: 4.8rem 0;
    transition: translate 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 200;
    opacity: 0;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: 0.3s;

    @media ${device.tabletL} {
        height: auto;
    }
    @media ${device.tabletS} {
        padding: 24px 0;
    }
`

const CookieBanner = ({ onAccept, onDecline, is_open }) => {
    return (
        <Wrapper is_open={is_open}>
            <Container direction="column">
                <Text color="white">
                    <Localize translate_text="Cookies help us to give you a better experience and personalised content on our site." />
                </Text>
                <Text color="white" mb="2.4rem">
                    <Localize
                        translate_text="If you agree to our use of cookies, click on Accept. For more information, <0>see our policy</0>."
                        components={[
                            <LocalizedLinkText
                                key={0}
                                to="/terms-and-conditions/"
                                color="red"
                                weight="bold"
                            />,
                        ]}
                    />
                </Text>
                <Flex>
                    <Button white onClick={onDecline} mr="1rem">
                        {localize("Don't accept")}
                    </Button>
                    <Button white onClick={onAccept} ml="1rem">
                        {localize('Accept')}
                    </Button>
                </Flex>
            </Container>
        </Wrapper>
    )
}

CookieBanner.propTypes = {
    is_open: PropTypes.bool,
    onAccept: PropTypes.func,
    onDecline: PropTypes.func,
}

export default CookieBanner
