import React from 'react'
import icons from 'components/elements/symbols'

type TLazySymbolProps = {
    // name: keyof typeof icons
    name: string
}
const LazySymbol = ({ name }: TLazySymbolProps) => {
    const [src, setSrc] = React.useState('')

    React.useEffect(() => {
        const loadSource = async () => {
            const icon = await icons[name]()
            setSrc(icon.default)
        }
        loadSource()
    }, [])

    return <img src={src} alt="symbol" width="24" height="24" />
}

export default React.memo(LazySymbol)
