import { useEffect, useState } from 'react'
import { isLoggedIn } from 'common/utility'

const useAuthCheck = () => {
    const [is_logged_in, setLoggedIn] = useState(false)
    const [is_auth_checked, setIsAuthChecked] = useState(false)

    useEffect(() => {
        setLoggedIn(isLoggedIn())
        const checkCookieChange = setInterval(() => setLoggedIn(isLoggedIn()), 800)
        setIsAuthChecked(true)
        return () => clearInterval(checkCookieChange)
    }, [])

    return [is_logged_in, is_auth_checked]
}

export default useAuthCheck
