// src/hooks/useFeatureFlag.tsx
import { useContext } from 'react'
import { PageContext } from '../../config/PageContext'

export const useFeatureFlag = (flagName: string) => {
    const { featureFlags } = useContext(PageContext)
    return featureFlags[flagName]
}
