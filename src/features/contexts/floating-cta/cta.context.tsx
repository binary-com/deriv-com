import { createContext } from 'react'

type FloatingCtaType = {
    ctaBottom?: number
    setCtaBottom?: React.Dispatch<React.SetStateAction<number>>
    entryRef?: React.MutableRefObject<HTMLButtonElement>
    visibilityPercentage?: number
    exitRef?: React.MutableRefObject<HTMLDivElement>
}

const FloatingCtaContext = createContext<FloatingCtaType>({})

export default FloatingCtaContext
