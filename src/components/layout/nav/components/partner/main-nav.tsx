import React from 'react'
import styled from 'styled-components'
import { DesktopWrapper } from '../../styles/nav-styles'
import { LocalizedLink, localize, LanguageSwitcher } from 'components/localization'
import { Container } from 'components/containers'
import { Text } from 'components/elements'

const Wrapper = styled.div`
    background-color: var(--color-black);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`
const Link = styled(LocalizedLink)`
    margin-right: 3.2rem;
    text-decoration: none;
`
const LanguageWrapper = styled(Container)`
    text-align: right;
    margin-left: 200px;
`
const Desktop = styled(DesktopWrapper)`
    z-index: 2;
`
const StyledContainer = styled(Container)`
    height: 3rem;
`
const Navigation = styled(Container)`
    margin: 0;
`

const MainNav = () => {
    return (
        <Wrapper>
            <StyledContainer justify="space-between">
                <Navigation justify="flex-start">
                    <Link to="/">
                        <Text color="grey-19" size="var(--text-size-xxs)">
                            {localize('Deriv website')}
                        </Text>
                    </Link>
                    <Link to="/who-we-are/">
                        <Text color="grey-19" size="var(--text-size-xxs)">
                            {localize('Who we are')}
                        </Text>
                    </Link>
                    <Link to="/contact_us/">
                        <Text color="grey-19" size="var(--text-size-xxs)">
                            {localize('Contact us')}
                        </Text>
                    </Link>
                </Navigation>

                <Desktop>
                    <LanguageWrapper>
                        <LanguageSwitcher short_name="true" />
                    </LanguageWrapper>
                </Desktop>
            </StyledContainer>
        </Wrapper>
    )
}

export default MainNav
