import { useState, useEffect } from 'react'
import useRegion from './use-region'

export const useShowEuContent = () => {
    const { is_eu } = useRegion()
    const [show_eu_content, setShowEuContent] = useState(false)

    useEffect(() => {
        if (is_eu) setShowEuContent(true)
    }, [is_eu])

    return show_eu_content
}
