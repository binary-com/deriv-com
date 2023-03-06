import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, LanguageSwitcher, Localize } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'
import { TString } from 'types/generics'

type MainNavProps = {
    is_security?: boolean
}

type TLink = {
    to: string
    title: TString
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
    const links: TLink[] = [
        {
            to: '/',
            title: is_security ? '_t_Go to Deriv.com_t_' : '_t_Deriv website_t_',
        },
        {
            to: '/who-we-are/',
            title: is_security ? '_t_About us_t_' : '_t_Who we are_t_',
        },
        { to: '/contact_us/', title: '_t_Contact us_t_' },
    ]

    return (
        <Wrapper>
            <StyledContainer justify="space-between">
                <Navigation justify="flex-start">
                    {links.map(({ to, title }) => (
                        <Link key={to} to={to}>
                            <Header weight="normal" color="grey-19" type="paragraph-2">
                                <Localize translate_text={title} />
                            </Header>
                        </Link>
                    ))}
                </Navigation>

                <Desktop is_security={is_security}>
                    <LanguageWrapper is_security={is_security}>
                        <LanguageSwitcher is_security={is_security} />
                    </LanguageWrapper>
                </Desktop>
            </StyledContainer>
        </Wrapper>
    )
}

export default MainNav
