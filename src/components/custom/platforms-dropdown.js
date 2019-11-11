import React from 'react'
import styled, { keyframes } from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import { GridContainer, Show } from 'components/containers'
import { Text } from 'components/elements'
// Icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'

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
const NavDropdownGrid = styled(GridContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    height: 100%;
    padding: 2.3rem 0;
    align-items: center;

    .active {
        border: 0.2rem solid var(--color-green);
    }
`
const PlatformItem = styled(LocalizedLink)`
    display: grid;
    grid-template-columns: 1fr 5fr;
    padding: 2.4rem 1.6rem;
    transition: background-color 0.25s;
    border-radius: 0.8rem;
    min-height: 13.1rem;
    height: 100%;
    align-items: start;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: var(--color-grey-6);
    }
`

// eslint-disable-next-line react/prop-types
const PlatformsDropdown = ({ is_open, has_animation, onClick }) => {
    return (
        <Show.Desktop>
            <NavDropdown is_open={is_open} has_animation={has_animation}>
                <NavDropdownGrid>
                    <PlatformItem
                        activeClassName="active"
                        to="/dtrader"
                        aria-label={localize('DTrader')}
                        partiallyActive={true}
                        onClick={onClick}
                    >
                        <DTrader />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DTrader')}
                            </Text>
                            <Text color="black-3">
                                {localize(
                                    'Start trading now with a powerful, yet easy-to-use platform.',
                                )}
                            </Text>
                        </div>
                    </PlatformItem>
                    <PlatformItem
                        activeClassName="active"
                        to="/dbot"
                        aria-label={localize('DBot')}
                        partiallyActive={true}
                        onClick={onClick}
                    >
                        <DBot />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DBot')}
                            </Text>
                            <Text color="black-3">
                                {localize('Automate your trading ideas without coding.')}
                            </Text>
                        </div>
                    </PlatformItem>

                    <PlatformItem
                        activeClassName="active"
                        to="/dmt5"
                        aria-label={localize('DMT5')}
                        partiallyActive={true}
                        onClick={onClick}
                    >
                        <DMT5 />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DMT5')}
                            </Text>
                            <Text color="black-3">
                                {localize('Trade with the platform of choice for professionals.')}
                            </Text>
                        </div>
                    </PlatformItem>
                </NavDropdownGrid>
            </NavDropdown>
        </Show.Desktop>
    )
}
export default React.memo(PlatformsDropdown)
