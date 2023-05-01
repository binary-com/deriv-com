import React, { useMemo } from 'react'
import NavigationCard from '../../../molecules/nav-card'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import { NavConfig, SmartNavContent } from 'features/components/templates/navigation/types'
import { useNavContext } from 'features/components/templates/navigation/template/nav-context'

interface NavCardItemsProps {
    items: SmartNavContent[]
}

const NavCardItems = ({ items }: NavCardItemsProps) => {
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { is_row, is_eu } = useRegion()
    const { onCloseMenu } = useNavContext()

    const filter_config: NavConfig = useMemo(() => {
        return {
            is_eu,
            is_ppc,
            is_ppc_redirect,
            is_row,
        }
    }, [is_eu, is_ppc, is_ppc_redirect, is_row])

    const content = useVisibleContent({ config: filter_config, content: items })

    return (
        <>
            {content.map(({ id, data }) => {
                const { url, title, content, icon } = data
                const nav_card_link = typeof url === 'function' ? url(filter_config) : url
                const nav_card_content =
                    typeof content === 'function' ? content(filter_config) : content
                return (
                    <NavigationCard
                        key={id}
                        url={nav_card_link}
                        title={title}
                        content={nav_card_content}
                        icon_src={icon?.src}
                        icon_alt={icon?.alt}
                        onClick={onCloseMenu}
                    />
                )
            })}
        </>
    )
}
export default NavCardItems
