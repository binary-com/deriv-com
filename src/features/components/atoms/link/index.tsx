import React, { useCallback, useMemo } from 'react'
import Typography from '../typography'
import { TypographyLinkProps } from '../typography/link'
import { LinkUrlType } from 'features/types'
import useLinkUrl from 'features/hooks/use-link-url'
import useRegion from 'components/hooks/use-region'
import useLocationContext from 'features/hooks/use-location-context'

interface LinkProps extends TypographyLinkProps {
    url: LinkUrlType
}

const Link = (props: LinkProps) => {
    const { url, onClick, target, rel, ...rest } = props

    const { getLinkUrl } = useLinkUrl()
    const { is_eu } = useRegion()
    const { setModalPayload, toggleModal } = useLocationContext()

    const hrefObject = useMemo(() => {
        return getLinkUrl(url)
    }, [getLinkUrl, url])

    const is_company_external_link =
        hrefObject.type === 'company' || hrefObject.type === 'non-company'
    const show_modal = is_eu && !is_company_external_link

    const handleClick = useCallback(
        (event: any) => {
            setModalPayload({
                to: hrefObject.href,
                target: props['target'],
                rel: props['rel'],
                aria_label: props['aria-label'],
                ref: null,
            })
            toggleModal(event)
            onClick?.(event)
        },
        [hrefObject.href, onClick, props, setModalPayload, toggleModal],
    )

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
        <Typography.Link
            href={!show_modal ? hrefObject.href : ''}
            onClick={show_modal ? handleClick : null}
            target={linkTarget}
            rel={linkRel}
            {...rest}
        />
    )
}

export default Link
