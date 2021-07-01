import { useState, useEffect } from 'react'

export const usePageLoaded = () => {
    const [is_mounted, setMounted] = useState(false) // needed to fix tab highlighting not being rerendered during first load
    useEffect(() => {
        setMounted(true)
    }, [])
    return [is_mounted,]
}
