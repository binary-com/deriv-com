import React from 'react'
import styled from 'styled-components'
import { Container, Flex } from 'components/containers'
import { Text } from 'components/elements'
import { localize, Localize, LocalizedLink } from 'components/localization'
import Deriv from 'images/svg/logo-deriv.svg'
import BinaryLogo from 'images/svg/binary.svg'

const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-black);
    z-index: 100;
    padding: 2.4rem 0;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.8);
`

const LinkText = styled(Text)`
    font-size: var(--text-size-sm);
    color: var(--color-white);
    text-decoration: none;
    letter-spacing: 0.1rem;
    cursor: pointer;
    margin: 0 2.4rem;
    transition: color 0.25s;

    &:hover {
        color: var(--color-red);
    }
`

const Binary = styled(Text)`
    width: 80px;
    margin-left: 0.5rem;
    line-height: 1;
    color: var(--color-white);
    font-size: var(--text-size-xxs);
`

const BinaryLink = styled.a`
    display: inline-block;
    color: var(--color-white);
    font-size: var(--text-size-xxs);
    font-weight: bold;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`

const LinkWrapper = styled(Flex)`
    @media (max-width: 680px) {
        display: none;
    }
`

const Header = () => (
    <>
        <HeaderWrapper>
            <Container jc="space-between">
                <Flex ai="center" jc="flex-start">
                    <LocalizedLink to="/amp">
                        <Deriv />
                    </LocalizedLink>
                    <LocalizedLink
                        external
                        to="home"
                        is_binary_link
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <BinaryLogo width="24" height="24" />
                    </LocalizedLink>
                    <Binary>
                        <Localize
                            translate_text="A <0>Binary.com</0> brand"
                            components={[
                                <BinaryLink
                                    key={0}
                                    href="https://binary.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                />,
                            ]}
                        />
                    </Binary>
                </Flex>
                <LinkWrapper ai="center" jc="center">
                    <LinkText role="button" tabIndex="-1" on="tap:trade.scrollTo()">
                        {localize('Trade')}
                    </LinkText>
                    <LinkText role="button" tabIndex="-1" on="tap:markets.scrollTo()">
                        {localize('Markets')}
                    </LinkText>
                    <LinkText role="button" tabIndex="-1" on="tap:our-clients.scrollTo()">
                        {localize('Testimonials')}
                    </LinkText>
                </LinkWrapper>
            </Container>
        </HeaderWrapper>
    </>
)

export default Header
