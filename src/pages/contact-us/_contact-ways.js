import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { Header } from 'components/elements'
import { localize } from 'components/localization'
import { LinkButton, Button } from 'components/form'
import NeedUsIcon from 'images/svg/need-us.svg'
import CallUsIcon from 'images/svg/call-us.svg'
import device from 'themes/device'
import { isBrowser } from 'common/utility'

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

    &:first-child {
        margin-right: 2.4rem;
    }
`

const StyledHeader = styled(Header)`
    margin-bottom: ${(props) => props.mb || '1.6rem'};

    @media ${device.tabletL} {
        margin-bottom: 1rem;
    }
`

const StyledText = styled(Text)`
    margin-bottom: ${(props) => props.mb || '0.8rem'};
    font-size: var(--text-size-sm);

    @media ${device.tabletL} {
        font-size: ${(props) => (props.secondary ? '3rem' : '2rem')};
    }
`

const Logo = styled.div`
    margin-bottom: ${(props) => props.mb || '2.4rem'};

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

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`

export const ContactWays = () => {
    const LC_API = (isBrowser() && window.LC_API) || {}
    const [is_livechat_interactive, setLiveChatInteractive] = React.useState(false)

    React.useEffect(() => {
        if (isBrowser()) {
            window.scrollTo(0, 0)
            window.LiveChatWidget.on('ready', () => {
                setLiveChatInteractive(true)
            })
        }
    }, [])
    return (
        <Wrapper>
            <WaysWrapper>
                <Contact>
                    <Logo>
                        <NeedUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center" lh="1.25">
                        {localize('Visit the Help centre')}
                    </StyledHeader>
                    <StyledText align="center" mb="4.2rem">
                        {localize('The quickest way to get answers to your questions.')}
                    </StyledText>
                    <StyledLinkButton secondary="true" to="/help-centre">
                        {localize('Visit the Help centre')}
                    </StyledLinkButton>
                </Contact>
                <Contact>
                    <Logo mb="4.4rem">
                        <CallUsIcon />
                    </Logo>
                    <StyledHeader as="h3" align="center" mb="3.6rem" lh="1.25">
                        {localize('Chat with us')}
                    </StyledHeader>
                    <StyledText align="center" mb="4.2rem">
                        {localize('Get answers you can’t find in the Help centre.')}
                    </StyledText>
                    {is_livechat_interactive && (
                        <Button
                            secondary="true"
                            to="/help-centre"
                            onClick={() => {
                                LC_API.open_chat_window()
                            }}
                        >
                            {localize('Chat with us')}
                        </Button>
                    )}
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
