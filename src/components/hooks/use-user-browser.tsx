import { useState } from 'react'

export const useUserBrowser = () => {
    const [browser] = useState({
        name: '',
        version: true,
    })

    return browser
}
