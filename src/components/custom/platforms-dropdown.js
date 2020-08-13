import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Container, Show } from 'components/containers'
// import { Divider } from 'components/elements'
import device from 'themes/device'

const FadeInDown = keyframes`
    from {
        opacity:0;
        transform: translateY(-18rem);
    }
    to {
        opacity:1;
        transform: translateY(7.2rem);
    }
`
const FadeOutUp = keyframes`
    from {
        opacity:1;
        transform: translateY(7.2rem);
    }
    to {
        opacity:0;
        transform: translateY(-18rem);
    }
`
const NavDropdown = styled.div`
    display: ${(props) => (props.is_open ? 'flex' : 'none')};
    width: auto;
    left: ${(props) => (props.offset ? props.offset + 'px !important' : 'none')};
    position: absolute;
    padding: 4rem 0;
    z-index: -1;
    height: auto;
    transform: translateY(-18rem);
    background-color: #ffffff;
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 0.4rem;
    transition: all 0.35s ease-in-out;
    animation-name: ${(props) => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: ${(props) => (props.has_animation ? '0.3s' : '0')};
`
const StyledContainer = styled(Container)`
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    @media ${device.laptopL} {
        width: 90%;
    }

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
            console.log(left_offsets) //eslint-disable-line
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
