import React from 'react'
import * as icons from 'components/elements/symbols-shortcode'
import Image from 'features/components/atoms/image'

const SymbolIcon = ({ icon_src }: { icon_src: string }) => {
    if (icon_src === '1HZ150V')
        return <Image src={icons['Vol_1HZ150V']} width="24px" height="24px" />
    if (icon_src === '1HZ250V')
        return <Image src={icons['Vol_1HZ250V']} width="24px" height="24px" />
    else return <Image src={icons[icon_src]} width="24px" height="24px" />
}

export default SymbolIcon
