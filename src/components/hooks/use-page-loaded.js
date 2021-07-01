import { useState, useEffect } from 'react'

export const usePageLoaded = () => {
    const [is_mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    return [is_mounted]
}
