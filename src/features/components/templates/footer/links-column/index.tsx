import React from 'react'
import { SmartFooterLinkColumn } from '../types'
import FooterLink from '../link-item'
import Flex from 'features/components/atoms/flex-box'
import Typography from 'features/components/atoms/typography'
import { Localize } from 'components/localization'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import useRegion from 'components/hooks/use-region'
import InvestInPeople from 'images/common/invest_in_people.png'
import Image from 'features/components/atoms/image'

interface FooterLinksColumnProps {
    item: SmartFooterLinkColumn
}

const FooterLinksColumn = ({ item: { data } }: FooterLinksColumnProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row } = useRegion()

    const links = useVisibleContent({
        content: data.links,
        config: { is_ppc, is_ppc_redirect, is_row },
    })

    return (
        <Flex.Box direction="col">
            <Typography.Heading as={'h5'} size={'xxs'} weight="bold" pb="10x">
                <Localize translate_text={data.title} />
            </Typography.Heading>
            {links.map((linkItem) => (
                <FooterLink key={linkItem.id} item={linkItem} />
            ))}
            {data.title === '_t_ABOUT US_t_' && (
                <Image src={InvestInPeople} width={117} height={22} />
            )}
        </Flex.Box>
    )
}

export default FooterLinksColumn
