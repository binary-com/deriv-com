import React from 'react'
import { available_options_item, available_options_item_active } from './styles.module.scss'
import { Localize } from 'components/localization'
import Link from 'features/components/atoms/link'
import { TString } from 'types/generics'
import { InternalLinkType } from 'features/types'
import dclsx from 'features/utils/dclsx'
import { isActiveLink } from 'features/components/atoms/link/internal'

interface AvailableOptionsItemProps {
    title: TString
    link: InternalLinkType
}

const AvailableOptionsItem = ({ link, title }: AvailableOptionsItemProps) => {
    return (
        <Link
            url={link}
            size="medium"
            no_hover
            textcolor={isActiveLink(link.to) ? 'brand' : 'light'}
            padding_inline="8x"
            pb="4x"
            className={dclsx(available_options_item, {
                [available_options_item_active]: isActiveLink(link.to),
            })}
        >
            <Localize translate_text={title} />
        </Link>
    )
}

export default AvailableOptionsItem
