import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, LanguageSwitcher, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

type MainNavProps = {
    is_security?: boolean
}

const Wrapper = styled.div`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`
const Link = styled(LocalizedLink)`
    margin-right: 3.2rem;
    text-decoration: none;
`
const Desktop = styled.div<MainNavProps>`
    z-index: 2;
    @media ${device.tabletL} {
        display: ${({ is_security }) => !is_security && 'none'};
    }
`
const StyledContainer = styled(Container)`
    height: 3.6rem;
`
const Navigation = styled(Container)`
    margin: 0;
`
const LanguageWrapper = styled(Container)<MainNavProps>`
    margin-left: ${({ is_security }) => !is_security && '200px'};
`

const MainNav = ({ is_security }: MainNavProps) => {
    const links = [
        {
            to: '/',
            title: is_security ? (
                <Localize translate_text="Go to Deriv.com" />
            ) : (
                <Localize translate_text="Deriv website" />
            ),
        },
        {
            to: '/who-we-are/',
            title: is_security ? (
                <Localize translate_text="About us" />
            ) : (
                <Localize translate_text="Who we are" />
            ),
        },
        { to: '/contact_us/', title: <Localize translate_text="Contact us" /> },
    ]

    return (
        <Wrapper>
            <StyledContainer justify="space-between">
                <Navigation justify="flex-start">
                    {links.map(({ to, title }) => (
                        <Link key={to} to={to}>
                            <Header weight="normal" color="grey-19" type="paragraph-2">
                                {title}
                            </Header>
                        </Link>
                    ))}
                </Navigation>

                <Desktop is_security={is_security}>
                    <LanguageWrapper is_security={is_security}>
                        <LanguageSwitcher has_short_name is_security={is_security} />
                    </LanguageWrapper>
                </Desktop>
            </StyledContainer>
        </Wrapper>
    )
}

export default MainNav
