import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Container, Show } from 'components/containers'
import { NavPlatform } from 'components/custom/other-platforms.js'
import { Text, Header } from 'components/elements/typography'
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
    display: flex;
    width: 100%;
    position: absolute;
    padding: 2.2rem 0;
    z-index: -1;
    height: auto;
    background-color: #ffffff;
    transform: translateY(-18rem);
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.35s ease-in-out;
    animation-name: ${props => (props.is_open ? FadeInDown : FadeOutUp)};
    animation-fill-mode: both;
    animation-duration: ${props => (props.has_animation ? '0.3s' : '0')};
`
const StyledContainer = styled(Container)`
    justify-content: center;
    width: 100%;
    @media ${device.laptopL} {
        width: 90%;
    }

    .active {
        border: 0.2rem solid var(--color-green);
    }
`
const PlatformInfo = styled.div`
    width: 100%;
    max-width: 37.7rem;
`
// eslint-disable-next-line react/prop-types
const PlatformsDropdown = ({ is_open, has_animation }) => {
    return (
        <Show.Desktop>
            <NavDropdown is_open={is_open} has_animation={has_animation}>
                <StyledContainer>
                    <PlatformInfo>
                        <Header as='h4'>Trading platforms</Header>
                        <Text size='var(--text-size-xs)'>Be in full control of your trading with our new and improved platforms.</Text>
                    </PlatformInfo>
                    <NavPlatform />
                </StyledContainer>
            </NavDropdown>
        </Show.Desktop>
    )
}
export default React.memo(PlatformsDropdown)
