import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { Container, Show } from 'components/containers'
import { Text, Header, Divider } from 'components/elements'
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
    padding: 4rem 0;
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
const PlatformInfo = styled.div`
    width: 100%;
    max-width: 37.7rem;
`

const MarginDivider = styled(Divider)`
    margin: 0 6.9rem;
`

const PlatformsDropdown = ({
    is_open,
    has_animation,
    Content,
    forward_ref,
    title,
    description,
}) => {
    return (
        <Show.Desktop>
            <NavDropdown is_open={is_open} has_animation={has_animation} ref={forward_ref}>
                <StyledContainer>
                    <PlatformInfo>
                        <Header as="h4" margin="0 0 0.8rem">
                            {title}
                        </Header>
                        <Text size="var(--text-size-xs)">{description}</Text>
                    </PlatformInfo>
                    <MarginDivider width="2px" height="100%" />
                    <Content />
                </StyledContainer>
            </NavDropdown>
        </Show.Desktop>
    )
}

PlatformsDropdown.propTypes = {
    Content: PropTypes.node,
    description: PropTypes.string,
    forward_ref: PropTypes.func,
    has_animation: PropTypes.bool,
    is_open: PropTypes.bool,
    title: PropTypes.string,
}

export default React.memo(PlatformsDropdown)
