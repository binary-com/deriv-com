import React from 'react'
import { Analytics } from '@deriv-com/analytics'
import FloatingButton from '../floating-button'
import { whatsapp_url } from 'common/constants'
import WhatsAppIcon from 'images/svg/layout/normal.svg'
import WhatsAppHover from 'images/svg/layout/hover.svg'
import useBreakpoints from 'components/hooks/use-breakpoints'

const WhatsappButton = () => {
    const { is_mobile } = useBreakpoints()

    return (
        <FloatingButton
            onClick={() => {
                Analytics.trackEvent('ce_widget_usage_form', {
                    action: 'click',
                    widget_name: 'whatsapp',
                })
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
