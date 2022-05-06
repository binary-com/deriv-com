import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import DerivLogo from 'images/svg/layout/logo-deriv-only.svg'
import AcademyLogo from 'images/svg/academy/academy-logo.svg'
import { Flex } from 'components/containers'
import device from 'themes/device'

const Nav = styled.nav`
    background-color: var(--color-black);
    width: 100%;
    position: fixed;
    z-index: 3;
    top: 0;
    padding: 0;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.tabletL} {
        height: 48px;
    }
`

const DerivSVG = styled.img`
    width: 150px;
    height: 27px;

    @media ${device.tabletL} {
        width: 89px;
        height: 16px;
    }
`

const AcademySVG = styled.img`
    width: 140px;
    height: 20px;

    @media ${device.tabletL} {
        width: 84px;
        height: 12px;
    }
`

const Line = styled.div`
    width: 1px;
    height: 28px;
    margin: 0 16px;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        height: 16px;
        margin: 0 8px;
    }
`

const AcademyNav = () => {
    return (
        <Nav>
            <Flex width="auto">
                <LocalizedLink
                    to="/academy/"
                    aria-label={localize('Academy')}
                    style={{
                        textDecoration: 'none',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <DerivSVG src={DerivLogo} />
                    <Line />
                    <AcademySVG src={AcademyLogo} />
                </LocalizedLink>
            </Flex>
        </Nav>
    )
}

export default AcademyNav
