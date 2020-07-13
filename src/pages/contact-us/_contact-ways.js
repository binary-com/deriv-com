import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton } from 'components/form'
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
