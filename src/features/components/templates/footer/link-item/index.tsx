import React from 'react'
import { SmartFooterLink } from '../types'
import usePpc from 'features/hooks/use-ppc'
import useRegion from 'components/hooks/use-region'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'

interface FooterLinkProps {
    item: SmartFooterLink
}

const FooterLink = ({ item: { data } }: FooterLinkProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row } = useRegion()
    const { url } = data

    const visible_url = typeof url === 'function' ? url({ is_ppc, is_ppc_redirect, is_row }) : url

    return (
        <Link url={visible_url} size="small" pb="6x">
            {data?.text ? <Localize translate_text={data.text} /> : null}
            {/* {data?.src ?       <Image src={data.src} has_rtl />:null} */}
        </Link>
    )
}

export default FooterLink
