import React, { useMemo } from 'react'
import NavigationCard from '../../nav-card'
import { TNavConfig } from '../../types'
import { marketSectionContent } from './data'
import useRegion from 'components/hooks/use-region'
import usePpc from 'features/hooks/use-ppc'

const NavMarketSection = () => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row, is_eu } = useRegion()

    const filter_config: TNavConfig = useMemo(() => {
        return {
            is_eu,
            is_ppc,
            is_ppc_redirect,
            is_row,
        }
    }, [is_eu, is_ppc, is_ppc_redirect, is_row])

    return (
        <div>
            {marketSectionContent.map(({ id, data }) => {
                const { external, to, title, content, icon, target } = data
                const nav_card_link = typeof to === 'function' ? to(filter_config) : to
                const nav_card_content =
                    typeof content === 'function' ? content(filter_config) : content
                return (
                    <NavigationCard
                        key={id}
                        to={nav_card_link}
                        title={title}
                        content={nav_card_content}
                        icon_src={icon.src}
                        icon_alt={icon.alt}
                        external={external}
                        target={target}
                        has_bold_title
                    />
                )
            })}
        </div>
    )
}

export default NavMarketSection
