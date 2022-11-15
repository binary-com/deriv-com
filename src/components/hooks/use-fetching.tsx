import { useState } from 'react'

export const useFetching = (callback) => {
    const [is_Loading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, is_Loading, error]
}
