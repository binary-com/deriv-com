import React, { ReactNode, useContext, useState, useEffect, createContext } from 'react'
import {
    NavItem,
    SmartMultiColumnItems,
    SmartSingleColumnItems,
    SmartSingleItem,
} from '../../types'
import useBreakpoints from 'components/hooks/use-breakpoints'
import useVisibleContent from 'components/hooks/use-visible-content'
import useBuildVariant from 'features/hooks/use-build-variant'

interface NavContextProps {
    is_menu_open: boolean
    onCloseMenu?: () => void
    link_items?: SmartSingleItem[]
    drop_items?: (SmartSingleColumnItems | SmartMultiColumnItems)[]
}
export const NavContext = createContext<NavContextProps>({ is_menu_open: false })

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
    const { region } = useBuildVariant()
    const { is_mobile_or_tablet } = useBreakpoints()
    const [link_items, setLinkItems] = useState<SmartSingleItem[]>([])
    const [drop_items, setDropItems] = useState<(SmartSingleColumnItems | SmartMultiColumnItems)[]>(
        [],
    )

    const visible_items = useVisibleContent({
        content: items,
        config: { is_mobile: is_mobile_or_tablet, is_eu: region === "eu", is_row: region === "row" },
    })

    useEffect(() => {
        const links = []
        const drops = []
        visible_items.forEach((item) => {
            if (isSingleItem(item)) {
                links.push(item)
            } else {
                drops.push(item)
            }
        })
        setLinkItems(links)
        setDropItems(drops)
    }, [visible_items.length])

    return (
        <NavContext.Provider value={{ is_menu_open, onCloseMenu, link_items, drop_items }}>
            {children}
        </NavContext.Provider>
    )
}
