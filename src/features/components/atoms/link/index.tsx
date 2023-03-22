import React, { useMemo, useState } from 'react'
import Typography from '../typography'
import { TypographyLinkProps } from '../typography/link'
import Alert from '../alert'
import { LinkUrlType } from 'features/types'
import useLinkUrl from 'features/hooks/use-link-url'
import useRegion from 'components/hooks/use-region'

interface LinkProps extends TypographyLinkProps {
    url: LinkUrlType
}

const Link = (props: LinkProps) => {
    const { url, target, rel, ...rest } = props

    const { getLinkUrl } = useLinkUrl()
    const { is_eu } = useRegion()

    const hrefObject = useMemo(() => {
        return getLinkUrl(url)
    }, [getLinkUrl, url])

    const show_modal = is_eu && hrefObject.type === 'non-company' && hrefObject.show_eu_modal

    const [is_redirect_modal_visible, setIsRedirectModalVisible] = useState(false)

    const handleClick: React.MouseEventHandler<'a'> = (event) => {
        event.preventDefault()
        setIsRedirectModalVisible(true)
    }
    const handleCancel = () => {
        setIsRedirectModalVisible(false)
    }
    const handleProceed = () => {
        window.location.href = hrefObject.href
    }

    const linkTarget = useMemo(() => {
        const { type } = hrefObject

        if (type !== 'internal') {
            return hrefObject.target ?? target
        }

        return target
    }, [hrefObject, target])

    const linkRel = useMemo(() => {
        const { type } = hrefObject

        if (type !== 'internal') {
            return hrefObject.rel ?? rel
        }

        return rel
    }, [hrefObject, rel])

    return (
        <>
            <Typography.Link
                href={!show_modal ? hrefObject.href : ''}
                onClick={show_modal ? handleClick : null}
                target={linkTarget}
                rel={linkRel}
                {...rest}
            />

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

export default Link
