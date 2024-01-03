import React, { ReactNode, useCallback, useContext, useState } from 'react'
import FloatingCtaContext from './cta.context'

type TFloatingCtaProps = {
    children: ReactNode
}

const FloatingCtaProvider = ({ children }: TFloatingCtaProps) => {
    const [ctaBottom, setCtaBottom] = useState<number>(0)

    const ctaBottomHandler = useCallback((value: number) => {
        setCtaBottom(value)
    }, [])

    return (
        <FloatingCtaContext.Provider value={{ ctaBottom, setCtaBottom: ctaBottomHandler }}>
            {children}
        </FloatingCtaContext.Provider>
    )
}

export const useFloatingCtaContext = () => useContext(FloatingCtaContext)

export default FloatingCtaProvider
