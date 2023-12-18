import React, { ComponentProps, useState } from 'react'
import Alert from '../alert'
import useRegion from 'components/hooks/use-region'

export type ProductLinkGenerator = (config: {
    language: string
    url?: string
    affiliate_lang?: string
    locale?: string
}) => string

export type ExternalLinkProps = ComponentProps<'a'> & {
    show_eu_modal?: boolean
}

const ExternalLink = ({ href, onClick, target, show_eu_modal, ...rest }: ExternalLinkProps) => {
    const [is_redirect_modal_visible, setIsRedirectModalVisible] = useState(false)
    const { is_eu } = useRegion()
    const show_modal = is_eu && show_eu_modal

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
        if (show_modal) {
            setIsRedirectModalVisible(true)
        }
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
