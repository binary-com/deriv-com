import React from 'react'
import { SmartFooterLink } from '../types'
import usePpc from 'features/hooks/use-ppc'
import useRegion from 'components/hooks/use-region'
import Link from 'features/components/atoms/link'
import { Localize } from 'components/localization'
import Typography from 'features/components/atoms/typography'

interface FooterLinkProps {
    item: SmartFooterLink
}

const FooterLink = ({ item: { data } }: FooterLinkProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row } = useRegion()
    const { url } = data

    const visible_url = typeof url === 'function' ? url({ is_ppc, is_ppc_redirect, is_row }) : url

    return (
        <Typography.Paragraph size={2} pb={'small'}>
            <Link url={visible_url}>
                <Localize translate_text={data.text} />
            </Link>
        </Typography.Paragraph>
    )
}

export default FooterLink
