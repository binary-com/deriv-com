import { useState, useEffect } from 'react'

export const useStickyState = (defaultValue, key) => {
    const [value, setValue] = useState(() => {
        const sticky_value = window.localStorage.getItem(key)

        return sticky_value ? JSON.parse(sticky_value) : defaultValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}
