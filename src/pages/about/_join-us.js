import React from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import { Header, Text } from 'components/elements'
import { localize, LocalizedLink } from 'components/localization'

const JoinUsContainer = styled.section`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 4rem 9.7rem;
    margin: auto;
    align-items: right;
    background-image: linear-gradient(to left, #232232, #223122 81%, rgba(0, 0, 0, 0.26) 50%);

    @media ${device.desktop} {
        max-width: 1440px;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 2.1rem;
`
const Card = styled.div`
    background-color: var(--color-brown);
    width: 38.4rem;
    height: 23.3rem;
    padding: 3.2rem 3.2rem;
`
const StyledLink = styled(LocalizedLink)`
    text-decoration: none;
    color: var(--color-red);
    font-size: var(--text-size-s);
    font-weight: bold;
`
const RightArrow = styled.i`
    border: solid var(--color-red);
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    margin-left: 0.4rem;
`
export const JoinUs = () => {
    return (
        <JoinUsContainer>
            <Card>
                <StyledHeader color="white" as="h4" weight="500">
                    {localize('JOIN US')}
                </StyledHeader>
                <Text color="white">
                    {localize(
                        'We are looking for ambitious, talented and motivated people to join our team. Learn more about the exciting positions avaliable.',
                    )}
                </Text>
                <br />
                <StyledLink to="">
                    {localize('View open positions')} <RightArrow />
                </StyledLink>
            </Card>
        </JoinUsContainer>
    )
}
