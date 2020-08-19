import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Container, Show } from 'components/containers'

const FadeInDown = keyframes`
    from {
        opacity:0;
        transform: translateY(7.2rem) rotateY(-15deg);
    }
    to {
        opacity:1;
        transform: translateY(7.2rem) rotateY(0);
    }
`
const FadeOutUp = keyframes`
    from {
        opacity:1;
        transform: translateY(7.2rem) rotateY(0);
    }
    to {
        opacity:0;
        transform: translateY(7.2rem) rotateY(-15deg);
    }
`
const NavDropdown = styled.div`
    display: ${(props) => (props.is_open ? 'flex' : 'none')};
    width: auto;
    left: ${(props) => (props.offset ? props.offset + 'px !important' : 'none')};
    position: absolute;
    padding: 2.2rem 0.8rem;
    z-index: -1;
    height: auto;
    transform: translateY(7.2rem);
    background-color: #ffffff;
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    transition: opacity 0.3s, transform 0.3s;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: ${(props) => (props.has_animation ? '0.3s' : '0')};
    overflow: visible;

    ::after {
        content: ' ';
        position: absolute;
        top: -9px;
        border-top: none;
        border-right: 15px solid transparent;
        border-left: 15px solid transparent;
        border-bottom: 15px solid white;
    }
`
const StyledContainer = styled(Container)`
    justify-content: flex-start;
    align-items: flex-start;
    width: 100% !important;

    .active {
        border: 0.2rem solid var(--color-green);
    }
`

const PlatformsDropdown = ({ is_open, has_animation, Content, forward_ref, link_ref }) => {
    const [left, setLeft] = React.useState(0)

    React.useEffect(() => {
        if (link_ref.current) {
            const left_offsets = link_ref.current.offsetLeft
            setLeft(left_offsets)
        }
    }, [forward_ref])

    return (
        <Show.Desktop>
            <NavDropdown
                is_open={is_open}
                has_animation={has_animation}
                offset={left}
                ref={forward_ref}
            >
                <StyledContainer>
                    <Content />
                </StyledContainer>
            </NavDropdown>
        </Show.Desktop>
    )
}

PlatformsDropdown.propTypes = {
    Content: PropTypes.func,
    description: PropTypes.string,
    forward_ref: PropTypes.object,
    has_animation: PropTypes.bool,
    is_open: PropTypes.bool,
    link_ref: PropTypes.object,
    title: PropTypes.string,
}

export default React.memo(PlatformsDropdown)
