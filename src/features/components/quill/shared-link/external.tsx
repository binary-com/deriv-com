import React, { ComponentProps, useState } from 'react'
import Alert from '../alert'

export type ProductLinkGenerator = (config: {
    language: string
    url?: string
    affiliate_lang?: string
    locale?: string
}) => string

export type ExternalLinkProps = ComponentProps<'a'>

const ExternalLink = ({ href, onClick, target, ...rest }: ExternalLinkProps) => {
    const [is_redirect_modal_visible, setIsRedirectModalVisible] = useState(false)

    const handleCancel = () => {
        setIsRedirectModalVisible(false)
    }

    const handleProceed = () => {
        if (target === '_blank') {
            window.open(href)
        } else {
            window.location.href = href
        }
    }

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
        event.preventDefault()
        setIsRedirectModalVisible(true)
        onClick?.(event)
    }

    return (
        <>
            <a href={href} onClick={handleClick} {...rest} />
            {is_redirect_modal_visible && (
                <Alert
                    title="_t_Redirect notice_t_"
                    description="_t_You are being redirected to an external website._t_"
                    cancel_button={{
                        text: '_t_Cancel_t_',
                        onClick: handleCancel,
                    }}
                    action_button={{
                        text: '_t_Proceed_t_',
                        onClick: handleProceed,
                    }}
                />
            )}
        </>
    )
}

export default ExternalLink
