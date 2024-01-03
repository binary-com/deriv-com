import { createContext } from 'react'

type FloatingCtaType = {
    ctaBottom?: number
    setCtaBottom?: React.Dispatch<React.SetStateAction<number>>
}

const FloatingCtaContext = createContext<FloatingCtaType>({})

export default FloatingCtaContext
