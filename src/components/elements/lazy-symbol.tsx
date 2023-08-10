import React from 'react'
import icons from 'components/elements/symbols'

type TLazySymbolProps = {
    // name: keyof typeof icons
    name: string
    width?: string
    height?: string
    alt?: string
}
const LazySymbol = ({ alt = 'symbol', name, width = '24', height = '24' }: TLazySymbolProps) => {
    const [src, setSrc] = React.useState('')

    React.useEffect(() => {
        const loadSource = async () => {
            const icon = await icons[name]()
            setSrc(icon.default)
        }
        loadSource()
    }, [])

    return <img src={src} alt={alt} width={width} height={height} />
}

export default React.memo(LazySymbol)
