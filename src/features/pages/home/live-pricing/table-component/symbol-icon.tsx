import React from 'react'
import icons from 'components/elements/symbols-shortcode'
import Image from 'features/components/atoms/image'

const SymbolIcon = ({ icon_src }: { icon_src: string }) => {
    const [lazyIcon, setLazyIcon] = React.useState('')

    const loadIcon = async () => {
        let icon_name = icon_src
        if (icon_src === '1HZ150V') {
            icon_name = 'Vol_1HZ150V'
        } else if (icon_src === '1HZ250V') {
            icon_name = 'Vol_1HZ250V'
        }
        const icon = await icons[icon_name]()
        setLazyIcon(icon.default)
    }

    React.useEffect(() => {
        loadIcon()
    }, [])

    return <Image src={lazyIcon} width="24px" height="24px" loading="lazy" />
}

export default React.memo(SymbolIcon)
