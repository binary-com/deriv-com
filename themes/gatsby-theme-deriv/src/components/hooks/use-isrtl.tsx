import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const useIsRtl = () => {
    const { i18n } = useTranslation()

    const check_rtl = useCallback(() => {
        return i18n.dir(i18n.language) === 'rtl'
    }, [i18n])

    const [is_rtl, setIsRtl] = useState<boolean>(() => {
        return check_rtl()
    })

    useEffect(() => {
        setIsRtl(check_rtl())
    }, [check_rtl])

    return is_rtl
}
