import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize } from '../localization'
import { GridContainer } from '../containers/container'
import Show from 'components/containers/show'
import { Text } from 'components/elements/typography.js'
// Icons
import DTrader from 'images/svg/dtrader-icon.svg'
import DBot from 'images/svg/dbot-icon.svg'
import DMT5 from 'images/svg/dmt5-icon.svg'

const NavDropdown = styled.div`
    width: 100%;
    position: absolute;
    top: -18rem;
    z-index: -1;
    background-color: #ffffff;
    height: 17.8rem;
    opacity: 0;
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.35s ease-in-out;

    &.is-nav-open {
        top: 7.2rem;
        opacity: 1;
    }
`

const NavDropdownGrid = styled(GridContainer)`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2rem;
    height: 100%;
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
    align-items: start;
    cursor: pointer;
    text-decoration: none;

    &:hover {
        background-color: var(--color-grey-6);
    }
`

const PlatformsDropdown = () => {
    return (
        <Show.Desktop>
            <NavDropdown
            id="switcher"
            >
                <NavDropdownGrid>
                    <PlatformItem
                        activeClassName="active"
                        to="/dtrader/"
                        aria-label={localize('DTrader')}
                        partiallyActive={true}
                    >
                        <DTrader />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DTrader')}
                            </Text>
                            <Text color="black-3">
                                {localize(
                                    'Everything you need to trade the markets you want',
                                )}
                            </Text>
                        </div>
                    </PlatformItem>
                    <PlatformItem
                        activeClassName="active"
                        to="/dbot/"
                        aria-label={localize('DBot')}
                        partiallyActive={true}
                    >
                        <DBot />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DBot')}
                            </Text>
                            <Text color="black-3">
                                {localize(
                                    'A powerful robot builder to automate your trading strategies',
                                )}
                            </Text>
                        </div>
                    </PlatformItem>
                    <PlatformItem
                        activeClassName="active"
                        to="/dmt5/"
                        aria-label={localize('DMT5')}
                        partiallyActive={true}
                    >
                        <DMT5 />
                        <div>
                            <Text secondary color="black-3" weight="bold">
                                {localize('DMT5')}
                            </Text>
                            <Text color="black-3">
                                {localize(
                                    'An all-in-one platform for FX and CFD trading',
                                )}
                            </Text>
                        </div>
                    </PlatformItem>
                </NavDropdownGrid>
            </NavDropdown>
        </Show.Desktop>
    )
}

export default PlatformsDropdown
