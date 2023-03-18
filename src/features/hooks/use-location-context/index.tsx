import { useContext } from 'react'
import { LocationContext } from 'components/layout'

const useLocationContext = () => {
    return useContext(LocationContext)
}

export default useLocationContext
