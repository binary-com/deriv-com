import React, { ReactNode, useContext, useMemo } from 'react'
import {
    NavItem,
    SmartMultiColumnItems,
    SmartSingleColumnItems,
    SmartSingleItem,
} from '../../types'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useRegion from 'components/hooks/use-region'
import useVisibleContent from 'components/hooks/use-visible-content'

interface NavContextProps {
    is_menu_open: boolean
    onCloseMenu?: () => void
    link_items?: SmartSingleItem[]
    drop_items?: (SmartSingleColumnItems | SmartMultiColumnItems)[]
}
export const NavContext = React.createContext<NavContextProps>({ is_menu_open: false })

interface NavProviderProps extends NavContextProps {
    children: ReactNode
    items: NavItem[]
}

export const useNavContext = () => {
    return useContext(NavContext)
}

export const isSingleItem = (item: NavItem): item is SmartSingleItem => {
    return item.data.type === 'single-item'
}

export const NavProvider = ({ is_menu_open, onCloseMenu, children, items }: NavProviderProps) => {
    const { is_mobile_or_tablet } = useBreakpoints()
    const { is_eu, is_row } = useRegion()

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet, is_eu, is_row },
    })

    const { drop_items, link_items } = useMemo(() => {
        const link_items: SmartSingleItem[] = []
        const drop_items: (SmartSingleColumnItems | SmartMultiColumnItems)[] = []

        visible_items.forEach((item) => {
            if (isSingleItem(item)) {
                link_items.push(item)
            } else {
                drop_items.push(item)
            }
        })
        return { link_items, drop_items }
    }, [visible_items])

    return (
        <NavContext.Provider value={{ is_menu_open, onCloseMenu, link_items, drop_items }}>
            {children}
        </NavContext.Provider>
    )
}
