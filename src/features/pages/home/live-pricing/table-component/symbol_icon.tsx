import React from 'react'
import * as icons from 'components/elements/symbols-shortcode'

type TTableCellIcon = {
    icon_src: string
}

const SymbolIcon = ({ icon_src }: TTableCellIcon) => {
    if (icon_src === '1HZ150V') return <img src={icons['Vol_1HZ150V']} width="24px" height="24px" />
    if (icon_src === '1HZ250V') return <img src={icons['Vol_1HZ250V']} width="24px" height="24px" />
    else return <img src={icons[icon_src]} width="24px" height="24px" />
}

export default SymbolIcon
