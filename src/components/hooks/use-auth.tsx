import { useEffect, useState } from 'react'
import { isLoggedIn } from 'common/utility'

const useAuth = () => {
    const [is_logged_in, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        return () => clearInterval(checkCookieChange)
    }, [])

    return [is_logged_in]
}

export default useAuth
