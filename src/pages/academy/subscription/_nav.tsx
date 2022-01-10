import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { LocalizedLink, localize } from 'components/localization'
import AcademyLogo from 'images/svg/academy/academy-logo.svg'
import { QueryImage } from 'components/elements'
import { Flex } from 'components/containers'
import device from 'themes/device.js'

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

const AcademySVG = styled.img`
    width: 140px;
    height: 20px;

    @media ${device.tabletL} {
        width: 84px;
    }
`

const Line = styled.div`
    width: 1px;
    height: 28px;
    margin-right: 8px;
    margin-left: 8px;
    background-color: var(--color-white);

    @media ${device.tabletL} {
        height: 16px;
    }
`

const query = graphql`
    query {
        deriv: file(relativePath: { eq: "logo.png" }) {
            ...fadeIn
        }
    }
`

const AcademyNav = () => {
    const data = useStaticQuery(query)
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
                    <QueryImage
                        data={data['deriv']}
                        alt={localize('Deriv')}
                        width="164px"
                        height="auto"
                    />
                    <Line />
                    <AcademySVG src={AcademyLogo} />
                </LocalizedLink>
            </Flex>
        </Nav>
    )
}

export default AcademyNav
