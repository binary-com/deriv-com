import React, { useMemo } from 'react'
import NavigationCard from '../../../molecules/nav-card'
import useVisibleContent from 'components/hooks/use-visible-content'
import usePpc from 'features/hooks/use-ppc'
import { NavConfig, SmartNavContent } from 'features/components/templates/navigation/types'
import { useNavContext } from 'features/components/templates/navigation/template/nav-context'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useBuildVariant from 'features/hooks/use-build-variant'

interface NavCardItemsProps {
    items: SmartNavContent[]
}

const NavCardItems = ({ items }: NavCardItemsProps) => {
    const { region } = useBuildVariant()
    const { is_ppc, is_ppc_redirect } = usePpc()
    const { onCloseMenu } = useNavContext()
    const { is_mobile_or_tablet } = useBreakpoints()

    const filter_config: NavConfig = useMemo(() => {
        return {
            is_eu: region === "eu",
            is_ppc,
            is_ppc_redirect,
            is_row: region === "row",
            is_mobile: is_mobile_or_tablet,
        }
    }, [region, is_ppc, is_ppc_redirect, is_mobile_or_tablet])

    const content = useVisibleContent({ config: filter_config, content: items })

    return (
        <>
            {content?.map(({ id, data }) => {
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
