import React from 'react'
import FloatingButton from '../floating-button'
import { whatsapp_url } from 'common/constants'
import widgetEvent from 'common/tracking-functions/widget'
import WhatsAppIcon from 'images/svg/layout/normal.svg'
import WhatsAppHover from 'images/svg/layout/hover.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

const WhatsappButton = () => {
    const { is_mobile } = useBreakpoints()

    return (
        <FloatingButton
            onClick={() => {
                widgetEvent('whatsapp')
                window.open(whatsapp_url, '_blank')
            }}
        >
            {(has_hover) => (
                <img
                    src={has_hover ? WhatsAppHover : WhatsAppIcon}
                    width={is_mobile ? '20' : '32'}
                    height={is_mobile ? '20' : '32'}
                    alt="whatsapp icon"
                />
            )}
        </FloatingButton>
    )
}

export default WhatsappButton
