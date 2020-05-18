import React from 'react'
import styled from 'styled-components'
import { Text, LinkText } from '../../components/elements/typography'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
import CallUsIcon from 'images/svg/call-us.svg'
// import ChatLiveIcon from 'images/svg/chat-live.svg'
import EmailUsIcon from 'images/svg/email-us.svg'
import NeedUsIcon from 'images/svg/need-us.svg'
import device from 'themes/device'

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: var(--color-grey-8);
    padding: 8rem 0;

    @media ${device.tabletS} {
        height: auto;
    }
    @media ${device.tabletL} {
        padding: 5rem 2rem;
    }
`
const WaysWrapper = styled.div`
    display: flex;
    flex-direction: row;

    @media ${device.tabletL} {
        width: 100%;

        > div {
            margin: 0 auto;
            width: 100%;
        }
    }
    @media (max-width: 740px) {
        flex-direction: column;
        height: auto;

        > div {
            margin-top: 7rem;
        }
    }

    div:first-child {
        margin-top: 0;
    }
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 28.2rem;
`

const CallContact = styled(Contact)`
    width: 38.4rem;
    padding: 0 2.4rem;

    @media ${device.tabletL} {
        padding: 0;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: 1.6rem;

    @media ${device.tabletL} {
        margin-bottom: 1rem;
    }
`

const StyledText = styled(Text)`
    margin-bottom: ${(props) => props.marginBttom || '0.8rem'};
    font-size: var(--text-size-sm);

    @media ${device.tabletL} {
        font-size: ${(props) => (props.secondary ? '3rem' : '2rem')};
    }
`

const Logo = styled.div`
    margin-bottom: 2.4rem;

    @media ${device.tabletL} {
        text-align: center;
        margin-bottom: 2rem;

        svg {
            width: 6rem;
            height: 6rem;
        }
    }
`

const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    height: 4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const ClickToCall = styled.a`
    text-decoration: none;
    color: inherit;
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
                        <NeedUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center">
                        {localize('Visit our Help Centre')}
                    </StyledHeader>
                    <StyledText align="center">
                        {localize('The quickest way to get answers to your questions.')}
                    </StyledText>
                    <StyledLinkButton secondary="true" to="/help-centre">
                        {localize('Visit the Help Centre')}
                    </StyledLinkButton>
                </Contact>
                <CallContact>
                    <Logo>
                        <CallUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center">
                        {localize('Call Us')}
                    </StyledHeader>
                    <StyledText align="center">{localize('International help desk')}</StyledText>
                    <StyledText secondary="true" weight="bold">
                        <ClickToCall href="tel:+441942316229">+44 1942 316229</ClickToCall>
                    </StyledText>
                    <StyledText>{localize('Mon-Fri: 24 hours')}</StyledText>
                    <StyledText mb="1.9rem" align="center">
                        {localize('Sat-Sun: 8:00 am - 5:00 pm (GMT+8)')}
                    </StyledText>
                </CallContact>
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
