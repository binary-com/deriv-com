import React, { ReactNode, useContext } from 'react'

interface NavContextProps {
    is_menu_open: boolean
    onCloseMenu?: () => void
}
export const NavContext = React.createContext<NavContextProps>({ is_menu_open: false })

interface NavProviderProps extends NavContextProps {
    children: ReactNode
}

export const useNavContext = () => {
    return useContext(NavContext)
}

export const NavProvider = ({ is_menu_open, onCloseMenu, children }: NavProviderProps) => {
    return (
        <NavContext.Provider value={{ is_menu_open, onCloseMenu }}>{children}</NavContext.Provider>
    )
}
