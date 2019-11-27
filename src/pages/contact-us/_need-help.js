import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { localize, LocalizedLink } from 'components/localization'
import { Header } from 'components/elements'
import NeedUsIcon from 'images/svg/need-us.svg'

const Wrapper = styled.section`
    width: 100%;
    height: 35rem;
    background-color: var(--color-grey-8);
    padding: 4rem 6.6rem;
`

const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`
const Logo = styled(NeedUsIcon)`
    margin-bottom: 1.4rem;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    margin-bottom: 2.4rem;
    width: 38.4rem;
`
const StyledButton = styled(LocalizedLink)`
    border-radius: 4px;
    width: 18.4rem;
    height: 4rem;
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    transition: all 0.25s;
    font-weight: bold;
    border: 2px solid var(--color-red);
    color: var(--color-white);
    background: var(--color-red);
    text-decoration: none;
    text-align: center;

    &:hover {
        background-color: var(--color-red-3);
        border-color: var(--color-red-3);
    }
    &:focus,
    &:active {
        outline: none;
    }
    &:active {
        transform: scale(0.95);
    }
`

export const NeedHelp = () => {
    return (
        <Wrapper>
            <SectionWrapper>
                <Logo></Logo>
                <StyledHeader as="h3" align="center" color="--color-black-3">
                    {localize('Need help?')}
                </StyledHeader>
                <StyledText align="center">
                    {localize(
                        'Try our Help Centre. You’ll find searchable, easy to follow articles to get you going.',
                    )}
                </StyledText>
                <StyledButton to="help-centre">{localize('Go to Help Centre')}</StyledButton>
            </SectionWrapper>
        </Wrapper>
    )
}
