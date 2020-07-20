import React from 'react'
import styled from 'styled-components'
import { Text } from '../../components/elements/typography'
import { Header } from 'components/elements'
import { SectionContainer, Flex } from 'components/containers'
import { localize, Localize } from 'components/localization'
import { LinkButton, Button } from 'components/form'
import device from 'themes/device'
import Chat from 'images/svg/call.svg'
import Help from 'images/svg/help-centre.svg'
import { isBrowser } from 'common/utility'

const StyledLinkButton = styled(LinkButton)`
    border-radius: 4px;
    height: 4rem;
    margin-top: 3.2rem;

    @media ${device.tabletL} {
        font-size: 1.75rem;
    }
`
const help_content = [
    {
        header: <Localize translate_text="Visit the Help centre" />,
        text: (
            <Text mb="1.6rem">
                <Localize translate_text="The quickest way to get answers to your questions." />
            </Text>
        ),
        icon: <Help />,
        button: (
            <StyledLinkButton secondary="true" to="/help-centre">
                {localize('Visit the Help Centre')}
            </StyledLinkButton>
        ),
    },
    {
        header: <Localize translate_text="Chat with us" />,
        text: (
            <Text>
                <Localize translate_text="Get answers you can’t find in the Help centre." />
            </Text>
        ),
        icon: <Chat />,
    },
]

const StyledFlex = styled(Flex)`
    margin: auto;
    max-width: 110rem;

    @media ${device.tabletL} {
        flex-direction: column;
        align-items: center;

        article {
            margin: 16px auto 0;
        }
        article:last-child {
            margin-bottom: 32px;
        }
    }
`
const ClientCard = styled.article`
    margin: 2rem;
    background-color: var(--color-white);
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(14, 14, 14, 0.1);
    width: 38.4rem;
    padding: 3.2rem 2.4rem;
    height: 100%;
    min-height: 22rem;
    position: relative;

    @media ${device.tabletL} {
        width: 100%;
        max-width: 55rem;
        margin-top: 0;
        padding: 3rem;

        ${Text} {
            font-size: 2rem;
        }
        ${Header} {
            font-size: 3rem;
        }
        ${Flex} {
            padding-bottom: 2rem;
            align-items: center;
        }
    }

    @media ${device.mobileL} {
        ${Header} {
            font-size: 1.9rem;
        }
    }
`

const ContactWays = () => {
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
        <SectionContainer mt="-18rem">
            <StyledFlex wrap="wrap">
                {help_content.map((item, idx) => {
                    return (
                        <ClientCard key={idx}>
                            <Flex pb="0.8rem" ai="center">
                                <Header size="2.4rem">{item.header}</Header>
                                {item.icon}
                            </Flex>
                            <Text pb="1rem">{item.text}</Text>
                            <Text>{item.text2}</Text>
                            <div>{item.button}</div>

                            {idx == 1 && (
                                <>
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
                                </>
                            )}
                        </ClientCard>
                    )
                })}
            </StyledFlex>
        </SectionContainer>
    )
}

export default ContactWays
