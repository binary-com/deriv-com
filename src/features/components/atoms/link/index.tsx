import React, { useMemo } from 'react'
import { TypographyLinkProps } from '../typography/link'
import Internal from './internal'
import ExternalLink from './external'
import { LinkUrlType } from 'features/types'

export interface LinkProps extends TypographyLinkProps {
    url: LinkUrlType
}

const Link = (props: LinkProps) => {
    const { url, target, rel, href: baseHref, ...rest } = props

    const linkTarget = useMemo(() => {
        if (url.type === 'non-company') {
            return url.target ?? target
        }
        return url.target ?? target
    }, [target, url.target, url.type])

    const linkRel = useMemo(() => {
        if (url?.type !== 'internal') {
            return url?.rel ?? rel
        }

        return rel
    }, [url, rel])

    return (
        <>
            {url.type === 'internal' ? (
                <Internal
                    url={url}
                    rel={linkRel}
                    link_target={linkTarget}
                    link_rel={linkRel}
                    {...rest}
                />
            ) : (
                <ExternalLink url={url} link_target={linkTarget} link_rel={linkRel} {...rest} />
            )}
        </>
    )
}

export default Link
