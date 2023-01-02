import React, { ReactNode, createContext } from 'react'
import { AcademyDataType, useAcademyData } from 'components/hooks/use-academy-data'

type AcademyProviderProps = {
    children?: ReactNode
}

export type AcademyContextType = {
    academy_data: AcademyDataType
}

export const AcademyContext = createContext<AcademyContextType>(null)

export const AcademyProvider = ({ children }: AcademyProviderProps) => {
    const [academy_data] = useAcademyData()

    return (
        <AcademyContext.Provider
            value={{
                academy_data,
            }}
        >
            {children}
        </AcademyContext.Provider>
    )
}
