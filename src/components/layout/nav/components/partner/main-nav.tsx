import React from 'react'
import styled from 'styled-components'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Container } from 'components/containers'
import { Header } from 'components/elements'
import device from 'themes/device'

type MainNavProps = {
    security?: boolean
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
    display: flex;
    text-align: right;
    margin-left: auto;
    align-items: center;

    @media ${device.tabletL} {
        display: ${({ security }) => !security && 'none'};
    }
`
const StyledContainer = styled(Container)`
    height: 3.6rem;
`
const Navigation = styled(Container)`
    margin: 0;
`

const MainNav = ({ security }: MainNavProps) => {
    return (
        <Wrapper>
            <StyledContainer justify="space-between">
                <Navigation justify="flex-start">
                    <Link to="/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {security ? localize('Go to Deriv.com') : localize('Deriv website')}
                        </Header>
                    </Link>
                    <Link to="/who-we-are/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {security ? localize('About us') : localize('Who we are')}
                        </Header>
                    </Link>
                    <Link to="/contact_us/">
                        <Header weight="normal" color="grey-19" type="paragraph-2">
                            {localize('Contact us')}
                        </Header>
                    </Link>
                </Navigation>

                <Desktop security={security}>
                    <LanguageSwitcher short_name="true" security={security} />
                </Desktop>
            </StyledContainer>
        </Wrapper>
    )
}

export default MainNav
