import React, { useEffect, useMemo, useState } from 'react'
import { Link as GatsbyLink, navigate } from 'gatsby'
import Typography from '../typography'
import { TypographyLinkProps } from '../typography/link'
import Alert from '../alert'
import { LinkUrlType } from 'features/types'
import useLinkUrl from 'features/hooks/use-link-url'
import useRegion from 'components/hooks/use-region'

export interface LinkProps extends TypographyLinkProps {
    url: LinkUrlType
}

const Link = (props: LinkProps) => {
    const { url, target, rel, onClick, href: baseHref, ...rest } = props

    const [is_active_page, setIs_active_page] = useState(false)

    useEffect(() => {
        const pathname = typeof window !== 'undefined' ? window.location.pathname : ''
        setIs_active_page(url.type === 'internal' && pathname === url.to)
    }, [url])

    const hrefObject = useLinkUrl(url)
    const { is_eu } = useRegion()

    const show_modal = is_eu && hrefObject?.type === 'non-company' && hrefObject?.show_eu_modal

    const [is_redirect_modal_visible, setIsRedirectModalVisible] = useState(false)

    const handleClick: React.MouseEventHandler<'a'> = (event) => {
        onClick?.(event)

        if (url.type === 'internal') {
            navigate(hrefObject.href)
        }

        if (show_modal) {
            setIsRedirectModalVisible(true)
        }
    }
    const handleCancel = () => {
        setIsRedirectModalVisible(false)
    }
    const handleProceed = () => {
        if (hrefObject?.target === '_blank') {
            window.open(hrefObject?.href)
        } else {
            window.location.href = hrefObject?.href
        }
    }

    const linkTarget = useMemo(() => {
        if (hrefObject?.type !== 'internal') {
            return hrefObject?.target ?? target
        }

        return target
    }, [hrefObject, target])

    const linkRel = useMemo(() => {
        if (url?.type !== 'internal') {
            return url?.rel ?? rel
        }

        return rel
    }, [url, rel])

    const is_internal_careers = url.type === 'internal' && url.to.includes('careers')

    const noHref = show_modal || is_internal_careers

    return (
        <>
            <Typography.Link
                href={!noHref ? hrefObject?.href : undefined}
                onClick={handleClick}
                target={linkTarget}
                rel={linkRel}
                textcolor={is_active_page ? 'brand' : 'primary'}
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
