import React from 'react'
import FloatingActionButton from './floating-action-button'
import WhatsAppIcon from 'images/svg/layout/whatsapp.svg'
import WhatsAppHover from 'images/svg/layout/whatsapp-hover.svg'
import { useLivechat } from 'components/hooks/use-livechat'
import { whatsapp_url } from 'common/constants'

const WhatsApp = () => {
    const [is_livechat_interactive] = useLivechat()

    if (is_livechat_interactive)
        return (
            <FloatingActionButton onClick={() => window.open(whatsapp_url, '_blank')}>
                {(has_hover) => (
                    <img
                        src={has_hover ? WhatsAppHover : WhatsAppIcon}
                        width="32"
                        height="32"
                        alt="whatsapp icon"
                    />
                )}
            </FloatingActionButton>
        )

    return <></>
}

export default WhatsApp
