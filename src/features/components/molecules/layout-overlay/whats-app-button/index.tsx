import React from 'react'
import FloatingButton from '../floating-button'
import { whatsapp_url } from 'common/constants'
import WhatsAppIcon from 'images/svg/layout/whatsapp.svg'
import WhatsAppHover from 'images/svg/layout/whatsapp-hover.svg'

const WhatsappButton = () => {
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
}

export default WhatsappButton
