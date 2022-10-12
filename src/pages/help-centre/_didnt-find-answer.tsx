import React from 'react'
import styled from 'styled-components'
import { Text } from 'components/elements'
import { Button } from 'components/form'
import { localize } from 'components/localization'
import { useLivechat } from 'components/hooks/use-livechat'
import device from 'themes/device'
import ContactUsIcon from 'images/svg/help/livechat-red.svg'
import WhatsAppSVG from 'images/svg/help/whatsapp.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { whatsapp_url } from 'common/constants'

const DidntFindYourAnswerWrapper = styled.div`
    background: var(--color-black);
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 3.5rem 0;

    @media ${device.tablet} {
        flex-direction: column;
        align-items: center;
    }
`
const StyledIcon = styled.img`
    @media ${device.tabletL} {
        width: 48px;
        height: 48px;
        margin-right: 1.6rem;
    }
`
const MiddleText = styled(Text)`
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
    font-size: 14px;
    border-radius: 4px;
    height: fit-content;
    padding: 10px 16px;
    font-weight: bold;
    margin-left: 16px;
    width: inherit;

    &:hover {
        background-color: var(--color-red);
        border: 2px solid var(--color-red);
        color: var(--color-white);
    }
`

const WhatsAppIcon = styled.img`
    margin: -3px 8px -3px 0;
`

const ButtonWrapper = styled.div`
    @media ${device.tablet} {
        display: flex;
        width: 100%;
        padding: 16px;
    }
`

export const DidntFindYourAnswerBanner = () => {
    const [is_livechat_interactive, LC_API] = useLivechat()
    const { is_south_africa, is_nigeria } = useCountryRule()
    return (
        <DidntFindYourAnswerWrapper>
            <StyledIcon src={ContactUsIcon} alt="contact us icon" />
            <MiddleText size="var(--text-size-l)" color="white" m="0 2.4rem">
                {localize('Didn’t find your answer? We can help.')}
            </MiddleText>
            {is_livechat_interactive && (
                <ButtonWrapper>
                    <Button
                        width="inherit"
                        secondary
                        onClick={() => {
                            LC_API.open_chat_window()
                        }}
                    >
                        {localize('Chat')}
                    </Button>
                    {(is_south_africa || is_nigeria) && (
                        <WhatsAppButton onClick={() => window.open(whatsapp_url, '_blank')}>
                            <WhatsAppIcon
                                src={WhatsAppSVG}
                                alt={localize('whatsappicon')}
                                height="16"
                                width="16"
                            />
                            {localize('WhatsApp')}
                        </WhatsAppButton>
                    )}
                </ButtonWrapper>
            )}
        </DidntFindYourAnswerWrapper>
    )
}

export default DidntFindYourAnswerBanner
