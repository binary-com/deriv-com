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
import { useCountryRule } from 'components/hooks/use-country-rule'
import { whatsapp_url } from 'common/constants'

const Section = styled.section`
    background-color: var(--color-black-3);
`
const StyledContainer = styled(Container)`
    padding: 3.5rem 0;
    @media ${device.tablet} {
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
    font-weight: normal;

    @media ${device.tablet} {
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
    const { is_south_africa, is_nigeria } = useCountryRule()

    return (
        <Section>
            <StyledContainer>
                <Icon src={ContactUsIcon} alt="message-square" />
                <Text size="var(--text-size-l)" color="white" m="0 2.4rem">
                    <Localize translate_text="_t_Didn’t find your answer? We can help._t_" />
                </Text>

                {is_livechat_interactive && (
                    <Flex>
                        <Button secondary onClick={() => LC_API.open_chat_window()}>
                            <Localize translate_text="_t_Chat_t_" />
                        </Button>

                        {(is_south_africa || is_nigeria) && (
                            <WhatsAppButton onClick={() => window.open(whatsapp_url, '_blank')}>
                                <WhatsAppIcon
                                    src={WhatsAppSVG}
                                    alt="whatsappicon"
                                    height="16"
                                    width="16"
                                />
                                <Localize translate_text="_t_WhatsApp_t_" />
                            </WhatsAppButton>
                        )}
                    </Flex>
                )}
            </StyledContainer>
        </Section>
    )
}

export default DidntFindYourAnswerBanner
