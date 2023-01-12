import { useContext } from 'react'
import { AcademyContext } from 'store/academy-context'

const useAcademyData = () => {
    const academy_data = useContext(AcademyContext)

    if (!academy_data) {
        throw new Error('useAcademyData must be used within AcademyContext')
    }

    return academy_data
}

export default useAcademyData
