import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from '../../components/elements/typography'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import CallUsIcon from 'images/svg/call-us.svg'
// import ChatLiveIcon from 'images/svg/chat-live.svg'
import EmailUsIcon from 'images/svg/email-us.svg'
import device from 'themes/device'

const Wrapper = styled.section`
    width: 100%;
    height: 44.5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: nowrap;
    background-color: var(--color-white);
    padding: 4rem 12.8rem;

    @media ${device.tabletS} {
        height: auto;
    }
`
const WaysWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media ${device.tabletS} {
        flex-direction: column;
        height: auto;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    width: 38.4rem;
    padding-top: 3.2rem;
`

const StyledHeader = styled(Header)`
    margin-bottom: 0.8rem;
`
const StyledText = styled(Text)`
    margin-bottom: ${props => props.marginBttom || '0.8rem'};
`
const Logo = styled.div`
    margin-bottom: 1.4rem;
`
const Splitter = styled.div`
    background-color: var(--color-grey-9);
    height: 18.5rem;
    width: 0.1rem;
    margin-top: 7.8rem;

    @media ${device.tabletS} {
        display: none;
    }
`
// TODO: This section will be added shortly when the back-end gets ready.
// const StyledButton = stßyled(LocalizedLink)`
//     border-radius: 4px;
//     width: 11.5rem;
//     height: 4rem;
//     padding: 1rem 1.6rem;
//     font-size: 1.4rem;
//     transition: all 0.25s;
//     font-weight: bold;
//     border: 2px solid var(--color-red);
//     color: var(--color-white);
//     background: var(--color-red);
//     text-decoration: none;
//     text-align: center;

//     &:hover {
//         background-color: var(--color-red-3);
//         border-color: var(--color-red-3);
//     }
//     &:focus,
//     &:active {
//         outline: none;
//     }
//     &:active {
//         transform: scale(0.95);
//     }
// `
export const ContactWays = () => {
    return (
        <Wrapper>
            <WaysWrapper>
                <Contact>
                    <Logo>
                        <CallUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center">
                        {localize('Call Us')}
                    </StyledHeader>
                    <StyledText>{localize('International help desk')}</StyledText>
                    <StyledText secondary weight="bold">
                        {localize('+44 800 011 9847')}
                    </StyledText>
                    <StyledText>{localize('Mon-Fri: 24 hours')}</StyledText>
                    <StyledText marginBttom="1.9rem">
                        {localize('Sat-Sun: 8:00am - 5pm GMT')}
                    </StyledText>
                </Contact>
                <Splitter />
                <Contact>
                    <Logo>
                        <EmailUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center">
                        {localize('Email Us')}
                    </StyledHeader>
                    <LinkText
                        weight="bold"
                        size="var(--text-size-sm)"
                        color="red"
                        href="mailto:support@deriv.com"
                    >
                        {localize('support@deriv.com')}
                    </LinkText>
                    {/* <StyledText secondary weight="bold" color="red">
                        <EmailContainer>{localize('support@deriv.com')}</EmailContainer>
                    </StyledText> */}
                </Contact>

                {/*
                // TODO: This section will be added shortly when the back-end gets ready.
                <Splitter></Splitter>
                <Contact>
                    <Logo>
                        <ChatLiveIcon></ChatLiveIcon>
                    </Logo>
                    <StyledHeader as="h3" align="center">
                        {localize('Chat live')}
                    </StyledHeader>
                    <StyledText>{localize('Mon-Fri: 24 hours')}</StyledText>
                    <StyledText marginBttom="3.2rem">
                        {localize('Sat-Sun: 8:00am - 5pm GMT')}
                    </StyledText>
                    <StyledButton to="/">{localize('Start a chat')}</StyledButton>
                </Contact> */}
            </WaysWrapper>
        </Wrapper>
    )
}
