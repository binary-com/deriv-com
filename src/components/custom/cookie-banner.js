import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Container } from 'components/containers'
import { Button } from 'components/form'
import { Text, LocalizedLinkText } from 'components/elements'
import { Localize, localize } from 'components/localization'

const FadeInDown = keyframes`
    from {
        opacity: 0;
        bottom: -18.4rem;
    }
    to {
        opacity: 1;
        bottom: 0;
    }
`
const FadeOutUp = keyframes`
    from {
        opacity: 1;
        bottom: 0;
    }
    to {
        opacity:0;
        bottom: -18.4rem;
    }
`

const Wrapper = styled.div`
    background: var(--color-black);
    position: fixed;
    bottom: -18.4rem;
    width: 100%;
    height: 18.4rem;
    padding: 4.8rem 0;
    transition: all 0.3s ease-in-out;
    z-index: 200;
    opacity: 0;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: 0.3s;
`

const CookieBanner = ({ onAccept, is_open }) => {
    return (
        <Wrapper is_open={is_open}>
            <Container direction="column">
                <Text color="white" mb="2.4rem">
                    <Localize
                        translate_text="Our website uses cookies to give you the best user experience. For more information, <0>view our policy</0>."
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
                <Button secondary onClick={onAccept}>
                    {localize('Accept')}
                </Button>
            </Container>
        </Wrapper>
    )
}

CookieBanner.propTypes = {
    is_open: PropTypes.bool,
    onAccept: PropTypes.func,
}

export default CookieBanner
