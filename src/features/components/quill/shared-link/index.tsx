/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { SharedLinkProps, SharedLink } from '@deriv-com/providers'
import ExternalLink from './external'
import { LocalizedLink } from 'components/localization'

const GatsbySharedLink: SharedLink = ({ href = '/', ...rest }: SharedLinkProps) => {
    const link = href as `/${string}`
    const isExternalUrl = /(http(s?)):\/\//i.test(link.toString())
    if (isExternalUrl) {
        return (
            // @ts-ignore
            <ExternalLink href={link} external {...rest} />
        )
    }
    return (
        // @ts-ignore
        <LocalizedLink to={link} {...rest} />
    )
}

export default GatsbySharedLink
