import React, { useEffect, useMemo, useState } from 'react'
import Alert from 'features/components/atoms/alert'
import { useUserBrowser } from 'components/hooks/use-user-browser'
import { browsers_minimum_required_version, cookie_key } from 'common/constants'
import { CookieStorage } from 'common/storage'

const BrowserUpdateAlert = () => {
    const [show, setShow] = useState(false)

    const { is_outdated } = useUserBrowser(browsers_minimum_required_version)

    const cookie = useMemo(() => {
        return new CookieStorage(cookie_key)
    }, [])

    useEffect(() => {
        if (is_outdated && !cookie.get(cookie_key)) {
            setShow(true)
        }
    }, [cookie, is_outdated])

    const onOkClick = () => {
        const expiration_date = Date.now() + 14 * 86400 * 1000 // 2 weeks later (1209600000 ms)
        cookie.set(cookie_key, true, {
            expires: new Date(expiration_date),
        })

        setShow(false)
    }

    return show ? (
        <Alert
            title="_t_Browser Update Alert_t_"
            description="_t_Update your browser to get the best Deriv experience_t_"
            action_button={{
                text: '_t_OK_t_',
                onClick: onOkClick,
            }}
        />
    ) : null
}

export default BrowserUpdateAlert
