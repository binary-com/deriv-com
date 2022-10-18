import React, { useState } from 'react'
import styled from 'styled-components'
import device from 'themes/device'
import WhatsAppIcon from 'images/svg/layout/whatsapp.svg'
import WhatsAppHover from 'images/svg/layout/whatsapp-hover.svg'
import { useCountryRule } from 'components/hooks/use-country-rule'
import { useLivechat } from 'components/hooks/use-livechat'
import { whatsapp_url } from 'common/constants'

const StyledWhatsApp = styled.div`
    position: fixed;
    bottom: 9rem;
    right: 1.6rem;
    background-color: var(--color-white);
    box-shadow: 0 16px 20px 0 rgba(0, 0, 0, 0.05), 0 0 20px 0 rgba(0, 0, 0, 0.05);
    padding: 1.6rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    z-index: 999;

    @media ${device.tablet} {
        bottom: 10rem;
    }
`

const WhatsApp = () => {
    const { is_nigeria, is_south_africa } = useCountryRule()
    const [is_whatsapp_hover, setWhatsAppHover] = useState(false)
    const [is_livechat_interactive] = useLivechat()
    return (
        <>
            {is_livechat_interactive && (is_nigeria || is_south_africa) && (
                <StyledWhatsApp
                    onClick={() => window.open(whatsapp_url, '_blank')}
                    onMouseEnter={() => setWhatsAppHover(true)}
                    onMouseLeave={() => setWhatsAppHover(false)}
                >
                    <img
                        src={is_whatsapp_hover ? WhatsAppHover : WhatsAppIcon}
                        width="32"
                        height="32"
                        alt="whatsapp icon"
                    />
                </StyledWhatsApp>
            )}
        </>
    )
}

export default WhatsApp
