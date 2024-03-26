import { useState } from 'react'

export const useTabState = (tab_list) => {
    const [active_tab, setActiveTab] = useState(tab_list[0])

    return [active_tab, setActiveTab]
}
