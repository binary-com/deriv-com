import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Show } from 'components/containers'
import { OtherPlatform } from 'components/custom/other-platforms.js'

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
    display: flex;
    width: 100%;
    position: absolute;
    z-index: -1;
    background-color: #ffffff;
    height: 17.8rem;
    transform: translateY(-18rem);
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.35s ease-in-out;
    animation-name: ${props => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: ${props => (props.has_animation ? '0.3s' : '0')};
`
const StyledContainer = styled(Container)`
    justify-content: space-between;

    .active {
        border: 0.2rem solid var(--color-green);
    }
`

// eslint-disable-next-line react/prop-types
const PlatformsDropdown = ({ is_open, has_animation }) => {
    return (
        <NavDropdown is_open={is_open} has_animation={has_animation}>
            <Show.Desktop>
                <StyledContainer>
                    <OtherPlatform exclude="" nav/>
                </StyledContainer>
            </Show.Desktop>
        </NavDropdown>
    )
}
export default React.memo(PlatformsDropdown)
