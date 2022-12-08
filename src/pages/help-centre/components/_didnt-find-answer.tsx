import React from 'react'
import styled from 'styled-components'
import { Header } from 'components/elements'
import { Button } from 'components/form'
import { Localize } from 'components/localization'
import { Container, Flex } from 'components/containers'
import { useLivechat } from 'components/hooks/use-livechat'
import device from 'themes/device'
import ContactUsIcon from 'images/svg/help/livechat-red.svg'
import WhatsAppSVG from 'images/svg/help/whatsapp.svg'
import { whatsapp_url } from 'common/constants'

const Section = styled.section`
    background-color: var(--color-black);
`
const StyledContainer = styled(Container)`
    padding: 3.5rem 0;

    @media ${device.tabletL} {
        flex-wrap: wrap;

        ${Button} {
            font-size: 14px;
            padding: 10px 16px;
        }
    }

    & > * {
        width: auto;
    }
`
const Icon = styled.img`
    @media ${device.tabletL} {
        width: 48px;
        height: 48px;
        margin-right: 1.6rem;
    }
`
const Text = styled(Header)`
    @media ${device.tabletL} {
        margin: 1.6rem 0;
        text-align: center;
        font-weight: bold;
    }
`
const WhatsAppButton = styled.button`
    background-color: var(--color-green-3);
    border: 2px solid var(--color-green-3);
    color: var(--color-white);
    font-size: var(--text-size-xs);
    border-radius: 4px;
    height: auto;
    padding: 10px 16px;
    font-weight: bold;
    margin-left: 16px;

    &:hover {
        background-color: var(--color-red);
        border: 2px solid var(--color-red);
        color: var(--color-white);
    }
`
const WhatsAppIcon = styled.img`
    margin: -3px 8px -3px 0;
`

const DidntFindYourAnswerBanner = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()

    const openChatWindow = () => LC_API.open_chat_window()
    const openWhatsappUrl = () => window.open(whatsapp_url, '_blank')

    return (
        <Section>
            <StyledContainer>
                <Icon src={ContactUsIcon} alt="contact-us-icon" />
                <Text size="var(--text-size-l)" color="white" m="0 2.4rem" weight="normal">
                    <Localize translate_text="Didn’t find your answer? We can help." />
                </Text>

                {is_livechat_interactive && (
                    <Flex>
                        <Button secondary onClick={openChatWindow}>
                            <Localize translate_text="Chat" />
                        </Button>

                        <WhatsAppButton onClick={openWhatsappUrl}>
                            <WhatsAppIcon
                                src={WhatsAppSVG}
                                alt="whatsapp-icon"
                                height="16"
                                width="16"
                            />
                            <Localize translate_text="WhatsApp" />
                        </WhatsAppButton>
                    </Flex>
                )}
            </StyledContainer>
        </Section>
    )
}

export default DidntFindYourAnswerBanner
