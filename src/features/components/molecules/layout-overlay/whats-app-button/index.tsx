import React from 'react'
import FloatingButton from '../floating-button'
import { whatsapp_url } from 'common/constants'
import { useLivechat } from 'components/hooks/use-livechat'
import WhatsAppIcon from 'images/svg/layout/whatsapp.svg'
import WhatsAppHover from 'images/svg/layout/whatsapp-hover.svg'

const WhatsappButton = () => {
    const [is_livechat_interactive] = useLivechat()

    if (is_livechat_interactive)
        return (
            <FloatingButton onClick={() => window.open(whatsapp_url, '_blank')}>
                {(has_hover) => (
                    <img
                        src={has_hover ? WhatsAppHover : WhatsAppIcon}
                        width="32"
                        height="32"
                        alt="whatsapp icon"
                    />
                )}
            </FloatingButton>
        )

    return <></>
}

export default WhatsappButton
