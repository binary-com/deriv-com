import React from 'react'
import FloatingActionButton from './floating-action-button'
import WhatsAppIcon from 'images/svg/layout/whatsapp.svg'
import WhatsAppHover from 'images/svg/layout/whatsapp-hover.svg'
import { useLivechat } from 'components/hooks/use-livechat'
import { whatsapp_url } from 'common/constants'
import useBreakpoints from 'components/hooks/use-breakpoints'

const WhatsApp = () => {
    const [is_livechat_interactive] = useLivechat()
    const { is_mobile } = useBreakpoints()

    if (is_livechat_interactive)
        return (
            <FloatingActionButton onClick={() => window.open(whatsapp_url, '_blank')}>
                {(has_hover) => (
                    <img
                        src={has_hover ? WhatsAppHover : WhatsAppIcon}
                        width={is_mobile ? '20' : '32'}
                        height={is_mobile ? '20' : '32'}
                        alt="whatsapp icon"
                    />
                )}
            </FloatingActionButton>
        )

    return <></>
}

export default WhatsApp
