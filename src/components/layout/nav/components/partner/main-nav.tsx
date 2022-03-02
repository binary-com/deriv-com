import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
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
    return (
        <Wrapper>
            <StyledContainer justify="space-between">
                <Navigation justify="flex-start">
                    <Link to="/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {is_security ? localize('Go to Deriv.com') : localize('Deriv website')}
                        </Header>
                    </Link>
                    <Link to="/who-we-are/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {is_security ? localize('About us') : localize('Who we are')}
                        </Header>
                    </Link>
                    <Link to="/contact_us/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {localize('Contact us')}
                        </Header>
                    </Link>
                </Navigation>

                <Desktop is_security={is_security}>
                    <LanguageWrapper is_security={is_security}>
                        <LanguageSwitcher short_name="true" is_security={is_security} />
                    </LanguageWrapper>
                </Desktop>
            </StyledContainer>
        </Wrapper>
    )
}

export default MainNav
