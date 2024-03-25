import { createContext } from 'react'

type FloatingCtaType = {
    entryRef?: React.MutableRefObject<HTMLButtonElement>
    visibilityPercentage?: number
    exitRef?: React.MutableRefObject<HTMLDivElement>
}

const FloatingCtaContext = createContext<FloatingCtaType>({})

export default FloatingCtaContext
